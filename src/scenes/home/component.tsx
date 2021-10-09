import { useState, useEffect } from 'react';
import { getText } from '../../utils';

const Home = () => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    getText().then(setText);
  }, []);

  return (
    <div id="home-container">
      <h1>Home</h1>
      <p>{text}</p>
    </div>
  );
};

export default Home;
