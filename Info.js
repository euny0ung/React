import React from "react";

function Student({student, onRemove}){
    return(
        <div>
            <b>이름:{Student.name}</b>&nbsp;/&nbsp;
            <b>나이:{Student.age}</b>&nbsp;/&nbsp;
            <b>이메일:{Student.email}</b>&nbsp;/&nbsp;
            <button onClick={()=>onRemove(student.id)}>삭제</button>
            <hr/>
        </div>
    )
}

export default Student;