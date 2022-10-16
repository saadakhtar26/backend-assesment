const Tenant = require('../database/models/tenant');
const User = require('../database/models/user');

const getTenants = async(req, res, next) => {
    const tenant = await Tenant.query().findById();
    res.status(200).json(tenant);
}

const getUsers = async(req, res, next) => {
    const user = await User.query().findById();
    res.status(200).json(user);
}

module.exports = {
    getTenants,
    getUsers
}