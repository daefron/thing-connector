const { GoogleGenerativeAI } = require("@google/generative-ai");

const aiConfig = require("./aiConfig");

const genAI = new GoogleGenerativeAI(process.env.KEY);
const model = genAI.getGenerativeModel(aiConfig.model);

async function postData(req, res) {
  const userInput = req.body.userInput;
  console.log("Getting request with input: '" + userInput + "'");
  const prompt = aiConfig.prompt + userInput;
  let result;
  try {
    result = await model.generateContent(prompt);
  } catch (e) {
    console.log("Error: " + e.status);
    return res.status(e.status).send({ message: e.status });
  }
  const parsedResult = JSON.parse(result.response.text());
  console.log("Sent result for: '" + userInput + "'");
  return res.json({ result: parsedResult });
}

module.exports = {
  postData,
};
