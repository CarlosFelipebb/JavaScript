function contar() {

    var nI = document.getElementById('txtnI')
    var nF = document.getElementById('txtnF')
    var Pas = document.getElementById('txtPas')
    var res = document.getElementById('res')

    if (nI.value.length == 0 || nF.value.length == 0 || Pas.value.length == 0) {
        res.innerHTML = 'Impossível contar ! '
            //window.alert("ERRO, Faltam dados ! ")
    } else {
        res.innerHTML = `Contando:`
        var i = Number(nI.value)
        var f = Number(nF.value)
        var p = Number(Pas.value)
        if (p <= 0) {
            window.alert('Passo inválido !! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c += p) // Errei em querer somar sem ajuntar o contador mais o passo ! 
            {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}