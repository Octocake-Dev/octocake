# Contributing

Issues and Pull Requests are welcome. Please follow the issue templates that are already configured.

## Submitting issues

There are different issue types according to the thing you want to report. Please adjust to that format unless you have a strong reason not to. If submitting bugs, it would be awesome if you include a minimal example demonstrating the problem, like a small test or suite.

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
