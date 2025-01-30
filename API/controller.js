const { GoogleGenerativeAI } = require("@google/generative-ai");

const aiConfig = require("./aiConfig");

const genAI = new GoogleGenerativeAI(aiConfig.key);
const model = genAI.getGenerativeModel(aiConfig.model);

async function postData(req, res) {
  const userInput = req.body.userInput;
  console.log("Getting request with input: '" + userInput + "'");
  const prompt = aiConfig.prompt + userInput;
  const result = await model.generateContent(prompt);
  console.log(JSON.parse(result.response.text()));
}

module.exports = {
  postData,
};
