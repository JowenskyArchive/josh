import './style.css';
import { Link } from 'react-router-dom';

const CharacterSpecies = ({ species }) => {
  return (
    <div className="characters-container">
      {species.map((character, characterIdx) => (
        <div key={characterIdx}>
          <Link
            to={{
              pathname: `/character/detail/?search=${character.name}`,
              state: { data: character, search: false },
            }}
          >
            <div className="characters">
              <p>{character.name}</p>
              <p>{character.classification}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CharacterSpecies;
