import React, {Fragment} from 'react';
import logo from '../source/img/common/logo.png'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Fragment>
                <div>
                    <img className={"logo"} src={logo} alt="Wink Logo"/>
                </div>
            </Fragment>
            )
    }

}

export default Header;