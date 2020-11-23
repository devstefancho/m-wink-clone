import React, {Fragment} from 'react';
import {Button} from "antd";
import '../stylesheet/main.scss'

class TabMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onClickMenu = this.onClickMenu.bind(this);
    }
    onClickMenu(){
        this.props.onClick(this.props.idx)
    }
    render() {
        return (
            <div>
                <Button
                    style={{width: `${90/this.props.number}vw`}}
                    className={"Button"}
                    onClick={this.onClickMenu}
                >
                    {this.props.menu}
                </Button>
            </div>
        );
    }

}

export default TabMenu;