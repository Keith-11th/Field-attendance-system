import { Link } from 'react-router-dom'

function Home() {
  const pages = [
    { section: 'Auth', label: 'Login', path: '/login' },
    { section: 'Student Portal', label: 'Dashboard', path: '/student/dashboard' },
    { section: 'Student Portal', label: 'Logbook', path: '/student/logbook' },
    { section: 'Student Portal', label: 'Announcements', path: '/student/announcements' },
    { section: 'Student Portal', label: 'Reports', path: '/student/reports' },
    { section: 'Lecturer Portal', label: 'Dashboard', path: '/lecturer/dashboard' },
    { section: 'Lecturer Portal', label: 'Student Detail (example)', path: '/lecturer/student/1' },
    { section: 'Coordinator Portal', label: 'Dashboard', path: '/coordinator/dashboard' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        Field Attendance System — Page Index
      </h1>

      <div className="flex flex-col gap-2">
        {pages.map((page) => (
          <div key={page.path} className="rounded-lg bg-white p-4 shadow-md">
            <p className="text-sm text-gray-400">{page.section}</p>
            <Link
              to={page.path}
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {page.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home