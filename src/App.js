import './App.css';

import {useState, useEffect} from 'react';
import Gallery from './components/Gallery';

import { fetchNFTCollection } from './utils/fetchNFTCollection';

const App = () => {

  const [nfts, setNfts] = useState([]);

  useEffect( () => {

    const fetchData = async () => {
      try {
        const data = await fetchNFTCollection();
        setNfts(data.nfts);
      } catch (error) {
        console.error('Error fetching NFT collection:', error);
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="flex item-center justify-center text-3xl font-bold mb-4">Parallel Alpha NFT Gallery 🚀</h1>
      <Gallery nfts={nfts} />
    </div>
  );
}

export default App;
