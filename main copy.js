const form = document.getElementById('form-atividade');

let linhas = '';
let emojiFeliz = '<img src="Imagens/aprovado.png" alt="emoji-aprovado">'
let emojiTriste = '<img src="Imagens/reprovado.png" alt="emoji-reprovado"></img>'
let mediaFinal = 0;
let divisor = 0;
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    const aprovado = document.getElementsByClassName('resultado')

    /**Adiciona linhas com as inofrmações no corpo da página */
    let linha = '<tr>' /**Abertura da tag tr (usa-se aspas simples) */
    linha += `<td>${inputNomeAtividade.value} </td>` /**Coluna 1 da tabela */
    linha += `<td>${inputNotaAtividade.value} </td>` /** Coluna 2 da tabela */
    linha += `<td>${inputNotaAtividade.value >= 7 ? `${emojiFeliz}` : `${emojiTriste}`} </td>` /** Coluna 3 da tabela */
    linha += '</tr>' /**Fechamento da tag tr(usa-se aspas simples) */

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    mediaFinal += +inputNotaAtividade.value

    if(divisor < 4){
        divisor += +1
    }

    let resultado = mediaFinal / divisor;

    linha = '<tr>' /**Abertura da tag tr (usa-se aspas simples) */
    linha += `<td> Média final </td>` /**Coluna 1 da tabela */
    linha += `<td>${resultado} </td>` /** Coluna 2 da tabela */
    linha += `<td>${resultado >= 7 ? `${spanAprovado}` : `${spanReprovado}`}</td>` /** Coluna 3 da tabela */
    linha += '</tr>' /**Fechamento da tag tr(usa-se aspas simples) */

    const corpoResultado = document.querySelector('tfoot');
    corpoResultado.innerHTML = linha

    console.log(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value} , ${corpoTabela.innerHTML} `);
    console.log(`${mediaFinal} , ${divisor}`)

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
});