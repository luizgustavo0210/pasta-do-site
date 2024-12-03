function calcularIMC() {
    const idade = document.getElementById('idade').value;
    const genero = document.getElementById('genero').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    if (idade && peso && altura) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Magreza";
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = "Normal";
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc >= 30 && imc <= 34.9) {
            classificacao = "Obesidade grau I";
        } else if (imc >= 35 && imc <= 39.9) {
            classificacao = "Obesidade grau II";
        } else {
            classificacao = "Obesidade grau III";
        }

        document.getElementById('resultado').innerText = `Seu IMC é: ${imc} (${classificacao})`;
    } else {
        document.getElementById('resultado').innerText = "Por favor, preencha todos os campos.";
    }
}
