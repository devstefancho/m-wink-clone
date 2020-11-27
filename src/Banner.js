import React from 'react';
import bannerImage from '../src/source/img/common/btn_fixed_experience.png'

function Banner(props) {
    return (
        <div>
            BANNER IMAGE
            <img src={bannerImage} alt="" className="content-img banner" />
        </div>
    );
}

export default Banner;