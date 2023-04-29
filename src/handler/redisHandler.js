const saveConversation = async (redisClient, userid, message, answer) => {
  const conversations = await redisClient.get(userid);
  console.log(conversations);
  return;
  let jsonConversation = JSON.parse(conversations);
  jsonConversation.push([
    { role: "user", content: message },
    { role: "assistant", content: answer },
  ]);

  client.set(userid, JSON.stringify(jsonConversation));
};

module.exports = {
  saveConversation,
};
