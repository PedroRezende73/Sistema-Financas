const bcrypt = require('bcrypt');

async function generatePassword(password) {
  try {
    const hash = await bcrypt.hash(password, 10);
    console.log('Senha original:', password);
    console.log('Hash gerado:', hash);
  } catch (error) {
    console.error('Erro ao gerar hash:', error);
  }
}

// Pega a senha dos argumentos da linha de comando
const password = process.argv[2];

if (!password) {
  console.log('Por favor, forneça uma senha como argumento.');
  console.log('Exemplo: node generatePassword.js minha_senha');
  process.exit(1);
}

generatePassword(password); 