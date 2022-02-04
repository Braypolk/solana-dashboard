import logo from './logo.svg';
import Transactions from './test-transactions.json'
import Details from './test-transaction-detail.json'
import './App.css';

import { useEffect, useState } from 'react';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

// https://token-list.solana.com/solana.tokenlist.json list of lots of token names/pairs/symbols

// mainnet-beta, testnet, devnet
let connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

const App = () => {
  const [owner, setOwner] = useState('');
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

  const getTransactionDetail = async (transaction) => {
    let transactionDetail = await connection.getConfirmedTransaction(transaction);
    console.log(transactionDetail)
  }
  
  // useEffect(() => {
    // getTransactionDetail(Transactions[0].signature)
  // })
  let post, pre, token
  // pre token owner balance
  Details.meta.preTokenBalances.forEach(b => {
    if(b.owner == inputValue){
      console.log(b.uiTokenAmount.uiAmount + " " + b.mint.substring(0,4)) //TODO: get actual token through list lookup
      pre = b.uiTokenAmount.uiAmount == null ? 0 : b.uiTokenAmount.uiAmount
      token = b.mint.substring(0,4)
    }
  })
  // post token owner balance
  Details.meta.postTokenBalances.forEach(b => {
    if(b.owner == inputValue){
      console.log(b.uiTokenAmount.uiAmount + " " + b.mint.substring(0,4)) //TODO: get actual token through list lookup
      post = b.uiTokenAmount.uiAmount == null ? 0 : b.uiTokenAmount.uiAmount
    }
  })
  
  let finalBalance = post - pre
  console.log(finalBalance);

  if(finalBalance > 0) {
    console.log("You bought " + finalBalance + " " + token);
  }
  else {
    console.log("You sold " + finalBalance + " " + token);
  }

  // TODO: next steps will be to figure out different transactions and what steps they have
  // ex: staking has different options than trading usdc for sol


  return (
    <div className="App">
      <header className="App-header">
        {/* <form onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].value);
          setOwner(e.target[0].value)
          const pubkey = new PublicKey(e.target[0].value)
          getDetails(pubkey)
        }}>
          <input
            type="text"
            value={inputValue}
            onChange={onInputChange}
          />
          <input type="submit" />
        </form> */}
        {/* {Transactions.map(transaction => (
          <li key={transaction.signature}>{transaction.signature}</li>
        ))} */}
        {/* {getTransactionDetail(Transactions[0].signature)} */}
      </header>
    </div>
  );
}

export default App;
