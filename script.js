const params = new URLSearchParams(window.location.search);
const event = params.get("event") || "fncs";

fetch(`events/${event}.json`)
  .then(response => response.json())
  .then(data => {
    const leaderboard = document.getElementById("leaderboard");

    leaderboard.innerHTML = "";

    data.forEach(player => {
      leaderboard.innerHTML += `
        <div class="player">
          <span>#${player.rank}</span>
          <span>${player.team}</span>
          <span>${player.points} pts</span>
          <span>${player.matches} games</span>
        </div>
      `;
    });
  });
