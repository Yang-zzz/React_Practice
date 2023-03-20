// 초깃값
// const initialState = { todos: [{ text: "" }] };
const initialState = { todos: [] };

// 액션 생성함수
export const addTodo = (payload) => {
  return { type: "LIST_ADD", payload };
};

// 리듀서 함수
export const reducer = (state = initialState, action) => {
  if (action.type === "LIST_ADD") {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  }
  return state;
};
