import React from 'react';
import { useConfig } from '../context/PebbleConfigContext';

export const Page: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const { save } = useConfig();

  return (
    <div className="pebble-page">
      <header className="pebble-header">
        <h1>{title}</h1>
        <button className="pebble-save-button" onClick={save}>SAVE</button>
      </header>
      <main className="pebble-content">
        {children}
      </main>
    </div>
  );
};
