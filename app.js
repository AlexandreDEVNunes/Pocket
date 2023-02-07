import {
    onEvent,
    redAlert,
    getProperty,
    getPropertyValue,
    setProperty,
    setPropertyValue
} from './lib/code.org.js';

let carteira = 0; 
let extrato = [];
let valor = 0; 
let economia = 0;

//carrega o valor digitado na carteira e limpa os campos de input de economia e carteira
onEvent("reset", "click", () => {
    carteira = getPropertyValue("dinheiro");
    economia = getPropertyValue("economias");
    console.log(carteira);
    console.log(economia);
    extrato = []; 
    cleanValue();  
    setProperty("wallet", carteira);
    setPropertyValue("dinheiro", "");
    setPropertyValue("economias","");
    document.querySelector("#wallet-button").style.backgroundColor = "#111827";     
    
})


//Quando o botao valor é clicado exucuta 
onEvent("comida","click", () =>{
    let valor = getPropertyValue("food");
    carteira = atualizaCarteira(valor, carteira, economia);
    atualizaExtrato("valor", valor);
    setProperty("wallet", carteira);
    cleanValue();  
});


onEvent("brinquedo","click", () => {
    let valor = getPropertyValue("fun"); 
    carteira = atualizaCarteira(valor, carteira, economia);
    atualizaExtrato("brinquedo", valor);
    setProperty("wallet", carteira);
    cleanValue();  
})


onEvent("saude","click", () => {
    let valor = getPropertyValue("health"); 
    carteira = atualizaCarteira(valor, carteira, economia);
    atualizaExtrato("valor", valor);
    setProperty("wallet", carteira);
    cleanValue(); 
})

