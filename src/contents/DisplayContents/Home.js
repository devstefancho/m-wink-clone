import React, {Fragment} from 'react';
import img1 from '../../source/img/menu1/main_image_01.jpg'
import img2 from '../../source/img/menu1/main_image_02.jpg'
import img3 from '../../source/img/menu1/main_image_03_top.png'
import img4 from '../../source/img/menu1/main_image_03_bottom.png'

function Home(props) {
    return (
        <Fragment>
            <img src={`../../${img1}`} alt="" className="content-img" />
            <img src={`../../${img2}`} alt="" className="content-img" />
            <img src={`../../${img3}`} alt="" className="content-img" />
            <img src={`../../${img4}`} alt="" className="content-img" />
        </Fragment>
    );
}

export default Home;