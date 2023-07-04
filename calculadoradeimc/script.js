
let txtaltura = document.getElementById('altura')
let txtpeso = document.getElementById('peso')
let result = document.getElementById('resultado')
let calc = document.getElementById('calc')
let limp = document.getElementById('limp')

calc.addEventListener('click', calcular)
limp.addEventListener('click', limpar)

function calcular(){

    let altura = Number(txtaltura.value)
    let peso = Number(txtpeso.value)
    let imc = peso / (altura*altura)

    result.innerHTML = `Seu Índice de Massa Corporal (IMC) é de <strong>${imc.toFixed(1)}</strong> <br>`

    if (imc < 18.5){
        result.innerHTML += 'Você está <strong style="color: red;">Abaixo do Peso</strong>'

    } else {
        if (imc >= 18.6 && imc <= 24.9){
            result.innerHTML += 'Você está no <strong style="color: green;">Peso Ideal</strong>'
        } else {
            if (imc >= 25 && imc <=29.9){
                result.innerHTML += 'Você está <strong style="color: #F2C335;">Levemente Acima do Peso</strong>'
            } else {
                if (imc >= 30 && imc <=34.9) {
                    result.innerHTML += 'Você está na <strong style="color: red;"> Obesidade Grau I</strong>'
                } else {
                    if (imc >= 35 && imc <= 39.9){
                        result.innerHTML += 'Você está na <strong style="color: red;">Obesidade Grau II</strong> (severa)'
                    } else {
                        result.innerHTML += 'Você está na <strong style="color: red;">Obesidade Grau III</strong> (mórbida)'
                        
                    }
                }
            }
        }
    }
}
