import React from 'react';
import TabMenu from "./TabMenu";

const menus = [
    {name: "홈"},
    {name: "과목별 학습", subMenu: [
            {name: "한글 국어"},
            {name: "수학 연산"},
            {name: "영어"},
            {name: "독서"},
            {name: "선택 활동"},
        ]},
    {name: "연령별 학습", subMenu: [
            {name: "4~6세"},
            {name: "7세"},
            {name: "8세"}
        ]},
    {name: "유료학습 신청"},
    {name: "윙크선생님 모집"},
];
const WhiteSpace = (props) => {
    return (
        <div style={{height:`${10}px`}} className="Divider" />
    )
}

class TabWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            menuIdx: 0
        };
    }

    onClickMenu(id) {
        console.log(id);
        this.setState({menuIdx: id});
    }

    onClickSubMenu(id) {
        console.log('on click sub menu ', id);
    }

    render() {
        const {menuIdx} = this.state;
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
                {menus[menuIdx].subMenu &&
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