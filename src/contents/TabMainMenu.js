import React, {Fragment} from 'react';
import {Button} from "antd";
import '../stylesheet/main.scss'
import {FaHome, FaChevronLeft} from 'react-icons/fa'
import {Link} from "react-router-dom";
import {main} from "../router";

class TabMainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onClickMenu = this.onClickMenu.bind(this);
    }
    onClickMenu(){
        this.props.onClick(this.props.idx)
    }
    render() {
        this.number = this.props.number;
        this.menu = this.props.menu;
        this.url = this.props.url;
        let pathBool = false;
        if(this.url.path !== "/") {
            const regexRoutePath = new RegExp(this.url.path);
            const relativePath = window.location.pathname;
            pathBool = regexRoutePath.test(relativePath)
        }
        return (
            <div>
                <Link to={this.url.path + this.url.params}>
                    <Button
                        style={{width: `${90/this.number}vw`}}
                        className={`button ${ pathBool ? "button-active" : null}`}
                        onClick={this.onClickMenu}
                    >
                        {this.menu.map((str) =>
                        {
                            if(str === "br") { return (<br key={str} />) }
                            if(str === "<") { return (<Link key={str} to={main}><FaChevronLeft className="icon icon-left" size={"1.5em"}/></Link>) }
                            if(str === "HOME") {return (<Link key={str} to={main}><FaHome className="icon icon-right" size={"1.5em"}/></Link>) }
                            else return str
                        })
                        }
                    </Button>
                </Link>
            </div>
        );
    }

}

export default TabMainMenu;