<p align="center">
  <a href="https://github.com/Octocake-Dev/octocake/">
    <img src="./client/public/desktop-logo.svg" alt="Octocake logo" width="300" />
  </a>
</p>

<div align="center">

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

## About The Project

The idea still not clear enough to talk about it.

### Built With

- [TypeScript](https://www.typescriptlang.org/)
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

### Features

The idea still not clear enough to talk about the features.

## Getting Started

First, Install the client and server dependencies:

client:

```bash
cd client && npm i
```

server:

```bash
cd server && npm i
```

### Setup the server

inside server folder:

```bash
cp .env.example .env
```

Then fill environment variables:

You can simply get `GITHUB_ID` and `GITHUB_SECRET` by [creating a github oauth app](https://github.com/settings/applications/new), You can follow [github docs](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) if you don't know how.

```bash
GITHUB_ID=YOUR_GITHUB_CLIENT_ID
GITHUB_SECRET=YOUR_GITHUB_CLIENT_SECRET
```

### Run the project

Run the development server:

inside server folder:

```bash
npm run build && npm run dev
```

Then inside client folder:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/Octocake-Dev/octocake/blob/main/LICENSE) for more information.
