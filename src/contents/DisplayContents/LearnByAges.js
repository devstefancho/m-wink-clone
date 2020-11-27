import React, {Fragment} from 'react';
import img1_s1 from '../../source/img/menu3/sub1/age-begin.jpg'
import img1_s2 from '../../source/img/menu3/sub2/age-middle.jpg'
import img1_s3 from '../../source/img/menu3/sub3/age-high.jpg'

function LearnByAges({subId}) {
    return (
        <Fragment>
            {subId === 0 && <img src={img1_s1} alt="" className="content-img"/>}
            {subId === 1 && <img src={img1_s2} alt="" className="content-img"/>}
            {subId === 2 && <img src={img1_s3} alt="" className="content-img"/>}
        </Fragment>
);
}

export default LearnByAges;