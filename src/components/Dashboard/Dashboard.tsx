import * as React from "react";
import { Sidebar } from './Item/Sidebar'

interface DashboardProps { text: string; }

class Dashboard extends React.Component<DashboardProps, {}> {
    props: any;

    render() {
        return <div>
                <Sidebar />
                <h1>Hello Dashboard {this.props.text} !</h1>
            </div>;
    }
}

export {Dashboard, DashboardProps};
