const Tenant = require('../database/models/tenant');
const User = require('../database/models/user');

const patchTenant = async(req, res) => {
	const { id } = req.params;
	const {tenant_name, address, city, state, country, zip_code, phone, web_url} = req.body;

	//Checking if required fields exist in request
	if(!tenant_name){
		res.status(400).json({ 'status':'fail', 'message':'Tenant Name Required' });
	}

	//Patch Profile in Database
	const tenant = await Tenant.query().patchAndFetchById(id, {
		tenant_name,
		address,
		city,
		state,
		country,
		zip_code,
		phone,
		web_url
	});
    
	//Conditional Response
	if(tenant){
		res.status(201).json(tenant);
	}
	else{
		res.status(400).json({ 'status':'fail', 'message':'Invalid Tenant Data' });
	}
};

const patchUser = async(req, res) => {
	const { id } = req.params;

	const {first_name, last_name, department, designation, tenant_id, image_url, city, country, bio, social_links, employee_id} = req.body;

	//Checking if required fields exist in request
	if(!first_name || !last_name || !tenant_id){
		res.status(400).json({ 'status':'fail', 'message':'Required Fields Missing' });
	}

	//Patching Profile in Database
	const user = await User.query().patchAndFetchById(id,{
		first_name,
		last_name,
		department,
		designation,
		tenant_id,
		image_url,
		city,
		country,
		bio,
		social_links,
		employee_id
	});

	//Conditional Response
	if(user){
		res.status(201).json(user);
	}
	else{
		res.status(400).json({ 'status':'fail', 'message':'Invalid User Data' });
	}
};

module.exports = {
	patchTenant,
	patchUser
};