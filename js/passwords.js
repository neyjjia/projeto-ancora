/* =========================================================
   PROJETO ÂNCORA — Banco de senhas
   ---------------------------------------------------------
   ESTE E O UNICO ARQUIVO QUE VOCE PRECISA EDITAR PARA
   CRIAR, MUDAR OU REMOVER SENHAS DE ACESSO.

   Como funciona:
   - A "chave" (lado esquerdo) e a SENHA que o jogador digita.
   - O "valor" (lado direito) e o ENDERECO da pagina que abre.

   Exemplo para adicionar uma nova senha:
       "corvo1947": "pages/documento03.html",

   Dicas:
   - As senhas NAO diferenciam maiusculas de minusculas
     (o sistema converte tudo para minusculo automaticamente).
   - Evite espacos. Prefira palavras, codigos ou numeros.
   - Voce pode apontar varias senhas para a mesma pagina.
   ========================================================= */

const passwords = {
  "ancora": "pages/ancora.html",
  "2023": "pages/apocalipse.html",
  "tempestade": "pages/tempestade.html",
  "caim": "pages/o homem com pupilas brancas.html",
  "adam": "pages/erro404.html",
  "teste": "pages/teste.html",
};

const deniedMessages = {
  "adao": "APENAS UM HOMEM",
  "ordem": "LUZ E ...",
  "lilith": "É TUDO CULPA DELA",
  "ivo": "BRINCANDO COM O TEMPO DE NOVO?",
  "jhonatan": "O REFLEXO NA TELA",
  "marcos": "O QUE ELA IRIA PENSAR DISSO?",
  "alan": "TA NA HORA DO SHOW PORRA!!",
  "theo": "RODA DE NOVO!",
  "verissimo": "OS OLHOS SE FECHARAM",
  "salvatore": "COLECIONADOR DE DEUSES",
  "william": "QUAL DOS DOIS?",
  "dce": "UM SONHO SOBRE DIAS MELHORES... OU NÃO",
  "armando": "NUNCA SUBESTIME UM HOMEM COM UM CACHORRO NO FIM DO MUNDO",
};
  // Adicione novas senhas abaixo seguindo o mesmo padrao:
  // "suasenha": "pages/sua-pagina.html",

