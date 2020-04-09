import React from 'react';

function SimpsonQuote({character}) {
return (
    <div>
    <img src={character.image} alt={character.character} />
    <figcaption>
      <p>The memorable {character.character}</p>
      <p>said "{character.quote}"</p>
    </figcaption>
  </div>
    )
 }

export default SimpsonQuote