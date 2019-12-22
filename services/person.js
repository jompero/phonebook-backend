const Person = {};

let persons = [
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2,
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3,
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4,
  },
  {
    name: 'Vieras Tieras',
    number: '234-345-567',
    id: 10,
  },
];

Person.getPersons = () => persons;

Person.getPerson = (id) => persons.find((person) => person.id === id);

Person.deletePerson = (id) => {
  persons = persons.filter((person) => person.id !== id);
};

Person.addPerson = (person) => {
  persons = persons.concat(person);
  return person;
};

Person.findByName = (name) => persons.filter((person) => person.name === name);

module.exports = Person;
