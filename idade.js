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

function atualizarIdade() {
  var dataNascimento = "2008-01-24";
  var idade = calcularIdade(dataNascimento);
  document.getElementById("idade").textContent = "👋Olá, Me chamo Mateus Juan, tenho " + idade + " anos";
}

atualizarIdade();
setInterval(atualizarIdade, 1000 * 60 * 60 * 24 * 365);

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easing = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * easing);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }
}

document.getElementById("typing-name").textContent = "Mateus Juan";
