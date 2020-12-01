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
    }
    // update sub id from detailButton component
    onClickNext() {
       const nextSubId = this.state.index.subId + 1;
       this.setState({index: { id: this.state.index.id ,subId: nextSubId }})
    }

    render() {
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
                    onClick={this.onClickNext.bind(this)}
                />
            </Fragment>
            )
    }

}

export default Contents;