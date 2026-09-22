import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import API from '../api';

interface LogbookEntry {
  id: number;
  entry_text: string;
  created_at?: string;
}

function Logbook() {
  const [entryText, setEntryText] = useState('');
  const [entries, setEntries] = useState<LogbookEntry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLogbooks();
  }, []);

  const fetchLogbooks = async () => {
    try {
      const response = await API.get<LogbookEntry[]>('logbooks/');
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching logbooks:', error);
    }
  };

  async function handleSaveEntry() {
    if (!entryText.trim()) return;

    setLoading(true);
    try {
      const response = await API.post<LogbookEntry>('logbooks/', {
        entry_text: entryText
      });

      setEntries([response.data, ...entries]);
      setEntryText('');
    } catch (error) {
      console.error('Error saving logbook entry:', error);
      alert('Failed to save logbook entry. Make sure you are logged in!');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="logbook-container">
        <h1>Logbook</h1>

        <div className="entry-form">
          <textarea
            value={entryText}
            onChange={(e) => setEntryText(e.target.value)}
            placeholder="Write a new entry..."
            rows={4}
          />
          <button onClick={handleSaveEntry} disabled={loading || !entryText.trim()}>
            {loading ? 'Saving...' : 'Save Entry'}
          </button>
        </div>

        <div className="entry-list">
          {entries.length === 0 ? (
            <p>No entries yet.</p>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="entry-item">
                <p>{entry.entry_text}</p>
                {entry.created_at && (
                  <span className="entry-date">
                    {new Date(entry.created_at).toLocaleString()}
                  </span>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Logbook;