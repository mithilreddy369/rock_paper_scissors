let totalGames = 0;
let player1Wins = 0;
let player2Wins = 0;
let draws = 0;

function makeChoice(player, selectedChoice) {
    const playerContainer = document.getElementById(`${player}Container`);
    const resultElement = document.getElementById('result');

    const choices = ['🪨', '📄', '✂️'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];

    playerContainer.innerHTML = `<h2>${player}</h2><button class="choice">${randomChoice}</button>`;

    const result = simulateGame(selectedChoice, randomChoice);

    resultElement.innerText = result;

    updateStats();
}

function simulateGame(playerChoice, computerChoice) {
    totalGames++;

    if (playerChoice === computerChoice) {
        draws++;
        return "It's a draw!";
    } else if (
        (playerChoice === '🪨' && computerChoice === '✂️') ||
        (playerChoice === '📄' && computerChoice === '🪨') ||
        (playerChoice === '✂️' && computerChoice === '📄')
    ) {
        player1Wins++;
        return 'Player 1 wins!';
    } else {
        player2Wins++;
        return 'Player 2 wins!';
    }
}

function updateStats() {
    const winPercentage1 = ((player1Wins / totalGames) * 100).toFixed(2);
    const winPercentage2 = ((player2Wins / totalGames) * 100).toFixed(2);
    const drawPercentage = ((draws / totalGames) * 100).toFixed(2);

    document.getElementById('totalGames').textContent = numberWithCommas(totalGames);
    document.getElementById('Player1Wins').textContent = `${numberWithCommas(player1Wins)} (${winPercentage1}%)`;
    document.getElementById('Player2Wins').textContent = `${numberWithCommas(player2Wins)} (${winPercentage2}%)`;
    document.getElementById('Draws').textContent = `${numberWithCommas(draws)} (${drawPercentage}%)`;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Run the game loop
setInterval(() => {
    makeChoice('player1', '🪨'); // Simulate Player 1 choice (you can change the default choice)
    makeChoice('player2', '📄'); // Simulate Player 2 choice (you can change the default choice)
}, 2000);  // Adjust the interval as needed
