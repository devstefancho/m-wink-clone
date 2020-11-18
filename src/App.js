import React, {Fragment} from "react";
import './style.css'
import {Button} from "./components/Button";

class App extends React.Component {
   render() {
       return (
           <Fragment>
               <div className="Title">TEST</div>
               <Button />
           </Fragment>
           )
   }
}

export default App;