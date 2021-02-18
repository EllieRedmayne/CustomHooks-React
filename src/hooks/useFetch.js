import { useEffect, useState } from "react";

function useFetch(url) {
  const [myFetch, setMyFetch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${url}`, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setMyFetch(data))
      .catch((err) => setError(err));
  });

  if (error) {
    console.log(error);
    console.log(myFetch);
    return <p>Error!</p>;
  }
  return [myFetch];
}

export default useFetch;
