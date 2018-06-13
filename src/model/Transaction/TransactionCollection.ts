import Transaction from './Transaction';
import { Money } from 'ts-money'

class TransactionCollection {
    transactions: Array<Transaction>;

    constructor(
        transactions?: Array<Transaction>
    ) {
        this.transactions = transactions;
    }

    add(transaction: Transaction) {
        this.transactions.push(transaction);
    }

    toArray(): any[] {
        return this.transactions.map(
            (transaction: Transaction) => {
                return transaction.toArray()
            }
        )
    }
}

export default TransactionCollection