import calcDiff from './calculateDiff';
import { Icon } from './tokenInfo.js';
import './transactionTable.css';

const TransactionTable = ({ allTransactions }) => {
    console.log("HERE");
    console.log(allTransactions);

    const drawTable = (d, i) => {
        return (
            <td key={i} style={{ "padding": "10px 20px" }}>
                <Icon mint={d.mint} style={{"height": "30px"}}/>
                <p style={{ "display": "inline" }}>{d.amount}</p>
            </td>
        )
    }

    const allDiffs = () => {
        let all = allTransactions.map(t => {
            return calcDiff(t, allTransactions.accountKeys)
        })
        return (
            <>
                <table>
                    <thead>
                        <th>Balnace Changes</th>
                    </thead>
                    <tbody>
                        {
                            all.map((r, i) => {
                                // just a test to see if this works
                                return <tr>{r.map((d, i) => {
                                    return d !== undefined ? drawTable(d, i) : <></>
                                })}</tr>
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }

    // return the formatted and pretty table of all transactions
    return (
        <>
            {allTransactions.length ? allDiffs() : ""}
        </>
    )
}

export default TransactionTable