import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './content.css';
import IbcMessage from "./message";
import IbcMessagesUsers from "./messagesUsers";

function IbcContent() {
    let messagesUsers = useSelector(store => store.message.messageUsers)
    let messages = useSelector(store => store.message.message)
    const dispatch = useDispatch()

    const message = messages.map((message) => {
        return <IbcMessage params={message} />
    });

    const messageUsers = messagesUsers.map((message) => {
        return <IbcMessagesUsers params={message} />
    });

    useEffect(() => {
        dispatch({
            type: 'ALL_MESSAGE',
        })
    }, []);


    return (
        <div className="content">
            {message}
            {messageUsers}
        </div>
    )
}

export default IbcContent;