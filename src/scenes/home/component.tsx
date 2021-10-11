import { useState, useEffect } from 'react';
import { getBasicData } from '../../utils';

const Home = () => {
  const [response, setResponse] = useState<Record<string, unknown>>();

  useEffect(() => {
    getBasicData().then(setResponse);
  }, []);

  return (
    <div id="home-container">
      <h1>Home</h1>
      {response && <p>{JSON.stringify(response)}</p>}
    </div>
  );
};

export default Home;
