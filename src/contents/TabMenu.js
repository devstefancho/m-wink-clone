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
        console.log('bottom this connect to: ', this.props.onClick)
        console.log('bottom onClick idx: ', this.props.idx)
    }
    render() {
        this.number = this.props.number;
        this.menu = this.props.menu;
        console.log('amount of menus: ', this.number)
        return (
            <div>
                <Button
                    style={{width: `${90/this.number}vw`}}
                    className="button"
                    onClick={this.onClickMenu}
                >
                    {this.menu.map((str) =>
                    {
                        if(str === "br")
                            return (<br />)
                        else return str
                    })
                    }
                </Button>
            </div>
        );
    }

}

export default TabMenu;