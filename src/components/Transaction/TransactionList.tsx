import * as React from "react";
import { Table, Column, Cell, CopyCellsMenuItem, IMenuContext, Utils, SelectionModes } from '@blueprintjs/table'
import Transaction from '../../model/Transaction/Transaction'
import TransactionStore from '../../services/memory/Transaction/TransactionStore'
import TextSortableColumn from "../Template/Item/TextSortableColumn";
import { Menu } from "@blueprintjs/core";

interface TransactionListProps { transactions: Array<any>; }

export type ICellLookup = (rowIndex: number, columnIndex: number) => any;
export type ISortCallback = (columnIndex: number, comparator: (a: any, b: any) => number) => void;

export interface ISortableColumn {
    getColumn(getCellData: ICellLookup, sortColumn: ISortCallback): JSX.Element;
}

class TransactionList extends React.Component<TransactionListProps, {}> {
    public state = {
        columns: [
            new TextSortableColumn("id", 0),
            new TextSortableColumn("Wallet", 1),
            new TextSortableColumn("Distant Wallet", 2),
            new TextSortableColumn("Description", 3),
            new TextSortableColumn("Created at", 4),
            new TextSortableColumn("Balance", 5),
            new TextSortableColumn("Type", 6),
            new TextSortableColumn("Tags", 7)
        ] as ISortableColumn[],
        data: this.props.transactions,
        sortedIndexMap: [] as number[],
    };
    
    render() {
        const numRows = this.state.data.length;
        const columns = this.state.columns.map(col => col.getColumn(this.getCellData, this.sortColumn));
        console.log("data", this.props.transactions)
        return (
            <Table
                bodyContextMenuRenderer={this.renderBodyContextMenu}
                numRows={numRows}
                selectionModes={SelectionModes.COLUMNS_AND_CELLS}
            >
                {columns}
            </Table>
        );
    }


    private getCellData = (rowIndex: number, columnIndex: number) => {
        const sortedRowIndex = this.state.sortedIndexMap[rowIndex]
        if (sortedRowIndex != null) {
            rowIndex = sortedRowIndex
        }
        return this.state.data[rowIndex][columnIndex]
    };

    private renderBodyContextMenu = (context: IMenuContext) => {
        return (
            <Menu>
                <CopyCellsMenuItem context={context} getCellData={this.getCellData} text="Copy" />
            </Menu>
        )
    }

    private sortColumn = (columnIndex: number, comparator: (a: any, b: any) => number) => {
        const { data } = this.state
        const sortedIndexMap = Utils.times(data.length, (i: number) => i)
        sortedIndexMap.sort((a: number, b: number) => {
            return comparator(data[a][columnIndex], data[b][columnIndex])
        })
        this.setState({ sortedIndexMap })
    }
}

export default TransactionList