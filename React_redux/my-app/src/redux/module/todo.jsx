// 초깃값
const initialState = { todos: [] };
// initialState 를

// 액션 생성함수
export const addTodo = (payload) => {
  return { type: "LIST_ADD", payload };
};
// 액션생성 함수는 

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

// state의 모습은 initialState 와 같다.
// state
