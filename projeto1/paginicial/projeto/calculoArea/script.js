let txtaltura = document.getElementById('txtaltura')
let txtcomp = document.getElementById('txtcomp')
let res = document.getElementById('result')
let parede = document.getElementById('parede')

function calcular() {

    let altura = Number(txtaltura.value)
    let comprimento = Number(txtcomp.value)

    let area = (altura*comprimento)

    res.innerHTML = `A área total é de <strong>${area}m²</strong>`

    
}

function voltar(){
    history.back()
}

document.getElementById('btn').addEventListener('click', voltar);

