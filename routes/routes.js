const express = require('express');
const { addEmail, getEmails } = require('../controllers/controller');

const router = express.Router();

router.post('/', addEmail)
router.get('/', getEmails)


module.exports = router;