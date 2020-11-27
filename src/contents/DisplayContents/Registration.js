import React, {Fragment} from 'react';
import img1 from '../../source/img/menu4/wink_bot.png'
import img2 from '../../source/img/menu4/section_01.png'
import img3 from '../../source/img/menu4/section_02.png'

function Registration(props) {
    return (
        <Fragment>
            <img src={img1} alt="" className="content-img" />
            <img src={img2} alt="" className="content-img" />
            <img src={img3} alt="" className="content-img" />
        </Fragment>
    );
}

export default Registration;