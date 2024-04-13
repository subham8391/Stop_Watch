import React, { useState } from 'react';
import Stopwatch from './Stopwatch';
import TimerWatch from './TimerWatch';

function Watch() {
    const [isTimerVisible, setIsTimerVisible] = useState(false);

    const toggleVisibility = () => {
        setIsTimerVisible(!isTimerVisible);
    };

    return (
        <>
            <div className="watch-container">
                <button onClick={toggleVisibility}>{isTimerVisible ? 'Stop Watch' : 'Timer Watch'}</button>
            </div>
            <div>
                {isTimerVisible ? <TimerWatch /> : <Stopwatch />}
            </div>
        </>
    );
}

export default Watch;
