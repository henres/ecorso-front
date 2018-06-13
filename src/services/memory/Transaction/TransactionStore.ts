import Transaction from "../../../model/Transaction/Transaction";
import { Money, Currencies } from "ts-money";
import Wallet from "../../../model/Wallet/Wallet";
import TransactionCollection from "../../../model/Transaction/TransactionCollection";

class TransactionStore {

    transactions: TransactionCollection

    constructor() {
        this.transactions = new TransactionCollection([
            new Transaction(
                '1',
                new Wallet("LCL", null),
                new Wallet("La Poste", null),
                "Transaction from La poste to LCL",
                new Money(10000, Currencies.EUR),
                Transaction.CREDIT,
                ['transfert']
            ),
            new Transaction(
                '2',
                new Wallet("LCL", null),
                new Wallet("Roc'Altitude", null),
                "Payment for entry",
                new Money(20000, Currencies.EUR),
                Transaction.DEBIT,
                ['loisir', 'sport', 'escalade']
            ),
            new Transaction(
                '3',
                new Wallet("LCL", null),
                new Wallet("Gregory", null),
                "Payment for suit and shirt",
                new Money(20000, Currencies.EUR),
                Transaction.DEBIT,
                ['loisir', 'vetements', 'mariage']
            ),
            new Transaction(
                '4',
                new Wallet("LCL", null),
                new Wallet("Miles", null),
                "Restaurant for anniversary",
                new Money(14000, Currencies.EUR),
                Transaction.DEBIT,
                ['loisir', 'restaurant', 'anniversaire']
            )
        ])
    }

    public findAll(): TransactionCollection {
        return this.transactions
    }
}

export default TransactionStore
