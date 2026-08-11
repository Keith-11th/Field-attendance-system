import { useState } from 'react'
import Navbar from './Navbar'

function Logbook() {
  const [entryText, setEntryText] = useState('')
  const [entries, setEntries] = useState<string[]>([])

  function handleSaveEntry() {
    setEntries([...entries, entryText])
    setEntryText('')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Daily Logbook
        </h1>

        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <textarea
            placeholder="What did you do today?"
            value={entryText}
            onChange={(e) => setEntryText(e.target.value)}
            className="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />

          <button
            onClick={handleSaveEntry}
            className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Save Entry
          </button>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Past Entries
          </h2>

          <ul>
            {entries.map((entry, index) => (
              <li
                key={index}
                className="border-b py-2 text-gray-700 last:border-0"
              >
                {entry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Logbook