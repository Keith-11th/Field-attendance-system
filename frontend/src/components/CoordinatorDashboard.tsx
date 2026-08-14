import CoordinatorNavbar from './CoordinatorNavbar'

function CoordinatorDashboard() {
  const stats = [
    { label: 'Total Students', value: 248 },
    { label: 'Total Supervisors', value: 32 },
    { label: 'Active Placements', value: 210 },
    { label: 'Missing Logbooks', value: 14 },
  ]

  const departments = [
    { id: 1, name: 'Computer Science', students: 85, supervisors: 10 },
    { id: 2, name: 'Business Administration', students: 96, supervisors: 12 },
    { id: 3, name: 'Engineering', students: 67, supervisors: 10 },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <CoordinatorNavbar />

      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Coordinator Overview
        </h1>

        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white p-6 shadow-md">
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Departments
          </h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="pb-2">Department</th>
                <th className="pb-2">Students</th>
                <th className="pb-2">Supervisors</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept) => (
                <tr key={dept.id} className="border-b last:border-0">
                  <td className="py-2">{dept.name}</td>
                  <td className="py-2">{dept.students}</td>
                  <td className="py-2">{dept.supervisors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CoordinatorDashboard