function formatMoney(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return value + '$'
}

function update(){
    // Coletando os valores da conta e da porcentagem da gorgeta
    var bill = Number(document.getElementById('yourBill').value)
    var percentage = Number(document.getElementById('percentage1').value)

    // Exibindo a porcentagem da gorgeta em tempo real no site
    document.getElementById('percentageValue').innerHTML = percentage + '%'

    // Exibindo a conta e a gorgeta que somadas resultam no total que é mostrado logo em seguida
    document.getElementById('billNoTip').innerHTML = formatMoney(bill)
    document.getElementById('tipValue').innerHTML = '+' + formatMoney((bill / 100) * percentage)

    // Calculando e inserindo no site o real valor da gorgeta
    document.getElementById('total').innerHTML = formatMoney(bill + (bill/100)*percentage)

    // Coletando e exibindo o numero de pessoas a dividir a conta
    var people = document.getElementById('people1').value
    
    if (people == 1)
        document.getElementById('peopleValue').innerHTML = people + ' person'
    else
        document.getElementById('peopleValue').innerHTML = people + ' people'
    
    // Calculando o valor da conta para cada um de acordo com o valor total e o número de pessoas
    var eachBill = bill/people
    document.getElementById('billForEach').innerHTML = formatMoney(eachBill)

    // Calculando o valor da gorgeta para cada um de acordo com o valor da gorgeta e o número de pessoas
    var eachTip = ((bill/100)*percentage)/people
    document.getElementById('tipForEach').innerHTML = '+' + formatMoney(eachTip)

    //Calculando e exibindo o valor que cada pessoa deve pagar
    document.getElementById('totalForEach').innerHTML = formatMoney((bill + (bill/100)*percentage)/people)
}


