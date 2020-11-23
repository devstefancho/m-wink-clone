import React, {Fragment} from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Fragment>
                <div>
                    <img className="Logo" src="https://s.wink.co.kr/mobile/new_images/common/logo.png" alt="Wink Logo"/>
                </div>
            </Fragment>
            )
    }

}

export default Header;