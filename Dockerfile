FROM node:18

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]

#build
# docker build --tag -ai-app .

# run
# docker run --name gemini-app -p 4000:3000 -d ai-app