import { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/comics`);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <input
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        value={title}
        type="text"
        placeholder="Nom du film"
      />
      <main>
        {data.results.map((comic) => {
          if (
            comic.thumbnail.path !==
              `http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708` &&
            comic.thumbnail.path !==
              `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available`
          ) {
            return (
              <article key={comic._id}>
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt={comic.title}
                />
                <p>{comic.title}</p>
                <p>{comic.description}</p>
              </article>
            );
          }
        })}
      </main>
    </>
  );
};

export default Comics;
