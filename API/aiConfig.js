const { SchemaType } = require("@google/generative-ai");
const schema = {
  description: "List of connections",
  type: SchemaType.ARRAY,
  items: {
    type: SchemaType.OBJECT,
    properties: {
      connection: {
        type: SchemaType.STRING,
        description: "Name of connection",
        nullable: false,
      },
      percentage: {
        type: SchemaType.STRING,
        description: "Strength of connection in form of percentage",
        nullable: false,
      },
      explanation: {
        type: SchemaType.STRING,
        description: "Explanation of connection",
        nullable: false,
      },
    },
    required: ["connection", "percentage", "explanation"],
  },
};
const model = {
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: schema,
  },
};

const prompt =
  "Give me the top 10 shared connections between the following things (considering all word variants, showing percentage for each connection's strength and explanation of each connection, sorted from highest to lowest percentage, connections must apply to all things): ";

module.exports = {
  model,
  prompt,
};
