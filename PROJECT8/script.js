function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Computer chose ${computerChoice}. ${result}`;

    // Trigger hand animation
    const playerHand = document.querySelector('.choice span.hand');
    playerHand.classList.add('animate');

    setTimeout(() => {
        playerHand.classList.remove('animate');
    }, 500);
}
