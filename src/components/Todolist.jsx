import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StButton = styled.button`
  cursor: pointer;
  padding: 10px 49px;
  margin: 0px 10px 0px 10px;
  background-color: white;
  border-radius: 10px;
`;

export const Todolist = ({ listIsDone }) => {
  const todosStore = useSelector((state) => state).todos;
  const dispatch = useDispatch();
  return (
    <div className='Todo-List'>
      <h2>{listIsDone ? "Done...🎉" : "Working...🔥"}</h2>
      <div className='Card-Container'>
        {todosStore
          .filter((todo) => todo.isDone == listIsDone)
          .map((todo) => {
            return (
              <div className='Todo-Card' key={todo.id}>
                <Link to={`/detail/${todo.id}`}>상세페이지</Link>
                <h3>{todo.title}</h3>
                <div>{todo.contents}</div>
                <div className='buttons'>
                  <StButton
                    onClick={() => {
                      const deletedtodos = todosStore.filter((item) => item.id !== todo.id);
                      dispatch(deleteTodo(deletedtodos));
                    }}
                    style={{
                      border: "2px solid red",
                    }}>
                    삭제
                  </StButton>
                  <StButton
                    onClick={() => {
                      const newTodos = todosStore.map((item) => {
                        if (item.id == todo.id) {
                          return {
                            ...item,
                            isDone: !item.isDone,
                          };
                        } else {
                          return item;
                        }
                      });
                      dispatch(toggleStatusTodo(newTodos));
                    }}
                    style={{
                      border: "2px solid #2f7019",
                    }}>
                    {listIsDone ? "취소" : "완료"}
                  </StButton>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
