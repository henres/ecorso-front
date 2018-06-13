import Wallet from '../Wallet/Wallet';
import { Money } from 'ts-money'

interface TransactionInterface {
    id: string
    wallet: Wallet
    distantWallet: Wallet
    description: string 
    createAt: Date
    balance: Money
    type: string
    tags: Array<string>
}

export default TransactionInterface