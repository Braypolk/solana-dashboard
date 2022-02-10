import calcDiff from './calculateDiff';

const TransactionTable = ({allTransactions}) => {
    const allDiffs = () => {
        let all = []
        allTransactions.map(t => {
            all.push(calcDiff(t, allTransactions.accountKeys))
        })
        return (
            <>
                {
                    all.map((d, i) => (
                        // just a test to see if this works
                        <li key={i}>{d[0]}</li>
                    ))
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