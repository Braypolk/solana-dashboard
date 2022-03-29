// Calculate the differences in token balances after a transaction
const calcDiff = (transaction, accountKeys) => {

    let diffs = transaction.postTokenBalances.map((item, i) => {
        let balance = undefined
        if(item.owner === transaction.owner.toBase58()){
            balance = {}
            balance["transactionPosition"] = i
            balance["accountIndex"] = item.accountIndex
            balance["amount"] = item.uiTokenAmount.uiAmount - transaction.preTokenBalances[i].uiTokenAmount.uiAmount
            balance["mint"] = item.mint
        }
        return balance
    })

    // TODO: old and needs to be updated
    // pre token owner balance
    // transaction.preTokenBalances.forEach(b => {
    //     if (b.ownerRaw == inputValue) {
    //         console.log(b.uiTokenAmount.uiAmount + " " + b.mint.substring(0, 4)) //TODO: get actual token through list lookup
    //         pre = b.uiTokenAmount.uiAmount == null ? 0 : b.uiTokenAmount.uiAmount
    //         token = b.mint.substring(0, 4)
    //     }
    // })
    // // post token owner balance
    // transaction.postTokenBalances.forEach(b => {
    //     if (b.ownerRaw == inputValue) {
    //         console.log(b.uiTokenAmount.uiAmount + " " + b.mint.substring(0, 4)) //TODO: get actual token through list lookup
    //         post = b.uiTokenAmount.uiAmount == null ? 0 : b.uiTokenAmount.uiAmount
    //     }
    // })

    // let finalBalance = post - pre
    // return finalBalance
    return diffs


    // TODO: figure out different transactions and what steps they have
    // ex: staking has different options than trading usdc for sol
}

export default calcDiff;