const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router
    .route("/createUser")
    .post(postController.createNewUser);

router
    .route("/loginUser")
    .post(postController.loginUser)        
module.exports = router;