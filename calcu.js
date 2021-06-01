$(document).ready(function() {

    
    

    var display = document.getElementById("displayOutput");

    
    function myDelete() {
        this.display.toString().slice(0, -1)
    }

    $(".one").click(function() {
        document.getElementById("displayOutput").innerHTML += 1;
    });
    $(".two").click(function() {
        document.getElementById("displayOutput").innerHTML += 2;
    });
    $(".three").click(function() {
        document.getElementById("displayOutput").innerHTML += 3;
    });
    $(".four").click(function() {
        document.getElementById("displayOutput").innerHTML += 4;
    });
    $(".five").click(function() {
        document.getElementById("displayOutput").innerHTML += 5;
    });
    $(".six").click(function() {
        document.getElementById("displayOutput").innerHTML += 6;
    });
    $(".seven").click(function() {
        document.getElementById("displayOutput").innerHTML += 7;
    });
    $(".eight").click(function() {
        document.getElementById("displayOutput").innerHTML += 8;
    });
    $(".nine").click(function() {
        document.getElementById("displayOutput").innerHTML += 9;
    });
    $(".zero").click(function() {
        document.getElementById("displayOutput").innerHTML += 0;
    });
    $(".decimal").click(function() {
        document.getElementById("displayOutput").innerHTML += ".";
    });
    $(".addition").click(function() {
        document.getElementById("displayOutput").innerHTML += "+";
    });
    $(".subtraction").click(function() {
        document.getElementById("displayOutput").innerHTML += "-";
    });
    $(".multiply").click(function() {
        document.getElementById("displayOutput").innerHTML += "*";
    });

    $(".division").click(function() {
        document.getElementById("displayOutput").innerHTML += "/";
    });

    $(".reset").click(function() {
        $(".output-display").empty();
    });

    $(".delete").click(function() {
        display.innerHTML = display.slice(0, -1);
    });

    $(".equals").click(function() {
        if (display.innerHTML == "") {
            alert ("Please enter a number you want to calculate.");
        } else {
            display.innerHTML = eval(display.innerHTML);
        }
    });



})



   