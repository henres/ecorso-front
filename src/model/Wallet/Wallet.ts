import Transaction from '../Transaction/Transaction';

class Wallet {
    name: string
    transactions?: Array<Transaction>

    constructor(
        name: string,
        transactions?: Array<Transaction>
    ) {
        this.name = name
        this.transactions = transactions;
    }

    toString() {
        return this.name;
    }
}

export default Wallet;