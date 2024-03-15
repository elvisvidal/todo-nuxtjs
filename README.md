# TODO Vue + Nuxt

With the evolution of the internet and its various tools, I often find myself learning much easier with a hands-on approach, gradually increasing the difficulty with chunks of functionality and complexity.

Despite the simplicity of a todo app, it is a great first project to implement:

- **Simple well-known interface**: Common UX.
- **Basic UI components** Powered with CSS framework: [TailwindCSS](https://tailwindcss.com/).
- **Simple navigation**: List page and Edit page.
- **CRUD operations**: Create, read, update, delete.
- **API response handling**: Success and error.
- **ORM**: using Prisma to abstract database interactions.
- **Continuous Integration (CI)**: Utilizes GitHub Actions to automate the testing and deployment pipeline.
- **End-to-end and Component tests**: combining Cypress and Vitest.

![NuxtJS](https://img.shields.io/badge/-Nuxt.js-00DC82?style=flat-square&logo=nuxt.js) ![Vue.js](https://img.shields.io/badge/-Vue.js-4FC08D?style=flat-square&logo=vue.js) ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css) ![Vitest](https://img.shields.io/badge/-Vitest-4FC08D?style=flat-square&logo=vitest) ![Cypress](https://img.shields.io/badge/-Cypress-17202C?style=flat-square&logo=cypress) ![Prisma](https://img.shields.io/badge/-Prisma-3982CE?style=flat-square&logo=prisma) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript) ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite)

## Other Implementations

- [React + Next](https://github.com/elvisvidal/todo-nextjs)
- [AnalogJS (Angular)](https://github.com/elvisvidal/todo-analogjs)

---

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 🛠 Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Configure your `.env` file according to the provided `.env.example` to set up your database.

## 💽 Database Migrations

Execute `npx prisma migrate dev` to apply database migrations.

You can run `npx prisma studio` to watch updates on your database with [Prisma](https://www.prisma.io/).

## 💻 Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## 🏗 Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 🧪 Test

Run `npm run test` to execute unit tests with [Vitest](https://vitest.dev).

Or you can run `npx cypress open` to execute end to end tests with [Cypress](https://www.cypress.io/).
