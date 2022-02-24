import React, {useState, useEffect} from 'react';
import moment from 'moment';

function Clock(){
    let timer=null;  //null?
    const [time, setTime]=useState(moment());
    useEffect(()=>{
        timer=setInterval(()=>{
            setTime(moment());
        }, 1000);
        return()=>{
            clearInterval(timer);
        };
    }, [])

    return(
        <div>
            <div className='date'>
                {time.format('YYYY-MM-DD')}
            </div>
            <div className='time'>
                {time.format('HH-mm-ss')}
            </div>
        </div>
    );
}

export default Clock;