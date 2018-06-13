import * as React from 'react'
import { ItemRenderer, ItemPredicate } from '@blueprintjs/select';
import { MenuItem } from '@blueprintjs/core';

import Wallet from '../../../model/Wallet/Wallet';
import WalletInterface from '../../../model/Wallet/WalletInterface'

class WalletStore {

    public wallets: Array<WalletInterface>
    public renderWallet: ItemRenderer<WalletInterface>
    public filterWallet: ItemPredicate<WalletInterface>
    public walletSelectProps: any

    constructor() {
        this.wallets = [
            new Wallet("LCL", null),
            new Wallet("BNP", null)
        ]

        this.renderWallet = (wallet, { handleClick, modifiers, query }) => {
            if (!modifiers.matchesPredicate) {
                return null;
            }
            const text = `${wallet.name}`
            return (
                <MenuItem
                    active={modifiers.active}
                    disabled={modifiers.disabled}
                    label={wallet.name}
                    key={wallet.name}
                    onClick={handleClick}
                    text={this.highlightText(text, query)}
                />
            )
        }

        this.filterWallet = (query, wallet) => {
            return `${wallet.name.toLowerCase()}`.indexOf(query.toLowerCase()) >= 0
        }

        this.walletSelectProps = {
            itemPredicate: this.filterWallet,
            itemRenderer: this.renderWallet,
            items: this.wallets,
        }
    }

    highlightText(text: string, query: string) {
        let lastIndex = 0
        const words = query
            .split(/\s+/)
            .filter(word => word.length > 0)
            .map(this.escapeRegExpChars)
        if (words.length === 0) {
            return [text]
        }
        const regexp = new RegExp(words.join("|"), "gi");
        const tokens: React.ReactNode[] = []
        while (true) {
            const match = regexp.exec(text)
            if (!match) {
                break
            }
            const length = match[0].length
            const before = text.slice(lastIndex, regexp.lastIndex - length)
            if (before.length > 0) {
                tokens.push(before)
            }
            lastIndex = regexp.lastIndex;
            tokens.push(<strong key={lastIndex}>{match[0]}</strong>)
        }
        const rest = text.slice(lastIndex)
        if (rest.length > 0) {
            tokens.push(rest)
        }
        return tokens
    }

    escapeRegExpChars(text: string) {
        return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
    }
}

export default WalletStore