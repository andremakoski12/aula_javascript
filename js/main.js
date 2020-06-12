
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar ali</b>";
    //console.log(document.getElementById("agradecimento"));

    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.instagram.com/andremakoski");
    window.location.href = "https://www.instagram.com/andremakoski"; //pode ser esse jeito também, mas abre na mesma janela e não na outra janela.
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por fazer o qe pedi!";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aquii!";
    elemento.innerHTML = "Passe o mouse aquiiii!";
}

function load(){
    alert("Pagina carregahhh");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5,10));

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão","Japão","Brasil"));
*/

//var d = new Date();
//alert(d.getMonth()+1SS);
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());
//alert(d.getMinutes());

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;        --   Para contar do 0 ao 5
while (count <= 5){
    console.log(count);
    alert(count);
    count = count + 1;
};
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome: "Maça", cor:"Vermelha"}, {nome: "Uva", cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome: "Maça", cor:"Vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maça","pêra","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString); dados
//console.log(lista.join(" - ")); Trocar virgula por traço
//console.log (lista.length); Quantidade de itens que tem na lista
//console.reverse()); Itens ao contrario

//var nome = "André Makoski";
//var idade = 22;
//var idade2 = 10;
//var n1 = 5;
//var n2 = 6;
//var frase = "Japão é lindo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(n1 * n2);
//console.log(frase.toLocaleUpperCase()); LETRA MAIUSCULA
//console.log(toLowerCase()); letra minuscula
//console.log(frase.replace("Brasil")); TROCA A PALAVRA POR OUTRA
//alert(frase.replace("Japão","Brasil")); TROCA A PALAVRA POR OUTRA