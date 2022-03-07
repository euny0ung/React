import React, { useState, useRef } from "react";
import Student from "./Student";
import CreateStudent from "./CreateStudent";

function StudentList() {
    const [students, setStudents] = useState([
        {
            id: "st001",
            name: "홍길동",
            age: 28,
            email: "hong@gmail.com"
        },
        {
            id: "st002",
            name: "조은영",
            age: 30,
            email: "jo@gmail.com"
        },
        {
            id: "st003",
            name: "정재현",
            age: 29,
            email: "suga@gmail.com"
        },
        {
            id: "st004",
            name: "김민지",
            age: 28,
            email: "mj@gmail.com"
        },
        {
            id: "st005",
            name: "박지민",
            age: 25,
            email: "jm@gmail.com"
        },
        {
            id: "st006",
            name: "백은지",
            age: 25,
            email: "b@gmail.com"
        },
        {
            id: "st007",
            name: "송누리",
            age: 23,
            email: "s@gmail.com"
        }
    ]);

    const nextId = useRef(8);

    //입력상자에서 사용할 값을 state로 관리
    const [inputs, setInputs] = useState({
        name: "",
        age: "",
        email: ""
    });

    //비구조화 할당 - state값을 각각 변수에 담기
    const { name, age, email } = inputs;

    //데이터 변경함수
    const onDataChange = (e) => {
        //여기서의 name과 value는 값이 변경되는 input태그의 속성을 비구조화할당
        const { name, value } = e.target;

        //state값 변경
        setInputs({
            ...inputs, //변경되는 것 외의 나머지 속성값을 의미하는 나머지 패턴
            [name]: value //내부에서 밖의 변수를 속성명으로 사용시 [변수명]
        });
    };

    const onCreate = () => {
        //새롭게 배열 데이터를 추가하는 함수
        const student = {
            id: "st00" + nextId.current,
            name,
            age,
            email
        };
        setStudents([...students, student]);

        setInputs({
            name: "",
            age: "",
            email: ""
        });
        nextId.current += 1;
    };

    return (
        <div>
            <CreateStudent
                name={name}
                age={age}
                email={email}
                onDataChange={onDataChange}
                onCreate={onCreate}
            />
            {students.map((student) => (
                <Student student={student} key={student.id} />
            ))}
        </div>
    );
}

export default StudentList;
