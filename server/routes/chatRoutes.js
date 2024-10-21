const express = require('express');
const router = express.Router();
const { generateChatResponses } = require('../controllers/chatController');

router.post('/generate', generateChatResponses);

module.exports = router;
