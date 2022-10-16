const Tenant = require('../database/models/tenant');
const User = require('../database/models/user');

const delTenant = async(req, res, next) => {
    const { id } = req.params;
    await Tenant.query().deleteById(id);
    res.status(200).json({status: 'success', message: `Tenant ID ${id} deleted successfully`});
}

const delUser = async(req, res, next) => {
    const { id } = req.params;
    await User.query().deleteById(id);
    res.status(200).json({status: 'success', message: `User ID ${id} deleted successfully`});
}

module.exports = {
    delTenant,
    delUser
}