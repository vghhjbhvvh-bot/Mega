const axios = require('axios');
const { telegram } = require('../config');
const { groq } = require('../config');

class ChannelController {
  async getChannelInfo(ctx) {
    const channel_id = ctx.params.channel_id;
    const response = await axios.get(`https://api.telegram.org/bot${telegram.token}/getChat?chat_id=${channel_id}`);
    ctx.body = response.data;
  }

  async sendMessage(ctx) {
    const channel_id = ctx.params.channel_id;
    const message = ctx.request.body.message;
    const response = await axios.post(`https://api.telegram.org/bot${telegram.token}/sendMessage?chat_id=${channel_id}&text=${message}`);
    ctx.body = response.data;
  }
}

module.exports = ChannelController;