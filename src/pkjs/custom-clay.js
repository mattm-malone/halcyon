module.exports = function (minified) {
  var clayConfig = this;
  var _ = minified._;
  var $ = minified.$;

  // Define presets
  var presets = {
    default: {
      SETTING_TIME_COLOR: "000000",
      SETTING_SUBTEXT_PRIMARY_COLOR: "000000",
      SETTING_SUBTEXT_SECONDARY_COLOR: "555555",
      SETTING_BG_COLOR: "FFFFFF",
      SETTING_PIP_COLOR_PRIMARY: "000000",
      SETTING_PIP_COLOR_SECONDARY: "AAAAAA",
      SETTING_RING_STROKE_COLOR: "000000",
      SETTING_RING_NIGHT_COLOR: "0055AA",
      SETTING_RING_DAY_COLOR: "00AAFF",
      SETTING_RING_SUNRISE_COLOR: "FFAAAA",
      SETTING_RING_SUNSET_COLOR: "FFAA00",
      SETTING_SUN_STROKE_COLOR: "000000",
      SETTING_SUN_FILL_COLOR: "FFFF00"
    },
    orangeDreams: {
      SETTING_TIME_COLOR: "FF5500",
      SETTING_SUBTEXT_PRIMARY_COLOR: "FF5500",
      SETTING_SUBTEXT_SECONDARY_COLOR: "AA0000",
      SETTING_BG_COLOR: "000000",
      SETTING_PIP_COLOR_PRIMARY: "FF5500",
      SETTING_PIP_COLOR_SECONDARY: "AA0000",
      SETTING_RING_STROKE_COLOR: "000000",
      SETTING_RING_NIGHT_COLOR: "000000",
      SETTING_RING_DAY_COLOR: "FF5500",
      SETTING_RING_SUNRISE_COLOR: "AA0000",
      SETTING_RING_SUNSET_COLOR: "AA0000",
      SETTING_SUN_STROKE_COLOR: "000000",
      SETTING_SUN_FILL_COLOR: "FF5500"
    },
    terminalGreen: {
      "SETTING_TIME_COLOR": "00ff00",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "00ff00",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "00aa00",
      "SETTING_BG_COLOR": "000000",
      "SETTING_PIP_COLOR_PRIMARY": "00ff00",
      "SETTING_PIP_COLOR_SECONDARY": "005500",
      "SETTING_RING_STROKE_COLOR": "000000",
      "SETTING_RING_NIGHT_COLOR": "000000",
      "SETTING_RING_DAY_COLOR": "00ff00",
      "SETTING_RING_SUNRISE_COLOR": "005500",
      "SETTING_RING_SUNSET_COLOR": "005500",
      "SETTING_SUN_STROKE_COLOR": "000000",
      "SETTING_SUN_FILL_COLOR": "00ff00"
    },
    mauveTheme: {
      "SETTING_TIME_COLOR": "ffffff",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "ffffff",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "ffffff",
      "SETTING_BG_COLOR": "aa00aa",
      "SETTING_PIP_COLOR_PRIMARY": "000000",
      "SETTING_PIP_COLOR_SECONDARY": "550055",
      "SETTING_RING_STROKE_COLOR": "000000",
      "SETTING_RING_NIGHT_COLOR": "550055",
      "SETTING_RING_DAY_COLOR": "aa55aa",
      "SETTING_RING_SUNRISE_COLOR": "aa00aa",
      "SETTING_RING_SUNSET_COLOR": "aa00aa",
      "SETTING_SUN_STROKE_COLOR": "000000",
      "SETTING_SUN_FILL_COLOR": "ffffff"
    },
    fireworkTheme: {
      "SETTING_TIME_COLOR": "ffffff",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "ffaa00",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "aa0000",
      "SETTING_BG_COLOR": "000000",
      "SETTING_PIP_COLOR_PRIMARY": "ff5500",
      "SETTING_PIP_COLOR_SECONDARY": "aa0000",
      "SETTING_RING_STROKE_COLOR": "000000",
      "SETTING_RING_NIGHT_COLOR": "000000",
      "SETTING_RING_DAY_COLOR": "000000",
      "SETTING_RING_SUNRISE_COLOR": "aa0000",
      "SETTING_RING_SUNSET_COLOR": "aa0000",
      "SETTING_SUN_STROKE_COLOR": "000000",
      "SETTING_SUN_FILL_COLOR": "ffaa00"
    },
    lightOceanTheme: {
      "SETTING_TIME_COLOR": "000000",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "000000",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "aaaaaa",
      "SETTING_BG_COLOR": "ffffff",
      "SETTING_PIP_COLOR_PRIMARY": "000000",
      "SETTING_PIP_COLOR_SECONDARY": "aaaaaa",
      "SETTING_RING_STROKE_COLOR": "ffffff",
      "SETTING_RING_NIGHT_COLOR": "0055aa",
      "SETTING_RING_DAY_COLOR": "ffffff",
      "SETTING_RING_SUNRISE_COLOR": "00aaff",
      "SETTING_RING_SUNSET_COLOR": "00aaff",
      "SETTING_SUN_STROKE_COLOR": "000000",
      "SETTING_SUN_FILL_COLOR": "ffff00"
    },
    roseTheme: {
      "SETTING_TIME_COLOR": "000000",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "000000",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "555555",
      "SETTING_BG_COLOR": "ffffff",
      "SETTING_PIP_COLOR_PRIMARY": "000000",
      "SETTING_PIP_COLOR_SECONDARY": "aaaaaa",
      "SETTING_RING_STROKE_COLOR": "ffffff",
      "SETTING_RING_NIGHT_COLOR": "ff00aa",
      "SETTING_RING_DAY_COLOR": "ffffff",
      "SETTING_RING_SUNRISE_COLOR": "ffaaaa",
      "SETTING_RING_SUNSET_COLOR": "ffaaaa",
      "SETTING_SUN_STROKE_COLOR": "000000",
      "SETTING_SUN_FILL_COLOR": "ffff00"
    },
    oceanTheme: {
      "SETTING_TIME_COLOR": "ffffff",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "ffffff",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "ffffff",
      "SETTING_BG_COLOR": "000055",
      "SETTING_PIP_COLOR_PRIMARY": "ffffff",
      "SETTING_PIP_COLOR_SECONDARY": "0055aa",
      "SETTING_RING_STROKE_COLOR": "000000",
      "SETTING_RING_NIGHT_COLOR": "0000aa",
      "SETTING_RING_DAY_COLOR": "00aaff",
      "SETTING_RING_SUNRISE_COLOR": "0055ff",
      "SETTING_RING_SUNSET_COLOR": "0055ff",
      "SETTING_SUN_STROKE_COLOR": "ffffff",
      "SETTING_SUN_FILL_COLOR": "00aaff"
    },
    sandTheme: {
      "SETTING_TIME_COLOR": "000000",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "000000",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "550000",
      "SETTING_BG_COLOR": "ffff00",
      "SETTING_PIP_COLOR_PRIMARY": "aa5500",
      "SETTING_PIP_COLOR_SECONDARY": "ffaa00",
      "SETTING_RING_STROKE_COLOR": "ffff00",
      "SETTING_RING_NIGHT_COLOR": "aa5500",
      "SETTING_RING_DAY_COLOR": "ffff00",
      "SETTING_RING_SUNRISE_COLOR": "ffaa00",
      "SETTING_RING_SUNSET_COLOR": "ffaa00",
      "SETTING_SUN_STROKE_COLOR": "aa5500",
      "SETTING_SUN_FILL_COLOR": "ffaa55"
    },
    greyTheme: {
      "SETTING_TIME_COLOR": "ffffff",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "ffffff",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "ffffff",
      "SETTING_BG_COLOR": "000000",
      "SETTING_PIP_COLOR_PRIMARY": "ffffff",
      "SETTING_PIP_COLOR_SECONDARY": "aaaaaa",
      "SETTING_RING_STROKE_COLOR": "ffffff",
      "SETTING_RING_NIGHT_COLOR": "000000",
      "SETTING_RING_DAY_COLOR": "aaaaaa",
      "SETTING_RING_SUNRISE_COLOR": "555555",
      "SETTING_RING_SUNSET_COLOR": "555555",
      "SETTING_SUN_STROKE_COLOR": "000000",
      "SETTING_SUN_FILL_COLOR": "ffffff"
    },
    userTeal1: {
      "SETTING_TIME_COLOR": "00aaaa",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "ffff55",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "ffaa55",
      "SETTING_BG_COLOR": "000000",
      "SETTING_PIP_COLOR_PRIMARY": "000000",
      "SETTING_PIP_COLOR_SECONDARY": "000000",
      "SETTING_RING_STROKE_COLOR": "005555",
      "SETTING_RING_NIGHT_COLOR": "000000",
      "SETTING_RING_DAY_COLOR": "55ffff",
      "SETTING_RING_SUNRISE_COLOR": "ff5500",
      "SETTING_RING_SUNSET_COLOR": "ff5500",
      "SETTING_SUN_STROKE_COLOR": "005555",
      "SETTING_SUN_FILL_COLOR": "ffff55"
    },
    bwTheme1: {
      "SETTING_TIME_COLOR": "000000",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "000000",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "000000",
      "SETTING_BG_COLOR": "ffffff",
      "SETTING_PIP_COLOR_PRIMARY": "000000",
      "SETTING_PIP_COLOR_SECONDARY": "000000",
      "SETTING_RING_STROKE_COLOR": "000000",
      "SETTING_RING_NIGHT_COLOR": "000000",
      "SETTING_RING_DAY_COLOR": "ffffff",
      "SETTING_RING_SUNRISE_COLOR": "aaaaaa",
      "SETTING_RING_SUNSET_COLOR": "aaaaaa",
      "SETTING_SUN_STROKE_COLOR": "000000",
      "SETTING_SUN_FILL_COLOR": "ffffff"
    },
    bwTheme2: {
      "SETTING_TIME_COLOR": "ffffff",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "ffffff",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "ffffff",
      "SETTING_BG_COLOR": "000000",
      "SETTING_PIP_COLOR_PRIMARY": "ffffff",
      "SETTING_PIP_COLOR_SECONDARY": "ffffff",
      "SETTING_RING_STROKE_COLOR": "000000",
      "SETTING_RING_NIGHT_COLOR": "000000",
      "SETTING_RING_DAY_COLOR": "ffffff",
      "SETTING_RING_SUNRISE_COLOR": "aaaaaa",
      "SETTING_RING_SUNSET_COLOR": "aaaaaa",
      "SETTING_SUN_STROKE_COLOR": "000000",
      "SETTING_SUN_FILL_COLOR": "ffffff"
    },
    bwTheme3: {
      "SETTING_TIME_COLOR": "000000",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "000000",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "aaaaaa",
      "SETTING_BG_COLOR": "ffffff",
      "SETTING_PIP_COLOR_PRIMARY": "000000",
      "SETTING_PIP_COLOR_SECONDARY": "000000",
      "SETTING_RING_STROKE_COLOR": "ffffff",
      "SETTING_RING_NIGHT_COLOR": "000000",
      "SETTING_RING_DAY_COLOR": "ffffff",
      "SETTING_RING_SUNRISE_COLOR": "aaaaaa",
      "SETTING_RING_SUNSET_COLOR": "aaaaaa",
      "SETTING_SUN_STROKE_COLOR": "000000",
      "SETTING_SUN_FILL_COLOR": "ffffff"
    },
    bwTheme4: {
      "SETTING_TIME_COLOR": "ffffff",
      "SETTING_SUBTEXT_PRIMARY_COLOR": "ffffff",
      "SETTING_SUBTEXT_SECONDARY_COLOR": "ffffff",
      "SETTING_BG_COLOR": "000000",
      "SETTING_PIP_COLOR_PRIMARY": "ffffff",
      "SETTING_PIP_COLOR_SECONDARY": "ffffff",
      "SETTING_RING_STROKE_COLOR": "000000",
      "SETTING_RING_NIGHT_COLOR": "000000",
      "SETTING_RING_DAY_COLOR": "000000",
      "SETTING_RING_SUNRISE_COLOR": "aaaaaa",
      "SETTING_RING_SUNSET_COLOR": "aaaaaa",
      "SETTING_SUN_STROKE_COLOR": "000000",
      "SETTING_SUN_FILL_COLOR": "ffffff"
    }
  };

  function decimalToHex(decimalColor) {
    return ('0' + decimalColor.toString(16)).slice(-2);
  }

  function convertToHexFromDecimal(decimal) {
    var r = (decimal >> 16) & 0xFF;
    var g = (decimal >> 8) & 0xFF;
    var b = decimal & 0xFF;
    return '#' + decimalToHex(r) + decimalToHex(g) + decimalToHex(b);
  }

  function toggleCustomSection(show) {
    var customFields = [
      'SETTING_TIME_COLOR',
      'SETTING_SUBTEXT_PRIMARY_COLOR',
      'SETTING_SUBTEXT_SECONDARY_COLOR',
      'SETTING_BG_COLOR',
      'SETTING_PIP_COLOR_PRIMARY',
      'SETTING_PIP_COLOR_SECONDARY',
      'SETTING_RING_STROKE_COLOR',
      'SETTING_RING_NIGHT_COLOR',
      'SETTING_RING_DAY_COLOR',
      'SETTING_RING_SUNRISE_COLOR',
      'SETTING_RING_SUNSET_COLOR',
      'SETTING_SUN_STROKE_COLOR',
      'SETTING_SUN_FILL_COLOR'
    ];

    var items = [];
    for (var i = 0; i < customFields.length; i++) {
      var key = customFields[i];
      var item = clayConfig.getItemByMessageKey(key);
      items.push(item);
    }

    for (var j = 0; j < items.length; j++) {
      var currentItem = items[j];
      if (currentItem) {
        if (show) {
          currentItem.show();
        } else {
          currentItem.hide();
        }
      }
    }
  }

  function updateSVGColors(colorKey, colorValue) {
    var svgContainer = document.getElementById('svg-preview');
    if (!svgContainer) return;

    var element = svgContainer.querySelector('#' + colorKey);
    if (element) {
      var hexColor;
      if (typeof colorValue === 'number') {
        hexColor = convertToHexFromDecimal(colorValue);
      } else {
        hexColor = '#' + colorValue;
      }
      element.setAttribute('fill', hexColor);
    }
  }


  function applyPreset() {
    var presetSelector = clayConfig.getItemByMessageKey('SETTING_PRESET');
    var selectedPreset = presetSelector.get();

    if (selectedPreset === "custom") {
      toggleCustomSection(true);
    } else {
      toggleCustomSection(false);

      var colors = presets[selectedPreset];
      var colorKeys = Object.keys(colors);
      for (var i = 0; i < colorKeys.length; i++) {
        var key = colorKeys[i];
        var item = clayConfig.getItemByMessageKey(key);
        if (item) {
          item.set(colors[key]);
        }
        updateSVGColors(key, colors[key]);
      }
    }
  }


  function attachColorListeners() {
    var colorKeys = Object.keys(presets.default);

    for (var i = 0; i < colorKeys.length; i++) {
      var key = colorKeys[i];

      var colorPicker = clayConfig.getItemByMessageKey(key);
      if (colorPicker) {
        (function (localKey, localColorPicker) {
          colorPicker.on('change', function () {
            var newColor = localColorPicker.get();
            updateSVGColors(localKey, newColor);
          });
        })(key, colorPicker);
      }
    }
  }

  function exportTheme() {
    var colorKeys = Object.keys(presets.default);
    var themeData = {};

    // Convert all colors to hex
    for (var i = 0; i < colorKeys.length; i++) {
      var key = colorKeys[i];
      var colorValue = clayConfig.getItemByMessageKey(key).get();

      // Ensure it's always in #RRGGBB format
      if (typeof colorValue === 'number') {
        themeData[key] = convertToHexFromDecimal(colorValue); // Convert decimal to hex
      } else {
        themeData[key] = '#' + colorValue; // Ensure hex is prefixed with #
      }
    }

    // Convert to JSON
    var jsonData = JSON.stringify(themeData, null, 2);
    var blob = new Blob([jsonData], { type: "application/json" });
    var url = URL.createObjectURL(blob);

    // Create a download link
    var a = document.createElement("a");
    a.href = url;
    a.download = "watchface-theme.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }


  clayConfig.on(clayConfig.EVENTS.AFTER_BUILD, function () {
    var presetSelector = clayConfig.getItemByMessageKey('SETTING_PRESET');
    presetSelector.on('change', applyPreset);

    applyPreset();
    attachColorListeners();

    var colorKeys = Object.keys(presets.default);
    for (var i = 0; i < colorKeys.length; i++) {
      var key = colorKeys[i];
      var colorValue = clayConfig.getItemByMessageKey(key).get();
      updateSVGColors(key, colorValue);
    }

    // Create export button
    var exportButton = document.createElement("button");
    exportButton.textContent = "Export Theme";
    exportButton.style.cssText = "display: block; margin: 10px auto; padding: 10px; font-size: 16px;";
    exportButton.onclick = exportTheme;

    // Append to settings page
    document.body.appendChild(exportButton);
  });

};
