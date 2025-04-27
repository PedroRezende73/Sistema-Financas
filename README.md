# Sistema de Controle Financeiro

Um sistema web para controle de finanças pessoais desenvolvido com Node.js, Express e PostgreSQL.

## Requisitos

- Node.js (v14 ou superior)
- PostgreSQL (v12 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/financas.git
cd financas
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env`
- Ajuste as variáveis conforme necessário

4. Crie o banco de dados:
```sql
CREATE DATABASE financas;
```

5. Execute as migrações (se houver):
```bash
npm run migrate
```

## Executando o Projeto

Para desenvolvimento:
```bash
npm run dev
```

Para produção:
```bash
npm start
```

O servidor estará disponível em `http://localhost:3000/financas`

## Estrutura do Projeto

```
app/
├── src/
│   ├── config/        # Configurações
│   ├── controllers/   # Controladores
│   ├── models/        # Modelos
│   ├── routes/        # Rotas
│   ├── views/         # Views
│   ├── middlewares/   # Middlewares
│   └── utils/         # Utilitários
├── public/            # Arquivos estáticos
└── app.js            # Arquivo principal
```

## Funcionalidades

- Autenticação de usuários
- Dashboard financeiro
- Controle de receitas e despesas
- Relatórios financeiros

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 