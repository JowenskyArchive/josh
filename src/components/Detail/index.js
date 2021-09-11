import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getYear from 'date-fns/getYear';

const containerStyle = {
  textTransform: 'capitalize',
};

const Detail = ({ character }) => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(false);

  function pickSearchDisplayedProperites(character) {
    return {
      Name: character.name,
      Height: `${character.height}in.`,
      Mass: `${character.mass}lb.`,
      'Hair Color': character.hair_color,
      'Skin Color': character.skin_color,
      'Eye Colors': character.eye_color,
      'Birth Year': getYear(new Date(character.created)),
      Gender: character.gender,
      Films: character.films.length,
      Starships: character.starships.length,
      Vehicles: character.vehicles.length,
    };
  }

  function pickDisplayedProperites(character) {
    return {
      Name: character.name,
      Height: `${character.average_height}in.`,
      'Hair Color': character.hair_colors,
      'Skin Color': character.skin_colors,
      'Eye Colors': character.eye_colors,
      'Birth Year': getYear(new Date(character.created)),
      Films: character.films.length,
    };
  }

  useEffect(() => {
    let formatt = {};
    if (!character) {
      setError(true);
    } else if (character.search) {
      formatt = pickSearchDisplayedProperites(character.data);
    } else {
      formatt = pickDisplayedProperites(character.data);
    }
    setDetails(formatt);
  }, [character]);

  if (error) {
    return (
      <div>
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  } else {
    return (
      <div style={containerStyle}>
        <Link to="/">
          <h2>Home</h2>
        </Link>

        {details &&
          Object.entries(details).map(([key, value]) => (
            <div key={key}>
              {key}: {value}
            </div>
          ))}
      </div>
    );
  }
};

export default Detail;
