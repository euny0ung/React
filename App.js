import React from 'react';
import info from './Info';
import './App.css';
import moment from 'moment';
import { render } from '@testing-library/react';



function App(){
  const name='EunYoung';
  let now=moment();

  return (
    <div className="react">
      <p className='bigLetter'>Hello {name}! Today is {now.format("MM/DD")}</p>
      <p>The current time is {now.format("HH:mm:ss")}</p>
    </div>


    );
 
}



export default App;
