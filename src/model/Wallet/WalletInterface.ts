import Transaction from '../Transaction/Transaction';

interface WalletInterface {
    name: string;
    transactions?: Array<Transaction>;
}

export default WalletInterface