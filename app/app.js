require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Desabilita o cache
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Expires', '-1');
  res.set('Pragma', 'no-cache');
  next();
});

// Servir arquivos estáticos
app.use('/financas/css', express.static(path.join(__dirname, 'public/css'), {
  maxAge: 0,
  etag: false
}));
app.use('/financas', express.static(path.join(__dirname, 'public'), {
  maxAge: 0,
  etag: false
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração da sessão
app.use(session({
  secret: process.env.SESSION_SECRET || 'seu-segredo-aqui',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Middleware para passar a informação da sessão para o EJS
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

// Middleware para ajustar os caminhos estáticos
app.use((req, res, next) => {
  res.locals.baseUrl = '/financas';
  next();
});

// Rotas
const authRoutes = require('./src/routes/auth');
const dashboardRoutes = require('./src/routes/dashboard');

app.use('/financas', authRoutes);
app.use('/financas/dashboard', dashboardRoutes);

// Rota padrão
app.get('/financas', (req, res) => {
  if (req.session.user) {
    console.log('------------------------------------------------------------------------------------Usuário logado:', req.session.user);
    res.redirect('/financas/dashboard');
  } else {
    res.redirect('/financas/login');
  }
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    message: 'Algo deu errado!'
  });
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log('Variáveis de ambiente:', {
    DB_USER: process.env.DB_USER,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT
  });
}); 