fetch("events/fncs.json")
  .then(response => response.json())
  .then(data => {
    const joueur = data[0];

    document.getElementById("player").innerText = joueur.team;
    document.getElementById("rank").innerText = "#" + joueur.rank;
    document.getElementById("info").innerHTML =
      "🏆 " + joueur.points + " Points<br>" +
      "🎮 " + joueur.matches + " Parties";
  });
