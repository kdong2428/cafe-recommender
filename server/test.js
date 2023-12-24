// import OpenAI from "openai";
const OpenAI = require("openai");

const openai = new OpenAI();

try {
    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0613",
      messages: [{role: "user", content: "What's happening in the NBA today?"}],
      functions: [
        {
          name: "read_website_content",
          description: "Read the content on a given website",
          parameters: {
          type: "object",
          properties: {
            url: {
            type: "string",
            description: "The URL to the website to read ",
            }
          },
          required: ["url"],
          },
        }
      ]
    });
  
    const msg = chatCompletion.data.choices[0].message;
    console.log(msg.function_call)
  
    return new Response('Hello World!');
  } catch (e) {
    return new Response(e);
  }