# [Dimm's website](https://dimm.co) made with Astro

This is the repository for my personal website hosted at [dimm.co](https://dimm.co), built with [Astro](https://astro.build/).

## ⚙️ Used Technologies

This project uses the following technologies:

- [Astro](https://astro.build/) &mdash; All-in-one web framework for building fast, content-focused websites.
- [TypeScript](https://www.typescriptlang.org/) &mdash; Typed superset of JavaScript that compiles to plain JavaScript.
- [ESLint](https://eslint.org/) &mdash; Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Prettier](https://prettier.io/) &mdash; Opinionated code formatter that enforces a consistent style.

## 📁 Project Structure

```text
/
├── public/               # Static assets like images, fonts, etc.
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Layout components for different page structures
│   └── pages/            # Page components, each representing a route
├── astro.config.ts       # Astro configuration file
├── tailwind.config.ts    # Tailwind CSS configuration file
├── tsconfig.json         # TypeScript configuration file
├── package.json          # Project metadata and dependencies
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page corresponds to a route based on its file name.

## 🛠 Commands

| Command       | Action                                  |
| :------------ | :-------------------------------------- |
| `bun install` | Installs dependencies                   |
| `bun dev`     | Starts the development server           |
| `bun build`   | Builds the production site to `./dist/` |
| `bun preview` | Previews the production build locally   |
| `bun lint`    | Lints the code with ESLint              |
