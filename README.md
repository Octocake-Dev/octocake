<p align="center">
  <a href="https://github.com/Octocake-Dev/octocake/">
    <img src="./client/public/desktop-logo.svg" alt="Octocake logo" width="300" />
  </a>
</p>

<div align="center">

<a href="https://octocake.netlify.app">Website</a>
·
<a href="https://github.com/Octocake-Dev/octocake/issues">Report Bug</a>
·
<a href="https://github.com/Octocake-Dev/octocake/issues">Request Feature</a>

</div>

<div align="center">

[![CodeFactor](https://www.codefactor.io/repository/github/octocake-dev/octocake/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/octocake-dev/octocake)
[![MIT License](https://img.shields.io/github/license/Octocake-Dev/octocake?color=blue&style=for-the-badge)](https://github.com/Octocake-Dev/octocake/blob/main/LICENSE)
[![Stargazers](https://img.shields.io/github/stars/Octocake-Dev/octocake?style=for-the-badge)](https://github.com/Octocake-Dev/octocake/stargazers)
[![Forks](https://img.shields.io/github/forks/Octocake-Dev/octocake?style=for-the-badge)](https://github.com/Octocake-Dev/octocake/network/members)

</div>

> **PRODUCTION ISSUE**: Authentication is not working because of cookies domain, The back-end and the front-end does not have the same domain.

## About The Project

The idea still not clear enough to talk about it.

### Built With

- [TypeScript](https://www.typescriptlang.org/)

#### client

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Headless-UI](https://headlessui.dev/)
- [Octocake-UI](https://www.npmjs.com/package/octocake-ui)
- [Next Themes](https://github.com/pacocoursey/next-themes)
- [Next SEO](https://github.com/garmeeh/next-seo)
- [Zustand](https://github.com/pmndrs/zustand)
- [Axios](https://github.com/axios/axios)
- [React Query](https://react-query.tanstack.com/)
- [React Hook Form](http://react-hook-form.com/)
- [DayJS](https://day.js.org/)

#### server

- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [passport](https://www.passportjs.org/)

### Features

The idea still not clear enough to talk about the features.

## Getting Started

First, Install project dependencies:

at project root:

```bash
yarn
```

### Setup the client

Inside client folder

```bash
cp .env.example .env
```

### Setup the server

Inside server folder

```bash
cp .env.example .env
```

Then fill environment variables:

```bash
# Get "256-bit WEP Key" from https://randomkeygen.com/
JWT_KEY=YOUR_JWT_KEY

# Create a local postgresql db
DATABASE_URL=LOCAL_POSTGRESQL_DB_URL
```

You can simply get `GITHUB_ID` and `GITHUB_SECRET` by [creating a github oauth app](https://github.com/settings/applications/new), You can follow [github docs](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) if you don't know how.

```bash
GITHUB_ID=YOUR_GITHUB_CLIENT_ID
GITHUB_SECRET=YOUR_GITHUB_CLIENT_SECRET
```

### Run the project

at project root:

Start client development server

```bash
yarn client:dev
```

Start server development server

```bash
yarn server:dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/Octocake-Dev/octocake/blob/main/LICENSE) for more information.
