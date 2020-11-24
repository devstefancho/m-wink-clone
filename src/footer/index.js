import React, {Fragment} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
        }
    }
    componentDidMount() {
        fetch("/api/footer")
            .then(response => {
                console.log('footer: ', response);
                return response.json();
            })
            .then(json => {
                console.log('footer json',json)
                this.setState({info: json})
            })
    }
    // 앞에 이렇게 줄줄이 붙여주지 않으면, undefined에러가 발생하는데,
    // Didmount에서 데이터는 이미 다 갖고 오는데 이유가 있는건지?
    render() {
        const {info} = this.state;
        return(
            <Fragment>
                <div>{ info
                && info.contact
                && info.contact.map( str =>
                    <div
                        key={str}
                        className={"footer footer-contact"}>
                        {str}
                    </div>)}
                </div>
                <Router>
                    <div className={"footer footer-menus"}>
                        { info
                        && info.menus
                        && info.menus.map( str =>
                            <div key={str} >
                                <Link>
                                    {str}
                                </Link>
                            </div>
                        )}
                    </div>
                </Router>
                <div>
                    { info
                        && info.copyright
                        && info.copyright.map( str =>
                        <div
                            key={str}
                            className={"footer footer-copyright"}>
                            {str}
                        </div> )
                    }
                </div>
            </Fragment>
            )
    }
}

export default Footer;