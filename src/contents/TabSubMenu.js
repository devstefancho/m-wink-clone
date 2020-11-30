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
        console.log('bottom this connect to: ', this.props.onClick)
        console.log('bottom onClick idx: ', this.props.idx)
    }
    render() {
        this.number = this.props.number;
        this.menu = this.props.menu;
        this.url = this.props.url;
        console.log('amount of menus: ', this.number)
        console.log('url of menus: ', this.url)
        return (
            <div>
                <Link to={this.url}>
                    <Button
                        style={{width: `${90/this.number}vw`}}
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