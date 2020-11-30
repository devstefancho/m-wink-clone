import React, {Fragment} from 'react';
import img1_s1 from '../../source/img/menu3/sub1/age-begin.jpg'
import img1_s2 from '../../source/img/menu3/sub2/age-middle.jpg'
import img1_s3 from '../../source/img/menu3/sub3/age-high.jpg'
import TabDivider from "../TabDivider";
import {Route, Switch} from "react-router-dom";

function LearnByAges({subId}) {
    return (
        <Fragment>
            <TabDivider />
            <Switch>
                <Route path="/age/begin">
                    <img src={`../../../${img1_s1}`} alt="" className="content-img"/>
                </Route>
                <Route path="/age/middle">
                    <img src={`../../../${img1_s2}`} alt="" className="content-img"/>
                </Route>
                <Route path="/age/high">
                    <img src={`../../../${img1_s3}`} alt="" className="content-img"/>
                </Route>
            </Switch>
        </Fragment>
    );
}

export default LearnByAges;