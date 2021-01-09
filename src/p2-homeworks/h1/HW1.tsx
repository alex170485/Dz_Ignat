import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Алекс",
    message: "привет как у тебя сегодня дела? Где ты живешь?Сколько это будет продолжаться? Чем занимаешься? какое у тебя гражданство? что собираешься делать вечером? Какие планы на новый год? ",
    time: "22:00",

};


function HW1() {
    return (
        <div>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}

            />
        </div>
    );
}

export default HW1;
