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
import DisplayBanner from "./contents/DisplayBanner.js/DisplayBanner";


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
        if(currentScrollY > 70) {
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
                    <Link to="/free-trial">
                        {this.state.banner && <Banner />}
                    </Link>

                    <Layout>
                        <Header className="wrapper header-wrapper" >
                            <HeaderWrapper />
                        </Header>
                        <Switch>
                            <Route exact path="/">
                                <Content className="wrapper content-wrapper">
                                    <ContentsWrapper />
                                </Content>
                            </Route>
                            <Route path="/free-trial">
                                <Content className="wrapper content-wrapper">
                                   <DisplayBanner />
                                </Content>
                            </Route>
                        </Switch>
                        <Footer className="wrapper footer-wrapper " >
                            <FooterWrapper />
                        </Footer>
                    </Layout>

                </Router>
            </Fragment>
        )
    }
}


export default App;