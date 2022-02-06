import logo from './logo.svg';
import './import.js'
import './App.css';

import { useEffect, useState } from 'react';
import { Connection, PublicKey, clusterApiUrl, GetProgramAccountsConfig, GetProgramAccountsFilter, MemcmpFilter, DataSizeFilter } from '@solana/web3.js';

// https://token-list.solana.com/solana.tokenlist.json list of lots of token names/pairs/symbols

// mainnet-beta, testnet, devnet
let connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

const App = () => {
  const [ownerRaw, setOwnerRaw] = useState('');
  const [owner, setOwner] = useState();
  const [inputValue, setInputValue] = useState('2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD');
  const [ownedAccounts, setOwnedAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  // this async might cause problems later
  const getDetails = async (ownerPubkey) => {
    // constant representing the Public key that identifies the SPL token program
    let filter = {"programId": new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")} 
    
    // get all token accounts owned by user account
    let tokenAccounts = await connection.getTokenAccountsByOwner(ownerPubkey, filter);

    tokenAccounts.value.forEach(p => {
      setOwnedAccounts(ownedAccounts => [...ownedAccounts, p.pubkey.toBase58()]);
    })
    let limit = 5
    let transSig = ''
    let params = { 'limit': limit }
    let transactionAddrs = await connection.getSignaturesForAddress(ownerPubkey, params);

    let td = await Promise.all(transactionAddrs.map(async (t) => {
      try {
        let transactionDetail = await connection.getTransaction(t.signature);
        setTransactions(transactions => [...transactions, transactionDetail])
        return transactionDetail
      } catch(err) {
        throw err;
      }
    }))


    // while (account.length = limit) {
    //   transSig = account.at(-1).signature
    //   params = { 'before': transSig, 'limit': limit }
    //   account = await connection.getSignaturesForAddress(ownerPubkey, params);
    //   console.log(account);
    // }
  }

  useEffect(()=> {
    if(owner != null){
      getDetails(owner)
    }
  }, [owner])

/* Easy way to get details of a transaction */
  // const getTransactionDetail = async (transaction) => {
  //   let transactionDetail = await connection.getTransaction(transaction);
  //   console.log(transactionDetail)
  // }

  // useEffect(() => {
  //   // getTransactionDetail(Transactions[2].signature)
  // })

  // let post, pre, token
  // // pre token owner balance
  // Details.meta.preTokenBalances.forEach(b => {
  //   if (b.ownerRaw == inputValue) {
  //     console.log(b.uiTokenAmount.uiAmount + " " + b.mint.substring(0, 4)) //TODO: get actual token through list lookup
  //     pre = b.uiTokenAmount.uiAmount == null ? 0 : b.uiTokenAmount.uiAmount
  //     token = b.mint.substring(0, 4)
  //   }
  // })
  // // post token owner balance
  // Details.meta.postTokenBalances.forEach(b => {
  //   if (b.ownerRaw == inputValue) {
  //     console.log(b.uiTokenAmount.uiAmount + " " + b.mint.substring(0, 4)) //TODO: get actual token through list lookup
  //     post = b.uiTokenAmount.uiAmount == null ? 0 : b.uiTokenAmount.uiAmount
  //   }
  // })

  // let finalBalance = post - pre
  // console.log(finalBalance);

  // if (finalBalance > 0) {
  //   console.log("You bought " + finalBalance + " " + token);
  // }
  // else {
  //   console.log("You sold " + finalBalance + " " + token);
  // }

  // TODO: next steps will be to figure out different transactions and what steps they have
  // ex: staking has different options than trading usdc for sol


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => {
          e.preventDefault();
          setOwnerRaw(e.target[0].value)
          setOwner(new PublicKey(e.target[0].value))
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
