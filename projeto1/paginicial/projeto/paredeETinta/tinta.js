let txtaltura = document.getElementById('altura')
let txtcomp = document.getElementById('comp')
let res = document.getElementById('res')
let metro = document.getElementById('metrosq')

function calcular(){
    let altura = Number(txtaltura.value)
    let comp = Number(txtcomp.value)
    let mtrsq = Number(metro.value)

    let area = altura * comp
    let totTinta = area / mtrsq

    res.innerHTML = `Sua parede tem um total de ${area}m² <br>`
    res.innerHTML += `E você precisa de ${totTinta.toFixed(1)} litros de tinta`

}
function voltar(){
    history.back()
}

document.getElementById('btn').addEventListener('click', voltar);
