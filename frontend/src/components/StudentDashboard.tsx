import { useState } from 'react'
import Navbar from './Navbar'

function StudentDashboard() {
  const studentName = 'John Doe'
  const [isClockedIn, setIsClockedIn] = useState(false)

  const recentAttendance = [
    { date: '2026-08-07', status: 'Present', hours: '8h' },
    { date: '2026-08-06', status: 'Present', hours: '7.5h' },
    { date: '2026-08-05', status: 'Missed', hours: '0h' },
  ]

  function handleClockToggle() {
    setIsClockedIn(!isClockedIn)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Welcome, {studentName}
        </h1>

        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <p className="mb-4 text-gray-600">
            Status: {isClockedIn ? 'Clocked In' : 'Clocked Out'}
          </p>

          <button
            onClick={handleClockToggle}
            className={
              isClockedIn
                ? 'rounded-md bg-red-600 px-6 py-2 font-semibold text-white hover:bg-red-700'
                : 'rounded-md bg-green-600 px-6 py-2 font-semibold text-white hover:bg-green-700'
            }
          >
            {isClockedIn ? 'Clock Out' : 'Clock In'}
          </button>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Recent Attendance
          </h2>

          <ul>
            {recentAttendance.map((record) => (
              <li
                key={record.date}
                className="border-b py-2 text-gray-700 last:border-0"
              >
                {record.date} - {record.status} - {record.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard