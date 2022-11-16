// Carrinho 

var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
var i = 0;     // variável que irá percorrer as posições
var valor = 0; // variável que irá receber o preço do produto convertido em Float.
 
 
for(i=1; i<=400; i++) { // verifica até 400 produtos registrados na localStorage 
	var prod = localStorage.getItem("produto" + i + ""); // verifica se há recheio nesta posição. 
	if(prod != null) {	
		// exibe os dados da lista dentro da div itens

		//Itens 
		document.getElementById("itens").innerHTML += localStorage.getItem("produto" + i) + "<br>";
		document.getElementById("itens").innerHTML += " ";

		//Preço inicial
		document.getElementById("preco").innerHTML += "1 x ";
		document.getElementById("preco").innerHTML += "R$: " + localStorage.getItem("valor_inicial" + i) + "<br>";

		//Subtotal
		document.getElementById("subtotal").innerHTML += localStorage.getItem("qtd" + i) + " x ";
		document.getElementById("subtotal").innerHTML += "R$: " + localStorage.getItem("valor" + i) + "<br>";
		 
		// calcula o total dos recheios
		valor = parseFloat(localStorage.getItem("valor" + i)); // valor convertido com o parseFloat()
		total = (total + valor); // arredonda para 2 casas decimais com o .toFixed(2)
	}
} 
// exibe o total dos recheios
document.getElementById("total").innerHTML = "Total: R$:" + " " + total.toFixed(2); 

// Adicionar itens ao carrinho
function AddCarrinho(produto, qtd, valor, posicao) { 
    valor_inicial = valor;
    localStorage.setItem("valor_inicial" + posicao, valor_inicial);
    localStorage.setItem("produto" + posicao, produto);
    localStorage.setItem("qtd" + posicao, qtd);
    valor = valor * qtd;
    localStorage.setItem("valor" + posicao, valor);
    alert("Produto adicionado ao carrinho!");
}

// Funções ao clicar na aba de login das categorias de "Cachorro", "Gatos".. 
function voltar() {
	window.history.back();
}

function mensagem() {
    alert("Você já está logado em sua conta.")
}

// Função de ao clicar no botão para finalizar compras
function finalizar_compras() {
	resultado = confirm("Deseja realmente finalizar suas compras?" + "\n \n" + "Clique em OK para Confirmar" + "\n" + "Clique em CANCELAR para cancelar");

	if (resultado == true) {
		alert("Compras finalizadas com Sucesso!");
		localStorage.clear(); 
		location.reload();
		window.location.href = "index.html";
	}
	else {
		alert('Compras canceladas!')
		window.location.href = "index.html";
	}
	
}

// Função da parte de pix, dinheiro, crédito e débito
function marcaDesmarca(caller) {
	var checkbox = document.querySelectorAll('input[type="checkbox"]');
	checkbox.forEach(c => c.checked = (c == caller));
}

// Função de ao clicar no botão para enviar dúvidas ou feedback
function agradecimento() {
	alert("Muito obrigado!" + "\n" + "Em breve, iremos retornar se caso você tiver nos enviado uma dúvida.");
}

// Validação do login
function logar() {
	nome = document.getElementById('nome').value;
	senha = document.getElementById('senha').value;
	
	if(senha != "" && nome != "") {
		location.href = "racao_cachorro.html";
	}

	if(senha == "" && nome == "")
		alert('Digite seu nome e sua senha!')
	else if(senha == "") 
		alert('Digite sua senha!')
	else if(nome == "") 
		alert('Digite seu nome!') 
}

// Validação do cadastro
function cadastrar() {
	nome = document.getElementById('nome').value;
	email = document.getElementById('email').value;
	celular = document.getElementById('celular').value;
	CPF = document.getElementById('CPF').value;
	senha = document.getElementById('senha').value;
	
	if(nome != "" && email != "" && celular != "" && CPF != "" && senha != "") {
		location.href = "racao_cachorro.html";
	}

	if(nome == "" && email == "" && celular == "" && CPF == "" && senha == "")
		alert('Digite as informações necessárias para poder finalizar seu cadastro!')
	else if(nome == "") 
		alert('Digite seu nome!') 
	else if(email == "") 
		alert('Digite sua e-mail!')
	else if(celular == "") 
		alert('Digite sua celular!')
	else if(CPF == "") 
		alert('Digite sua CPF!')
	else if(senha == "") 
		alert('Digite sua senha!')
}






