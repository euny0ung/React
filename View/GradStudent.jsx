import React from 'react';


let style={
    marginTop:"3rem",
    fontWeight: "bold"
}

let container={
    border: '0.1rem solid lavender',
    marginTop: '2rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    padding: '5rem'
}

// let pic={
//     border: '0.1rem solid lavender',
//     width:'10rem',
//     height: '10rem',
// }

function GradStudent(){
    return(
        <div className='container'>
            <h1 style={style}>대학원생</h1>
            <div class="row" >
            <div class="col" style={container}>
                <div class="firstP">dddd</div>
            </div>
            <div class="col" style={container}></div>
            <div class="w-100"></div>
            <div class="col" style={container}></div>
            <div class="col" style={container}></div>
  </div>
            
        </div>
    )
}

export default GradStudent;