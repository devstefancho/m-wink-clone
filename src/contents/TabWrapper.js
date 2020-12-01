import React, {Fragment} from 'react';
import TabMenu from "./TabMenu";
import TabDivider from "./TabDivider";
import TabSubMenu from "./TabSubMenu";
import {Route, Switch} from "react-router-dom";
import {age, subject} from "../router";
import TabMainMenu from "./TabMainMenu";

class TabWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickMenu(id, subId) {
        subId = 0;
        this.props.onClick(id, subId);
    }

    onClickSubMenu(subId) {
        //set id(main menu) as current state
        this.props.onClick(this.id, subId);
    }

    render() {
        this.menus = this.props.menus;
        this.id = this.props.id;
        this.subId = this.props.subId;
        this.banner = this.props.banner;
        return (
            <div className={this.banner ? "sticky" : ""}>
                <div className="tab-wrapper">
                    {this.menus && this.menus.map(
                        (menu,idx) =>
                            (<TabMainMenu
                                key={idx}
                                idx={idx}
                                menu={menu.name}
                                url={menu.url}
                                onClick={this.onClickMenu.bind(this)} />) )}
                </div>
                { this.menus[this.id]
                && this.menus[this.id].subMenu
                &&
                <Fragment>
                    <TabDivider />
                    <div className="tab-wrapper">
                        <Switch>
                            <Route path={subject}>
                                {this.menus[this.id].subMenu.map(
                                    (menu,idx) =>
                                        (<TabSubMenu
                                            key={idx}
                                            idx={idx}
                                            menu={menu.name}
                                            url={menu.url.path + menu.url.params}
                                            onClick={this.onClickSubMenu.bind(this)} />) )}
                            </Route>
                            <Route path={age}>
                                {this.menus[this.id].subMenu.map(
                                    (menu,idx) =>
                                        (<TabSubMenu
                                            key={idx}
                                            idx={idx}
                                            menu={menu.name}
                                            url={menu.url}
                                            onClick={this.onClickSubMenu.bind(this)} />) )}
                            </Route>
                        </Switch>
                    </div>
                </Fragment>
                }
            </div>
        );
    }
}

export default TabWrapper;