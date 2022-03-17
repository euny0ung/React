import React from 'react';
import './Post.css';
import img from "./북북.jpg"


const Post=()=>(

    <div className='Post'>
        <img id='Face' width={400} src={img} alt='people'/>
                <p style={{paddingTop: '1rem', textAlign: 'left', paddingLeft: '2rem', fontSize: '1rem', color:'steelblue'}}>
                원장
                </p>
                <p style={{textAlign: 'left', paddingLeft: '1.8rem'}}>
                <b>북극곰</b><small>  교수</small>
                </p>
                <p style={{ textAlign: 'left', paddingLeft: '2rem', paddingBottom: '2rem', fontSize: '1rem', color: 'gray', whiteSpace:'pre'}}>
                    북극대학교 북극과
                </p>
  
            
    </div>
)

export default Post;