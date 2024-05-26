document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de dados para a leaderboard
    const leaderboardData = [
        { rank: 1, name: "Alex Mike", time: "05:15" },
        { rank: 2, name: "Johnson", time: "04:45" },
        { rank: 3, name: "Charles John", time: "06:20" },
        { rank: 4, name: "Scarlett Angela", time: "07:05" },
        { rank: 5, name: "Posey", time: "08:30" }
    ];

    const statsTableBody = document.getElementById('statsTableBody');
    leaderboardData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${data.rank}</td><td>${data.name}</td><td>${data.time}</td>`;
        statsTableBody.appendChild(row);
    });
});

function showPlayerStats() {
    document.getElementById('leaderboard').style.display = 'none';
    document.getElementById('playerStats').style.display = 'block';
}

function showLeaderboard() {
    document.getElementById('leaderboard').style.display = 'block';
    document.getElementById('playerStats').style.display = 'none';
}

// Scripts/leaderboard.js
document.addEventListener('DOMContentLoaded', (event) => {
    showDifficultyTable('easy'); // Show easy table by default
});

function showDifficultyTable(difficulty) {
    const difficulties = ['easy', 'medium', 'hard'];
    difficulties.forEach(level => {
        document.getElementById(level + 'Table').style.display = 'none';
    });
    document.getElementById(difficulty + 'Table').style.display = 'table';
}

function changeDifficulty(difficulty) {
    showDifficultyTable(difficulty);
}

// Funções para mostrar estatísticas do jogador e a leaderboard
function showPlayerStats() {
    document.getElementById('leaderboard').style.display = 'none';
    document.getElementById('playerStats').style.display = 'block';
}

function showLeaderboard() {
    document.getElementById('leaderboard').style.display = 'block';
    document.getElementById('playerStats').style.display = 'none';
}

