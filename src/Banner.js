import React from 'react';
import bannerImage from '../src/source/img/common/btn_fixed_experience.png'
import {Link} from "react-router-dom";

function Banner(props) {
    return (
        <div>
            <div className="banner_kakao">
                <a href="https://api.happytalk.io/api/kakao/chat_open?yid=%40winkedu&amp;site_id=4000000177&amp;category_id=64405&amp;division_id=64406">
                    <div className="kakao">
                        <p>
                            실시간<br/>상담
                        </p>
                    </div>
                </a>

            </div>
            <Link to="/free-trial">
                <img src={bannerImage} alt="" className="content-img banner" />
            </Link>
        </div>
    );
}

export default Banner;