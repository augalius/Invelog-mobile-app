import React, { useContext } from 'react';
import { SettingsContext } from '../context/SoundSettings';

function Settings() {
  const { soundEnabled, toggleSound } = useContext(SettingsContext);

  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-xl text-[#d9d9d9] font-semibold mb-4">Settings</h2>
        <div className="flex justify-between items-center bg-[#d9d9d9] p-3 rounded-lg shadow">
          <span>Sound on "Save"</span>
          <button
            onClick={toggleSound}
            className={`w-12 h-6 rounded-full ${soundEnabled ? 'bg-green-500' : 'bg-gray-500'} relative`}>
            <div className={`w-5 h-5 bg-white rounded-full shadow transform transition ${
              soundEnabled ? 'translate-x-6' : 'translate-x-0'}`}>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Settings;
