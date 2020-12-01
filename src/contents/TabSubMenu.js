import React, {Fragment} from 'react';
import {Button} from "antd";
import '../stylesheet/main.scss'
import {Link} from "react-router-dom";

class TabSubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onClickMenu = this.onClickMenu.bind(this);
    }
    onClickMenu(){
        this.props.onClick(this.props.idx)
    }
    render() {
        this.menu = this.props.menu;
        this.url = this.props.url;
        return (
            <div>
                <Link to={this.url}>
                    <Button
                        className="button button-sub"
                        onClick={this.onClickMenu}
                    >
                        {this.menu.map((str) => str )}
                    </Button>
                </Link>
            </div>
        );
    }

}

export default TabSubMenu;