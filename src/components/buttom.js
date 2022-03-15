import { Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import './buttom.css';

function IbcButtom() {
    const dispatch = useDispatch()
    const [classNameInput, setClassNameInput] = useState('label');
    const [messageText, setMessageText] = useState([])
    const [warning, setWarning] = useState(<></>)

    function WarningEmpty() {
        message.warning("Сообщение не может быть пустым");
    };

    function Warning() {
        message.warning("Сообщение не может быть длинее 200 символов");
    };

    function Label() {
        if (classNameInput == 'ibc-focus' || messageText.length > 0) {
            return (
                <label className="ibc-focus">Напишите сообщение...</label>
            )
        } else {
            return (
                <label className="label">Напишите сообщение...</label>
            )
        }
    }

    function onChangeInput(e) {
        setMessageText(e.target.value)
        if (messageText.length < 1) {
            WarningEmpty()
        } if (messageText.length > 200) {
            Warning()
        }
    }

    const date = new Date().toISOString()

    useEffect(() => {
        /*dispatch({
            type: 'CREATE_MESSAGE',
            payload: [messageText, date],
        })*/
    }, [])


    return (
        <div className="buttom">
            <Input
                onFocus={() => setClassNameInput('ibc-focus')}
                onBlur={() => setClassNameInput('label')}
                value={messageText}
                onChange={onChangeInput}
            />
            {warning}
            <Label />
            <img src='.././img/emodji.png' alt='emodji' className='emodji' />
        </div>
    )
}

export default IbcButtom;