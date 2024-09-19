async function fetchData() {
  try {
    const pokemonName = document.getElementById("request").value.toLowerCase();

    const respond = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!respond.ok) {
      throw new Error("Cant Find it");
    }
    const data = await respond.json();
    const pokemonImg = document.getElementById("pokemonImg");
    pokemonImg.src = data.sprites.front_default;
    notFound("x");
    pokemonImg.style.display = "block";
    console.log(data);
  } catch (error) {
    console.error(error);
    pokemonImg.style.display = "none";
    notFound();
  }
}

function notFound(input) {
  const myH1 = document.getElementById("myH1");
  if (input === "x") {
    myH1.textContent = "";
  } else {
    myH1.textContent = "404 Cant Find it ";
    console.log("not done");
  }
}
