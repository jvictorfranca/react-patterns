# React Patterns

A practical collection of React patterns, techniques, and examples.

This project was created for studying and experimenting with different approaches to building React applications, including component patterns, custom hooks, performance optimization, forms, validation, and routing.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

You can check your installed versions with:

```bash
node -v
npm -v
```

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd <project-folder>
```

Install the dependencies:

```bash
npm install
```

### Start the Development Server

Run:

```bash
npm run dev
```

Vite will start the development server. Open the URL shown in your terminal, usually:

```text
http://localhost:5173
```

---

## 🛠️ Technologies

This project uses:

- **React 19** — UI development
- **Vite** — Development server and build tool
- **React Router DOM** — Client-side routing
- **React Hook Form** — Form state management and handling
- **Yup** — Schema-based form validation
- **React Hook Form Resolvers** — Integration between React Hook Form and validation libraries
- **React Virtualized** — Efficient rendering of large lists
- **Tailwind CSS** — Utility-first CSS framework
- **JavaScript / JSX** — Application logic
- **ESLint** — Code quality and linting

---

## 📦 Dependencies

### Main Dependencies

```json
{
  "@hookform/resolvers": "^5.9.1",
  "@tailwindcss/vite": "^4.3.3",
  "react": "^19.2.8",
  "react-dom": "^19.2.8",
  "react-hook-form": "^7.87.0",
  "react-router-dom": "^7.18.3",
  "react-virtualized": "^9.22.6",
  "tailwindcss": "^4.3.3",
  "yup": "^1.7.1"
}
```

### Development Dependencies

```json
{
  "@eslint/js": "^10.0.1",
  "@types/react": "^19.2.18",
  "@types/react-dom": "^19.2.4",
  "@vitejs/plugin-react": "^6.1.0",
  "eslint": "^10.9.0",
  "eslint-plugin-react-hooks": "^7.1.1",
  "eslint-plugin-react-refresh": "^0.5.4",
  "globals": "^17.11.0",
  "vite": "^8.2.2"
}
```

The versions above reflect the dependencies currently defined in `package.json`.

---

## 📚 Project Content

The application is organized into different sections, each focused on a specific React concept.

### 🧩 Component Patterns

Examples of reusable component design patterns:

- Compound Components
- Function as Children
- Higher-Order Components
- Prop Collections
- State Reducer

Path:

`/component-patterns`

### 🪝 Custom Hooks

Examples of creating and reusing custom hooks:

- Custom Hook Example
- Network Status Hook
- useForm

Path:

`/custom-hooks`

### ⚡ Performance Patterns

Examples of React performance optimization techniques:

- Lazy Loading
- React.memo
- useCallback
- useMemo
- Virtualization

Path:

`/performance-patterns`

These examples demonstrate techniques for reducing unnecessary renders, memoizing values and functions, loading components on demand, and efficiently handling large lists.

### 📝 React Hook Form

Examples using React Hook Form and form validation:

- React Hook Form
- React Hook Form + Yup
- React Hook Form + Yup + Reusable Inputs

Path:

`/react-hook-form`

The examples progressively introduce form concepts, starting with basic form handling and moving toward schema validation and reusable input components.

### 🧭 React Router DOM

Examples related to client-side routing:

- Nested Routes
- Dynamic Route Parameters
- Search Params
- Product Details

Path:

`/react-router-dom`

The routing examples demonstrate concepts such as nested routes, dynamic URL parameters, links, and URL search parameters.

---

## 🗂️ Project Structure

The project follows a feature-oriented structure:

```text
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
│   │   ├── hook-yup-form/
│   │   └── hook-yup-form-reusing-inputs/
│   │
│   └── react-router-dom/
│       ├── ReactRouterDom.jsx
│       └── search-params/
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🧭 Routing

The application uses nested routes with React Router DOM.

The main sections are available at:

| Section | Route |
|---|---|
| Home | `/` |
| Component Patterns | `/component-patterns` |
| Custom Hooks | `/custom-hooks` |
| Performance Patterns | `/performance-patterns` |
| React Hook Form | `/react-hook-form` |
| React Router DOM | `/react-router-dom` |

Each section contains links to its specific examples.

### Component Patterns

- `/component-patterns/compound-components`
- `/component-patterns/function-as-children`
- `/component-patterns/high-order-components`
- `/component-patterns/prop-collections`
- `/component-patterns/state-reducer`

### Custom Hooks

- `/custom-hooks/custom-hook-example`
- `/custom-hooks/use-form`

### Performance Patterns

- `/performance-patterns/lazy-loading`
- `/performance-patterns/react-memo`
- `/performance-patterns/usecallback`
- `/performance-patterns/usememo`
- `/performance-patterns/virtualization`

### React Hook Form

- `/react-hook-form/hook-form`
- `/react-hook-form/hook-form-yup`
- `/react-hook-form/hook-form-yup-reusing-inputs`

### React Router DOM

- `/react-router-dom/search-params`
- `/react-router-dom/search-params/products/:id`

---

## 🏗️ Available Scripts

### Development

Start the Vite development server:

```bash
npm run dev
```

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

Run ESLint:

```bash
npm run lint
```

---

## 🎯 Purpose

The main goal of this project is to provide a hands-on environment for learning and practicing React patterns.

Each example is intentionally isolated so that individual concepts can be studied, modified, and tested without the complexity of a large production application.

The project focuses on understanding **why and when** different React techniques can be useful rather than simply implementing them.

---

## 🧠 Concepts Covered

Throughout the project, the following React concepts are explored:

- Component composition
- Compound Components
- Function as Children
- Higher-Order Components
- Prop Collections
- State Reducers
- Custom Hooks
- Hook-based state management
- React.memo
- useCallback
- useMemo
- Lazy Loading
- List Virtualization
- Form management
- Form validation
- Reusable form inputs
- URL parameters
- Search parameters
- Nested routes
- Dynamic routes
- React performance optimization

---

## 📌 Notes

This is primarily a learning and experimentation project.

The examples may intentionally contain simplified implementations, console logs, visual indicators, or artificial expensive operations to make specific React behaviors easier to observe and understand.

For example, performance-related examples may use the browser console to make re-renders and memoization behavior visible.

---

## 📄 License

This project is intended for educational and personal learning purposes.
