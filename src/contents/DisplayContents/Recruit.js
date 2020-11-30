import React, {Fragment} from 'react';
import img1 from '../../source/img/menu5/teacher_m.jpg'

function Recruit(props) {
    return (
        <Fragment>
            <img src={`../../${img1}`} alt="" className="content-img" />
        </Fragment>
    );
}

export default Recruit;