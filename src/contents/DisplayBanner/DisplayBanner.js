import React, {Fragment, useEffect, useState} from 'react';
import TabMenu from "../TabMenu";
import img1 from '../../source/img/banner/section_banner.jpg'
import img2 from '../../source/img/banner/bg_free_study_01.png'
import motherOn from '../../source/img/banner/mother_on.png'
import motherOff from '../../source/img/banner/mother_off.png'
import fatherOn from '../../source/img/banner/father_on.png'
import fatherOff from '../../source/img/banner/father_off.png'
import grandmaOn from '../../source/img/banner/grand_mother_on.png'
import grandmaOff from '../../source/img/banner/grand_mother_off.png'
import grandpaOn from '../../source/img/banner/grand_father_on.png'
import grandpaOff from '../../source/img/banner/grand_father_off.png'
import otherOn from '../../source/img/banner/etc_on.png'
import otherOff from '../../source/img/banner/etc_off.png'
import {Input, Badge} from "antd";


function DisplayBanner({banner}) {
    const [menus, setMenus] = useState([])
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])
    const [process, setProcess] = useState([])
    const [label, setLabel] = useState({})
    const [placeholder, setPlaceholder] = useState({})
    const [information, setInformation] = useState({})
    const [parentImage, setParentImage] = useState('')

    useEffect(()=>{
        fetch("/api/banner")
            .then(res => res.json())
            .then(json => { setMenus(json.menus);
                console.log('json: ', json)
                setTitle(json.title);
                setDescription(json.description);
                setProcess(json.process);
                setLabel(json.label);
                setPlaceholder(json.placeholder);
                setInformation(json.information);
            })
        console.log('menus: ', menus)
    }, [])

    const onClickImage = (who) => () => {
        setParentImage(who);
        console.log('who: ', who);
    }

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
            <img src={`../../${img1}`} alt="" className="content-img"/>
            <img src={`../../${img2}`} alt="" className="content-img"/>
        </div>
        <h2 className="experience-title">
            {title}
        </h2>
        <div className="experience-box">
            {description.map((str) => (str === "br" ? <br key={str} /> : str))}
        </div>
        <div className="experience-box">
            <div className="flexbox input-form-single">
                <label htmlFor=""><Badge dot>{label.parentName}</Badge></label>
                <Input type="text" placeholder={placeholder.parentName} />
            </div>
            <div>
                <Badge dot>{label.parent}</Badge>
            </div>
            <div className="flexbox">
                {parentImage === "mother"
                    ? <img src={`../../${motherOn}`} alt="" className=""/>
                    : <img src={`../../${motherOff}`} alt="" className="" onClick={onClickImage("mother")}/>
                }
                {parentImage === "father"
                    ? <img src={`../../${fatherOn}`} alt="" className=""/>
                    : <img src={`../../${fatherOff}`} alt="" className="" onClick={onClickImage("father")}/>
                }
                {parentImage === "grandma"
                    ? <img src={`../../${grandmaOn}`} alt="" className=""/>
                    : <img src={`../../${grandmaOff}`} alt="" className="" onClick={onClickImage("grandma")}/>
                }
                {parentImage === "grandpa"
                    ? <img src={`../../${grandpaOn}`} alt="" className=""/>
                    : <img src={`../../${grandpaOff}`} alt="" className="" onClick={onClickImage("grandpa")}/>
                }
                {parentImage === "other"
                    ? <img src={`../../${otherOn}`} alt="" className=""/>
                    : <img src={`../../${otherOff}`} alt="" className="" onClick={onClickImage("other")}/>
                }
            </div>
            <div>
                <Badge dot>{label.call}</Badge>
                <div>{information.call}</div>
            </div>

        </div>
    </Fragment>
    );
}

export default DisplayBanner;