import React, {Fragment, useEffect, useState} from 'react';
import TabMenu from "../TabMenu";
import img1 from '../../source/img/banner/section_banner.jpg'
import img2 from '../../source/img/banner/bg_free_study_01.png'
import {Icon} from "antd-mobile";


function DisplayBanner(props) {
    const [menus, setMenus] = useState([])
    useEffect(()=>{
        fetch("/api/banner")
            .then(res => res.json())
            .then(json => { setMenus(json.menus);
                console.log('json: ', json)
            })
        console.log('menus: ', menus)
    }, [])

    return (
    <Fragment>
        <div className="tab-wrapper">
            {menus.map(menu =>
                <TabMenu
                    key={menu}
                    menu={menu}
                    number={3} />
                    )}
        </div>
        <div><img src={img1} alt="" className="content-img"/></div>
        <div><img src={img2} alt="" className="content-img"/></div>
    </Fragment>
);
}

export default DisplayBanner;