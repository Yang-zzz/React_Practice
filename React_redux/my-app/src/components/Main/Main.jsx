import React from "react";
import TodoList from "../TodoList/TodoList";
import * as S from "./StyleMain";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/module/todo";

const Main = () => {
  const [todoInput, setTodoInput] = useState(""); // input 입력값
  const dispatch = useDispatch();
  console.log(todoInput);
  // 랜더링이 되고있는지 확인하기 위한 코드

  const inputHandle = (e) => {
    setTodoInput(e.target.value);
  };
  const ListAddHadle = () => {
    setTodoInput("");
    dispatch(addTodo({ text: todoInput }));
    //버튼을 누를 때마다 랜더링된다고 생각하고있는데
    // 11번째 코드를 통해 input에 value가 바뀔대마다 렌더링되는 것을 확인할 수 있음.
    // 왜그런지 이유를 확인해야함.
  };
  return (
    <S.MainWrap>
      <S.MainHeader>
        <S.MainInput onChange={inputHandle} value={todoInput} />
        <S.ListAddBtn onClick={ListAddHadle}>등록</S.ListAddBtn>
      </S.MainHeader>
      <TodoList />
    </S.MainWrap>
  );
};

export default Main;
