const botaoSomar = document.getElementById("somar");
const botaoSubtrair = document.getElementById("subtrair");
const botaoMultiplicar = document.getElementById("multiplicar");
const botaoDividir = document.getElementById("dividir");
const botaoIgual = document.getElementById("igual");

const inputNumero = document.getElementById("numeroCalc");
const resultado = document.getElementById("resultado");

function somar(a,b){
    return a+b
}

function subtrair(a,b){
    return a-b
}

function multiplicar(a,b){
    return a*b
}

function dividir(a,b){
    return a/b
}

botaoSomar.addEventListener("click", async()=>{
    const parametroA = parseInt(inputNumero.value)
    inputNumero.value = ""
    resultado.textContent = "Digite o segundo termo a ser somado: "
 
    botaoIgual.addEventListener("click", async()=>{
        const parametroB = parseInt(inputNumero.value)
        resultado.textContent = `O resultado da soma deu: ${somar(parametroA,parametroB)}`         
    })
})

botaoSubtrair.addEventListener("click", async()=>{
    const parametroA = parseInt(inputNumero.value)
    inputNumero.value = ""
    resultado.textContent = "Digite o segundo termo a ser subtraído: "
 
    botaoIgual.addEventListener("click", async()=>{
        const parametroB = parseInt(inputNumero.value)
        resultado.textContent = `O resultado da subtração deu: ${subtrair(parametroA,parametroB)}`         
    })
})

botaoMultiplicar.addEventListener("click", async()=>{
    const parametroA = parseInt(inputNumero.value)
    inputNumero.value = ""
    resultado.textContent = "Digite o segundo termo a ser multiplicado: "
 
    botaoIgual.addEventListener("click", async()=>{
        const parametroB = parseInt(inputNumero.value)
        resultado.textContent = `O resultado da multiplicação deu: ${multiplicar(parametroA,parametroB)}`         
    })
})

botaoDividir.addEventListener("click", async()=>{
    const parametroA = parseInt(inputNumero.value)
    inputNumero.value = ""
    resultado.textContent = "Digite o segundo termo a ser dividido: "
 
    botaoIgual.addEventListener("click", async()=>{
        const parametroB = parseInt(inputNumero.value)
        resultado.textContent = `O resultado da divisão deu: ${dividir(parametroA,parametroB)}`         
    })
})