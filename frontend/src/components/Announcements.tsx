import Navbar from './Navbar'

function Announcements() {
  const announcements = [
    {
      id: 1,
      title: 'Logbook Reminder',
      message: 'Please submit your daily logbook entries by end of day.',
      date: '2026-08-08',
    },
    {
      id: 2,
      title: 'Site Visit Scheduled',
      message: 'Your supervisor will visit your workplace next Monday.',
      date: '2026-08-06',
    },
    {
      id: 3,
      title: 'Welcome to the Internship Program',
      message: 'Please review the internship guidelines document.',
      date: '2026-08-01',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Announcements
        </h1>

        <div className="flex flex-col gap-4">
          {announcements.map((item) => (
            <div key={item.id} className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <span className="text-sm text-gray-400">{item.date}</span>
              </div>
              <p className="text-gray-600">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Announcements