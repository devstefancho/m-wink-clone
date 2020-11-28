import React from 'react';
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
                                onClick={this.onClickMenu.bind(this)} />) )}
                </div>
                <TabDivider />

                { this.menus[this.id]
                    && this.menus[this.id].subMenu
                    && <div className="tab-wrapper">
                        {this.id === 1 && this.menus[this.id].subMenu.map(
                            (menu,idx) =>
                                (<TabMenu
                                    key={idx}
                                    idx={idx}
                                    menu={menu.name}
                                    number={this.menus[this.id].subMenu.length}
                                    onClick={this.onClickSubMenu.bind(this)} />) )}
                        {this.id === 2 && this.menus[this.id].subMenu.map(
                            (menu,idx) =>
                                (<TabMenu
                                    key={idx}
                                    idx={idx}
                                    menu={menu.name}
                                    number={this.menus[this.id].subMenu.length}
                                    onClick={this.onClickSubMenu.bind(this)} />) )}
                        </div>
                }

            </div>
        );
    }
}

export default TabWrapper;