/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Person } = require('../models/Person');

/**
* Creates the data
*
* person Person data to be created
* returns person
* */
const createperson = ({ person }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Person(person).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* personId String the Id parameter
* no response value expected for this operation
* */
const deleteperson = ({ personId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Person.findOneAndDelete({ _id:personId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllperson = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Person.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamsperson = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Person.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* personId String the Id parameter
* returns person
* */
const getperson = ({ personId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Person.findById(personId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* personId String the Id parameter
* person Person data to be updated (optional)
* returns person
* */
const updateperson = ({ personId, person }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Person.findOneAndUpdate({ _id:personId },person).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createperson,
  deleteperson,
  getAllperson,
  getByParamsperson,
  getperson,
  updateperson,
};
