const express = require('express');
const morgan = require('morgan');
const ProviderRoutes = require('../interfaces/routes/ProviderRoutes');

function config(app) {
  app.use(morgan('dev'));
  app.use(express.json());
  
  app.use('/api/v1/provider', ProviderRoutes);
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });
}

module.exports = config;
