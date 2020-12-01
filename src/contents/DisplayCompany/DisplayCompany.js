import React, {Fragment, useEffect, useState} from 'react';
import TabMenu from "../TabMenu";


const img1 = "https://s.wink.co.kr/mobile/new_images/company/section_01.jpg"
const img2 = "https://s.wink.co.kr/mobile/1.1.0/company/section_02_0520.jpg"
function DisplayCompany({banner}) {
    const [menus, setMenus] = useState([])

    useEffect(()=>{
        fetch("/api/company")
            .then(res => res.json())
            .then(json => { setMenus(json.menus);
                console.log('company json: ', json)
            })
    }, [])
    return (
        <Fragment>
            <div className={banner ? "tab-wrapper sticky" : "tab-wrapper"}>
                {menus.map(menu =>
                    <TabMenu
                        key={menu}
                        menu={menu}
                        number={3} />
                )}
            </div>
            <div className={banner ? "sticky_content" : ""}>
                <img src={img1} alt="" className="content-img"/>
                <img src={img2} alt="" className="content-img"/>
            </div>
        </Fragment>
    );
}

export default DisplayCompany