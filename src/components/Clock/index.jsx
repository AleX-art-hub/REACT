import { addMilliseconds, startOfYear, format } from 'date-fns';
import React, {useState, useEffect} from 'react';
import styles from './Clock.module.scss';

function Clock(){
    const [time, setTime] = useState(new Date(0,0,0,0,0,0,0,0));
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        if(isRunning){
            const timeoutId = setInterval(()=>{
                setTime((prevValue) => addMilliseconds(prevValue,1000));
            }, 1000);
            return () =>{
                clearInterval(timeoutId);
            };
        }
    }, [isRunning, time]);
    return(
        <div>
            <h1>{format(time, 'HH:mm:ss')}</h1>
            <button onClick={() => setIsRunning(!isRunning)}>
                 {isRunning ? 'stop' : 'start'}
            </button>
            <button onClick={()=> {setTime(startOfYear(time));}}>reset</button>
        </div>
    );
}

export default Clock;