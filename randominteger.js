function randomInt(){
    return Math.floor(Math.random()*100) + 1;
}

function showRandomNumber(){
    let randomNumber = randomInt();
    document.getElementById("randomNumber").innerText = "Random Number: " + randomNumber;
}