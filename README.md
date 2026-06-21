# PROJETO ÂNCORA

Site estático para um RPG de mesa no estilo **ARG** (Alternate Reality Game),
com visual de computador antigo, arquivos confidenciais e investigação
paranormal. Funciona apenas com **HTML, CSS e JavaScript puro** — sem servidor,
sem banco de dados e sem dependências pagas.

---

## 📁 Estrutura do projeto

```
.
├── index.html              → Página inicial (terminal de senha)
├── css/
│   └── style.css           → Toda a aparência do site (cores no topo do arquivo)
├── js/
│   ├── passwords.js        → ⭐ As senhas ficam AQUI (edite este arquivo)
│   ├── auth.js             → Lógica de verificação da senha
│   └── effects.js          → Efeitos: CRT, cursor, texto digitando, áudio
├── pages/
│   ├── _modelo.html        → Modelo para criar novas páginas (duplique este)
│   ├── documento01.html    → Página secreta de exemplo (senha: ancora)
│   └── documento02.html    → Página secreta de exemplo (senha: vigia-13)
├── assets/
│   └── images/             → Todas as imagens (logo, evidências, documentos)
└── README.md
```

---

## 🔑 Senhas de exemplo

| Senha      | Abre                    |
|------------|-------------------------|
| `ancora`   | `pages/documento01.html`|
| `vigia-13` | `pages/documento02.html`|

> As senhas **não** diferenciam maiúsculas de minúsculas.

---

## ✏️ Como personalizar

### Alterar / adicionar senhas
Abra **`js/passwords.js`**. Cada linha liga uma senha a uma página:

```js
const passwords = {
  "ancora": "pages/documento01.html",
  "vigia-13": "pages/documento02.html",
  "novasenha": "pages/documento03.html",   // ← adicione assim
};
```

A senha é o lado esquerdo; o caminho da página é o lado direito.

### Criar uma nova página secreta
1. Copie **`pages/_modelo.html`** e renomeie (ex.: `documento03.html`).
2. Edite os textos, títulos e imagens marcados no arquivo.
3. Em `js/passwords.js`, crie uma senha apontando para o novo arquivo.

Pronto — você pode criar dezenas de páginas repetindo esses passos.

### Trocar imagens
Coloque o novo arquivo em **`assets/images/`** e, no HTML da página, troque o
`src` da imagem. Você pode simplesmente **substituir** um arquivo existente
mantendo o mesmo nome — assim nem precisa editar o código.

```html
<img src="../assets/images/evidencia-01.png" alt="Descrição" />
```

### Trocar / adicionar música
1. Coloque o arquivo `.mp3` em **`assets/`**.
2. No HTML da página, descomente o bloco `<audio>` (está no fim do `_modelo.html`)
   e aponte o `src` para a sua música.
3. Um botão de **ligar/desligar som** aparece sozinho no canto da tela.

```html
<audio id="trilha" loop>
  <source src="../assets/minha-musica.mp3" type="audio/mpeg" />
</audio>
```

### Mudar as cores / tema
Abra **`css/style.css`**. No topo, em `:root`, estão todas as cores:

```css
--cor-fundo: #0a0e0c;     /* fundo */
--cor-destaque: #39ff6a;  /* verde fósforo */
--cor-alerta: #ff3b3b;    /* erros */
```

Mude esses valores e o site inteiro acompanha.

### Efeito de texto digitando
Adicione `data-typing` a qualquer elemento. Opcionalmente, controle a
velocidade (ms por letra) com `data-velocidade`:

```html
<p data-typing data-velocidade="40">Esse texto será digitado letra a letra.</p>
```

---

## 🚀 Como publicar (gratuito)

O site é 100% estático, então basta enviar os arquivos. Escolha uma opção:

### GitHub Pages
1. Crie um repositório e envie todos os arquivos.
2. Em **Settings → Pages**, selecione a branch `main` e a pasta `/ (root)`.
3. Acesse o link gerado. (O arquivo `.nojekyll` já está incluído para tudo
   funcionar, inclusive o `_modelo.html`.)

### Cloudflare Pages
1. Conecte seu repositório em **Pages → Create a project**.
2. Em *Build settings*, deixe o comando de build **vazio** e a pasta de saída
   como `/` (raiz).

### Netlify
1. Arraste a pasta do projeto direto em [app.netlify.com/drop](https://app.netlify.com/drop),
   **ou** conecte o repositório.
2. Sem comando de build; pasta de publicação = raiz do projeto.

---

## 🛠️ Rodar localmente (opcional)

Como são páginas separadas, abra o `index.html` direto no navegador **ou**
use um servidor local simples:

```bash
npx serve .
```

---

## ⚠️ Observação importante

Por ser um site estático, as senhas ficam visíveis no código do navegador.
Isso é perfeito para um **jogo de ARG** (descobrir a senha faz parte da
diversão), mas **não** use este sistema para proteger dados reais e sensíveis.
