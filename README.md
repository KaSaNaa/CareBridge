# CareBridge [Currently not developing]
2nd year final project to build a web platform for Sri Lankan people who lives overseas to gain access to SL medical advice at low-cost or for completely free (DEMO ONLY)

```
This app is protected by O.R.K.M.M License which is a self-made license which stands for ONA REDDAK KARAGANIN MATA MOKO (in English - Do whatever the fuck you want to do with this, I don't give a damn)
```

## Class Diagram
```plantuml
@startuml CareBridge

class App {
  - isAuthenticated: boolean
  + render(): JSX.Element
  - fetchDoctorDetails(): void
}

class Auth {
  - inORup: string
  - isAuthenticated: boolean
  + render(): JSX.Element
  - handleSignIn(): void
  - handleSignUp(): void
  - handleSignOut(): void
}

class DoctorDashboard {
  - doctorData: DoctorData
  + render(): JSX.Element
  - fetchDoctorDetails(): void
}

class Dashboard {
  - doctorData: DoctorData
  + render(): JSX.Element
  - fetchDoctorDetails(): void
}

class DoctorAppointments {
  - doctorUid: string
  - appointments: Appointment[]
  + render(): JSX.Element
  - fetchAppointments(): void
}

class PatientDashboard {
  - patientData: PatientData
  + render(): JSX.Element
  - fetchPatientDetails(): void
}

class Appointment {
  - id: string
  - doctorEmail: string
  - patientEmail: string
  - scheduledTime: Date
}

class DoctorData {
  - firstName: string
  - lastName: string
  - address: string
  - biography: string
  - contactNumber: string
  - dob: string
  - email: string
  - experience: string
  - gender: string
  - hospitalAffiliation: string
  - officeHours: string
  - professionalQualification: string
  - specialization: string
}

class PatientData {
  - firstName: string
  - lastName: string
  - address: string
  - contactNumber: string
  - dob: string
  - email: string
  - gender: string
}

class AppointmentForm {
  + handleSubmit(): void
}

class Firestore {
  - db: FirebaseFirestore
  - auth: FirebaseAuth
  + getFirestore(): FirebaseFirestore
  + getAuth(): FirebaseAuth
}

App --|> Auth
App --|> DoctorDashboard
App --|> Dashboard
DoctorDashboard --|> DoctorData
Dashboard --|> DoctorData
DoctorAppointments --|> Appointment
App --|> PatientDashboard
PatientDashboard --|> PatientData
AppointmentForm --|> Firestore

Auth -- Firestore: Uses
DoctorDashboard -- Firestore: Fetches doctor details
Dashboard -- Firestore: Fetches doctor details
DoctorAppointments -- Firestore: Fetches appointments
PatientDashboard -- Firestore: Fetches patient details

AppointmentForm --|> DoctorData: Loads doctor data
AppointmentForm --|> Appointment: Submits appointment data

DoctorDashboard -- DoctorAppointments: Displays appointments
PatientDashboard -- DoctorAppointments: Displays appointments

@enduml

```
## Software Architecture

```plantuml
    @startuml CareBridge

    package "Frontend" {
    [App]
    [Auth]
    [DoctorDashboard]
    [Dashboard]
    [DoctorAppointments]
    [PatientDashboard]
    [AppointmentForm]
    [HomePage]
    }

    package "Backend" {
    [Firestore]
    }

    package "Data Models" {
    [Appointment]
    [DoctorData]
    [PatientData]
    }

    HomePage --|> Auth
    App --|> HomePage
    App --|> Auth
    App --|> DoctorDashboard
    App --|> Dashboard
    DoctorDashboard --|> DoctorData
    Dashboard --|> DoctorData
    DoctorAppointments --|> Appointment
    App --|> PatientDashboard
    AppointmentForm --|> Firestore

    @enduml

```