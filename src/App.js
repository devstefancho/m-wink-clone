import React, {Fragment} from "react";
import './server'
import HeaderWrapper from "./header";
import ContentsWrapper from "./contents";
import FooterWrapper from "./footer";
import { Layout } from "antd";
import './stylesheet/main.scss'
import Banner from "./Banner";

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
               <Layout>
                   <Header className="wrapper header-wrapper" >
                       <HeaderWrapper />
                   </Header>
                   <Content className="wrapper content-wrapper">
                       <ContentsWrapper />
                   </Content>
                   <Footer className="wrapper footer-wrapper " >
                       <FooterWrapper />
                   </Footer>
                   {this.state.banner && <Banner />}
               </Layout>
           </Fragment>
           )
   }
}


export default App;