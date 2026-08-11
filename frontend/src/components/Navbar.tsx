import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex gap-6 bg-white px-6 py-4 shadow-md">
      <Link to="/student/dashboard" className="font-semibold text-gray-700 hover:text-blue-600">
        Dashboard
      </Link>

      <Link to="/student/logbook" className="font-semibold text-gray-700 hover:text-blue-600">
        Logbook
      </Link>

      <Link to="/student/announcements" className="font-semibold text-gray-700 hover:text-blue-600">
        Announcements
      </Link>

      <Link to="/student/reports" className="font-semibold text-gray-700 hover:text-blue-600">
        Reports
      </Link>
    </nav>
  )
}

export default Navbar