import Wallet from '../Wallet/Wallet';
import { Money } from 'ts-money'

class Transaction {
    public static CREDIT: string = "credit"
    public static DEBIT: string = "debit"

    id: string
    wallet: Wallet
    distantWallet: Wallet
    description: string 
    createAt: Date
    balance: Money
    type: string
    tags: Array<string>

    constructor(
        id: string,
        wallet: Wallet,
        distantWallet: Wallet,
        description: string,
        balance: Money,
        type: string,
        tags: Array<string>
    ) {
        this.id = id
        this.wallet = wallet
        this.distantWallet = distantWallet
        this.description = description
        this.createAt = new Date()
        this.balance = balance
        this.type = type
        this.tags = tags
    }

    toArray(): any[] {
        return [
            this.id,
            this.wallet.toString(),
            this.distantWallet.toString(),
            this.description,
            this.createAt.toDateString(),
            this.balance.toString(),
            this.type,
            this.tags
        ]
    }
}

export default Transaction