# 📋 React Forms Exercises

> A repository containing two React form-based apps: **Color Box Maker** and **Todo App**—each with full test coverage (smoke, snapshot, and business logic tests).

[![React](https://img.shields.io/badge/react-18%2B-blue)](https://reactjs.org/) [![Testing](https://img.shields.io/badge/testing-Jest%20%26%20React%20Testing%20Library-brightgreen)](https://testing-library.com/)

---

## 📋 Table of Contents

1. [About](#about)  
2. [Projects](#projects)  
   - [Color Box Maker](#color-box-maker)  
   - [Todo App](#todo-app)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
5. [Usage](#usage)  
6. [Testing](#testing)  
7. [Contributing](#contributing)  
8. [Contact](#contact)  

---

## 🌟 About

This repo contains two React form-based exercises designed to practice controlled components, state management, and testing:

- **Color Box Maker**: Build and remove colored boxes via a form.  
- **Todo App**: Create, list, and remove todo items.

Both apps include smoke & snapshot tests for every component, plus business logic tests for form submissions and list updates.

---

## 📁 Projects

### 🎨 Color Box Maker

- **App** renders **BoxList**.  
- **BoxList** holds box state, renders each **Box** and the **NewBoxForm**.  
- **NewBoxForm** collects `width`, `height`, and `backgroundColor` inputs, creates a new box on submit, then clears inputs.  
- Each **Box** displays a colored `<div>` with an “X” button to remove itself.

### 📝 Todo App

- **App** renders **TodoList**.  
- **TodoList** holds todo state, renders each **Todo** and the **NewTodoForm**.  
- **NewTodoForm** collects a single `task` input, creates a new todo on submit, then clears the input.  
- Each **Todo** displays its task in a `<div>` with an “X” button to remove itself.

---

## 🛠 Tech Stack

- **Framework:** React 18+ (Create React App)  
- **Forms:** Controlled components with `useState`  
- **Testing:** Jest, React Testing Library  
- **Styling:** CSS  
- **Tooling:** ESLint, Prettier  

---

## 🏁 Getting Started

### Prerequisites

- Node.js v14 or higher  
- npm (bundled with Node.js) or Yarn  

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/malmonte827/React_Forms_Exercises.git
cd React_Forms_Exercises

# 2. Install dependencies
npm install
# or
yarn
```
---
### 📖 Usage

```bash
# To start both apps in development mode
npm start
# or
yarn start
```
- Color Box Maker runs at http://localhost:3000/ (default).
- Todo App runs at http://localhost:3001/ if configured with a second port or via separate scripts—see each folder’s README for details.
---
### 🧪 Testing
```bash
# Run all tests (both apps)
npm test
# or
yarn test

```
- Includes smoke tests, snapshot tests, and business-logic tests for:

    - Form input handling

    - Adding/removing boxes and todos

    - State updates reflected in the DOM
## Contributing

We welcome contributions! To contribute:

- Fork the repository

- Create a new branch (git checkout -b feature-name)

- Commit your changes (git commit -m 'Add new feature')

- Push to the branch (git push origin feature-name)

- Open a pull request

## Contact

For questions or suggestions, reach out:

- Email: malmonte827@gmail.com
