# 🏥 MediCore — Hospital Management System 

A full-stack Hospital Management System built with the MERN stack (MongoDB, Express, React, Node.js). MediCore covers the complete workflow of a real hospital — from patient registration and doctor management to appointments, medical records, ward beds, billing and online consultations via Google Meet.
       
---    
       
## 📸 Preview     
    
> Dashboard · Patients · Doctors · Appointments (Calendar) · Medical Records · Wards · Billing  
   
---        

## ✨ Features 

### 🔐 Authentication & Role-Based Access
- JWT-based authentication with secure token storage
- 5 roles with granular permissions: **Admin**, **Doctor**, **Receptionist**, **Nurse**, **Patient**  
- Protected routes — users only see what their role allows
- Auto-redirect to login on token expiry

### 👥 Patient Management
- Register, edit, and discharge patients
- Status tracking: Active / Admitted / Discharged
- Live search by name, phone, or email
- Full patient profile slide-in panel

### 👨‍⚕️ Doctor Management
- Card-grid directory with specialization, department, experience, and availability
- Filter by status, specialization, department, and available days
- Dedicated doctor profile page (`/doctors/:id`) with appointment stats

### 📅 Appointments
- Full monthly calendar with colour-coded appointment dots
- Book **in-person** or **online** appointments
- **Google Meet link auto-generated** for online appointments
- **1-hour cancellation lock** — appointments cannot be cancelled within 1 hour of scheduled time
- Time slot conflict prevention per doctor
    
### 🩺 Medical Records
- One record per patient with blood group, allergies, and chronic conditions
- Visit history with diagnoses, doctor notes, vitals, prescriptions, and lab results
- Tag-based input for allergies and conditions
- Role-gated: doctors write clinical notes, receptionists create record shells

### 🏢 Wards & Beds
- Ward cards with expandable bed grid (visual map)
- Bed status: Available / Occupied / Maintenance
- Admit patients to beds, discharge, and toggle maintenance
- Live occupancy bar per ward with global stats

### 💰 Billing
- Bills linked to appointments with itemized charges
- Consultation fee, medication charges, lab test charges, room charges
- Insurance coverage deduction
- Payment recording with method tracking (cash/card/insurance/mixed)
- Status tracking: Unpaid / Partial / Paid
- Search by patient name or bill ID

### 🎥 Online Consultations
- Automatic Google Meet link generation for online appointments
- Join Meeting button directly from appointment detail
- Copy link to clipboard
- Cancellation locked within 1 hour of meeting time (frontend + backend enforced)

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| React Router v6 | Client-side routing |
| Tailwind CSS | Styling |
| Axios | API requests |
| Context API | Global auth state |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password hashing |
| dotenv | Environment config |

---

## 📁 Project Structure

```
Hospital Management App/
├── Server/                        # Backend
│   ├── Controller/
│   │   ├── appointment.controller.js
│   │   ├── auth.controller.js
│   │   ├── billing.controller.js
│   │   ├── doctor.controller.js
│   │   ├── medicalRecord.controller.js
│   │   ├── patient.controller.js
│   │   └── ward.controller.js
│   ├── Middleware/
│   │   └── auth.middleware.js
│   ├── Model/
│   │   ├── appointment.model.js
│   │   ├── billing.model.js
│   │   ├── doctor.model.js
│   │   ├── medicalRecord.model.js
│   │   ├── patient.model.js
│   │   ├── user.model.js
│   │   └── ward.model.js
│   ├── Routes/
│   │   ├── appointment.routes.js
│   │   ├── auth.routes.js
│   │   ├── billing.routes.js
│   │   ├── doctor.routes.js
│   │   ├── medicalRecord.routes.js
│   │   ├── patient.routes.js
│   │   └── ward.routes.js
│   ├── seed.js                    # Database seeder
│   ├── server.js                  # Entry point
│   └── .env                       # Environment variables
│
└── Frontend/
    └── Hospital-Management/       # React app
        ├── public/
        │   └── vercel.json        # Vercel rewrite rules
        ├── src/
        │   ├── api/
        │   │   └── axiosClient.js
        │   ├── Components/
        │   │   ├── ErrorBoundary.jsx
        │   │   ├── Layouts/
        │   │   │   ├── AppLayout.jsx
        │   │   │   ├── Sidebar.jsx
        │   │   │   └── Topbar.jsx
        │   │   └── ui/
        │   │       ├── ConfirmDialog.jsx
        │   │       └── Toast.jsx
        │   ├── context/
        │   │   └── AuthContext.jsx
        │   ├── Pages/
        │   │   ├── appointments/
        │   │   │   ├── AppointmentDetail.jsx
        │   │   │   └── AppointmentForm.jsx
        │   │   ├── billing/
        │   │   │   ├── BillDetail.jsx
        │   │   │   └── BillForm.jsx
        │   │   ├── doctors/
        │   │   │   ├── DoctorForm.jsx
        │   │   │   └── DoctorPage.jsx
        │   │   ├── patients/
        │   │   │   ├── PatientDetail.jsx
        │   │   │   └── PatientForm.jsx
        │   │   ├── records/
        │   │   │   ├── RecordInfoForm.jsx
        │   │   │   └── VisitForm.jsx
        │   │   ├── wards/
        │   │   │   ├── AdmitForm.jsx
        │   │   │   ├── BedGrid.jsx
        │   │   │   └── WardForm.jsx
        │   │   ├── Appointments.jsx
        │   │   ├── Billing.jsx
        │   │   ├── Dashboard.jsx
        │   │   ├── Doctors.jsx
        │   │   ├── Login.jsx
        │   │   ├── MedicalRecords.jsx
        │   │   ├── NotFound.jsx
        │   │   ├── Patients.jsx
        │   │   └── Wards.jsx
        │   ├── App.jsx
        │   ├── index.css
        │   └── main.jsx
        ├── index.html
        ├── tailwind.config.js
        └── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local) or MongoDB Atlas account
- npm

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/medicore-hms.git
cd medicore-hms
```

### 2. Set up the backend
```bash
cd Server
npm install
```

Create a `.env` file in the `Server/` folder:
```env
MONGO_URI=mongodb://localhost:27017/hospital_db
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d
PORT=5000
```

### 3. Seed the database
```bash
# Admin user only
node seed.js

# Admin + demo doctors, patients, wards
node seed.js --demo

# Wipe everything and start fresh
node seed.js --demo --wipe
```

Default admin credentials after seeding:
```
Email:    admin@medicore.com
Password: Admin@1234
```

### 4. Start the backend
```bash
node server.js
# or with nodemon
npm run dev
```

Server runs on `http://localhost:5000`

### 5. Set up the frontend
```bash
cd ../Frontend/Hospital-Management
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

> Vite proxies all `/api/*` requests to `http://localhost:5000` automatically.

---

## 👤 Roles & Permissions

| Permission | Admin | Receptionist | Doctor | Nurse | Patient |
|---|:---:|:---:|:---:|:---:|:---:|
| Manage patients | ✅ | ✅ | 👁 | 👁 | — |
| Manage doctors | ✅ | ✅ | 👁 | — | — |
| Book appointments | ✅ | ✅ | — | — | — |
| Cancel appointments | ✅ | ✅ | ✅ | — | ✅ |
| View medical records | ✅ | ✅ | ✅ | ✅ | — |
| Write clinical notes | ✅ | — | ✅ | — | — |
| Create medical record | ✅ | ✅ | ✅ | — | — |
| Update vitals | ✅ | — | ✅ | ✅ | — |
| Manage wards/beds | ✅ | ✅ | — | ✅ | — |
| View billing | ✅ | ✅ | 👁 | — | — |
| Create/edit billing | ✅ | ✅ | — | — | — |
| Delete records | ✅ | — | — | — | — |

---

## 🌐 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | Login and receive JWT |
| POST | `/api/auth/register` | Register new user |

### Patients
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/patients` | Get all patients |
| POST | `/api/patients` | Create patient |
| PUT | `/api/patients/:id` | Update patient |
| DELETE | `/api/patients/:id` | Delete patient |

### Doctors
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/doctors` | Get all doctors |
| POST | `/api/doctors` | Create doctor |
| PUT | `/api/doctors/:id` | Update doctor |
| DELETE | `/api/doctors/:id` | Delete doctor |

### Appointments
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/appointments` | Get all appointments |
| POST | `/api/appointments` | Book appointment (auto-generates Meet link for online) |
| PUT | `/api/appointments/:id` | Update appointment |
| PATCH | `/api/appointments/:id/cancel` | Cancel (enforces 1-hour rule) |
| PATCH | `/api/appointments/:id/complete` | Mark as completed |
| DELETE | `/api/appointments/:id` | Delete appointment |

### Medical Records
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/medical-records` | Get all records |
| GET | `/api/medical-records/:patientId` | Get record by patient |
| POST | `/api/medical-records` | Create record |
| POST | `/api/medical-records/:id/visits` | Add visit |
| DELETE | `/api/medical-records/:id/visits/:visitId` | Remove visit |

### Wards
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/wards` | Get all wards |
| POST | `/api/wards` | Create ward |
| PUT | `/api/wards/:id` | Update ward |
| DELETE | `/api/wards/:id` | Delete ward |
| POST | `/api/wards/:id/admit` | Admit patient to bed |
| POST | `/api/wards/:id/discharge` | Discharge patient |
| POST | `/api/wards/:id/maintenance` | Toggle bed maintenance |

### Billing
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/billing` | Get all bills |
| POST | `/api/billing` | Create bill |
| PATCH | `/api/billing/:id/payment` | Record payment |

---

## 🚢 Deployment

### Frontend → Vercel
1. Push to GitHub
2. Import repo in Vercel, set root to `Frontend/Hospital-Management`
3. Add env variable: `VITE_API_URL=https://your-backend.railway.app/api`
4. Add `public/vercel.json` for React Router support

### Backend → Railway
1. Import repo in Railway, set root to `Server`
2. Add env variables: `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`
3. Make sure `package.json` has `"start": "node server.js"`

### Database → MongoDB Atlas
1. Create free M0 cluster at cloud.mongodb.com
2. Export local data: `mongodump --db hospital_db --out ./backup`
3. Import to Atlas: `mongorestore --uri "your-atlas-uri" ./backup/hospital_db`

---

## 🔑 Environment Variables

### Server/.env
```env
MONGO_URI=           # MongoDB connection string
JWT_SECRET=          # Long random string for signing tokens
JWT_EXPIRES_IN=7d    # Token expiry duration
PORT=5000            # Server port
CLIENT_URL=          # Frontend URL (for CORS in production)

# Optional — seed script overrides
SEED_ADMIN_EMAIL=admin@medicore.com
SEED_ADMIN_PASSWORD=Admin@1234
```

### Frontend/.env.production
```env
VITE_API_URL=https://your-railway-backend.up.railway.app/api
```

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 🙋‍♂️ Author

Built with ❤️ as a full-stack portfolio project demonstrating real-world hospital management workflows.
