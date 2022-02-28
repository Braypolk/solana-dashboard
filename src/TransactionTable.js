import calcDiff from './calculateDiff';

const TransactionTable = ({allTransactions}) => {
    console.log(allTransactions);
    const allDiffs = () => {
        let all = allTransactions.map(t => {
            return calcDiff(t, allTransactions.accountKeys)
        })
        console.log(all);
        return (
            <>
                {
                    all.map((r, i) => {
                        // just a test to see if this works
                        return r.map((d, i) => {
                            return d !== undefined ? <li key={i}>{d.amount}</li> : <></>
                        })
                    })
                }
            </>
        )
    }

    // return the formatted and pretty table of all transactions
    return (
        <>
            {allTransactions.length ? allDiffs(): ""}
        </>
    )
}

export default TransactionTable