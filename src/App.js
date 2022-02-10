import './import.js';
import './App.css';

import Transaction from './Transaction';

import { useEffect, useState } from 'react';
import { Connection, PublicKey, clusterApiUrl} from '@solana/web3.js';

// mainnet-beta, testnet, devnet
let connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

const App = () => {
  // TODO: This is poopoo, find a better way
  const [allTransactions, setAllTransactions] = useState()

  const [owner, setOwner] = useState();
  const [inputValue, setInputValue] = useState('2d9WL9hVev1ri7TMe4EYcP7CFgi47QsLX7u2JqRSPuyD');

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const pruneTransaction = (td) => {
    const blockTime= td.blockTime

    // sol balances
    const postBalances= td.meta.postBalances
    const preBalances= td.meta.preBalances

    // spl token balances
    const postTokenBalances= td.meta.postTokenBalances
    const preTokenBalances= td.meta.preTokenBalances

    return new Transaction(preBalances, postBalances, preTokenBalances, postTokenBalances, blockTime);
  }

  useEffect(() => {
    const getDetails = async (owner) => {
      // constant representing the Public key that identifies the SPL token program
      let filter = { "programId": new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA") }

      // get all token accounts owned by user account
      let tokenAccounts = await connection.getTokenAccountsByOwner(owner, filter);
      let ownedAccounts = [];

      ownedAccounts.push(owner.toBase58());
      tokenAccounts.value.forEach(p => {
        ownedAccounts.push(p.pubkey.toBase58());
      })
      return ownedAccounts
    }

    const getTransactions = async (owner) => {
      let limit = 5
      let params = { 'limit': limit }

      let transactionAddrs = await connection.getSignaturesForAddress(owner, params);

      // *** Uncomment to get alllllll transactoins ***
      // let transSig = ''
      // while (account.length = limit) {
      //   transSig = account.at(-1).signature
      //   params = { 'before': transSig, 'limit': limit }
      //   account = await connection.getSignaturesForAddress(ownerPubkey, params);
      //   console.log(account);
      // }

      return transactionAddrs
    }

    const getTranDetails = async (transactionAddrs, ownedAccounts) => {
      let allTransactions = await Promise.all(transactionAddrs.map(async (t) => {
        try {
          const transactionDetail = await connection.getTransaction(t.signature);

          let prunedTransaction = pruneTransaction(transactionDetail)

          const keys = transactionDetail.transaction.message.accountKeys

          // get the position in keys array of matching addresses in oa
          prunedTransaction.accountKeys = []

          // todo: this slow make better hashtable or something
          keys.forEach((k, i) => {
            let key = k.toBase58()

            for (let x = 0; x < ownedAccounts.length; x++) {
              if (key == ownedAccounts[x]) {
                prunedTransaction.accountKeys.push(i) //might need to just push encoded key (k)
                break;
              }
            }
          });

          return prunedTransaction
        } catch (err) {
          throw err;
        }
      }))
      setAllTransactions(allTransactions)
    }

    if (owner != null) {

      let transactionAddrs, ownedAccounts
      getDetails(owner)
        .then((oa) => {
          ownedAccounts = oa
          return getTransactions(owner)

        })
        .then((ta) => {
          transactionAddrs = ta
          getTranDetails(transactionAddrs, ownedAccounts)
        })
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
