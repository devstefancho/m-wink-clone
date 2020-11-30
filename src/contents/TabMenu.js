import React, {Fragment} from 'react';
import {Button} from "antd";
import '../stylesheet/main.scss'
import {FaHome, FaChevronLeft} from 'react-icons/fa'
import {Link} from "react-router-dom";

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
        this.url = this.props.url;
        console.log('amount of menus: ', this.number)
        console.log('url of menus: ', this.url)
        return (
            <div>
                <Link to={this.url}>
                    <Button
                        style={{width: `${90/this.number}vw`}}
                        className="button"
                        onClick={this.onClickMenu}
                    >
                        {this.menu.map((str) =>
                        {
                            if(str === "br") { return (<br />) }
                            if(str === "<") { return (<Link to="/"><FaChevronLeft className="icon icon-left" size={"1.5em"}/></Link>) }
                            if(str === "HOME") {return (<Link to="/"><FaHome className="icon icon-right" size={"1.5em"}/></Link>) }
                            else return str
                        })
                        }
                    </Button>
                </Link>
            </div>
        );
    }

}

export default TabMenu;