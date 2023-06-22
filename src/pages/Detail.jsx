import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const Detail = () => {
  const todosStore = useSelector((state) => state).todos;

  const navigate = useNavigate();

  const param = useParams();
  const todo = todosStore.find((todo) => todo.id === param.id);
  return (
    <div className='Detail-Page'>
      <div className='Detail-Container'>
        <div>ID : {todo.id}</div>
        <button
          onClick={() => {
            navigate("/");
          }}
          style={{
            cursor: "pointer",
          }}>
          이전으로
        </button>
        <div className='Detials'>
          <div>{todo.title}</div>
          <div>{todo.contents}</div>
        </div>
      </div>
    </div>
  );
};
