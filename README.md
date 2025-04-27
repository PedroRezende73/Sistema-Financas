# Sistema de Controle Financeiro

Um sistema web para controle de finanças pessoais desenvolvido com Node.js, Express e PostgreSQL.

## Tecnologias Utilizadas

- Node.js v18
- Express v4.18.2
- PostgreSQL v13
- EJS v3.1.9
- Tailwind CSS v3.3.6
- Docker & Docker Compose
- Nginx

## Requisitos

- Docker e Docker Compose
- Git

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/PedroRezende73/Sistema-Financas.git
cd financas
```

2. Configure as variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env`
- Ajuste as variáveis conforme necessário

3. Inicie os containers:
```bash
docker compose up -d
```

4. Execute as migrações do banco de dados:
```bash
docker exec financas_node npm run migrate
```

## Acessando o Sistema

- Aplicação: http://localhost/financas
- pgAdmin: http://localhost:5050
  - Email: admin@admin.com
  - Senha: admin

## Estrutura do Projeto

```
app/
├── src/
│   ├── config/        # Configurações
│   ├── controllers/   # Controladores
│   ├── models/        # Modelos
│   ├── routes/        # Rotas
│   ├── styles/        # Arquivos de estilo (CSS/SCSS)
│   ├── views/         # Views
│   ├── middlewares/   # Middlewares
│   └── utils/         # Utilitários
├── public/            # Arquivos estáticos
└── app.js            # Arquivo principal
```


## Desenvolvimento

Para desenvolvimento local:

1. Instale as dependências:
```bash
cd app
npm install
```

2. Compile os estilos CSS:
```bash
npm run build:css
```

3. Execute o servidor em modo desenvolvimento:
```bash
npm run dev
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo desenvolvimento
- `npm run build:css`: Compila os estilos CSS
- `npm run migrate`: Executa as migrações do banco de dados
- `npm run migrate:reset`: Reseta e executa as migrações do banco de dados

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT) para mais detalhes. 
