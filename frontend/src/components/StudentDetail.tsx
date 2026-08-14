import { useState } from 'react'
import { useParams } from 'react-router-dom'
import LecturerNavbar from './LecturerNavbar'

function StudentDetail() {
  const { studentId } = useParams()

  const students = [
    { id: 1, name: 'Jane Smith', attendancePercent: 92, logbookStatus: 'Up to date' },
    { id: 2, name: 'Michael Otieno', attendancePercent: 78, logbookStatus: 'Missing entries' },
    { id: 3, name: 'Amina Yusuf', attendancePercent: 100, logbookStatus: 'Up to date' },
  ]

  const student = students.find((s) => s.id === Number(studentId))

  const [logbookEntries, setLogbookEntries] = useState([
    { id: 1, text: 'Assisted with database backup procedures.', approved: false },
    { id: 2, text: 'Attended team standup and reviewed pull requests.', approved: false },
    { id: 3, text: 'Documented API endpoints for the new feature.', approved: true },
  ])

  function handleApprove(entryId: number) {
    setLogbookEntries(
      logbookEntries.map((entry) =>
        entry.id === entryId ? { ...entry, approved: !entry.approved } : entry
      )
    )
  }

  if (!student) {
    return <p>Student not found</p>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <LecturerNavbar />

      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          {student.name}
        </h1>

        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <p className="mb-2 text-gray-600">
            Attendance: {student.attendancePercent}%
          </p>
          <p className="text-gray-600">
            Logbook Status: {student.logbookStatus}
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Logbook Entries
          </h2>

          <div className="flex flex-col gap-4">
            {logbookEntries.map((entry) => (
              <div
                key={entry.id}
                className="flex items-center justify-between border-b pb-4 last:border-0"
              >
                <p className="text-gray-700">{entry.text}</p>

                {entry.approved ? (
                  <button
                    onClick={() => handleApprove(entry.id)}
                    className="rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 hover:bg-green-200"
                  >
                    Approved
                  </button>
                ) : (
                  <button
                    onClick={() => handleApprove(entry.id)}
                    className="rounded-md bg-blue-600 px-4 py-1 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Approve
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDetail