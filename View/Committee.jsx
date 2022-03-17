import React from 'react';
import Post from './Post'

// const Committee=(props)=>(
//     <div>
//         <h1>운영 위원회입니다.</h1>
//     </div>
// )

let style={
    marginTop:"3rem",
    fontWeight: "bold"
}

function Committee(){
    return(
        <div className='Committee'>
            <p></p>
           
            <h1 style={style}>운영위원회</h1>
            <Post/>
        </div>
    )
}

export default Committee;