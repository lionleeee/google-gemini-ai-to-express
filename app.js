import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import { getkey } from "./apikey.js";

const app = express();
let port = process.env.port || 3000;
const token = getkey();

const gemini = new GoogleGenerativeAI(token);

//요청 : http://localhost:3000/?prompt=string
app.get("/", async (req, res) => {
  const userPrompt = req.query.prompt; // 쿼리 매개변수에서 prompt 값을 읽음
  if (!userPrompt) {
    return res.status(400).send("Prompt is required");
  }
  const model = gemini.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(userPrompt); // 사용자 입력을 사용
  const response = await result.response;
  const text = await response.text();

  res.json({ response: text });
});

const server = app.listen(port, () => {
  console.log(`server on ${port}`);
});
