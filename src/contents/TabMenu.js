import React, {Fragment} from 'react';
import {Button} from "antd";
import '../stylesheet/main.scss'
import {FaHome, FaChevronLeft} from 'react-icons/fa'
import {Link} from "react-router-dom";
import {main} from "../router";

class TabMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        this.number = this.props.number;
        this.menu = this.props.menu;
        this.url = this.props.url;
        return (
            <div>
                <Button
                    style={{width: `${90/this.number}vw`}}
                    className="button"
                >
                    {this.menu.map((str) =>
                    {
                        if(str === "br") { return (<br />) }
                        if(str === "<") { return (<Link key={'back'} to={main}><FaChevronLeft className="icon icon-left" size={"1.5em"}/></Link>) }
                        if(str === "HOME") {return (<Link key={'home'} to={main}><FaHome className="icon icon-right" size={"1.5em"}/></Link>) }
                        else return str
                    })
                    }
                </Button>
            </div>
        );
    }

}

export default TabMenu;