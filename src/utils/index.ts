import axios from 'axios';

/* eslint-disable import/prefer-default-export */
async function getText(): Promise<string> {
  const { data } = await axios.get('http://localhost:9090');
  return data;
}

export {
  getText,
};
