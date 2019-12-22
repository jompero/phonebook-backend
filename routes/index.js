const express = require('express');
const Person = require('../services/person');

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/info');
});

router.get('/info', (req, res) => {
  res.send(`<div>Phonebook has info for ${Person.getPersons().length} people</div>`
  + `<div>${Date()}</div>`);
});

module.exports = router;
