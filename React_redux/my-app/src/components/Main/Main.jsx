import React from "react";
import TodoList from "../TodoList/TodoList";
import * as S from "./StyleMain";
import { useState } from "react";

const Main = () => {
  const [todoInput, setTodoInput] = useState("");
  const [ListAdd, setListAdd] = useState([]);

  console.log(todoInput);
  console.log(ListAdd);

  const inputHandle = (e) => {
    setTodoInput(e.target.value);
  };
  const ListAddHadle = (e) => {
    let ListArray = [...ListAdd];
    ListArray.push(todoInput);
    setListAdd(ListArray);
    setTodoInput("");
  };
  return (
    <S.MainWrap>
      <S.MainHeader>
        <S.MainInput onChange={inputHandle} value={todoInput}/>
        <S.ListAddBtn onClick={ListAddHadle}>등록</S.ListAddBtn>
      </S.MainHeader>
      <TodoList />
    </S.MainWrap>
  );
};

export default Main;
