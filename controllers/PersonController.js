/**
 * The PersonController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PersonService');
const createperson = async (request, response) => {
  await Controller.handleRequest(request, response, service.createperson);
};

const deleteperson = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteperson);
};

const getAllperson = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllperson);
};

const getByParamsperson = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsperson);
};

const getperson = async (request, response) => {
  await Controller.handleRequest(request, response, service.getperson);
};

const updateperson = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateperson);
};


module.exports = {
  createperson,
  deleteperson,
  getAllperson,
  getByParamsperson,
  getperson,
  updateperson,
};
