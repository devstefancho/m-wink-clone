import React, {Fragment} from "react";
import './server'
import HeaderWrapper from "./header";
import ContentsWrapper from "./contents";
import FooterWrapper from "./footer";
import { Layout } from "antd";
import './stylesheet/main.scss'
import Banner from "./Banner";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DisplayBanner from "./contents/DisplayBanner/DisplayBanner";
import TabDivider from "./contents/TabDivider";
import DisplayContents from "./contents/DisplayContents";
import DisplayCompany from "./contents/DisplayCompany/DisplayCompany";


const {Header, Content, Footer} = Layout
class App extends React.Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
           banner: false
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
       // console.log('scrollY ', window.scrollY);
        let currentScrollY = window.scrollY;
        // console.log('current: ', currentScrollY);
        if(currentScrollY > 64) {
            this.setState({banner: true});
        }
        else {
            this.setState({banner: false});
        }
    }

    render() {
        return (
            <Fragment>
                <Router>
                    {this.state.banner && <Banner />}
                    <Layout>
                        <Link to="/">
                            <Header className="wrapper header-wrapper" >
                                <HeaderWrapper />
                            </Header>
                        </Link>
                        <Switch>
                            <Route exact path="/">
                                <Content className="wrapper content-wrapper">
                                    <ContentsWrapper banner={this.state.banner} />
                                </Content>
                            </Route>
                            <Route path="/free-trial">
                                <Content className="wrapper content-wrapper">
                                   <DisplayBanner banner={this.state.banner} />
                                </Content>
                            </Route>
                            <Route path="/client/mobile/company">
                                <Content className="wrapper content-wrapper">
                                    <DisplayCompany banner={this.state.banner} />
                                </Content>
                            </Route>
                        </Switch>
                        <Footer className="wrapper footer-wrapper " >
                            <FooterWrapper />
                        </Footer>
                    </Layout>
                    <TabDivider />
                </Router>
            </Fragment>
        )
    }
}


export default App;