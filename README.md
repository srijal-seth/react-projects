# React Projects

This repository contains eight small React projects built while exploring React, state management, context, and common UI patterns. Most projects use Vite, React, and Tailwind CSS; individual project folders contain their own source code and npm scripts.

## Projects

### 01 — Password Generator

A configurable password generator. Choose a password length, optionally include numbers and special characters, generate a password, and copy it to the clipboard.

**Concepts:** React state, effects, memoized callbacks, refs, and the Clipboard API.

**Folder:** [`01-react-project`](./01-react-project)

### 02 — Background Color Switcher

A full-page color switcher with buttons that update the page background color.

**Concepts:** React state, event handlers, inline styles, and Tailwind CSS.

**Folder:** [`02-react-project`](./02-react-project)

### 03 — Currency Converter

A currency conversion interface with source and destination currency selectors, an amount input, a swap action, and a conversion button. Exchange-rate data is loaded through a custom hook.

**Concepts:** reusable components, controlled inputs, custom hooks, and API-driven data.

**Folder:** [`03-react-project`](./03-react-project)

### 04 — Context Login/Profile Demo

A small login and profile interface that shares user information between components using React Context.

**Concepts:** Context API, shared state, and provider-based component composition.

**Folder:** [`04-react-project`](./04-react-project)

### 05 — React Starter

A minimal React app scaffold. At present, the page displays a placeholder heading and is ready to be extended into a new project.

**Concepts:** basic React component structure and Vite setup.

**Folder:** [`05-react-project`](./05-react-project)

### 06 — Theme Switcher

A card-based interface with a control for switching between light and dark themes. The selected theme is applied to the document and shared through a context provider.

**Concepts:** Context API, state, effects, and theme-based styling.

**Folder:** [`06-react-project`](./06-react-project)

### 07 — Todo Manager

A todo list that supports adding, editing, deleting, and completing tasks. Todos are saved in browser local storage and restored when the app reloads.

**Concepts:** React Context, state updates, effects, and local storage persistence.

**Folder:** [`07-react-project`](./07-react-project)

### 08 — Redux Todo App

A todo list with an add form and individual remove controls. Todo state and actions are managed with Redux Toolkit and React Redux.

**Concepts:** Redux store configuration, slices, actions, selectors, and dispatching.

**Folder:** [`08-react-project`](./08-react-project)

## Running a project

Each project is a separate Vite app. In a terminal, change into the desired project folder, install its dependencies, and start the development server:

```sh
cd 08-react-project
npm install
npm run dev
```

Replace `08-react-project` with the folder name of the project you want to run. Each project also provides these scripts:

- `npm run build` — create a production build in `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint.
