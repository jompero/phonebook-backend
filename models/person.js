/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const url = process.env.DB_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.log);

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
  },
  number: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: (num) => /^\d+[^a-zA-Z]+$/.test(num),
      message: (props) => `${props.value} is not a valid phone number! Number must start with a number and not contain alphabets.`,
    },
  },
},
{ timestamps: true });

personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
