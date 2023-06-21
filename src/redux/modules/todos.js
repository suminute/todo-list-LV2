import uuid from "react-uuid";

//Action Value
const Todo_Save = "Todo_Save";

//Action Creator
export const todoSave = (payload) => {
  return {
    type: Todo_Save,
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
    case Todo_Save:
      return [
        ...state,
        {
          id: uuid(),
          title: action.payload.title,
          contents: action.payload.contents,
          isDone: false,
        },
      ];
    default:
      return state;
  }
};

export default todos;
