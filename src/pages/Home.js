import { useState, useEffect } from 'react';
import CharacterSpecies from '../components/CharacterSpecies';
import SearchCharacter from '../components/SearchCharacter';

const characterSection = {
  display: 'inline-flex',
};

const Home = () => {
  const [species, setSpecies] = useState({ data: [], next: '', previous: '' });

  useEffect(() => {
    fetchData('https://swapi.dev/api/species/');
  }, []);

  const fetchData = async (page) => {
    const data = await fetch(page);

    const response = await data.json();

    const { results, next, previous } = response;

    setSpecies({ data: results, next: next, previous: previous });
  };

  function pagination(page) {
    fetchData(page);
  }

  return (
    <div className="App">
      <section style={characterSection}>
        {species.previous && (
          <button onClick={() => pagination(species.previous)}> {'<'} </button>
        )}
        <CharacterSpecies species={species.data} />
        {species.next && (
          <button onClick={() => pagination(species.next)}> {'>'} </button>
        )}
      </section>
      <SearchCharacter />
    </div>
  );
};

export default Home;
