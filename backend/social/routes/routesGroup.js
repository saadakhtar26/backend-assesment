const express = require('express');
const router = express.Router();

const { getTenants, getUsers } = require('../controllers/getAllController');
const { getTenant, getUser } = require('../controllers/getOneController');
const { postTenant, postUser } = require('../controllers/postController');
const { patchTenant, patchUser } = require('../controllers/patchController');
const { delTenant, delUser } = require('../controllers/deleteController');

// Get All
router.route('/tenant').get(getTenants);
router.route('/user').get(getUsers);

// Get One
router.route('/tenant/:id').get(getTenant);
router.route('/user/:id').get(getUser);

// Post
router.route('/tenant').post(postTenant);
router.route('/user').post(postUser);

// Patch
router.route('/tenant/:id').patch(patchTenant);
router.route('/user/:id').patch(patchUser);

// Delete
router.route('/tenant/:id').delete(delTenant);
router.route('/user/:id').delete(delUser);

module.exports = router;