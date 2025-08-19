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
      document.getElementById("idade").textContent = 
        "Oi, me chamo Mateus Juan, tenho " + idade + " anos.";
    }
    atualizarIdade();

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });

    document.getElementById("typing-name").textContent = "Mateus Juan";