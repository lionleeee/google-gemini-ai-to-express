# Google AI SDK for JavaScript 사용하여 개발

---

## 프로젝트 목적

AI 연동 앱 개발을 위한 구글 인공지능 AI API 테스트

## apiKey 발급

[여기서 발급](https://aistudio.google.com/app/prompts/new_chat)

Get API Key - API 키 만들기 - 발급 - API 키 저장

---

## apikey.js

```js
const config = "your key";

export function getkey() {
  return config;
}
```
