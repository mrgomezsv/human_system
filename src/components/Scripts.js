// src/components/Scripts.js
import React from 'react';

const Scripts = ({ path }) => {
  return (
    <>
      <script src={`${path}/script.js`} defer></script>
      {/* Agrega otros scripts según sea necesario */}
    </>
  );
};

export default Scripts;
