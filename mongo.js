const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give commands as per format: password person number');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://db-user0:${password}@phonebook-cbtnt.mongodb.net/person?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  lastModified: Date,
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 3) {
  console.log('Phonebook:');
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
    process.exit(1);
  });
}

const name = process.argv[3];
const number = process.argv[4];

const person = new Person({
  name, number,
});

person.save().then((res) => {
  console.log('Person saved!');
  mongoose.connection.close();
});
