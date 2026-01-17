import { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const storedSetting = localStorage.getItem('soundEnabled');
    if (storedSetting !== null) {
      setSoundEnabled(storedSetting === 'true');
    }
  }, []);

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      localStorage.setItem('soundEnabled', !prev);
      return !prev;
    });
  };

  return (
    <SettingsContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SettingsContext.Provider>
  );
};
