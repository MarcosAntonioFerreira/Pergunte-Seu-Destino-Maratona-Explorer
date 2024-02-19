/*
Math.random() - > numero randomico
Math.floor(1.2) - > arredonda para baixo
 Math.ceil(1.2) -> arredonda para cima;
 Math.PI -> valor de PI
 
 Date.now()  -> data em mili segundos
 
 DOW - Document Object Model
 
 window
 window.alert("alerta")
 document
 document.write("texto")
 manipular elementos
 document.documentElement.style.background ="white"*/

 /*variaveis?
 dados de entrada?
 dados de saída? */

 const respostaElement = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')

 const respostas = [
   "Certeza!",
   "Não tenho tanta certeza.",
   "É decididamente assim.",
   "Não conte com isso.",
   "Sem dúvidas!",
   "Pergunte novamente mais tarde.",
   "Sim, definitivamente!",
   "Minha repsosta é não.",
   "Você pode contar com isso.",
   "Melhor não te dizer agora.",
   "A meu ver, sim.",
   "Minhas fontes dizem não.",
   "Provavelmente.",
   "Não é possível prever agora.",
   "Perspectiva boa.",
   "As perspectivas não são tão boas.",
   "Sim.",
   "Concentre-se e pergunte novamente.",
   "Sinais apontam que sim.",
 ]



//Clicar em fazer pergunta
function fazerPergunta(){

  //fazer pergunta
  if(inputPergunta.value == ""){
    alert("Digite sua pergunta")
    return
  }
  buttonPerguntar.setAttribute("disabled",true)
  const pergunta = "<div>" + inputPergunta.value + "</div>"
  
  //gerar numero aleatorio
      // contando vetor
  const totalRespostas = respostas.length

  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  
  respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

  // sumir a resposta depois de 3 segundos
respostaElement.style.opacity=1;
  setTimeout(function(){
    respostaElement.style.opacity=0;
    buttonPerguntar.removeAttribute('disabled')
  },3000)
}
