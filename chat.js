let listaMensagens = [];

let messageCommit = document.querySelector('#message-commit');

const adicionarMensagem = (apelido, mensagem) => {
    listaMensagens.push({
        "apelido": apelido,
        "mensagem": mensagem
    })
};
const formatarMensagens = () => {

    let htmlData = '';

    for (let i in listaMensagens){
        htmlData += `
        <div class="chat-message">
            <span class="chat-message-apelido">
                ${listaMensagens[i].apelido}
            </span>
            <span class="chat-message-item">
                ${listaMensagens[i].mensagem}
            </span>
        </div>
        `
    }
    return htmlData;
};

const atualizarHTML = () => {
    document.getElementById('chat-messages').innerHTML = formatarMensagens();
};

const commitMessageClickHandler = ( ) => {
    let messageInput = document.querySelector('#message-input');

    if (messageInput.value.trim().length == 0){
        messageInput.focus();
        return;
    }
    
    let palavras = messageInput.value.split(' ');
    let apelido = palavras.shift(); 
    let mensagem = palavras.join(' '); 
    adicionarMensagem(apelido, mensagem);
    atualizarHTML();
    messageInput.value = '';
}
window.addEventListener('load', function () {
    atualizarHTML();
});
/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }


// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------