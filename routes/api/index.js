const express = require('express');
const Person = require('../../services/person');

const router = express.Router();

router.get('/persons', (req, res) => res.json(Person.getPersons()));

router.get('/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  return res.json(Person.getPerson(id));
});

router.delete('/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  Person.deletePerson(id);

  return res.status(204).end();
});

router.post('/persons/', (req, res) => {
  const id = Math.round(Math.random() * 10000000000000000);
  const person = req.body;

  if (!person.number) {
    return res.status(400).json({
      error: 'Person must contain a number',
    });
  }

  if (Person.findByName(person.name).length > 0) {
    return res.status(400).json({
      error: 'Name already in Phonebook',
    });
  }

  person.id = id;
  Person.addPerson(person);

  return res.json(person);
});

module.exports = router;
