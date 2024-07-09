import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import { getkey } from "./apikey.js";

const app = express();
let port = process.env.port || 3000;
const token = getkey();

const gemini = new GoogleGenerativeAI(token);
app.get("/", async (req, res) => {
  const prompt = "30대 남성에 주1회 운동 흡연도 하는데 영양제 추천해줘";
  const model = gemini.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();

  res.send(text);
});

const server = app.listen(port, () => {
  console.log(`server on ${port}`);
});
