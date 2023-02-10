import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
    const now = new Date().getTime();
    let timeToCount = 0;
    const distance = timeToCount - now;
    const handleStartTimer = (event) => {
        alert('Clicked!');
    }
    return (
        <>
            <div>{now}</div>
            <input type="submit"
                value="Start"
                onClick={(event) => handleStartTimer(event)} />
        </>
    )
};
export default CountDownTimer;