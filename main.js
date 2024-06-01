const form = document.getElementById('form-atividade');

let emojiFeliz = '<img src="Imagens/aprovado.png" alt="emoji-aprovado">'
let emojiTriste = '<img src="Imagens/reprovado.png" alt="emoji-reprovado"></img>'
const atividades = [];
const notas = [];
let linhas = '';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite Nota da média."))

while(notaMinima <= 0){
    alert('A Nota deve ser maior que zero!')
    console.log(notaMinima)
    notaMinima = parseFloat(prompt("Digite Nota da média."))
    
}


form.addEventListener('submit' , function(e){
    e.preventDefault();

    addLinha();
    atualizaTabela();
    atualizaMediaFinal();
    
});

function addLinha(){

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');


    //Verifica se a atividade já existe na lista.
    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A Ativiade ${inputNomeAtividade.value} já foi inserida`)
    }else{ 

        // Cria uma lista(array) acrescentando na variável 'atividades' as atividades
    //que forem sendo inseridas no input 'Nome da atividade'
    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value)) 

    /**Adiciona linhas com as inofrmações no corpo da página */
    let linha = '<tr>' /**Abertura da tag tr (usa-se aspas simples) */
    linha += `<td>${atividades.length}</td>`
    linha += `<td>${inputNomeAtividade.value} </td>` /**Coluna 1 da tabela */
    linha += `<td>${inputNotaAtividade.value} </td>` /** Coluna 2 da tabela */
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? `${emojiFeliz}` : `${emojiTriste}`} </td>` /** Coluna 3 da tabela */
    linha += '</tr>' /**Fechamento da tag tr(usa-se aspas simples) */

    linhas += linha;

    console.log(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value} `);
    console.log(atividades, notas)

    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){

    const mediaFinal= calculaMediaFinal()

    document.getElementById('valor-media-final').innerHTML = mediaFinal.toFixed(1)
    document.getElementById('valor-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado

    console.log(mediaFinal)
}

function calculaMediaFinal(){
    
    let somaDasNotas = 0;
//Soma os valores na variável somaDasNotas, inseridos em Nota da atividade, que são
//armazenadas na variável notas.
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length

    console.log(`A soma: ${somaDasNotas}`)

    console.log('Até aqui esta tudo bem!')
}
