namespace escola{
  
  const btnCadastrar = document.getElementById("cadastrar") as HTMLButtonElement;
  const btnCalcular = document.getElementById("calcMedia") as HTMLButtonElement;
  
  const campoNome = document.getElementById("campoNome") as HTMLInputElement;
  const campoAno = document.getElementById("campoAno") as HTMLInputElement;
  const campoCpf = document.getElementById("campoCpf") as HTMLInputElement;
  const campoEnd = document.getElementById("campoEnd") as HTMLInputElement;
  const campoTel = document.getElementById("campoTel") as HTMLInputElement;
  const campoMatricula = document.getElementById("campoMatricula") as HTMLInputElement;
  const campoCurso = document.getElementById("campoCurso") as HTMLInputElement;
  const campoEscola = document.getElementById("campoEscola") as HTMLInputElement;
  const campoNota = document.getElementById("campoNota") as HTMLInputElement;
  const campoNotas = document.getElementById("notas") as HTMLInputElement;
  const listaNotas = document.getElementById("listaNotas") as HTMLUListElement;
  
  let p: Aluno;

  btnCadastrar.addEventListener('click', () => {
    if(!campoNome.value || !campoAno.value || !campoCpf.value || !campoMatricula.value) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }
    
    p = new Aluno(parseInt(campoMatricula.value));
    p.nome = campoNome.value;
    p.anoNasc = parseInt(campoAno.value);
    p.cpf = campoCpf.value;
    p.endereco = campoEnd.value;
    p.telefone = campoTel.value;
    p.matricula = parseInt(campoMatricula.value);
    p.curso = campoCurso.value;
    p.escola = campoEscola.value;

    const nota1 = parseFloat(campoNota.value);
    if (!isNaN(nota1)) {
      p.adicionarNota(nota1);
    }

    const nota = parseFloat(campoNotas.value);
    if (!isNaN(nota)) {
      p.adicionarNota(nota);
    }

    document.getElementById("nome").textContent =p.nome;
    document.getElementById("ano").textContent =p.calcularIdade(2025).toString();
    document.getElementById("cpf").textContent =p.cpf;
    document.getElementById("endereco").textContent =p.endereco;
    document.getElementById("telefone").textContent =p.telefone;
    document.getElementById("matricula").textContent =p.matricula.toString();
    document.getElementById("curso").textContent =p.curso;
    document.getElementById("escola").textContent =p.escola;
    document.getElementById("nota1").textContent =nota1.toString();

  });

  //aqui que a nota final é adicionada ilimidatamente...espero que seja isso desta vez...kkkkkkkk
  //criando um <h3> que mostra a nota digitada
  function atualizarNotas() {
    listaNotas.innerHTML = "";
    p["_notas"].forEach((nota) => {
      const h3 = document.createElement("h3");
      h3.textContent = `Nota: ${nota.toFixed(2)}`;
      listaNotas.appendChild(h3);
    });
  }

  const notas = document.getElementById("notas") as HTMLInputElement;
  btnCalcular.addEventListener('click', () => {
    const nota = Number(notas.value);
    if (!isNaN(nota)) {
      p.adicionarNota(nota);
      atualizarNotas();
      document.getElementById("media").textContent = p.calcularMedia().toFixed(2);
    } else {
      alert("Digite uma nota válida!");
    }
  });

}