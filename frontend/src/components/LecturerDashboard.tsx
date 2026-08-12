import { Link } from 'react-router-dom'
import LecturerNavbar from './LecturerNavbar'

function LecturerDashboard() {
  const lecturerName = 'Dr. Sarah Kim'

  const students = [
    { id: 1, name: 'Jane Smith', attendancePercent: 92, logbookStatus: 'Up to date' },
    { id: 2, name: 'Michael Otieno', attendancePercent: 78, logbookStatus: 'Missing entries' },
    { id: 3, name: 'Amina Yusuf', attendancePercent: 100, logbookStatus: 'Up to date' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <LecturerNavbar />

      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Welcome, {lecturerName}
        </h1>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Assigned Students
          </h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="pb-2">Name</th>
                <th className="pb-2">Attendance</th>
                <th className="pb-2">Logbook Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b last:border-0">
                  <td className="py-2">
                    <Link
                      to={`/lecturer/student/${student.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {student.name}
                    </Link>
                  </td>
                  <td className="py-2">{student.attendancePercent}%</td>
                  <td className="py-2">{student.logbookStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LecturerDashboard