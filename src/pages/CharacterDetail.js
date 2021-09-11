import React from 'react';
import Detail from '../components/Detail';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const CharacterDetail = ({ location }) => {
  const { state } = location;

  return (
    <div style={containerStyle}>
      <Detail character={state} />
    </div>
  );
};

export default CharacterDetail;
