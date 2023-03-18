import styled from "styled-components";

export const ListUl = styled.ul`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ListLi = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const ListLiBtnWrap = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ListText = styled.span`
  border: 1px solid black;
  flex: 3;
  padding: 1rem;
  font-size: 1.6rem;
`;
export const ListEditBtn = styled.button`
  border: none;
  background-color: royalblue;
  color: white;
`;
export const ListDeleteBtn = styled.button`
  border: none;
  background-color: royalblue;
  color: white;
`;
