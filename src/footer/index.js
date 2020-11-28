import React, {Fragment} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: { contact: []},
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
                <div className={"footer-contact"}>
                    <div>
                        { info
                        && info.contact
                        && info.contact.map( str =>
                            <div key={str}>
                                {str}
                            </div>)}
                    </div>
                    <div className="btn-vertical-align">
                            <button className="btn btn-call">전화연결</button>
                    </div>
                </div>
                    <div className={"footer-menus"}>
                        {/* menu에 링크를 붙이려고 우선 하드코딩 해둠 */}
                        { info
                        && info.menus
                        && info.menus.map( str =>{
                                if(str === "회사소개") {
                                   return (
                                       <div key={str} className="footer-menus_item" >
                                           <Link to="/client/mobile/company">
                                               {str}
                                           </Link>
                                       </div>
                                   )
                                }
                            if(str === "이용약관") {
                                return(
                                    <div key={str} className="footer-menus_item" >
                                        <a target="_blank" href="https://s.wink.co.kr/danbi_common/html/agreement.html">
                                            {str}
                                        </a>
                                    </div>
                                )
                            }
                            if(str === "개인정보처리방침") {
                                return(
                                    <div key={str} className="footer-menus_item" >
                                        <a target="_blank" href="https://s.wink.co.kr/danbi_common/html/privacy_policy.html">
                                            {str}
                                        </a>
                                    </div>
                                )
                                }
                        }
                        )}
                    </div>
                <div className={"footer footer-copyright"}>
                    { info
                        && info.copyright
                        && info.copyright.map( str =>
                        <div key={str} >
                            {str}
                        </div> )
                    }
                </div>
            </Fragment>
            )
    }
}

export default Footer;