/* =========================================================
   PROJETO ÂNCORA — Efeitos visuais globais
   ---------------------------------------------------------
   Este arquivo cuida de tudo que e "ambientacao":
   - cursor personalizado
   - camadas do efeito CRT (scanlines + vinheta)
   - animacao de texto digitando ("typing")
   - controle opcional de musica de fundo

   Basta incluir este arquivo em qualquer pagina para que
   os efeitos funcionem automaticamente. Nao precisa editar.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- 1. CAMADAS DO EFEITO CRT ----------
     Cria as camadas de scanline e vinheta via JS para que
     voce nao precise repeti-las no HTML de cada pagina. */
  function montarCRT() {
    if (!document.querySelector(".crt-overlay")) {
      const scan = document.createElement("div");
      scan.className = "crt-overlay";
      document.body.appendChild(scan);
    }
    if (!document.querySelector(".crt-vinheta")) {
      const vinheta = document.createElement("div");
      vinheta.className = "crt-vinheta";
      document.body.appendChild(vinheta);
    }
  }

  /* ---------- 2. CURSOR PERSONALIZADO ----------
     Um pequeno circulo segue o mouse. Em telas de toque
     o CSS ja esconde esse elemento automaticamente. */
  function montarCursor() {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function (e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    // aumenta o cursor sobre elementos clicaveis
    const clicaveis = "a, button, input, .anexo, [role='button']";
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest(clicaveis)) cursor.classList.add("ativo");
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest(clicaveis)) cursor.classList.remove("ativo");
    });
  }

  /* ---------- 3. ANIMACAO DE TEXTO DIGITANDO ----------
     Qualquer elemento com o atributo data-typing tera seu
     texto "digitado" letra por letra ao carregar a pagina.

     Uso no HTML:
       <p data-typing data-velocidade="40">Texto aqui...</p>
     (data-velocidade e opcional, em milissegundos por letra) */
  function montarTyping() {
    const alvos = document.querySelectorAll("[data-typing]");
    alvos.forEach(function (el) {
      const textoFinal = el.textContent;
      const velocidade = parseInt(el.dataset.velocidade, 10) || 35;
      el.textContent = "";
      el.classList.add("typing");

      let i = 0;
      (function escrever() {
        if (i < textoFinal.length) {
          el.textContent += textoFinal.charAt(i);
          i++;
          setTimeout(escrever, velocidade);
        } else {
          // remove o cursor piscante ao terminar
          el.classList.remove("typing");
        }
      })();
    });
  }

  /* ---------- 4. MUSICA DE FUNDO (opcional) ----------
     Se existir um elemento <audio id="trilha"> na pagina,
     criamos um botao para ligar/desligar o som.
     (Navegadores bloqueiam autoplay com som, por isso o
      jogador precisa clicar uma vez para iniciar.) */
  function montarAudio() {
    const audio = document.getElementById("trilha");
    if (!audio) return;

    const botao = document.createElement("button");
    botao.className = "audio-controle";
    botao.textContent = "♪ SOM: OFF";
    document.body.appendChild(botao);

    botao.addEventListener("click", function () {
      if (audio.paused) {
        audio.volume = 0.4;
        audio.play();
        botao.textContent = "♪ SOM: ON";
      } else {
        audio.pause();
        botao.textContent = "♪ SOM: OFF";
      }
    });
  }

  /* ---------- 5. INICIALIZACAO ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    montarCRT();
    montarCursor();
    montarTyping();
    montarAudio();
  });
})();
