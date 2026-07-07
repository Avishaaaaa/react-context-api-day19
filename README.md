# React Student Portal with Context API

## Overview

This project is a simple Student Portal built with React that demonstrates how to use the Context API for global state management. Instead of passing data through multiple components using props, student information and application settings are stored in a single context and accessed wherever needed.

The application allows users to view student details, update student information, and switch between light and dark themes. Any changes made are reflected instantly across all components that consume the context.

## Features

* Display student information across multiple components
* Update student name, course, and batch using a form
* Light and Dark theme toggle
* Global state management using React Context API
* Automatic UI updates without prop drilling
* Simple and reusable component structure

## Technologies Used

* React
* Vite
* JavaScript (ES6)
* Context API
* CSS

## Project Structure

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── StudentProfile.jsx
│   ├── CourseDetails.jsx
│   ├── StudentForm.jsx
│   └── Footer.jsx
│
├── context
│   └── StudentContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Concepts Covered

* React Components
* createContext()
* Context.Provider
* useContext()
* useState()
* Event Handling
* Form Handling
* Global State Management
* Conditional Rendering
* Theme Toggle

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project folder

```bash
cd react-context-api
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local development URL shown in the terminal to view the application in your browser.

## Learning Outcomes

Through this project, I learned how to:

* Create and use React Context for sharing global data.
* Avoid prop drilling by accessing data directly with useContext().
* Manage application state using useState().
* Build reusable React components.
* Handle form inputs and update shared state.
* Implement a light and dark theme using Context API.
* Organize a React project with a clean folder structure.

## Future Improvements

* Store student data using Local Storage.
* Add multiple student records.
* Add edit and delete functionality.
* Improve responsiveness for mobile devices.
* Add validation for the update form.

