import * as React from "react";
import AbstractSortableColumn from './AbstractSortableColumn'
import { Menu, MenuItem } from '@blueprintjs/core';

export type ISortCallback = (columnIndex: number, comparator: (a: any, b: any) => number) => void;

export class RankSortableColumn extends AbstractSortableColumn {
    private static RANK_PATTERN = /([YOSKMJ])([0-9]+)(e|w)/i;
    private static TITLES: { [key: string]: number } = {
        J: 5, // Juryo
        K: 3, // Komusubi
        M: 4, // Maegashira
        O: 1, // Ozeki
        S: 2, // Sekiwake
        Y: 0, // Yokozuna
    };

    protected renderMenu(sortColumn: ISortCallback) {
        const sortAsc = () => sortColumn(this.index, (a, b) => this.compare(a, b));
        const sortDesc = () => sortColumn(this.index, (a, b) => this.compare(b, a));
        return (
            <Menu>
                <MenuItem icon="sort-asc" onClick={sortAsc} text="Sort Rank Asc" />
                <MenuItem icon="sort-desc" onClick={sortDesc} text="Sort Rank Desc" />
            </Menu>
        );
    }

    private toRank(str: string) {
        const match = RankSortableColumn.RANK_PATTERN.exec(str);
        if (match == null) {
            return 1000;
        }
        const [title, rank, side] = match.slice(1);
        return RankSortableColumn.TITLES[title] * 100 + (side === "e" ? 0 : 1) + parseInt(rank, 10) * 2;
    }

    private compare(a: any, b: any) {
        return this.toRank(a) - this.toRank(b);
    }
}