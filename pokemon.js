async function loadPokemon(){
  let input = document.getElementById("pokemonInput").value.toLowerCase();
  let key = "pokemon_"+input;

  let cached = localStorage.getItem(key);

  if (cached !== null) {
    let data = JSON.parse(cached);
    console.log("Loaded data from Cache:", data);
    displayPokemon(data);
    return;
  }
  const fetchURL = `https://pokeapi.co/api/v2/pokemon/${input}`;

try {
  const response = await fetch(fetchURL);
  if (!response.ok) {
    console.log("Pokemon not found");
    return;
  }

  const data = await response.json();
  console.log("Fetched from API:", data);
  
  localStorage.setItem("pokemon_"+data.name, JSON.stringify(data));
  localStorage.setItem("pokemon_"+data.id, JSON.stringify(data));
  console.log("Saved to cache");
  displayPokemon(data);
}

catch (err) {
  console.log("Error fetching pokemon:", err);
}
}

function displayPokemon(data) {
  const img = document.getElementById("pokemonImage");
  img.src = data.sprites.front_default;

  const audio = document.getElementById("pokemonAudio");
  audio.src = data.cries.latest;

  const move1 = document.getElementById("move1");
  const move2 = document.getElementById("move2");
  const move3 = document.getElementById("move3");
  const move4 = document.getElementById("move4");
  
  move1.innerHTML="";
  move2.innerHTML="";
  move3.innerHTML="";
  move4.innerHTML="";

  for (let i =0; i<data.moves.length; i++ ){
    const moveName = data.moves[i].move.name;

    const opt1 = document.createElement("option");
    opt1.textContent = moveName;
    opt1.value = moveName;

    const opt2 = document.createElement("option");
    opt2.textContent = moveName;
    opt2.value = moveName;

    const opt3 = document.createElement("option");
    opt3.textContent = moveName;
    opt3.value = moveName;

    const opt4 = document.createElement("option");
    opt4.textContent = moveName;
    opt4.value = moveName;

    move1.appendChild(opt1);
    move2.appendChild(opt2);
    move3.appendChild(opt3);
    move4.appendChild(opt4);

  }
}
  
  
