import { useLocation } from "react-router-dom";

const ComicsWithCharacter = () => {
  const location = useLocation();
  const { character } = location.state;

  return (
    <article>
      <img
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        alt={character.name}
      />
      <p>{character.name}</p>
      <p>{character.description}</p>
    </article>
  );
};

export default ComicsWithCharacter;
