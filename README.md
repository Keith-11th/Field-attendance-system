# Field Attendance and Internship Management System

A full-stack web platform that digitizes internship and field attachment supervision for universities, replacing paper attendance sheets and handwritten logbooks with GPS-verified attendance tracking, digital logbooks, and centralized supervision.

This is a personal project built to practice and demonstrate full-stack development skills, from frontend UI to backend APIs and database design.

## 📌 Problem It Solves

Universities currently manage internship/field attachment supervision using paper attendance sheets and handwritten daily/weekly logbooks. This makes it hard to:
- Verify students are actually present at their internship location
- Track logbook completion in real time
- Assign and balance supervisor workloads
- Generate accurate reports across departments

This system solves that by digitizing the entire process into one platform.

## 👥 Who Uses It

- **Students** — register their placement, clock in/out with GPS verification, fill daily/weekly logbooks, track their own attendance
- **Lecturers/Supervisors** — monitor only their assigned students, review logbooks, approve/request corrections, message students
- **Coordinators/Administrators** — manage the whole process: bulk import students/supervisors, auto-assign supervisors, view faculty-wide statistics and reports

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript, Tailwind CSS, Vite
* **Backend:** Django REST Framework[cite: 4]
* **Database:** MySQL (via XAMPP)[cite: 4]
* **Authentication:** JWT (SimpleJWT)[cite: 4]
* **Maps & Location:** OpenStreetMap + Leaflet, browser/mobile GPS APIs (planned)[cite: 4]

## ✅ Current Progress

* [x] Project structure set up (`frontend/` + `backend/`)[cite: 4]
* [x] Frontend scaffolded with Vite + React + TypeScript[cite: 4]
* [x] Tailwind CSS configured and working[cite: 4]
* [x] Backend API (Django REST Framework)[cite: 4]
* [x] Database models and auth (MySQL + JWT)[cite: 4]
* [x] Student Portal UI (login, clock in/out, logbooks) — *functional & integrated*
* [ ] Lecturer Portal UI
* [ ] Coordinator Portal UI
* [ ] GPS-based attendance verification
* [ ] Reporting and analytics

> This project is being built incrementally, one feature at a time. Check the commit history for detailed progress.[cite: 4]

```bash
# clone the repo
git clone https://github.com/Keith-11th/Field-attendance-system.git
cd Field-attendance-system/frontend

# install dependencies
npm install

# run the dev server
npm run dev
```

Then open `http://localhost:5173` in your browser.

> Backend setup instructions will be added once the backend is scaffolded.

## 📂 Project Structure

```
Field-attendance-system/
├── frontend/     # React + TypeScript + Tailwind app
├── backend/      # Django REST Framework API (coming soon)
└── README.md
```

## 🔮 Planned Future Enhancements

- Mobile app (Android/iOS)
- QR code attendance
- Geofencing for approved locations
- Offline attendance with auto-sync
- AI-assisted weekly summary generation
- Email/SMS notifications
- Integration with university student information systems

## 📄 License

Personal learning project — not currently licensed for external use.
