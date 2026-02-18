const express = require('express');
const router = express.Router();
const ChannelController = require('../controllers/ChannelController');
const BotController = require('../controllers/BotController');

const channelController = new ChannelController();
const botController = new BotController();

router.get('/channel/:channel_id', channelController.getChannelInfo);
router.post('/channel/:channel_id/sendMessage', channelController.sendMessage);
router.post('/bot/start', botController.startBot);
router.post('/bot/update', botController.handleUpdate);

module.exports = router;