import React from 'react';
import Home from "./Home";
import LearnBySubject from "./LearnBySubject";
import LearnByAges from "./LearnByAges";
import Registration from "./Registration";
import Recruit from "./Recruit";
import HomeCarousel from "./HomeCarousel";

function DisplayContents({id, subId, banner, onClick}) {
    console.log('DisplayContents')
    console.table({id, subId})
    return (
        <div className={banner ? "sticky_content" : ""}>
            {id === 0 && <HomeCarousel />}
            {id === 0 && <Home />}
            {id === 1 && <LearnBySubject subId={subId} onClick={onClick} />}
            {id === 2 && <LearnByAges subId={subId}/>}
            {id === 3 && <Registration />}
            {id === 4 && <Recruit />}
        </div>
    );
}

export default DisplayContents;