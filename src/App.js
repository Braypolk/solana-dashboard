import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

// mainnet-beta, testnet, devnet
let connection = new Connection(clusterApiUrl('devnet'), 'confirmed');



const App = () => {
  const [addr, setAddr] = useState('');
  const [inputValue, setInputValue] = useState('2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD');

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const getDetails = async (pubkey) => {
    let limit = 1000
    let transSig = ''
    let params = { 'limit': limit }
    let account = await connection.getSignaturesForAddress(pubkey, params);
    console.log(account);

    // while (account.length = limit) {
    //   transSig = account.at(-1).signature
    //   params = { 'before': transSig, 'limit': limit }
    //   account = await connection.getSignaturesForAddress(pubkey, params);
    //   console.log(account);
    // }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].value);
          const pubkey = new PublicKey(e.target[0].value)
          getDetails(pubkey)
        }}>
          <input
            type="text"
            value={inputValue}
            onChange={onInputChange}
          />
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
