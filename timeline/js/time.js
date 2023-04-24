// Função que captura o valor da idade, acrescenta 50 e devolve para a página
function newIdade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let idadeFutura = parseInt(idade) + 50; 

    return document.getElementById('idade_futura').value = idadeFutura;  
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página ---- bebê
function carregaBebe() {
    let url = 'images/bebe.png';

    let img = new Image();
    img.src = url;    

    return document.getElementById('Bebe').appendChild(img);
}



// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaNovo() {
    let url = 'images/normal.png';

    let img = new Image();
    img.src = url;    
    
    return document.getElementById('novo').appendChild(img);    
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaIdoso() {
    let url = 'images/velha.png';

    let img = new Image();
    img.src = url;    

    return document.getElementById('idoso').appendChild(img);
}

