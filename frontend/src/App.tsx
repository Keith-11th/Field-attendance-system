import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import StudentDashboard from './components/StudentDashboard'
import Logbook from './components/Logbook'
import Announcements from './components/Announcements'
import Reports from './components/Reports'
import LecturerDashboard from './components/LecturerDashboard'
import StudentDetail from './components/StudentDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/logbook" element={<Logbook />} />
        <Route path="/student/announcements" element={<Announcements />} />
        <Route path="/student/reports" element={<Reports />} />
        <Route path="/lecturer/dashboard" element={<LecturerDashboard />} />
        <Route path="/lecturer/student/:studentId" element={<StudentDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App