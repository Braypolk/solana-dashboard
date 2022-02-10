// Calculate the differences in token balances after a transaction
const calcDiff = (transaction, accountKeys) => {

    // TODO: old and needs to be updated
    // pre token owner balance
    transaction.preTokenBalances.forEach(b => {
        if (b.ownerRaw == inputValue) {
            console.log(b.uiTokenAmount.uiAmount + " " + b.mint.substring(0, 4)) //TODO: get actual token through list lookup
            pre = b.uiTokenAmount.uiAmount == null ? 0 : b.uiTokenAmount.uiAmount
            token = b.mint.substring(0, 4)
        }
    })
    // post token owner balance
    transaction.postTokenBalances.forEach(b => {
        if (b.ownerRaw == inputValue) {
            console.log(b.uiTokenAmount.uiAmount + " " + b.mint.substring(0, 4)) //TODO: get actual token through list lookup
            post = b.uiTokenAmount.uiAmount == null ? 0 : b.uiTokenAmount.uiAmount
        }
    })

    let finalBalance = post - pre
    return finalBalance
    


    // TODO: figure out different transactions and what steps they have
    // ex: staking has different options than trading usdc for sol
}

export default calcDiff;