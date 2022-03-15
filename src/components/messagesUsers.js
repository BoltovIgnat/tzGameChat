import React from "react";
import './message.css';


function IbcMessagesUsers(props) {
    function Rating() {
        return Math.floor(Math.random() * 11);
    }

    let today
    if (props === undefined) {
        today = "";
    }else{
        today = props.params.createdAt.slice(11, 16).replace('T', ' ');
    }
    console.log('today', today);

    return (
        <div>
            <div className="messagesUsers">
                <div>
                    <img src='/img/BTC.png' alt='BTC' />
                    <span className="name">{props.params.from}</span>
                    <img src='/img/admin.png' alt='admin' />
                    <span className="rating"><Rating /></span>
                </div>
                <div>
                    <span className="text">{props.params.text}</span>
                </div>
            </div>
            <div className="block-time">
                <span className="time">{today}</span>
            </div>
        </div>
    )
}

export default IbcMessagesUsers;