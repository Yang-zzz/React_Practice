import React from "react";
import * as S from "./StyleTodoList";
import { useSelector } from "react-redux";

const TodoList = () => {
  const TodoData = useSelector((state) => state.todos);
  console.log(TodoData);

  //   const ListDeleteBtn = (index) => {
  //     let ListArray = [...ListAdd];
  //     ListArray.splice(index, 1);
  //     setListAdd(ListArray);
  //   };

  return (
    <S.ListUl>
      {TodoData.map((e, index) => {
        return (
          <S.ListLi key={index}>
            <S.ListText>{e.text}</S.ListText>
            <S.ListLiBtnWrap>
              <S.ListEditBtn>수정</S.ListEditBtn>
              <S.ListDeleteBtn>삭제</S.ListDeleteBtn>
            </S.ListLiBtnWrap>
          </S.ListLi>
        );
      })}
    </S.ListUl>
  );
};

export default TodoList;
