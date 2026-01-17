import React, { useState, useEffect, useContext } from 'react';
import { SettingsContext } from '../context/SoundSettings';
import sound from '../assets/sound.wav';

const Entry = ({ onClose, onEntry, existingEntry }) => {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [action, setAction] = useState('Buy');
  const [type, setType] = useState('Stocks');
  const [ticker, setTicker] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const { soundEnabled } = useContext(SettingsContext);
  const audio = new Audio(sound);

  useEffect(() => {
    if (existingEntry) {
      setDate(existingEntry.date);
      setAction(existingEntry.action);
      setType(existingEntry.type);
      setTicker(existingEntry.ticker);
      setPrice(existingEntry.price);
      setQuantity(existingEntry.quantity);
      setNotes(existingEntry.notes);
    } else {
      setDate(new Date().toISOString().split('T')[0]);
      setQuantity(1);
    }
  }, [existingEntry]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = {
      date,
      action,
      type,
      ticker,
      price,
      quantity,
      notes,
    };
    onEntry(newEntry);
    if (soundEnabled) {
      audio.play();
    }
  };

  return (
    <div className="bg-[#2c2d3c] flex flex-col items-center px-4 py-8">
      <form className="bg-gray-200 rounded-xl p-4 w-full max-w-md flex flex-col space-y-3 relative"
        onSubmit={handleSubmit}>
        <button
          onClick={onClose}
          className="absolute top-1 right-4 text-gray-500 text-xl hover:text-gray-800 transition"
          aria-label="Close"
          type="button"
          >&times;
        </button>
        <h2 className="text-lg font-semibold text-gray-800 text-center">New Log</h2>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="p-2 rounded-lg border border-gray-300 focus:outline-none"
        />
        <select
          value={action}
          onChange={(event) => setAction(event.target.value)}
          className="p-2 rounded-lg border border-gray-300 focus:outline-none">
          <option>Buy</option>
          <option>Sell</option>
        </select>
        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
          className="p-2 rounded-lg border border-gray-300 focus:outline-none">
          <option>Stocks</option>
          <option>Bonds</option>
          <option>ETFs</option>
          <option>Crypto</option>
        </select>
        <input
          type="text"
          value={ticker}
          onChange={(event) => setTicker(event.target.value.toUpperCase())}
          className="p-2 rounded-lg border border-gray-300 focus:outline-none"
          placeholder="Ticker (e.g., AAPL)"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className="p-2 rounded-lg border border-gray-300 focus:outline-none"
          placeholder="Price"
          required
        />
        <input
          type="float"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          className="p-2 rounded-lg border border-gray-300 focus:outline-none"
          placeholder="Quantity"
        />
        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          className="p-2 rounded-lg border border-gray-300 focus:outline-none"
          rows="3"
          placeholder="Notes"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
};

export default Entry;
