// Função para calcular a idade
function calcularIdade(dataNascimento) {
  var hoje = new Date();
  var nascimento = new Date(dataNascimento);
  var idade = hoje.getFullYear() - nascimento.getFullYear();
  var mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

// Função para atualizar a idade a cada ano
function atualizarIdade() {
  var dataNascimento = "2008-01-24"; // Data de nascimento no formato "YYYY-MM-DD"
  var idade = calcularIdade(dataNascimento);
  document.getElementById("idade").textContent = idade + " anos";
}

// Chamada inicial para definir a idade ao carregar a página
atualizarIdade();

// Atualizar a idade a cada ano
setInterval(atualizarIdade, 1000 * 60 * 60 * 24 * 365); //1 vez por ano
