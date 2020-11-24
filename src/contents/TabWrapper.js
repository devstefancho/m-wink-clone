import React from 'react';
import TabMenu from "./TabMenu";

const WhiteSpace = (props) => {
    return (
        <div style={{height:`${10}px`}} className="Divider" />
    )
}

class TabWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            menus: [],
            menuIdx: 0
        };
    }

    componentDidMount() {
        fetch("/api/menus")
            .then(response => {console.log('fetch data: ', response);
                return response.json();})
            .then(json => {
               console.log('json: ', json)
                this.setState({menus: json})
            })
    }

    onClickMenu(id) {
        console.log(id);
        this.setState({menuIdx: id});
    }

    onClickSubMenu(id) {
        console.log('on click sub menu ', id);
    }

    render() {
        const {menus, menuIdx} = this.state;
        return (
            <div>
                <div className={"TabWrapper tab-wrapper"}>
                    {menus.map(
                        (menu,idx) =>
                            (<TabMenu
                                key={idx}
                                idx={idx}
                                menu={menu.name}
                                number={menus.length}
                                onClick={this.onClickMenu.bind(this)} />) )}
                </div>
                <WhiteSpace />
                {menus[menuIdx] && menus[menuIdx].subMenu &&
                <div className={"TabWrapper"}>
                    {menus[menuIdx].subMenu.map(
                        (menu,idx) =>
                            (<TabMenu
                                key={idx}
                                idx={idx}
                                menu={menu.name}
                                number={menus[menuIdx].subMenu.length}
                                onClick={this.onClickSubMenu.bind(this)} />) )}
                </div>}
                <WhiteSpace />
            </div>
        );
    }
}

export default TabWrapper;