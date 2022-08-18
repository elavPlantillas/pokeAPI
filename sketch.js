let urlPokemonList = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";
let pokemons = [];

async function fetchUrl(url) {
  const query = await fetch(url);
  const data = await query.json();
  const { results } = data;
  console.log(results);
  return results;
}

function setup() {
  const callingAPI = async () => {
    const query = await fetch(urlPokemonList);
    const data = await query.json();
    const { results } = data;

    const newInfo = await results.map(async (pokemon) => {
      const { name, url } = pokemon;
      const pokemonResponse = await fetch(url);
      const { sprites } = await pokemonResponse.json();
      const info = {
        name: name,
        image: sprites.back_default,
        posX: 0,
        posY: 0,
      };
      //console.log(info);
      return new Pokemon(info);
    });
    pokemons = newInfo;
    console.log(pokemons);
  };

  callingAPI();

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      const currentValue = pokemons[j + i * 5];
      if (currentValue) {
        currentValue.setPosX = i * (currentValue.size + 10) + 200;
        currentValue.setPosY = j * (currentValue.size + 10) + 50;
        currentValue;
        pokemons[0];
      }
    }
  }
}
function mousePressed() {
  pokemons.forEach((pokemon) => {
    pokemon.clickOver();
  });
}
