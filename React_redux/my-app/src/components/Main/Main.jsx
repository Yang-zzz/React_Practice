import React from "react";
import TodoList from "../TodoList/TodoList";
import * as S from "./StyleMain";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/module/todo";

const Main = () => {
  const [todoInput, setTodoInput] = useState(""); // input 입력값
  const [ListAdd, setListAdd] = useState([]); // input 입력값 배열추가
  const dispatch = useDispatch();

  console.log(todoInput);

  const inputHandle = (e) => {
    setTodoInput(e.target.value);
  };
  const ListAddHadle = () => {
    let ListArray = [...ListAdd];
    ListArray.push(todoInput);
    setListAdd(ListArray);
    setTodoInput("");
    dispatch(addTodo({ text: ListArray }));
  };
  return (
    <S.MainWrap>
      <S.MainHeader>
        <S.MainInput onChange={inputHandle} value={todoInput} />
        <S.ListAddBtn onClick={ListAddHadle}>등록</S.ListAddBtn>
      </S.MainHeader>
      <TodoList ListAdd={ListAdd} setListAdd={setListAdd} />
    </S.MainWrap>
  );
};

export default Main;
