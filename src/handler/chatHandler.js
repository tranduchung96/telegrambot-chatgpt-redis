const handleMessage = async (openai, message) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  });
  const answer = completion.data.choices[0].message.content;
  return answer;
};

module.exports = { handleMessage };
