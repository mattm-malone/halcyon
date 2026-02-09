import React from 'react';
import { ConfigProvider } from './context/ConfigProvider';
import ConfigPage from './components/ConfigPage';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ConfigProvider enableAutoSave={true}>
        <div className="config-container">
          <ConfigPage />
        </div>
      </ConfigProvider>
    </ErrorBoundary>
  );
};

export default App;
