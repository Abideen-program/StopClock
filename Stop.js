window.addEventListener("load", function(){
    var tens = 00;
    var seconds = 00;
    var minutes = 00;
    var hours = 00;
    var interval;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var appendHours = document.getElementById("hours");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    buttonStart.addEventListener("click", function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    })

    buttonStop.addEventListener("click", function(){
        clearInterval(interval);
    })

    buttonReset.addEventListener("click", function(){
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;
    })

    function startTimer(){
        tens++;
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens > 99){
            console.log("seconds")
            seconds++;
            appendSeconds.innerHTML = seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds <= 9){
            appendSeconds.innerHTML = "0" + seconds;
        }

        if(seconds > 59){
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = minutes;
            seconds = 0;
            appendMinutes.innerHTML = "0" + 0;
        }

        if(minutes <= 9){
            appendMinutes.innerHTML = "0" + minutes;
        }

        if(minutes > 59){
            console.log("hours");
            hours++;
            appendHours.innerHTML = hours;
            minutes = 0;
            appendHours.innerHTML = "0" + 0;
        }

        if(hours <= 9){
            appendHours.innerHTML = "0" + hours;
        }
         
        if(hours > 23){
             hours = 0;
        }

    }
})
