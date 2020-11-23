import React from 'react';
import TabButton from "./TabButton";

class TabSub extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Tab-Container">
                <TabButton />
                <TabButton />
                <TabButton />
            </div>
        );
    }
}

export default TabSub;
