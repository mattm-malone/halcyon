import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SettingsProvider } from './context/SettingsContext';
import ConfigPage from './components/ConfigPage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <div className="config-container">
          <ConfigPage />
        </div>
      </SettingsProvider>
    </ThemeProvider>
  );
};

export default App;
