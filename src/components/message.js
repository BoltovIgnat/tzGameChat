import React from "react";
import './message.css';

function IbcMessage(props) {
    let today, text
    if (props.params === undefined) {
        text = ''
        today = "";
    }else{
        text = props.params.text
        today = props.params.createdAt.slice(11, 16).replace('T', ' ');
    }

    return (
        <div>
            <div className="message">
                {text}
            </div>
            <div className="block-time-messsage">
                <span className="time-message">{today}</span>
            </div>
        </div>
    )
}

export default IbcMessage;