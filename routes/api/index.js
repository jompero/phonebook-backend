const express = require('express');
const Person = require('../../services/person');

const router = express.Router();

router.get('/persons', (req, res) => {
  Person.getPersons().then((persons) => res.json(persons));
});

router.get('/persons/:id', (req, res, next) => {
  const { id } = req.params;
  Person.findById(id)
    .then((person) => res.json(person))
    .catch((error) => next(error));
});

router.delete('/persons/:id', (req, res, next) => {
  const { id } = req.params;
  Person.deletePerson(id)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
});

// eslint-disable-next-line consistent-return
router.post('/persons/', (req, res, next) => {
  const person = req.body;

  Person.savePerson(person)
    .then((newPerson) => res.json(newPerson))
    .catch((error) => {
      next(error);
    });
});

router.put('/persons/:id', (req, res, next) => {
  const updatedPerson = req.body;

  Person.updatePerson(updatedPerson)
    .then((person) => res.json(person))
    .catch((error) => next(error));
});

module.exports = router;
