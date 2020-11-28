import React from 'react';
import bannerImage from '../src/source/img/common/btn_fixed_experience.png'
import {BrowserRouter as Router, Link} from "react-router-dom";

function Banner(props) {
    return (
        <div>
            <Link to="/free-trial">
                <img src={bannerImage} alt="" className="content-img banner" />
            </Link>
        </div>
    );
}

export default Banner;