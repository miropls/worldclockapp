import { useState, useEffect } from "react";

const Clock = () => {
const clk = new Date();
let timezone = "Helsinki (UTC +3, EEST)";
let hour = clk.getHours().toString();
let min = clk.getMinutes().toString();
let sec = clk.getSeconds().toString();

if(hour.length <= 1) {
    hour = `0${hour}`;
} else {
    hour = clk.getHours();
}

if(min.length <= 1) {
    min = `0${min}`;
} else {
    min = clk.getMinutes();
}

if(sec.length <= 1) {
    sec = `0${sec}`;
} else {
    sec = clk.getSeconds();
}
  
const aika = `${hour}:${min}:${sec}`;

const [time, setTime] = useState(clk.getDate())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => aika)
        }, 1000);
        return () => clearInterval(interval)
    }, [aika]);


    return (
        <div className="wrapper">
            <h1 className="header">Current time</h1>
            <h1 className="current-time">{time}</h1>
            <h2 className="current-timezone">Current timezone displayed: {timezone}</h2>
        </div>
    );
}

export default Clock;
