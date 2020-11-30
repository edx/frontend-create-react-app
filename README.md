# ⛔️ DEPRECATION WARNING
**This library is deprecated and archived.**
This repository has been archived and is no longer supported — use it at your own risk. This repository may depend on out-of-date libraries with security issues, and security updates will not be provided. Pull requests against this repository will also not be merged.

New frontend apps can be created by copying the [frontend-template-application](https://github.com/edx/frontend-template-application) using its "Use this template" button.  That repo contains instructions for how to customize the resulting repository to your needs.  Please contact @edx/fedx-team with any questions.



<p align="center">
 <a href="https://travis-ci.org/edx/frontend-create-react-app">
  <img src="https://travis-ci.org/edx/frontend-create-react-app.svg?branch=master" alt="build-status"></img>
 </a>
 <a href="https://www.npmjs.com/package/@edx/frontend-create-react-app">
  <img src="https://img.shields.io/npm/v/@edx/frontend-create-react-app.svg" alt="npm-version"></img>
 </a>
 <a href="https://www.npmjs.com/package/@edx/frontend-create-react-app">
  <img src="https://img.shields.io/npm/dt/@edx/frontend-create-react-app.svg" alt="npm-total-downloads"></img>
 </a>
</p>

<p align="center">🍪  🍪  🍪</p>

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

`frontend-create-react-app` simplifies the creation of new frontend applications at edX by providing a CLI to generate a new instance of the [edX frontend cookie cutter](https://github.com/edx/frontend-cookie-cutter-application).

## Installation

```bash
npm install @edx/frontend-create-react-app --global
```

## Usage

Execute `frontend-create-react-app` via the command line and then follow the configuration options.

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

At this point, the new web application should mirror the [`edx/frontend-cookie-cutter-application`](https://github.com/edx/frontend-cookie-cutter-application).
