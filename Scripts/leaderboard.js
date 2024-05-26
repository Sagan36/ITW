document.addEventListener('DOMContentLoaded', function() {
    // Load and display the saved leaderboard data on page load
    loadBoard();

    // Initialize the current game info for testing
    
    // Update the board with new user data if any
    VamoBora();
});

function VamoBora() {
    UpdatesBoardNEWUSER();
}

function UpdatesBoardNEWUSER() {
    const game = JSON.parse(localStorage.getItem('currentGameInfo'));
    if (!game) return;

    let statsTableBodyId;
    if (game.difficulty === 'Facil') {
        statsTableBodyId = 'easyTableBody';
    } else if (game.difficulty === 'Normal') {
        statsTableBodyId = 'mediumTableBody';
    } else if (game.difficulty === 'Dificil') {
        statsTableBodyId = 'hardTableBody';
    }

    if (statsTableBodyId) {
        let data = getTableData(statsTableBodyId);

        if (data.length >= 5) {
            return; // Se tivere mais do que 5 elementos
        }

        data.push({ user: game.user, time: game.time });
        data.sort((a, b) => {
            // Por ordem crescente a contar de cima
            const timeA = parseTime(a.time);
            const timeB = parseTime(b.time);
            return timeA - timeB;
        });

        if (data.length > 5) {
            data = data.slice(0, 5);
        }

        updateTable(statsTableBodyId, data);
        SaveBoard(); 
    }
}

function SaveBoard() {
    const boardData = {
        easy: getTableData('easyTableBody'),
        medium: getTableData('mediumTableBody'),
        hard: getTableData('hardTableBody')
    };
    localStorage.setItem('leaderboardData', JSON.stringify(boardData));
}

function loadBoard() {
    const boardData = JSON.parse(localStorage.getItem('leaderboardData'));
    if (!boardData) return;

    populateTable('easyTableBody', boardData.easy);
    populateTable('mediumTableBody', boardData.medium);
    populateTable('hardTableBody', boardData.hard);
}

function getTableData(tableBodyId) {
    const rows = document.getElementById(tableBodyId).rows;
    const data = [];
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].cells;
        data.push({
            user: cells[1].innerText,
            time: cells[2].innerText
        });
    }
    return data;
}

function populateTable(tableBodyId, data) {
    const tableBody = document.getElementById(tableBodyId);
    tableBody.innerHTML = ''; // Clear existing rows

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${index + 1}</td><td>${item.user}</td><td>${item.time}</td>`;
        tableBody.appendChild(row);
    });
}

function updateTable(tableBodyId, data) {
    const tableBody = document.getElementById(tableBodyId);
    tableBody.innerHTML = ''; // Clear existing rows

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${index + 1}</td><td>${item.user}</td><td>${item.time}</td>`;
        tableBody.appendChild(row);
    });
}

function parseTime(timeStr) {
    const parts = timeStr.split(':');
    const minutes = parseInt(parts[0], 10);
    const seconds = parseInt(parts[1], 10);
    return minutes * 60 + seconds; // Return total time in seconds
}

function addRow() {
    const newRowData = {
        difficulty: prompt('Enter difficulty (Facil, Normal, Dificil):'),
        user: prompt('Enter user name:'),
        time: prompt('Enter time (MM:SS):')
    };
    localStorage.setItem('currentGameInfo', JSON.stringify(newRowData));
    UpdatesBoardNEWUSER();
}

// Show or hide player stats
function showPlayerStats() {
    document.getElementById('leaderboard').style.display = 'none';
    document.getElementById('playerStats').style.display = 'block';
}

function showLeaderboard() {
    document.getElementById('leaderboard').style.display = 'block';
    document.getElementById('playerStats').style.display = 'none';
}

// Show or hide tables based on difficulty
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
// Personal statistics functions

function SavePersonalStats() {
    const personalStatsData = {
        // Your personal statistics data structure here
    };
    localStorage.setItem('currentPersonalStats', JSON.stringify(personalStatsData));
}

function loadPersonalStats() {
    const personalStatsData = JSON.parse(localStorage.getItem('CurrentPersonalStats'));
    if (!personalStatsData) return;

    // Populate your UI with personal statistics data
}
