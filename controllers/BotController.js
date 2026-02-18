const axios = require('axios');
const { telegram } = require('../config');
const { groq } = require('../config');

class BotController {
  async startBot(ctx) {
    const response = await axios.post(`https://api.telegram.org/bot${telegram.token}/setWebhook?url=${process.env.RAILWAY_URL}/bot`);
    ctx.body = response.data;
  }

  async handleUpdate(ctx) {
    const update = ctx.request.body;
    const message = update.message;
    const text = message.text;
    const response = await axios.post(`https://api.groq.io/v1/parse?api_key=${groq.apiKey}&text=${text}`);
    const intent = response.data.intent;
    if (intent === 'create_poll') {
      // Create poll logic
    } else if (intent === 'delete_message') {
      // Delete message logic
    }
    ctx.body = 'OK';
  }
}

module.exports = BotController;