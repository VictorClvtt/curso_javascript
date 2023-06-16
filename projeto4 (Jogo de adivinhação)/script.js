var computerNumber
var guessesNumber = 0
var guesses = []
var maxGuesses = 10

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function submitGuess(){

    if (guessesNumber < maxGuesses){
        guessesNumber += 1
        var guess = document.getElementById('guess').value
        guesses.push(guess)
        document.getElementById('guesses').innerHTML = guesses

        document.getElementById('guessesNumber').innerHTML = guessesNumber

        if (guess == computerNumber){
            document.getElementById('response').innerHTML = 'Nice work! You guessed it :)'
            document.getElementById('response').style.color = 'Green'
            document.getElementById('guess').setAttribute('Readonly', 'Readonly')
            
        }
        else if (guess > computerNumber){
            document.getElementById('response').innerHTML = 'Your guess is higher than "X" :('
            document.getElementById('response').style.color = 'Red'
            document.getElementById('guess').value = ''
            
        }
        else{
            document.getElementById('response').innerHTML = 'Your guess is lower than "X" :/'
            document.getElementById('response').style.color = 'Red'
            document.getElementById('guess').value = ''
            
        }
    }
    else{
        document.getElementById('response').innerHTML = 'You lost, im sorry, "X" was equal to ' + computerNumber
        document.getElementById('response').style.color = 'Red'
        document.getElementById('guess').setAttribute('Readonly', 'Readonly')
        
    }
}

function reinit(){
    computerNumber = Math.floor(Math.random() * 100 + 1)

    document.getElementById('guess').value = ''
    
    guesses = []
    document.getElementById('guesses').innerHTML = 0

    guessesNumber = 0
    document.getElementById('guessesNumber').innerHTML = 0

    document.getElementById('response').innerHTML = ''
}