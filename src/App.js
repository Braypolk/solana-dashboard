import './import.js';
import './App.css';

// ! allTransactions is temp and for quick development
import {ALLTRANSACTIONS, pruneTransaction} from './Transaction';
import TransactionTable from './TransactionTable'

import { useEffect, useState } from 'react';
import { Connection, PublicKey, clusterApiUrl} from '@solana/web3.js';

// mainnet-beta, testnet, devnet
let connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

const App = () => {
  // TODO: This is poopoo, find a better way
  const [allTransactions, setAllTransactions] = useState([])

  const [owner, setOwner] = useState();
  const [inputValue, setInputValue] = useState('2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD');

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  useEffect(() => {
    // for testing, delete line below and uncomment the rest for actually getting data
    setAllTransactions(ALLTRANSACTIONS)

    // const getDetails = async (owner) => {
    //   // constant representing the Public key that identifies the SPL token program
    //   let filter = { "programId": new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA") }

    //   // get all token accounts owned by user account
    //   let tokenAccounts = await connection.getTokenAccountsByOwner(owner, filter);
    //   let ownedAccounts = [];

    //   ownedAccounts.push(owner.toBase58());
    //   tokenAccounts.value.forEach(p => {
    //     ownedAccounts.push(p.pubkey.toBase58());
    //   })
    //   return ownedAccounts
    // }

    // const getTransactions = async (owner) => {
    //   let limit = 5
    //   let params = { 'limit': limit }

    //   let transactionAddrs = await connection.getSignaturesForAddress(owner, params);

    //   // *** Uncomment to get alllllll transactoins ***
    //   // let transSig = ''
    //   // while (account.length = limit) {
    //   //   transSig = account.at(-1).signature
    //   //   params = { 'before': transSig, 'limit': limit }
    //   //   account = await connection.getSignaturesForAddress(ownerPubkey, params);
    //   //   console.log(account);
    //   // }

    //   return transactionAddrs
    // }

    // const getTranDetails = async (transactionAddrs, ownedAccounts) => {
    //   let allTransactions = await Promise.all(transactionAddrs.map(async (t) => {
    //     try {
    //       const transactionDetail = await connection.getTransaction(t.signature);

    //       let prunedTransaction = pruneTransaction(transactionDetail)

    //       const keys = transactionDetail.transaction.message.accountKeys

    //       // get the position in keys array of matching addresses in oa
    //       prunedTransaction.accountKeys = []

    //       // todo: this slow make better hashtable or something
    //       keys.forEach((k, i) => {
    //         let key = k.toBase58()

    //         for (let x = 0; x < ownedAccounts.length; x++) {
    //           if (key == ownedAccounts[x]) {
    //             prunedTransaction.accountKeys.push(i) //might need to just push encoded key (k)
    //             break;
    //           }
    //         }
    //       });

    //       return prunedTransaction
    //     } catch (err) {
    //       throw err;
    //     }
    //   }))
    //   setAllTransactions(allTransactions)
    // }

    // if (owner != null) {
    //   let transactionAddrs, ownedAccounts
    //   getDetails(owner)
    //     .then((oa) => {
    //       ownedAccounts = oa
    //       return getTransactions(owner)

    //     })
    //     .then((ta) => {
    //       transactionAddrs = ta
    //       getTranDetails(transactionAddrs, ownedAccounts)
    //     })
    // }
  }, [owner])

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => {
          e.preventDefault();
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

      <TransactionTable allTransactions={allTransactions}></TransactionTable>
    </div>
  );
}

export default App;
