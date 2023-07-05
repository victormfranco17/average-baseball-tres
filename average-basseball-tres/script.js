const playerForm = document.querySelector('#player-form');
const playerNameInput = document.querySelector('#player-name');
const playerHitsInput = document.querySelector('#player-hits');
const playerAtBatsInput = document.querySelector('#player-at-bats');
const playerTable = document.querySelector('#player-data');

let playerData = [];

function calculateAverage(hits, atBats) {
  const average = hits / atBats;
  return average.toFixed(3);
}

function updatePlayerTable() {
  playerTable.innerHTML = '';

  playerData.forEach((player) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const averageCell = document.createElement('td');

    nameCell.textContent = player.name;
    averageCell.textContent = calculateAverage(player.hits, player.atBats);

    row.appendChild(nameCell);
    row.appendChild(averageCell);

    playerTable.appendChild(row);
  });
}

playerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const playerName = playerNameInput.value.trim();
  const playerHits = parseInt(playerHitsInput.value);
  const playerAtBats = parseInt(playerAtBatsInput.value);

  if (playerName && !isNaN(playerHits) && !isNaN(playerAtBats)) {
    const player = {
      name: playerName,
      hits: playerHits,
      atBats: playerAtBats,
    };

    playerData.push(player);
    updatePlayerTable();

    // Limpiar los campos del formulario
    playerNameInput.value = '';
    playerHitsInput.value = '';
    playerAtBatsInput.value = '';
  }
});