import React, {Fragment} from 'react';
import TabWrapper from "./TabWrapper";
import DisplayContents from "./DisplayContents";

class Contents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [],
            index: {
                id: 0,
                subId: 0
            }
        }
    }
    componentDidMount() {
        fetch("/api/menus")
            .then(res => res.json())
            .then(json => {
                console.log('response json: ', json)
                this.setState({menus: json})
            })
    }
    // id, subId setting
    onClickMenuRoot(id, subId) {
        this.setState({index: {id: id, subId: subId}})
        console.table({id, subId})
    }
    render() {
        // 아래는 됨
        console.log('==Q== Container Render menus', this.state.menus);
        // return의 props로는 안넘가는 것 처럼 보임.
        this.banner = this.props.banner
        const {menus, index} = this.state;
        return(
            <Fragment>
                <TabWrapper
                    menus={menus}
                    id={index.id}
                    subId={index.subId}
                    onClick={this.onClickMenuRoot.bind(this)}
                    banner={this.banner}
                />
                <DisplayContents
                    id={index.id}
                    subId={index.subId}
                    banner={this.banner}
                />
            </Fragment>
            )
    }

}

export default Contents;