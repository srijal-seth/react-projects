# React Projects

This repository contains nine small React projects built while learning React fundamentals, state management, context APIs, Redux, and Appwrite integration. Each project lives in its own Vite app and demonstrates a different concept or UI pattern.

## Projects

### 01 — Password Generator
A password generator with adjustable length, numeric toggle, special character toggle, and copy-to-clipboard support.

Concepts: React state, `useEffect`, `useCallback`, refs, and browser clipboard APIs.

Folder: [`01-react-project`](./01-react-project)

### 02 — Background Color Switcher
A full-screen color switcher that changes the page background when the user clicks a color button.

Concepts: state updates, inline styles, and UI interaction patterns.

Folder: [`02-react-project`](./02-react-project)

### 03 — Currency Converter
A currency converter that lets users enter an amount, choose source and target currencies, swap values, and convert using live exchange-rate data.

Concepts: reusable components, controlled inputs, custom hooks, and API-driven UI.

Folder: [`03-react-project`](./03-react-project)

### 04 — Context Login/Profile Demo
A small authentication-style demo using React Context to share user data between components.

Concepts: Context API, provider-based state sharing, and component composition.

Folder: [`04-react-project`](./04-react-project)

### 05 — React Starter
A simple starter app used as a minimal Vite + React foundation for experimenting with components and layout.

Concepts: basic React structure and app bootstrapping.

Folder: [`05-react-project`](./05-react-project)

### 06 — Theme Switcher
A theme toggle app that switches between light and dark modes using context and document-level class updates.

Concepts: context providers, theme state, and DOM styling updates.

Folder: [`06-react-project`](./06-react-project)

### 07 — Todo Manager
A todo application with create, update, delete, toggle-complete, and localStorage persistence.

Concepts: React context, state management, effects, and browser persistence.

Folder: [`07-react-project`](./07-react-project)

### 08 — Redux Todo App
A todo app built with Redux Toolkit and React Redux to manage state through actions and slices.

Concepts: Redux store setup, dispatching actions, selectors, and centralized state.

Folder: [`08-react-project`](./08-react-project)

### 09 — Appwrite Auth Starter
A React starter app prepared for Appwrite authentication and user session management with Redux-based auth state.

Concepts: Appwrite integration, auth state handling, Redux slices, and app shell layout.

Folder: [`09-react-project`](./09-react-project)

## Running a project

Each project is a separate Vite app. To run any app:

```bash
cd 09-react-project
npm install
npm run dev
```

Replace `09-react-project` with the name of the project you want to run. Common scripts for each app include:

- `npm run dev` — start the local development server
- `npm run build` — generate a production build in `dist/`
- `npm run preview` — preview the production app locally
- `npm run lint` — run ESLint checks
