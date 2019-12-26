const express = require('express');
const Person = require('../services/person');

const router = express.Router();

router.get('/info', (req, res, next) => {
  Person.getPersons()
    .then((persons) => {
      res.send(`<div>Phonebook has info for ${persons.length} people</div>`
      + `<div>${Date()}</div>`);
    })
    .catch((error) => next(error));
});

module.exports = router;
