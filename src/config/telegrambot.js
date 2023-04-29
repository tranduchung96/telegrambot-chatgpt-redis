const { Telegraf } = require("telegraf");

const telegramBot = new Telegraf(process.env.TELEGRAM_TOKEN);


module.exports =  telegramBot;