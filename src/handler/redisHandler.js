const saveConversation = async (redisClient, userid, message, answer) => {
  let conversationsJson = [];
  const conversationsString = await redisClient.get(userid);
  if(conversationsString){
    conversationsJson = JSON.parse(conversationsString, null, 2);
  }
  conversationsJson.push({ role: "user", content: message });
  conversationsJson.push({ role: "assistant", content: answer });
  redisClient.set(userid, JSON.stringify(conversationsJson));
};

module.exports = {
  saveConversation,
};
