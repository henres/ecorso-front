import * as React from "react";
import AbstractSortableColumn from './AbstractSortableColumn'
import { Menu, MenuItem } from '@blueprintjs/core';

export type ISortCallback = (columnIndex: number, comparator: (a: any, b: any) => number) => void;

class TextSortableColumn extends AbstractSortableColumn {
    protected renderMenu(sortColumn: ISortCallback) {
        const sortAsc = () => sortColumn(this.index, (a, b) => this.compare(a, b));
        const sortDesc = () => sortColumn(this.index, (a, b) => this.compare(b, a));
        return (
            <Menu>
                <MenuItem icon="sort-asc" onClick={sortAsc} text="Sort Asc" />
                <MenuItem icon="sort-desc" onClick={sortDesc} text="Sort Desc" />
            </Menu>
        );
    }

    private compare(a: any, b: any) {
        return a.toString().localeCompare(b);
    }
}

export default TextSortableColumn