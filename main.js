//Data di fine countdown
var countdown = new Date("Jan 19, 2024 09:30:00").getTime();


let update = setInterval(function(){

    //Data di oggi
    let todayTime = new Date().getTime()

    //Calcolo tempo rimanente
    let timeRemained = countdown - todayTime
    
    //Calcolo del tempo (giorni, ore, minuti, secondi)
    var days = Math.floor(timeRemained / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemained % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemained % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemained % (1000 * 60)) / 1000);

    //Stampa
    document.getElementById("time").innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds
    console.log('Il tempo rimanente in secondi è: ' + timeRemained)
    document.getElementById("reminder").innerHTML = 'Data di fine: ' + new Date("Jan 19, 2024 09:30:00")

    //Aggiunta
    if(timeRemained < 0){
        document.getElementById("time").innerHTML = 'THE END'

    }
}, 1000)