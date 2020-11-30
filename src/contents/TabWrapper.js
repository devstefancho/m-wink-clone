import React, {Fragment} from 'react';
import TabMenu from "./TabMenu";
import TabDivider from "./TabDivider";

class TabWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickMenu(id, subId) {
        subId = 0;
        console.log('on click main menu: ', id);
        this.props.onClick(id, subId);
    }

    onClickSubMenu(subId) {
        console.log('on click sub menu: ', subId);
        //set id(main menu) as current state
        this.props.onClick(this.id, subId);
    }

    render() {
        this.menus = this.props.menus;
        this.id = this.props.id;
        this.subId = this.props.subId;
        this.banner = this.props.banner;
        console.log('==Q== Wrapper render menus', this.menus)
        console.log('id, subid', this.id, ', ', this.subId)
        return (
            <div className={this.banner ? "sticky" : ""}>
                <div className="tab-wrapper">
                    {this.menus && this.menus.map(
                        (menu,idx) =>
                            (<TabMenu
                                key={idx}
                                idx={idx}
                                menu={menu.name}
                                number={this.menus.length}
                                url={menu.url}
                                onClick={this.onClickMenu.bind(this)} />) )}
                </div>
                { this.menus[this.id]
                && this.menus[this.id].subMenu
                &&
                <Fragment>
                    <TabDivider />
                    <div className="tab-wrapper">
                        {this.id === 1 && this.menus[this.id].subMenu.map(
                            (menu,idx) =>
                                (<TabMenu
                                    key={idx}
                                    idx={idx}
                                    menu={menu.name}
                                    number={this.menus[this.id].subMenu.length}
                                    url={menu.url}
                                    onClick={this.onClickSubMenu.bind(this)} />) )}
                        {this.id === 2 && this.menus[this.id].subMenu.map(
                            (menu,idx) =>
                                (<TabMenu
                                    key={idx}
                                    idx={idx}
                                    menu={menu.name}
                                    url={menu.url}
                                    number={this.menus[this.id].subMenu.length}
                                    onClick={this.onClickSubMenu.bind(this)} />) )}
                    </div>
                </Fragment>
                }
            </div>
        );
    }
}

export default TabWrapper;