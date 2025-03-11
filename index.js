const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Tell me how the world is stick to internet?";

const generate = async() => {
    try{
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    }catch(err){
        console.log(err);
    }
}

generate();
