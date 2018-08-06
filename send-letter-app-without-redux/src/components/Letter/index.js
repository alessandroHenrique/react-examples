import React from 'react';

const Letter = ({ text }) => (
  <form>
    <textarea value={text}></textarea>
  </form>
);

export default Letter;
