const perguntas = {
  tdah: [
    "Seu filho tem dificuldade para manter o foco em atividades do dia a dia?",
    "Ele costuma evitar tarefas que exigem esforço mental prolongado?",
    "Seu filho muda de atividade com frequência sem terminar as anteriores?",
    "Ele entende instruções simples com facilidade?"
  ],
  autismo: [
    "Seu filho demonstra comportamentos repetitivos, como movimentos com as mãos?",
    "Ele tem dificuldade em interagir com outras crianças?",
    "Você já notou uma sensibilidade incomum a sons ou texturas?",
    "Ele fala pouco ou tem atraso na linguagem?",
    "Ele demonstra interesse intenso por temas específicos?",
    "Seu filho tem dificuldade em lidar com mudanças na rotina?"
  ]
};

let tipoAvaliacao = '';
let indice = 0;
let respostas = [];

function iniciarAvaliacao(tipo) {
  tipoAvaliacao = tipo;
  indice = 0;
  respostas = [];

  document.getElementById("escolha").classList.add("hidden");
  document.getElementById("questionario").classList.remove("hidden");

  mostrarPergunta();
}

function mostrarPergunta() {
  const lista = perguntas[tipoAvaliacao];

  if (indice < lista.length) {
    document.getElementById("pergunta").textContent = lista[indice];
    document.getElementById("botoes").classList.remove("hidden");
  } else {
    mostrarResultado();
  }
}

function responder(resposta) {
  respostas.push(resposta);
  indice++;
  mostrarPergunta();
}

function mostrarResultado() {
  document.getElementById("questionario").classList.add("hidden");

  const qtdSim = respostas.filter(r => r === 'sim').length;

  let feedback = "";
  if (qtdSim <= 1) {
    feedback = "Poucos sinais observados.";
  } else if (qtdSim <= 3) {
    feedback = "Atenção! Alguns sinais perceptíveis.";
  } else {
    feedback = "Muitos sinais observados. É recomendável procurar um profissional.";
  }

  const textoFinal = `
    Obrigado por responder à avaliação de <strong>${tipoAvaliacao.toUpperCase()}</strong>!<br><br>
    <strong>Resultado:</strong> ${feedback}<br><br>
    Este teste é apenas uma triagem inicial. Para um diagnóstico preciso, consulte um especialista.
  `;

  document.getElementById("resultado").innerHTML = textoFinal;
  document.getElementById("resultado").classList.remove("hidden");
  document.getElementById("reiniciar").classList.remove("hidden");
}
function reiniciar(){
    location.reload();
}