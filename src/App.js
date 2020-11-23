import React, {Fragment} from "react";
import './server'
import HeaderWrapper from "./header";
import ContentsWrapper from "./contents";
import FooterWrapper from "./footer";
import { Layout } from "antd";
import './stylesheet/main.scss'

const {Header, Content, Footer} = Layout
class App extends React.Component {
   render() {
       return (
           <Fragment>
               <Layout>
                   <Header className="HeaderWrapper" >
                       <HeaderWrapper />
                   </Header>
                   <Content className="ContentWrapper">
                       <ContentsWrapper />
                   </Content>
                   <Footer className="FooterWrapper" >
                       <FooterWrapper />
                   </Footer>
               </Layout>
           </Fragment>
           )
   }
}


export default App;