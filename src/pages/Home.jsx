import { useState, useEffect } from "react";
import Entry from "../components/Entry";
import AddButton from "../components/AddButton";
import JournalCard from "../components/JournalCard";
import Filters from "../components/Filters";

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [entries, setEntries] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);

  const [filterDate, setFilterDate] = useState('');
  const [filterAction, setFilterAction] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(storedEntries);
  }, []);

  const handleAddEntry = (newEntry) => {
    let updatedEntries;
    if (editingEntry !== null) {
      updatedEntries = entries.map((entry, idx) =>
        idx === editingEntry ? newEntry : entry
      );
      setEditingEntry(null);
    } else {
      updatedEntries = [newEntry, ...entries];
    }
    setEntries(updatedEntries);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditingEntry(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, idx) => idx !== index);
    setEntries(updatedEntries);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
  };

  const filteredEntries = entries.filter((entry) => {
    const matchDate = filterDate ? entry.date === filterDate : true;
    const matchAction = filterAction ? entry.action === filterAction : true;
    const matchType = filterType ? entry.type === filterType : true;
    return matchDate && matchAction && matchType;
  });

  if (showForm) {
    return (
      <Entry
        onClose={() => {setShowForm(false); setEditingEntry(null);}}
        onEntry={handleAddEntry}
        existingEntry={editingEntry !== null ? entries[editingEntry] : null}
      />
    );
  }

  return (
    <>
      <Filters
        filterDate={filterDate}
        setFilterDate={setFilterDate}
        filterAction={filterAction}
        setFilterAction={setFilterAction}
        filterType={filterType}
        setFilterType={setFilterType}
      />

      <div className="flex flex-col items-center mt-4 px-4 space-y-4 pb-28">
        {filteredEntries.length === 0 ? (<p className="text-gray-300 text-sm">No journal entries</p>
        ) : (
          filteredEntries.map((entry, idx) => (
            <JournalCard
              key={idx}
              entry={entry}
              onEdit={() => handleEdit(entries.indexOf(entry))}
              onDelete={() => handleDelete(entries.indexOf(entry))}
            />
          ))
        )}
      </div>

      <AddButton onClick={() => setShowForm(true)} />
    </>
  );
}

export default Home;
