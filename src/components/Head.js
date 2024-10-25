// src/components/Head.js
import React from 'react';

const Head = ({ title }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default Head;
