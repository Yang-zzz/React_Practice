import React from "react";
import * as S from "./StyleTodoList";

const TodoList = () => {
  return (
    <S.ListUl>
      <S.ListLi>
        <S.ListText>가나다라마바사</S.ListText>
        <S.ListLiBtnWrap>
          <S.ListEditBtn>수정</S.ListEditBtn>
          <S.ListDeleteBtn>삭제</S.ListDeleteBtn>
        </S.ListLiBtnWrap>
      </S.ListLi>
      <S.ListLi>
        <S.ListText>가나다라마바사</S.ListText>
        <S.ListLiBtnWrap>
          <S.ListEditBtn>수정</S.ListEditBtn>
          <S.ListDeleteBtn>삭제</S.ListDeleteBtn>
        </S.ListLiBtnWrap>
      </S.ListLi>
      <S.ListLi>
        <S.ListText>가나다라마바사</S.ListText>
        <S.ListLiBtnWrap>
          <S.ListEditBtn>수정</S.ListEditBtn>
          <S.ListDeleteBtn>삭제</S.ListDeleteBtn>
        </S.ListLiBtnWrap>
      </S.ListLi>
    </S.ListUl>
  );
};

export default TodoList;
