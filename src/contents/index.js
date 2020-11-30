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
    // update sub id from detailButton component
    onClickNext() {
       const nextSubId = this.state.index.subId + 1;
       this.setState({index: { id: this.state.index.id ,subId: nextSubId }})
        // console.log('subId return', subId);
        console.log('go to next ? : ', nextSubId);
    }

    render() {
        console.log('==Q== Container Render menus', this.state.menus);
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