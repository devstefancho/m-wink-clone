import React, {useState} from 'react';

function DetailButton({contents, onClick}) {
    return (
        <div className="detail_button_wrap">
            <div
                onClick={onClick}
                className="detail_button">
                {contents}
            </div>
        </div>
    );
}

export default DetailButton;