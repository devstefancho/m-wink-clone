import React, {useState} from 'react';
import {Link} from "react-router-dom";

function DetailButton({contents, onClick, url}) {
    return (
        <Link to={url}>
            <div className="detail_button_wrap">
                <div
                    onClick={onClick}
                    className="detail_button">
                    {contents}
                </div>
            </div>
        </Link>
    );
}

export default DetailButton;