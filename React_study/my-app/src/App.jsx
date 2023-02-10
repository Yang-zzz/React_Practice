import { useState, useReducer } from "react";
import Student from "./Student";
// useReducer는 useState보다 복잡한 데이터의 상태를 관리(업데이트)하고자 할때 사용함.
// useReducer는 2개의 인자를 받으며, 첫번째 인자는 reducer함수, 두번째는 초깃값을 넣어 사용할 수 있다.
// reducer 함수의 첫번째 아규먼트는 state로, useReducer 훅의 두번째 파라미터로 받은 초깃값의 상태를 담고있다.
// reducer 함수의 두번째 아규먼트, action은 변경하고자 하는 상태의 데이터를 받아온다.
// 그리고 return 값으로 변경된 상태를 전달한다.

// useReducer의 첫번째 파라미터 : reducer함수
const reducer = (state, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudnet = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudnet],
      };
    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

// useReducer의 두번째 파라미터 : 초깃값
const initialState = {
  count: 0,
  students: [],
};

function App() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  console.log(studentsInfo);
  // studentsInfo : 현재 데이터의 상태
  // dispatch : 변경 될(업데이트) action 데이터를 가지고 있음.

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-student", payload: { name } });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
}
export default App;
