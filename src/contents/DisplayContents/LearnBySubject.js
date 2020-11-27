import React, {Fragment} from 'react';
import img1_s1 from '../../source/img/menu2/sub1/kor_header.png'
import img2_s1 from '../../source/img/menu2/sub1/section_01.jpg'
import img3_s1 from '../../source/img/menu2/sub1/section_02.png'
import img1_s2 from '../../source/img/menu2/sub2/math_header.png'
import img2_s2 from '../../source/img/menu2/sub2/section_01.jpg'
import img1_s3 from '../../source/img/menu2/sub3/header.png'
import img2_s3 from '../../source/img/menu2/sub3/section_01.png'
import img3_s3 from '../../source/img/menu2/sub3/section_02.jpg'
import img1_s4 from '../../source/img/menu2/sub4/reading.png'
import img2_s4 from '../../source/img/menu2/sub4/book-img-01.jpg'
import img3_s4 from '../../source/img/menu2/sub4/book-img-02.jpg'
import img4_s4 from '../../source/img/menu2/sub4/book-img-03.jpg'
import img5_s4 from '../../source/img/menu2/sub4/book-img-04.jpg'
import img1_s5 from '../../source/img/menu2/sub5/activity.jpg'

function LearnBySubject({subId}) {
    const korean_image = [img1_s1, img2_s1, img3_s1];
    const math_image = [img1_s2, img2_s2];
    const english_image = [img1_s3, img2_s3, img3_s3];
    const reading_image = [img1_s4, img2_s4, img3_s4, img4_s4, img5_s4];
    const activity_image = [img1_s5]
    console.log('submenu selection: ', subId)
    return (
        <Fragment>
            {subId === 0
            && korean_image.map(imgSrc =>
                <img src={imgSrc} alt="" className="content-img"/>)}
            {subId === 1
            && math_image.map(imgSrc =>
                <img src={imgSrc} alt="" className="content-img"/>)}
            {subId === 2
            && english_image.map(imgSrc =>
                <img src={imgSrc} alt="" className="content-img"/>)}
            {subId === 3
            && reading_image.map(imgSrc =>
                <img src={imgSrc} alt="" className="content-img"/>)}
            {subId === 4
            && activity_image.map(imgSrc =>
                <img src={imgSrc} alt="" className="content-img"/>)}
        </Fragment>
    );
}

export default LearnBySubject;