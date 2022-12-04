
function calcular() {
    let peso;
    let altura;
    let imc;
    let resultado;

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    imc = peso/( altura *  altura);

    if (imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = " <br/>Seu resultado foi: " + imc.toFixed(2) + " <h3> Cuidado você está muito abaixo do peso.</h3>";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = ""; // quando enviar para resultar limpar os input
        return false // para ficar na tela o resultado
    } else if(imc > 17 && imc < 18.49){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = " <br/>Seu resultado foi: " + imc.toFixed(2) + " <h3> Cuidado você está abaixo do peso.</h3>";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false
    }  else if(imc > 18.5 && imc < 24.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = " <br/>Seu resultado foi: " + imc.toFixed(2) + " <h3> Perfeito você está no peso ideal.</h3>";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false
    }
    else if(imc > 25 && imc < 29.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = " <br/>Seu resultado foi: " + imc.toFixed(2) + " <h3> ATENÇÃO você está acima do peso.</h3>";
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        return false
    }
    else{
        resultado = document.getElementById("resultado");
        resultado.innerHTML = " todos campos devem ser preenchidos";
        return false;
    }
}