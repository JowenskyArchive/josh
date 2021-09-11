import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const inputSectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const inputStyle = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid grey',
  lineHeight: '49px',
  fontSize: '21px',
  margin: '7px',
};

const errorStyle = {
  marginLeft: '14px',
  fontSize: '28px',
  color: 'red',
};

const SearchCharacter = () => {
  const [inputFieldValue, setInputFieldValue] = useState('');
  const [search, setSearch] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  const searchCharacter = async () => {
    try {
      const data = await fetch(
        `https://swapi.dev/api/people/?search=${inputFieldValue}`
      );
      const response = await data.json();
      const { results } = response;
      setSearch(results[0]);
    } finally {
      if (search) {
        setError(false);
        history.push({
          pathname: `/character/detail/?search=${search.name}`,
          state: { data: search, search: true },
        });
      } else {
        setError(true);
      }
    }
  };

  return (
    <section style={inputSectionStyle}>
      <input
        value={inputFieldValue}
        style={inputStyle}
        onChange={(e) => {
          setInputFieldValue(e.target.value);
        }}
      />
      <button type="submit" onClick={() => searchCharacter()}>
        Submit
      </button>
      {error && <h2 style={errorStyle}>Character not found! </h2>}
    </section>
  );
};

export default SearchCharacter;
