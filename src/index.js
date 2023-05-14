require("dotenv").config();
const telegramBot = require("./config/telegrambot");
const openai = require("./config/openai");
const redisClient = require("./config/redis");
const chatHandler = require("./handler/chatHandler");
const redisHandler = require("./handler/redisHandler");
redisClient.on("connect", function () {
  console.log("Connect completed to Redis");
});

redisClient.on("error", function (err) {
  console.log("Error connect Redis:", err);
});

(async ()=>{
  telegramBot.start((ctx) => ctx.reply("Welcome"));
  await redisClient.connect();
  telegramBot.on("message", async (ctx) => {
    const message = ctx.update.message.text;
    const userid = ctx.from.id + '';
    // console.log(userid);
    const ressponse = await chatHandler.handleMessage(openai, message);
    redisHandler.saveConversation(redisClient, userid, message, ressponse);
    ctx.reply(ressponse);
  });

  telegramBot.launch();


})();




