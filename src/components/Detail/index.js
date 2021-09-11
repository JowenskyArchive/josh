import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getYear from 'date-fns/getYear';

const containerStyle = {
  textTransform: 'capitalize',
};

const Detail = ({ character }) => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(false);

  console.log(character);

  function pickSearchDisplayedProperites({
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    created,
    gender,
    films,
    starships,
    vehicles,
  }) {
    return {
      name,
      Height: `${height}in.`,
      Mass: `${mass}lb.`,
      'Hair Color': hair_color,
      'Skin Color': skin_color,
      'Eye Colors': eye_color,
      'Birth Year': getYear(new Date(created)),
      Gender: gender,
    };
  }

  function pickDisplayedProperites({
    name,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    created,
    films,
  }) {
    return {
      name,
      Height: `${average_height}in.`,
      'Hair Color': hair_colors,
      'Skin Color': skin_colors,
      'Eye Colors': eye_colors,
      'Birth Year': getYear(new Date(created)),
    };
  }

  useEffect(() => {
    let formatt = {};
    if (!character) {
      setError(true);
    } else if (character.search) {
      console.log(typeof character.search);
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
