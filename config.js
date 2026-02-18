const config = {
  telegram: {
    token: process.env.TELEGRAM_BOT_TOKEN
  },
  groq: {
    apiKey: process.env.GROQ_API_KEY
  }
};

module.exports = config;