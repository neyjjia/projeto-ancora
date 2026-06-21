/* =========================================================
   PROJETO ÂNCORA — Logica de acesso (login por senha)
   ---------------------------------------------------------
   Le as senhas definidas em js/passwords.js e cuida da
   verificacao na pagina inicial.

   IMPORTANTE: por ser um site 100% estatico, as senhas
   ficam no codigo do navegador. Isso e perfeito para um
   jogo de ARG (a "seguranca" faz parte da brincadeira),
   mas NAO deve ser usado para proteger dados reais.
   ========================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-acesso");
    const campo = document.getElementById("campo-senha");
    const status = document.getElementById("status");

    // se nao estivermos na pagina inicial, nao faz nada
    if (!form || !campo) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // normaliza a senha digitada (sem espacos, minuscula)
      const valor = campo.value.trim().toLowerCase();

      if (valor === "") {
        mostrarStatus("DIGITE UMA SENHA", true);
        return;
      }

      // verifica se a senha existe no banco (js/passwords.js)
      const destino = passwords[valor];

      if (destino) {
        // ACESSO LIBERADO -------------------------------------
        mostrarStatus("ACESSO LIBERADO", false);
        document.body.classList.add("saindo");
        // pequena pausa para a transicao de saida acontecer
        setTimeout(function () {
          window.location.href = destino;
        }, 600);
      } else {
        // ACESSO NEGADO ---------------------------------------
        mostrarStatus("ACESSO NEGADO", true);
        // animacao discreta de "tremor" no formulario
        form.classList.remove("tremor");
        void form.offsetWidth; // truque para reiniciar a animacao
        form.classList.add("tremor");
        campo.select();
      }
    });

    /* Atualiza a mensagem de status abaixo do formulario.
       erro = true deixa o texto vermelho. */
    function mostrarStatus(texto, erro) {
      if (!status) return;
      status.textContent = "> " + texto;
      status.classList.toggle("erro", !!erro);
    }
  });
})();
