import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Character = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters?name=${name}`
        );
        console.log(response.data.results);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [name]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
        value={name}
        type="text"
        placeholder="Nom du personnage"
      />
      <main>
        {data.results.map((character) => {
          if (
            character.name &&
            character.thumbnail.path !==
              `http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708` &&
            character.thumbnail.path !==
              `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available`
          ) {
            return (
              <article key={character._id}>
                <Link
                  to={`/comics/${character._id}`}
                  state={{ character: character }}
                >
                  <img
                    src={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                    alt={character.name}
                  />
                  <p>{character.name}</p>
                  <p>{character.description}</p>
                </Link>
              </article>
            );
          }
        })}
      </main>
    </>
  );
};

export default Character;
