const resultado = document.getElementById("resultado");

function sumarNumeros() {
    let primerNumero = document.getElementById("primerInput").value;
    let segundoNumero = document.getElementById("segundoInput").value;

    let resultadoDeLaSuma = Number(primerNumero) + Number(segundoNumero);
    resultado.textContent = resultadoDeLaSuma;
}

sumarNumeros()