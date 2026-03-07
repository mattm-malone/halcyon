const fs = require('fs');
const path = require('path');

// Read all config files
const htmlPath = path.join(__dirname, 'config-page', 'config.html');
const cssPath = path.join(__dirname, 'config-page', 'config.css');
const jsPath = path.join(__dirname, 'config-page', 'config.js');
const themesPath = path.join(__dirname, 'config-page', 'themes.json');

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const cssContent = fs.readFileSync(cssPath, 'utf8');
let jsContent = fs.readFileSync(jsPath, 'utf8');
const themesContent = fs.readFileSync(themesPath, 'utf8');

// Inline themes into JS
// Replace the loadThemes function to directly assign themes
const themesJson = JSON.parse(themesContent);
const themesReplacement = `themes = ${JSON.stringify(themesJson.sharedThemes)};`;
jsContent = jsContent.replace(/async function loadThemes\(\) \{\s*try \{\s*const response = await fetch\('themes\.json'\);\s*const data = await response\.json\(\);\s*themes = data\.sharedThemes;\s*\} catch \(error\) \{\s*console\.error\('Error loading themes:', error\);\s*\}\s*\}/, `function loadThemes() { ${themesReplacement} }`);

// Inline CSS into HTML
let modifiedHtml = htmlContent.replace(/<link rel="stylesheet" href="config\.css">/, `<style>${cssContent}</style>`);

// Inline JS into HTML
modifiedHtml = modifiedHtml.replace(/<script src="config\.js"><\/script>/, `<script>${jsContent}</script>`);

// URL-encode the HTML
const encodedHtml = encodeURIComponent(modifiedHtml);

// Create data URI
const dataUri = `data:text/html;charset=utf-8,${encodedHtml}`;

// Write to configDataUri.js in src/pkjs/
const outputPath = path.join(__dirname, 'src', 'pkjs', 'configDataUri.js');
fs.writeFileSync(outputPath, `module.exports = "${dataUri}";\n`);

console.log('Data URI built and saved to src/pkjs/configDataUri.js');
