const Person = require('../models/person');

exports.getPersons = () => {
  console.log('Fetching phonebook');
  return Person.find({}).then((result) => result);
};

exports.findById = (id) => Person.findById(id)
  .then((person) => person);

exports.deletePerson = (id) => {
  console.log(`Deleting ${id}`);
  return Person.findByIdAndDelete(id);
};

exports.addPerson = (person) => {
  const newPerson = new Person(person);
  return newPerson.save()
    .then((result) => result)
    .catch((error) => error);
};

exports.savePerson = (person) => {
  const personToSave = new Person(person);
  return personToSave.save()
    .then((savedPerson) => savedPerson);
};

exports.updatePerson = (person) => {
  return Person.findByIdAndUpdate(person.id, { number: person.number })
    .then((updatedPerson) => updatedPerson);
};

exports.findByName = (name) => Person.find({ name }).then((person) => person);
