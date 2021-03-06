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
import {company, experience, main} from "./router";


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
        window.addEventListener('scroll', this.handleScroll, true);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let currentScrollY = window.scrollY;
        let banner = this.state.banner;
        // down scroll
        if(!banner && currentScrollY > 64 ) {
            this.setState({banner: true});
        }
        // up scroll
        else if(banner && currentScrollY < 64) {
            this.setState({banner: false});
        }
    }

    render() {
        return (
            <Fragment>
                <Router basename="/client/mobile">
                    {this.state.banner && <Banner />}
                    <Layout>
                        <Link to="/">
                            <Header className="wrapper header-wrapper" >
                                <HeaderWrapper />
                            </Header>
                        </Link>
                        <Switch>
                            <Route path={experience}>
                                <Content className="wrapper content-wrapper">
                                   <DisplayBanner banner={this.state.banner} />
                                </Content>
                            </Route>
                            <Route path={company}>
                                <Content className="wrapper content-wrapper">
                                    <DisplayCompany banner={this.state.banner} />
                                </Content>
                            </Route>
                            <Route path={main}>
                                <Content className="wrapper content-wrapper">
                                    <ContentsWrapper banner={this.state.banner} />
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