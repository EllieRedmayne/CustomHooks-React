import { useEffect, useState } from "react";
//import useFetch from "../../hooks/useFetch"

const url = "https://icanhazdadjoke.com/";

function DadJoke() {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${url}`, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then(({ joke }) => setJoke(joke))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <section>
      <h4>Dad Joke!</h4>
      <p>{joke}</p>
    </section>
  );
}

export default DadJoke;
