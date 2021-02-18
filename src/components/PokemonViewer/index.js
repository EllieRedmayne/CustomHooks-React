import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const url = "https://pokeapi.co/api/v2/pokemon/";

function PokemonViewer() {
  const [pokemon, setPokemon] = useState("");
  const [error, setError] = useState(null);
  const [id, setId] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`${url}${id}`, {
        headers: { Accept: "application/json" },
      })
        .then((res) => res.json())
        .then((poke) => setPokemon(poke))
        .catch((err) => setError(err));
    }
  }, [id]);

  if (error) {
    console.log(error);
    console.log(pokemon);
    return <p>Error!</p>;
  }

  return (
    <section>
      <h4>Pokemon</h4>
      <input type="number" onChange={(e) => setId(e.target.value)} value={id} />
      {pokemon && <p>{pokemon.name}</p>}
    </section>
  );
}

export default PokemonViewer;
