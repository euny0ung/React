import React from "react";

function CreateStudent({ name, age, email, onDataChange, onCreate }) {
    const style = {
        width: "600px",
        margin: "20px",
        padding: "10px",
        border: "3px solid black"
    };

    return (
        <div style={style}>
            <input
                type="text"
                name="name"
                placeholder="이름입력"
                onChange={onDataChange}
                value={name}
            />
            &nbsp;&nbsp;
            <input
                type="text"
                name="age"
                placeholder="나이입력"
                onChange={onDataChange}
                value={age}
            />
            &nbsp;&nbsp;
            <input
                type="text"
                name="email"
                placeholder="이메일입력"
                onChange={onDataChange}
                value={email}
            />
            &nbsp;&nbsp;
            <button onClick={onCreate}>추가</button>
        </div>
    );
}

export default CreateStudent;
