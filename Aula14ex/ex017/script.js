function gerar() {
    var Num = document.getElementById('txtNu')
    var res = document.getElementById('resu')
    if (Num.value.length == '') {
        window.alert("Por favor, digite um número !")
    } else {
        var Nu = Number(Num.value)
        res.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option') //se cria uma variavel para armazenar o valor dentro do select
            item.text = ("digite um valor ")
            item.text = ` ${Nu} x ${c} = ${Nu*c} ` // essa variável recebe o valor da equação
            item.value = `tab ${c}` // cria uma forma de tab (para saber qual item foi selecionado)
            res.appendChild(item) //res "cria" item dentro de option mostrando o texto e o seu resultado
        }
    }
}