import { useState, useEffect } from 'react';

function fakeFetchColors() {
  return Promise.resolve(
    ['red', 'green', 'blue']
  );
}

export default function LoadableColorList() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fakeFetchColors()
      .then(c => setColors(c));
  }, []);

  const renderedColors = colors.map(color => {
    return <li key={color}>{color}</li>
  });

  return <ul>{renderedColors}</ul>
}




