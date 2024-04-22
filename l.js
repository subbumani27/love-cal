function calculateLove() {
    var yourName = document.getElementById('yourName').value.trim();
    var partnerName = document.getElementById('partnerName').value.trim();
    
    if (yourName === "" || partnerName === "") {
        alert("Please enter both names.");
        return;
    }

    var loveScore = calculateLoveScore(yourName, partnerName);
    displayResult(loveScore);
}

function calculateLoveScore(name1, name2) {
    var combinedName = (name1 + name2).toLowerCase();
    var score = 0;
    
    for (var i = 0; i < combinedName.length; i++) {
        score += combinedName.charCodeAt(i);
    }

    return score % 101; // Ensure the score is between 0 and 100
}

function displayResult(score) {
    var resultDiv = document.getElementById('result');
    
    if (score < 50) {
        resultDiv.innerHTML = "Sorry, your love score is " + score + "%. Keep trying!";
    } else if (score >= 50 && score < 80) {
        resultDiv.innerHTML = "Congratulations, your love score is " + score + "%. You're in love!";
    } else {
        resultDiv.innerHTML = "Wow, your love score is " + score + "%. You're meant to be together!";
    }
}
