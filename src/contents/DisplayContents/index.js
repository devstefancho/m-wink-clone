import React from 'react';
import Home from "./Home";
import LearnBySubject from "./LearnBySubject";
import LearnByAges from "./LearnByAges";
import Registration from "./Registration";
import Recruit from "./Recruit";
import HomeCarousel from "./HomeCarousel";
import { Route, Switch } from "react-router-dom";

function DisplayContents({id, subId, banner, onClick}) {
    console.log('DisplayContents')
    console.table({id, subId})
    return (
        <div className={banner ? "sticky_content" : ""}>
            <Switch>
                <Route exact path="/">
                    <HomeCarousel />
                    <Home />
                </Route>
                <Route path="/subject">
                    <LearnBySubject subId={subId} onClick={onClick} />
                </Route>
                <Route path="/age">
                    <LearnByAges subId={subId}/>
                </Route>
                <Route path="/apply">
                    <Registration />
                </Route>
                <Route path="/teacher">
                    <Recruit />
                </Route>
            </Switch>
        </div>
    );
}

export default DisplayContents;