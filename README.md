<p align="center">
 <a href="https://travis-ci.org/edx/create-edx-react-app">
  <img src="https://travis-ci.org/edx/create-edx-react-app.svg?branch=master" alt="build-status"></img>
 </a>
 <a href="https://www.npmjs.com/package/@edx/create-edx-react-app">
  <img src="https://img.shields.io/npm/v/@edx/create-edx-react-app.svg" alt="npm-version"></img>
 </a>
 <a href="https://www.npmjs.com/package/@edx/create-edx-react-app">
  <img src="https://img.shields.io/npm/dt/@edx/create-edx-react-app.svg" alt="npm-total-downloads"></img>
 </a>
</p>

<p align="center">🍪  🍪  🍪</p>

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

`create-edx-react-app` simplifies the creation of new front-end applications at edX by providing a CLI to generate a new instance of the [edX front-end cookie cutter](https://github.com/edx/front-end-cookie-cutter-application).

## Installation

```bash
npm install @edx/create-edx-react-app --global
```

## Usage

Execute `create-edx-react-app` via the command line and then follow the configuration options.

![configuration-options](https://imgur.com/R2h8qL1.png)

The outputted starter application should look like

```text
├── Dockerfile
├── LICENSE
├── Makefile
├── config
|  ├── webpack.common.config.js
|  ├── webpack.dev.config.js
|  └── webpack.prod.config.js
├── docker-compose.yml
├── package-lock.json
├── package.json
├── public
|  └── index.html
└── src
   ├── App.scss
   ├── components
   |  ├── CommentDetails
   |  |  └── index.jsx
   |  ├── CommentSearch
   |  |  └── index.jsx
   |  └── ToggleablePosts
   |     ├── ToggleablePosts.test.jsx
   |     └── index.jsx
   ├── containers
   |  ├── CommentSearchPage
   |  |  └── index.jsx
   |  ├── DisclosurePage
   |  |  ├── DisclosurePage.scss
   |  |  ├── DisclosurePage.test.jsx
   |  |  └── index.jsx
   |  └── PostsPage
   |     └── index.jsx
   ├── data
   |  ├── actions
   |  |  ├── comment.js
   |  |  ├── posts.js
   |  |  └── posts.test.js
   |  ├── constants
   |  |  └── actionTypes
   |  ├── reducers
   |  |  ├── comment.js
   |  |  ├── index.js
   |  |  ├── posts.js
   |  |  └── posts.test.js
   |  └── store.js
   ├── index.jsx
   └── setupTest.js
```

To start the application run

```bash
make up
```

This will spin up the Docker container for the new web application.

You should see something like

![example](https://imgur.com/12GXurn.png)

on port `1991`.

At this point, the new web application should mirror the [`edx/front-end-cookie-cutter-application`](https://github.com/edx/front-end-cookie-cutter-application).
