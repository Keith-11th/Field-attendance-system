import { Link } from 'react-router-dom'

function CoordinatorNavbar() {
  return (
    <nav className="flex gap-6 bg-white px-6 py-4 shadow-md">
      <Link to="/coordinator/dashboard" className="font-semibold text-gray-700 hover:text-blue-600">
        Dashboard
      </Link>
    </nav>
  )
}

export default CoordinatorNavbar