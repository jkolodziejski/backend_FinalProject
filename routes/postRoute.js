const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router
    .route("/")
    .get(postController.getAllUsers)
    .post(postController.createNewUser);

router.route("/:id").get(postController.getPostById);

module.exports = router;