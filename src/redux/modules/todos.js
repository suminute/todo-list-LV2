import uuid from "react-uuid";

//Action Value
const Save_Todo = "Save_Todo";
const Delete_Todo = "Delete_Todo";
const Toggle_Statustodo = "Toggle_Statustodo";

//Action Creator
export const saveTodo = (payload) => {
  return {
    type: Save_Todo,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: Delete_Todo,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: Toggle_Statustodo,
    payload,
  };
};

//Initial State
const initialState = [
  {
    id: uuid(),
    title: "제목1",
    contents: "내용1",
    isDone: false,
  },
  {
    id: uuid(),
    title: "제목2",
    contents: "내용2",
    isDone: true,
  },
];

//Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case Save_Todo:
      return [
        ...state,
        {
          id: uuid(),
          title: action.payload.title,
          contents: action.payload.contents,
          isDone: false,
        },
      ];
    case Delete_Todo:
      return action.payload;
    case Toggle_Statustodo:
      return action.payload;
    default:
      return state;
  }
};

export default todos;
