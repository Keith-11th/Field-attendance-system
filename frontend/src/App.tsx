import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import StudentDashboard from './components/StudentDashboard'
import Logbook from './components/Logbook'
import Announcements from './components/Announcements'
import Reports from './components/Reports'
import LecturerDashboard from './components/LecturerDashboard'
import StudentDetail from './components/StudentDetail'
import CoordinatorDashboard from './components/CoordinatorDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dev-menu" element={<Home />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/logbook" element={<Logbook />} />
        <Route path="/student/announcements" element={<Announcements />} />
        <Route path="/student/reports" element={<Reports />} />
        <Route path="/lecturer/dashboard" element={<LecturerDashboard />} />
        <Route path="/lecturer/student/:studentId" element={<StudentDetail />} />
        <Route path="/coordinator/dashboard" element={<CoordinatorDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App