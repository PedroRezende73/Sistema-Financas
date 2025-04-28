FROM node:18-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache python3 make g++

COPY package*.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY nodemon.json ./

RUN npm install

COPY .env ./

COPY . .

RUN mkdir -p public/css

RUN npx tailwindcss -i ./src/styles/input.css -o ./public/css/style.css

EXPOSE 3000

CMD ["npm", "run", "dev"] 