document.addEventListener('DOMContentLoaded', () => {
    const statsTableBody = document.getElementById('statsTableBody');

    // Função para carregar e exibir nomes do Local Storage
    function loadNames() {
        // Limpar as linhas existentes da tabela
        statsTableBody.innerHTML = '';

        // Obter todas as chaves do Local Storage e ordená-las alfabeticamente
        let keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            keys.push(localStorage.key(i));
        }
        keys.sort();

        // Adicionar cada chave como uma linha na tabela, exceto 'currentLogin'
        keys.forEach(key => {
            if (key !== 'currentLogin') {
                addRowToTable(key);
            }
        });
    }

    // Função para adicionar uma linha à tabela
    function addRowToTable(name) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        row.appendChild(nameCell);
        statsTableBody.appendChild(row);
    }

    // Carregar os nomes quando a página carregar
    loadNames();
});
