FROM node:18-alpine

WORKDIR /usr/src/app

# Instala dependências de build
RUN apk add --no-cache python3 make g++

# Copia os arquivos de configuração
COPY package*.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY nodemon.json ./

# Instala as dependências
RUN npm install

# Copia o arquivo .env primeiro
COPY .env ./

# Copia o resto do código
COPY . .

# Cria o diretório public/css se não existir
RUN mkdir -p public/css

# Compila os estilos CSS
RUN npx tailwindcss -i ./src/styles/input.css -o ./public/css/style.css

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"] 