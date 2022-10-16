const Tenant = require('../database/models/tenant');
const User = require('../database/models/user');

const getTenants = async(req, res) => {
	const tenant = await Tenant.query().findById();
	res.status(200).json(tenant);
};

const getUsers = async(req, res) => {
	const user = await User.query().findById();
	res.status(200).json(user);
};

module.exports = {
	getTenants,
	getUsers
};