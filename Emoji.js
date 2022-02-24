import React, {useState} from "react";

function Emoji({onRemove}){

    const [emoji, addEmoji]=useState(''); //현재 상태 초기화
    return(
        <div>
            <button onClick={()=>addEmoji(emoji+'😉')}>
                addSomeEmoji
            </button>
            <button onClick={()=>onRemove(emoji)}>
                deleteEmoji
            </button>
            <p>{emoji}</p>
        </div>
    );
}


export default Emoji;