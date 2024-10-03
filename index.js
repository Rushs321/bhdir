#!/usr/bin/env node
'use strict';
const params = require('./params');
const proxy = require('./proxy');
const app = require('express')();
app.enable('trust proxy');
app.get('/', params, proxy);
app.get('/favicon.ico', (req, res) => res.status(204).end());

module.exports = app;
