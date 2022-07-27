# react-webpack-MFE

# Architecture

<img src="docs/high level architecture - dependencies.png" width="1000">

# project directory

The project is developed using NPM v8.11 and native NPM workspaces.

## runtime-library

It is a low-level or basic app, which exposes libraries like `react`, `react-dom` and all internal packages like `@next/button` and `@next/tooltip` pulling them from an internal packages list.

It is a pure `remote`

## sample-mfe

It is a micro-frontend app, which depends on modules exposed from `runtime-library` : `react` ,`react-dom` `Button` and `Tooltip`. In the meantime, it also exposes a composition called `SampleMFE` to another app called `area-dashboard`.

It is both host and remote.

## nav

It is a micro-frontend app, which depends on modules exposed from `runtime-library` : `react` ,`react-dom` `@mui/material` and `@emotion`. In the meantime, it also exposes a composition called `Navigation` to all the pages.

It is both host and remote.

## area-dashboard

the top-level app, which depends on `runtime-library`, `sample-mfe` and `Navigation`.

It is a pure host.

## induct-dashboard

the top-level app, which depends on `runtime-library`, `sample-mfe` and `Navigation`.

It is a pure host.

## sorter-dashboard

the top-level app, which depends on `runtime-library`, `sample-mfe` and `Navigation`.

It is a pure host.

# how to use

requires: Node >= v16.15.1 

- `npm install`
- `npm run start`

after all the commands done, open your browser at `http://localhost:3002`, open the dev-tool's network tab to see resources loading details

visiting `http://localhost:3001` the `App.tsx` from the `sample-mfe` application will be served (which is a standalone version of the MFE)

visiting `http://localhost:3001` the `App.tsx` from the `sample-mfe` application will be served (which is a standalone version of the MFE)
visiting `http://localhost:3000` a folder with all the assets exposed by the `runtime_library` will be served.