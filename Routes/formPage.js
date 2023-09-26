const express = require('express');

const Controller = require('../Controllers/formPage');
const router = express.Router();


router.get('/add-user', Controller.getAddProduct);
router.post('/delete-user',Controller.delete);
router.post('/add-user', Controller.postAddProduct);

router.post('/edit-user/:id',Controller.postEditedUser);

module.exports = router;