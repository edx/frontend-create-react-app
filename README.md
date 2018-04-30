<p align="center">Build your <b><a href="https://rollupjs.org/guide">rollup.js</a></b> boilerplate in seconds.</p>
<p align="center">
 <a href="https://travis-ci.org/adamstankiewicz/create-edx-app">
  <img src="https://travis-ci.org/adamstankiewicz/create-edx-app.svg?branch=master" alt="build-status"></img>
 </a>
 <a href="https://www.npmjs.com/package/@adamstankiewicz/create-edx-app">
  <img src="https://img.shields.io/npm/v/@adamstankiewicz/create-edx-app.svg" alt="npm-version"></img>
 </a>
 <a href="https://www.npmjs.com/package/@adamstankiewicz/create-edx-app">
  <img src="https://img.shields.io/npm/dt/@adamstankiewicz/create-edx-app.svg" alt="npm-total-downloads"></img>
 </a>
</p>

<p align="center">🥝  🍋  🍐  🍓  🍊  🍍  🍰  🍒  🍈  🍇  🍉  🍏  🍎  🍌</p>

* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [Configuration Options](#configuration-option)
  * [Node](#node)
  * [React](#react)
  * [`commitlint`](#commitlint)
  * [`semantic-release`](#semantic-release)

## Introduction

Two of the most-popular libraries used to bundle JavaScript are [`rollup`](https://rollupjs.org/guide) and [`webpack`](https://webpack.js.org).

[The general consensus](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c) is that `rollup` should be used for building libraries and `webpack` should be used for building applications.

This is because [`webpack` comes with features like hot module reloading (which has obvious benefits for applications) while `rollup` "scope hoists", which guarantees smaller bundles than `webpack`](https://stackoverflow.com/a/43255948/5225575).

However, there is a decent amount of boilerplate associated with configuring a baseline `rollup` library (`.eslintrc`, `travis.yml`, `.babelrc`, `jest`, etc.).

`fruit` aims to generate `rollup` library boilerplate (using some preferred configuration options) so that you can start building your library right away.

## Installation

```bash
npm install @adamstankiewicz/create-edx-app --global
```

## Usage

Execute `create-edx-app` via the command line and then follow the configuration options.
