import * as React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Sidebar extends React.Component<{}, {}> {
    public render() {
        return (
            <Nav>
                <NavItem>
                    <NavLink></NavLink>
                </NavItem>
                <NavItem icon="new-object" onClick={this.handleClick} text="New object" />
                <NavItem icon="new-link" onClick={this.handleClick} text="New link" />
                <NavItem text="Settings..." icon="cog" />
            </Nav>
        );
    }

    private handleClick(event: React.MouseEvent<HTMLElement>): void {
        console.log("clicked", (event.target as HTMLElement).textContent);
    }
}

export { Sidebar};
