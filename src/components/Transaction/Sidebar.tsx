import * as React from 'react';
import { MenuItem, MenuDivider, Intent, ITagProps } from "@blueprintjs/core";
import { MultiSelect, ItemRenderer } from "@blueprintjs/select";
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import WalletInterface from '../../model/Wallet/WalletInterface';
import WalletStore from '../../services/memory/Wallet/WalletStore';
import Button from 'reactstrap/lib/Button';

const WalletMultiSelect = MultiSelect.ofType<WalletInterface>();
const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];

export interface IMultiSelectExampleState {
    wallets: WalletInterface[];
    hasInitialContent: boolean;
    intent: boolean;
    openOnKeyDown: boolean;
    popoverMinimal: boolean;
    resetOnSelect: boolean;
    tagMinimal: boolean;
}

class Sidebar extends React.Component<{}, IMultiSelectExampleState> {

    public state: IMultiSelectExampleState = {
        wallets: [],
        hasInitialContent: false,
        intent: false,
        openOnKeyDown: false,
        popoverMinimal: true,
        resetOnSelect: true,
        tagMinimal: false,
    };

    private handleKeyDownChange = this.handleSwitchChange("openOnKeyDown");
    private handleResetChange = this.handleSwitchChange("resetOnSelect");
    private handlePopoverMinimalChange = this.handleSwitchChange("popoverMinimal");
    private handleTagMinimalChange = this.handleSwitchChange("tagMinimal");
    private handleIntentChange = this.handleSwitchChange("intent");
    private handleInitialContentChange = this.handleSwitchChange("hasInitialContent");

    public render() {
        const { wallets, hasInitialContent, tagMinimal, popoverMinimal, ...flags } = this.state;
        const getTagProps = (_value: string, index: number): ITagProps => ({
            intent: this.state.intent ? INTENTS[index % INTENTS.length] : Intent.NONE,
            minimal: tagMinimal,
        });
        const walletStore = new WalletStore();
        const initialContent = this.state.hasInitialContent ? (
            <MenuItem disabled={true} text={`${walletStore.wallets.length} items loaded.`} />
        ) : (
            undefined
        );

        const clearButton = wallets.length > 0 ? <Button icon="cross" minimal={true} onClick={this.handleClear} /> : null;

        return (
            <Container>
                <Nav vertical>
                    <NavItem>
                        Account: <br/>
                        <WalletMultiSelect
                            {...walletStore.walletSelectProps}
                            {...flags}
                            initialContent={initialContent}
                            itemRenderer={this.renderWallet}
                            noResults={<MenuItem disabled={true} text="No results." />}
                            onItemSelect={this.handleWalletSelect}
                            popoverProps={{ minimal: popoverMinimal }}
                            tagRenderer={this.renderTag}
                            tagInputProps={{ tagProps: getTagProps, onRemove: this.handleTagRemove, rightElement: clearButton }}
                            selectedItems={this.state.wallets}
                        />
                    </NavItem>
                    <MenuDivider />
                    <NavItem icon="new-text-box" text="New Transaction" >
                        <NavLink href="#">New Transaction</NavLink>
                    </NavItem>
                </Nav>
            </Container>
        );
    }

    private renderTag = (wallet: WalletInterface) => wallet.name;
    // NOTE: not using Wallets.itemRenderer here so we can set icons.
    private renderWallet: ItemRenderer<WalletInterface> = (wallet, { modifiers, handleClick }) => {
        if (!modifiers.matchesPredicate) {
            return null;
        }
        return (
            <MenuItem
                active={modifiers.active}
                icon={this.isWalletSelected(wallet) ? "tick" : "blank"}
                key={wallet.name}
                label={wallet.name}
                onClick={handleClick}
                text={`${wallet.name}`}
                shouldDismissPopover={false}
            />
        );
    };
    private handleTagRemove = (_tag: string, index: number) => {
        this.deselectWallet(index);
    };
    private getSelectedWalletIndex(wallet: WalletInterface) {
        return this.state.wallets.indexOf(wallet);
    }
    private isWalletSelected(wallet: WalletInterface) {
        return this.getSelectedWalletIndex(wallet) !== -1;
    }
    private selectWallet(wallet: WalletInterface) {
        this.setState({ wallets: [...this.state.wallets, wallet] });
    }
    private deselectWallet(index: number) {
        this.setState({ wallets: this.state.wallets.filter((_wallet, i) => i !== index) });
    }
    private handleWalletSelect = (wallet: WalletInterface) => {
        if (!this.isWalletSelected(wallet)) {
            this.selectWallet(wallet);
        } else {
            this.deselectWallet(this.getSelectedWalletIndex(wallet));
        }
    };
    private handleSwitchChange(prop: keyof IMultiSelectExampleState) {
        return (event: React.FormEvent<HTMLInputElement>) => {
            const checked = event.currentTarget.checked;
            this.setState(state => ({ ...state, [prop]: checked }));
        };
    }
    private handleClear = () => this.setState({ wallets: [] });
}

export { Sidebar };
