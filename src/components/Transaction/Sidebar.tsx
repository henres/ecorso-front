import * as React from 'react';
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core";

class Sidebar extends React.Component<{}, {}> {
    public render() {
        return (
            <Menu>
                <MenuItem icon="new-text-box" onClick={this.handleClick} text="New text box" />
                <MenuItem icon="new-object" onClick={this.handleClick} text="New object" />
                <MenuItem icon="new-link" onClick={this.handleClick} text="New link" />
                <MenuDivider />
                <MenuItem text="Settings..." icon="cog" />
            </Menu>
        );
    }

    private handleClick(event: React.MouseEvent<HTMLElement>): void {
        console.log("clicked", (event.target as HTMLElement).textContent);
    }
}

export { Sidebar };
