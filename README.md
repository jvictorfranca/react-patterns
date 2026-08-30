React Patterns

A practical collection of React patterns, techniques, and examples.

This project was created for studying and experimenting with different approaches to building React applications, including component patterns, custom hooks, performance optimization, forms, and routing.

🚀 Getting Started
Prerequisites

Make sure you have the following installed:

Node.js
npm

You can check your installed versions with:

node -v
npm -v

Installation

Clone the repository:

git clone <repository-url>


Navigate to the project directory:

cd <project-folder>


Install the dependencies:

npm install

Start the Development Server

Run:

npm run dev


Vite will start the development server. Open the URL shown in your terminal, usually:

http://localhost:5173

🛠️ Technologies

This project uses:

React — UI development
Vite — Development server and build tool
React Router DOM — Client-side routing
CSS — Styling and layouts
JavaScript / JSX — Application logic
📦 Dependencies

Main dependencies:

{
  "react": "...",
  "react-dom": "...",
  "react-router-dom": "..."
}


Development tooling is provided by Vite and its React plugin.

To see the exact versions currently installed, check package.json.

📚 Project Content

The application is organized into different sections, each focused on a specific React concept.

🧩 Component Patterns

Examples of reusable component design patterns:

Compound Components
Function as Children
Higher-Order Components
Prop Collections
State Reducer

Path:

/component-patterns

🪝 Custom Hooks

Examples of creating and reusing custom hooks:

Custom Hook Example
useForm

Path:

/custom-hooks

⚡ Performance Patterns

Examples of React performance optimization techniques:

Lazy Loading
React Memo
useCallback
useMemo
Virtualization

Path:

/performance-patterns

📝 React Hook Form

Examples using React Hook Form:

Hook Form
Hook Form - Reusing Inputs

Path:

/react-hook-form

🧭 React Router DOM

Examples related to client-side routing:

Search Params

Path:

/react-router-dom

🗂️ Project Structure

The project follows a feature-oriented structure:

src/
├── components/
│   └── layout/
│       ├── Home.jsx
│       ├── Home.css
│       ├── Layout.jsx
│       ├── Navbar.jsx
│       └── NotFound.jsx
│
├── patterns/
│   ├── component-patterns/
│   │   ├── ComponentPatterns.jsx
│   │   ├── compound-components/
│   │   ├── function-as-children/
│   │   ├── high-order-components/
│   │   ├── prop-collections/
│   │   └── state-reducer/
│   │
│   ├── custom-hooks/
│   │   ├── CustomHooks.jsx
│   │   ├── custom-hook-example/
│   │   └── use-form/
│   │
│   ├── performance-patterns/
│   │   ├── PerformancePatterns.jsx
│   │   ├── lazy-loading/
│   │   ├── react-memo/
│   │   ├── usecallback/
│   │   ├── usememo/
│   │   └── virtualization/
│   │
│   ├── react-hook-form/
│   │   ├── ReactHookForm.jsx
│   │   ├── hook-form/
│   │   └── hook-form-reusing-inputs/
│   │
│   └── react-router-dom/
│       ├── ReactRouterDom.jsx
│       └── search-params/
│
├── App.jsx
├── App.css
└── main.jsx

🧭 Routing

The application uses nested routes with React Router DOM.

The main sections are available at:

Section	Route
Home	/
Component Patterns	/component-patterns
Custom Hooks	/custom-hooks
Performance Patterns	/performance-patterns
React Hook Form	/react-hook-form
React Router DOM	/react-router-dom

Each section contains links to its specific examples.

🏗️ Available Scripts
Development

Start the Vite development server:

npm run dev

Build

Create a production build:

npm run build

Preview

Preview the production build locally:

npm run preview

Lint

Run ESLint:

npm run lint

🎯 Purpose

The main goal of this project is to provide a hands-on environment for learning and practicing React patterns.

Each example is intentionally isolated