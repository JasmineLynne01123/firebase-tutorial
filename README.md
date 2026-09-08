# Firebase Tutorial

A Vite + React starter wired up with Firebase (Firestore), built as a hands-on learning project.

## Getting Started

1. Clone the repo and install dependencies:

   ```bash
   git clone https://github.com/JasmineLynne01123/firebase-tutorial.git
   cd firebase-tutorial
   npm install
   ```

2. Copy `.env.dist` to `.env` and fill in your own Firebase project's config (find these values in the Firebase console under Project Settings):

   ```bash
   cp .env.dist .env
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

## About the Template

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
