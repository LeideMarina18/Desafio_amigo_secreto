//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
let nome = '';

function adicionarAmigo(){ //Função que adiciona os amigos na lista
    nome = document.querySelector('input').value; //Capturar o valor do campo de entrada
    if(nome != ''){ //Validar a entrada: Verifica se a entrada não é uma string vazia
        amigos.push(nome); //Atualizar array de amigos: insere na lista o nome com o métod push
        limparCampo(); //Limpar o campo de entrada
        console.log(amigos);
    }else{
        alert('Por favor, insira um nome'); //Alerta de campo vazio
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}