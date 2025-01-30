const { GoogleGenerativeAI } = require("@google/generative-ai");

const aiConfig = require("./aiConfig");

const genAI = new GoogleGenerativeAI(aiConfig.key);
const model = genAI.getGenerativeModel(aiConfig.model);

async function getData(req, res) {
  //test input while frontend not built
  const input = "desk, notepad";
  console.log("Getting request with input: '" + input + "'");
  const prompt = aiConfig.prompt + input;
  const result = await model.generateContent(prompt);
  console.log(JSON.parse(result.response.text()));
}

module.exports = {
  getData,
};
