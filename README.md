
# Leave Management System
#### A simple mock leave management system built using react and vite, stroing data locally in the broswer via localstorage.This project allows employees to apply for leave,view leave history, and let's admin approves or reject leave requests.

#### CheckPoint: This is mock system and does not use a backend server,all data is stored locally in the browser.

## Features
- Employee Login(Mock user)
- Apply for leave
- View leave History
- Admin dashboard for approve/reject leave requests
- Automatic leave Balance trcaking
- LocalStorage-based mock database
- Responsive UI

## Tech Stack 
- Frontend: React, Vite, CSS
- Storage: LocalStorage(mock database)
- Routing:React Router v6

## Mock User Credentials
- Email: name@company.com
- Passwrod: Priya@123

## Project Struture
```
leave-management-system/
├─ public/                 # Static files
├─ src/                    # React source code
│  ├─ assets/              # Images and icons
│  ├─ components/          # Reusable components
│  ├─ pages/               # Pages like Dashboard, Admin, Login, LeaveForm
│  ├─ utils/               # Utility functions
│  ├─ App.jsx              # Main app routing
│  └─ main.jsx             # App entry point
├─ .gitignore
├─ package.json
├─ vite.config.js
└─ README.md
```

Whole File Structure
```
leave-management-system/
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ assets/                # Images and icons
│  │  ├─ show-svgrepo-com.svg
│  │  └─ hide-svgrepo-com.svg
│  ├─ components/            # Reusable components
│  │  ├─ DashboardNav.jsx
│  │  └─ LeaveBalance.jsx
│  ├─ pages/                 # Application pages
│  │  ├─ Admin.jsx
│  │  ├─ DashBoard.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ LeaveForm.jsx
│  │  ├─ LeaveHistory.jsx
│  │  └─ LoginPage.jsx
│  ├─ utils/                 # Utility functions
│  │  └─ Date.js
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  └─ App.css
├─ .gitignore
├─ package.json
├─ package-lock.json
└─ vite.config.js
```

## How to Run
- Install Dependencies:
```
npm install
```
-Run development server:
```
npm run dev
```
-Open the app in browser via URL

## Deployed ov vercel
URL: https://leave-management-system-mu.vercel.app/
## Author
Made By Priya Chanchal 
