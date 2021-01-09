import React from "react";
import s from './Message.module.css'


type messageBlockPropsType = {
    avatar: string
    name: string
    message: string
    time: string

}


function Message(props: messageBlockPropsType) {
    return (
        <div className={s.message}  >
            <div className={s.avatarBlock}><img src={props.avatar} alt=""/></div>
            <div className={s.messageBlock}>
                <div className={s.name}>{props.name}</div>
                <div className={s.textMessage}>{props.message}
                    <div className={s.timeMessage}>{props.time}</div>
                </div>
            </div>
        </div>
    );
}

export default Message;
