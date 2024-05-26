const playerStatsData = [
    { name: "Alex Mike", flippedCards: 150, playTime: "05:15:30", gamesPlayed: 20 },
    { name: "Johnson", flippedCards: 200, playTime: "04:17:45", gamesPlayed: 15 },
    { name: "Charles John", flippedCards: 180, playTime: "03:20:10", gamesPlayed: 18 },
    { name: "Scarlett Angela", flippedCards: 210, playTime: "06:22:05", gamesPlayed: 22 },
    { name: "Posey", flippedCards: 190, playTime: "07:25:30", gamesPlayed: 25 }
];

const playerStatsTableBody = document.getElementById('playerStatsTableBody');
playerStatsData.forEach(data => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${data.name}</td><td>${data.flippedCards}</td><td>${data.playTime}</td><td>${data.gamesPlayed}</td>`;
    playerStatsTableBody.appendChild(row);
});
});