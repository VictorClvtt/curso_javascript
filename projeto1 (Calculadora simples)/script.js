function capturarNumeros(){
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.getElementById('num2').value)

    var radio = document.getElementsByName('operation')

    for (var i = 0; i < radio.length; i++){
        if (radio[i].checked) {
            var operation = radio[i].value
            break
        }
    }

    if (operation === '+'){
        var resultado = num1 + num2   
        console.log(resultado) 
    }   
    else if (operation === '-'){
        var resultado = num1 - num2   
        console.log(resultado) 
    }
    else if (operation === '*'){
        var resultado = num1 * num2   
        console.log(resultado) 
    }
    else if (operation === '/'){
        var resultado = num1 / num2   
        console.log(resultado) 
    }

    document.getElementById('resultado').innerHTML = resultado

    document.getElementById('result1').id = 'result2'
}

function refresh(){
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('result2').id = 'result1'
}

