import React,{useState,useRef} from 'react'

function TimerWatch() {
    const[initialTime,setInitialTime]=useState(0);
    const[time,setTime]=useState(0);
    const[isRunning,setIsRunning]=useState(false);
    const[lapTime,setLapTime]=useState([]);
    const intervalRef=useRef(null);

    const start=()=>{
        if(!isRunning){
            setIsRunning(true);
            intervalRef.current=setInterval(()=>{
                setTime((prevtime)=>{
                    if(prevtime === 0){
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prevtime-1;
                })
            },1000);
        }
    }

    const stop =()=>{
        clearInterval(intervalRef.current);
        setIsRunning(false);
    }

    const reset=()=>{
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setInitialTime(0);
        setTime(0);
        setLapTime([]);
    }

    const lap=()=>{
        setLapTime((prevlapTime)=>[...prevlapTime,time]);
    }

    const handleChange=(e)=>{
        setInitialTime(parseInt(e.target.value,10)*60);
        setTime(parseInt(e.target.value,10)*60);
    }

    const timerwatch=(time)=>{
        const hours=Math.floor(time/3600);
        const mins=Math.floor((time%3600)/60);
        const seconds=time%60;

        return `${hours<10 ? '0' + hours:hours}:${mins<10?'0'+mins:mins}:${seconds<10?'0'+seconds:seconds}`;
    }
  return (
    <>
     <div className="timer-container">
        <h1>Timer Watch</h1>
        <div className="timer">
            <input type="number" value={initialTime/60} onChange={handleChange} placeholder='Enter Time in Minutes' />
            <div className="timer-buttons">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
                <button onClick={lap}>Lap</button>
            </div>
            <h1>{timerwatch(time)}</h1>
        </div>
        <div className="lapTime">
            <h2>Lap Times:</h2>
            <ul>
                {lapTime.map((lapTime,index)=>(
                    <li key={index}>{timerwatch(lapTime)}</li>
                ))}
            </ul>
        </div>
     </div>
    </>
  )
}

export default TimerWatch