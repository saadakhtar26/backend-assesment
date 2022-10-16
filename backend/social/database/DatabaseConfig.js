const knex = require('knex');
const knexfile = require('./knexfile');
const { Model } = require('objection');

const initializeDB = async()=>{
	const db = knex(knexfile.development);
	Model.knex(db);
};

module.exports = initializeDB;