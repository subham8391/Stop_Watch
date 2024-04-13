import React,{useState,useRef} from 'react'

function Stopwatch() {
    const [isRunning,setIsRunning]=useState(false);
    const [time,setTime]=useState(0);
    const intervalRef=useRef(null);

    const start=()=>{
        if(!isRunning){
            setIsRunning(true);
            intervalRef.current=setInterval(()=>{
                setTime((prevTime)=>prevTime+1);
            },1000);
        }
    }

    const stop=()=>{
        clearInterval(intervalRef.current);
        setIsRunning(false);
    }

    const reset=()=>{
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    }

    const stopwatch=(time)=>{
        const hours=Math.floor(time/3600);
        const mins=Math.floor((time%3600)/60);
        const seconds=time%60;

        return `${hours<10 ? '0' + hours:hours}:${mins<10?'0'+mins:mins}:${seconds<10?'0'+seconds:seconds}`;
    }
  return (
    <>
     <div className="stopwatch-container">
        <h1>Stop Watch</h1>
        <div className="stop-watch">
        <h1>{stopwatch(time)}</h1>
        <div className="stopwatch-buttons">
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
        </div>
     </div>
    </>
  )
}

export default Stopwatch