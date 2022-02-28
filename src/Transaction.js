export default class Transaction {
    constructor(preBalances, postBalances, preTokenBalances, postTokenBalances, blockTime, accountKeys) {
        this.owner = ""
        this.preBalances = preBalances;
        this.postBalances = postBalances;
        this.preTokenBalances = preTokenBalances;
        this.postTokenBalances = postTokenBalances;
        this.blockTime = blockTime;
        this.transactionDate = new Date(blockTime).toLocaleDateString("en-US");
        this.transactionTime = new Date(blockTime).toLocaleTimeString("en-US");
        this.accountKeys = accountKeys;
    }
}

export const pruneTransaction = (td) => {
    const blockTime= td.blockTime

    // sol balances
    const postBalances= td.meta.postBalances
    const preBalances= td.meta.preBalances

    // spl token balances
    const postTokenBalances= td.meta.postTokenBalances
    const preTokenBalances= td.meta.preTokenBalances

    return new Transaction(preBalances, postBalances, preTokenBalances, postTokenBalances, blockTime);
  }