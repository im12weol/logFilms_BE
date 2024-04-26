require('dotenv').config();
const express = require('express');
const logger = require('morgan');

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0.d0spoq8.mongodb.net/`);
mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected');
});

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
