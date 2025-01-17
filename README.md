# MLModelScope Frontend

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (== 14.21.3 is the confirmed working version)
    - It is recommended to use [nvm](https://github.com/nvm-sh/nvm#intro) to manage your Node.js versions across
      multiple projects
- [Docker](https://docs.docker.com/get-docker/) (latest version)
  and [Docker Compose](https://docs.docker.com/compose/install/) (latest version)
    - Docker is used to run the backend services (e.g. database, MLModelScope server) locally
    - Run the compose file found in the corresponding API repository in order to start the backend services for use in
      local development (https://github.com/c3sr/mlmodelscope-api)

### First-time setup

1. Install dependencies

    ```bash
    npm install
    ```

2. Copy `.env.example` to `.env`. The default values in `.env.example` should be suitable for local development.

    ```bash
    cp .env.example .env
    ```

### Running the app

In order to run the app completely, make sure the backend services are running (see Prerequisites above), then run the
following command:

```bash
npm start
```

This will start the frontend app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in
the browser.

### Running storybook

Storybook is a tool for developing UI components in isolation. It is useful for developing and testing components.
Additionally, there is a storybook deployment that is automatically updated when the `develop` branch is updated. The
storybook deployment can be found [here](http://storybook.mlmodelscope.org).

To run storybook locally, run the following command:

```bash
npm run storybook
```

This will start storybook in development mode. Open [http://localhost:6006](http://localhost:6006) to view it in the
browser.

### Running tests

To run the unit tests inside the terminal, run the following command:

```bash
npm test
```

In addition, most IDEs have a way to run tests from within the IDE. Refer to your IDE's documentation for more
information on how to run Jest tests.

## Project Structure

The project is structured as follows:

- `src/` - Contains the source code for the frontend app
    - `components/` - Where the components for each of the pages reside. Subfolders within this folder are grouped by
      individual pages that are displayed on the website. Note that the React component (.js[x]), styles (.scss), and
      associated React hooks (use[*].js) will always be found within the same directory.
    - `resources/` - Contains the resources (e.g. images, icons, etc.) used by the frontend app
    - `/router/` - Contains page routes. Any new pages to the website are added through the routes array
      in `router/config.js`
    - `/routes/` - Contains any wrapper components for specific page routes (for example, different wrappers for the
      model listing page for whether it is in "add mode" or "list mode"
    - `/helpers/` - Contains helper functions and classes that are used throughout the frontend app
- `/public/` - Contains the public assets for the frontend app (e.g. favicon, index.html, etc.)
- `/.storybook/` - Contains the configuration for storybook
- `/scripts/` - Contains scripts that are used for development and deployment

## Recommended Workflow for creating new components

Create a new folder in `src/components/` with the name of the component, and create the following files as needed:

- `[ComponentName].jsx` - The main React component
- `[ComponentName].scss` - The styles for the component
    - Note that any new stylesheets should also be imported into `src/Stopgap.scss`
- `use[*].js` - Any React hooks that are used by the component
- `[ComponentName].stories.jsx` - The storybook stories for the component
- `[ComponentName].test.jsx` - The unit tests for the component
- `use[*].test.js` - The unit tests for the React hooks

### Writing tests for UI components

This project uses [Enzyme](https://enzymejs.github.io/enzyme/) for testing React components. Enzyme is a testing utility
for React that makes it easier to test React components. It is recommended to use Enzyme's shallow rendering API to test
components. Shallow rendering is useful for testing components in isolation, and it is recommended to use shallow
rendering for unit tests. For more information on shallow rendering, refer to
the [Enzyme documentation](https://enzymejs.github.io/enzyme/docs/api/shallow.html). Note that due to some shortcomings
in Enzyme's ability to test React hooks, it is recommended to use
the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React hooks.

### Project Wiki

https://wiki.mlmodelscope.org
