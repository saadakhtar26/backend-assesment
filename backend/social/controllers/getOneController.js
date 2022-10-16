const Tenant = require('../database/models/tenant');
const User = require('../database/models/user');

const getTenant = async(req, res) => {
	const { id } = req.params;
	const tenant = await Tenant.query().findById(id);
	res.status(200).json(tenant);
};

const getUser = async(req, res) => {
	const { id } = req.params;
	const user = await User.query().findById(id);
	res.status(200).json(user);
};

module.exports = {
	getTenant,
	getUser
};