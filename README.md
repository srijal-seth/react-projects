# React Projects

This repository contains nine independent React projects built with Vite. They progress from React fundamentals and browser APIs to Context, Redux Toolkit, and Appwrite-backed application patterns.

## Projects

| Project | Description | Main concepts |
| --- | --- | --- |
| [01 — Password Generator](./01-react-project) | Generates configurable passwords and copies them to the clipboard. | State, effects, callbacks, refs, and browser APIs |
| [02 — Background Color Switcher](./02-react-project) | Changes the page background through color controls. | State, inline styles, and event handling |
| [03 — Currency Converter](./03-react-project) | Converts amounts between currencies using exchange-rate data. | Reusable components, controlled inputs, custom hooks, and API requests |
| [04 — Context Login/Profile Demo](./04-react-project) | Shares user data between login and profile components. | Context API, providers, and composition |
| [05 — React Starter](./05-react-project) | Minimal Vite + React foundation for experimentation. | React structure and app bootstrapping |
| [06 — Theme Switcher](./06-react-project) | Switches between light and dark themes. | Context, theme state, and document-level classes |
| [07 — Todo Manager](./07-react-project) | Creates, edits, deletes, and persists todos locally. | Context, state management, effects, and localStorage |
| [08 — Redux Todo App](./08-react-project) | Manages todo state with Redux Toolkit. | Slices, actions, dispatch, selectors, and Redux store setup |
| [09 — Appwrite Application Starter](./09-react-project) | Application foundation with authentication, Redux auth state, reusable form components, and Appwrite data/storage service modules. | Appwrite, Redux Toolkit, React Hook Form, Tailwind CSS, and routing patterns |

## Running a project

Each project is a separate Vite app with its own dependencies. From the project directory, install dependencies and start the development server:

```bash
cd 09-react-project
npm install
npm run dev
```

Replace `09-react-project` with the project you want to run. All projects provide these scripts:

- `npm run dev` — start the local development server
- `npm run build` — generate a production build in `dist/`
- `npm run preview` — preview the production app locally
- `npm run lint` — run ESLint checks

## Appwrite configuration

Project 09 reads its Appwrite settings from Vite environment variables. Create `09-react-project/.env` with values for your Appwrite endpoint, project, database, collection, and storage bucket:

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
```

Do not commit credentials or environment files containing private values.
