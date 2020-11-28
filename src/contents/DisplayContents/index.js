import React from 'react';
import Home from "./Home";
import LearnBySubject from "./LearnBySubject";
import LearnByAges from "./LearnByAges";
import Registration from "./Registration";
import Recruit from "./Recruit";

function DisplayContents({id, subId, banner}) {
    console.log('DisplayContents')
    console.table({id, subId})
    return (
        <div className={banner ? "sticky_content" : ""}>
            {id === 0 && <Home />}
            {id === 1 && <LearnBySubject subId={subId} />}
            {id === 2 && <LearnByAges subId={subId}/>}
            {id === 3 && <Registration />}
            {id === 4 && <Recruit />}
        </div>
    );
}

export default DisplayContents;