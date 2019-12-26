const Person = require('../models/person');

exports.getPersons = () => {
  console.log('Fetching phonebook');
  return Person.find({})
    .then((result) => result);
};

exports.findById = (id) => Person.findById(id)
  .then((person) => person);

exports.deletePerson = (id) => {
  console.log(`Deleting ${id}`);
  return Person.findByIdAndDelete(id);
};
exports.savePerson = (person) => {
  const personToSave = new Person(person);
  return personToSave.save()
    .then((savedPerson) => savedPerson);
};

exports.updatePerson = (person) => Person.findByIdAndUpdate(person.id, { number: person.number })
  .then((updatedPerson) => {
    if (updatedPerson) {
      return updatedPerson;
    }
    const err = new Error();
    err.message = 'Person not found';
    err.status = 400;
    throw err;
  });

exports.findByName = (name) => Person.find({ name })
  .then((person) => person);
