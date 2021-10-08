window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playgame);
    document.getElementById("restart-game").addEventListener("click", initgame);
    getrandomnumber();
}

let guesses = [];

function getrandomnumber() {
    //* CODE GOES BELOW HERE *
    let randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
}

let correctnumber = getrandomnumber();
console.log(correctnumber);

function playgame() {
    let numberguess = document.getElementById("number-guess").value;
    displayresult(numberguess);
    saveguesshistory(numberguess);
    displayhistory();


}

function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {

        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;

    }

    dialog += text;
    dialog += "</div>";
    return dialog;
}

function showYouWon() {

    const text = "Awesome job , you got it!";

    let dialog = getDialog("won", text);

    document.getElementById("result").innerHTML = dialog;

}

function showNumberAbove() {

    const text = "your guess is too high";
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;

}

function showNumberBelow() {

    const text = "your guess is too low";
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;

}

function displayresult(numberguess) {
    if (numberguess > correctnumber) {
        showNumberAbove();
    } else if (numberguess < correctnumber) {
        showNumberBelow();
    } else {
        showYouWon();
    }
}

function saveguesshistory(guess) {
    guesses.push(guess);
    console.log(guesses);

}

function displayhistory() {
    let index = 0;
    let list = "<ul class='list-group'>";
    while (index < guesses.length) {
        list += "<li class='list-group-item'>" +
            "You guessed " + guesses[index] + "</li>";
        index += 1;
    }
    list += '</ul>';
    document.getElementById("history").innerHTML = list;
}

function initgame() {
    correctnumber = getrandomnumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayhistory();

}


/** 
 * save guess history
 * hint : search google "append to array in javascritp"
 * hint : use the guesses variable
 */