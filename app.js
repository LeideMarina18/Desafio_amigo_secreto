//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
let nome = '';

function adicionarAmigo(){ //Função que adiciona os amigos na lista
    nome = document.querySelector('input').value; //Capturar o valor do campo de entrada
    if(nome != ''){ //Validar a entrada: Verifica se a entrada não é uma string vazia
        amigos.push(nome); //Atualizar array de amigos: insere na lista o nome com o métod push
        limparCampo(); //Limpar o campo de entrada
        console.log(amigos);
        atualizarListaDeAmigos();
    }else{
        alert('Por favor, insira um nome'); //Alerta de campo vazio
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function atualizarListaDeAmigos(){
    let listaAmigos = document.getElementById("listaAmigos"); //Obter o elemento da lista
    listaAmigos.innerHTML = ""; //limpar a lista existente: antes de adicionar novos elementos
    for(var i = 0; i < amigos.length; i++){ //Percorrer o array
        let novoAmigo = document.createElement("li"); //cria um novo item <li> da lista
        novoAmigo.append(amigos[i]);
        listaAmigos.appendChild(novoAmigo); //adiciona esse item a lista html
    }
}
function sortearAmigo(){
    quantidadeAmigos = amigos.length;
    let sorteio = document.getElementById("resultado"); //Pega a lista sorteio
    sorteio.innerHTML = ""; //limpa caso tenha alguma informação anterior
    if(quantidadeAmigos > 0){ //Validar se há amigos disponíveis
        let indiceSorteado = parseInt(Math.random() * quantidadeAmigos); //Gera o indice aleatorio
        let amigoSorteado = document.createElement("li"); //cria uma nova linha para o amigo sorteado
        amigoSorteado.append(amigos[indiceSorteado]);
        sorteio.appendChild(amigoSorteado);
    }else{
        alert("a lista de amigos está vazia");
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}