function atualizarDisplay(value) {
    document.calc.display.value += value;
    let salvar = document.calc.display.value;

    if (salvar == ")" && salvar.includes("(") == false) {
        let sx = salvar.slice(0, -1);
        return document.calc.display.value = sx;
    }

    if (salvar.includes("..") == true || salvar.includes("++") == true || salvar.includes("--") == true){
        let sx = salvar.slice(0, -1);
        return document.calc.display.value = sx;
    }

    if (salvar.includes("//") == true || salvar.includes("**") == true || salvar.includes("((") == true){
        let sx = salvar.slice(0, -1);
        return document.calc.display.value = sx;
    }
}

function excluir(){
    let display = document.getElementById("display").value.slice(0, -1);
    document.getElementById('display').value = display;
}

function limparDisplay() { document.getElementById("display").value = ""; }

function raiz(){
    var num = document.calc.display.value;
    var raiz = Math.sqrt(num);
    document.calc.display.value = raiz;
}

function quadrado(){
    var sq = document.calc.display.value;
    var quadrado = sq * sq;
    document.calc.display.value = quadrado;
}

function porcentagem(){
    var num = document.calc.display.value;
    let porce = "";

    if (num == "") {
        porce = `(0/100)*`; 
    } else {
        porce = `(${num}/100)*`;
    }

    document.calc.display.value = porce;
}

function resultado(){ 
    let resultado = document.getElementById('display').value;  
    document.getElementById('display').value = eval (resultado);

    let historico = document.getElementById("historic");
    historico.innerHTML = resultado + " = " + eval (resultado);
}

function limparHistorico() {
    let historico = document.getElementById("historic");
    historico.innerHTML = "";
}