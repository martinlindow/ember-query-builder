# ember-query-builder

An EmberJS wrapper for [jQuery QueryBuilder](https://github.com/mistic100/jQuery-QueryBuilder)

[![Build Status](https://travis-ci.org/offirgolan/ember-query-builder.svg)](https://travis-ci.org/offirgolan/ember-query-builder)
[![npm version](https://badge.fury.io/js/ember-query-builder.svg)](http://badge.fury.io/js/ember-query-builder)
[![Code Climate](https://codeclimate.com/github/offirgolan/ember-query-builder/badges/gpa.svg)](https://codeclimate.com/github/offirgolan/ember-query-builder)
[![Test Coverage](https://codeclimate.com/github/offirgolan/ember-query-builder/badges/coverage.svg)](https://codeclimate.com/github/offirgolan/ember-query-builder/coverage)
[![Dependency Status](https://david-dm.org/offirgolan/ember-query-builder.svg)](https://david-dm.org/offirgolan/ember-query-builder)

## Features

- Supports all possible options
- Exposes QueryBuilder instance to allow direct interaction

## Installation

```
ember install ember-query-builder
```

## Helpful Links

- ### [Live Demo](http://offirgolan/.github.io/ember-query-builder)

- ### [Changelog](CHANGELOG.md)

## Looking for help?
If it is a bug [please open an issue on GitHub](http://github.com/offirgolan/ember-query-builder/issues).

## Usage

```hbs
{{query-builder rules=rules filters=filters plugins=plugins onChange=(action (mut queryBuilder))}}
```
