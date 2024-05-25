document.addEventListener('DOMContentLoaded', () => {
    const statsTableBody = document.getElementById('statsTableBody');
    const players = [
        { rank: 1, name: 'Alex Mike', time: '02:15:30' },
        { rank: 2, name: 'Johnson', time: '02:17:45' },
        { rank: 3, name: 'Charles John', time: '02:20:10' },
        { rank: 4, name: 'Scarlett Angela', time: '02:22:05' },
        { rank: 5, name: 'Posey', time: '02:25:30' }
    ];

    // Certifique-se de limpar qualquer conteúdo existente
    statsTableBody.innerHTML = '';

    // Popule a tabela com dados dos jogadores
    players.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${player.rank}</td><td>${player.name}</td><td>${player.time}</td>`;
        statsTableBody.appendChild(row);
    });
});
