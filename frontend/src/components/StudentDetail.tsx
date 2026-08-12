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

        <div className="rounded-lg bg-white p-6 shadow-md">
          <p className="mb-2 text-gray-600">
            Attendance: {student.attendancePercent}%
          </p>
          <p className="text-gray-600">
            Logbook Status: {student.logbookStatus}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudentDetail