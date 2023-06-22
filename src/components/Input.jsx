import React, { useEffect, useRef, useState } from "react";
import { saveTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";

export const Input = () => {
  const dispatch = useDispatch();

  const titleRef = useRef("");
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (title && contents) {
          dispatch(saveTodo({ title, contents }));
          setTitle("");
          setContents("");
        } else {
          alert("제목과 내용을 입력해주세요!");
        }
      }}>
      <label>제목</label>
      <input
        value={title}
        ref={titleRef}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <label>내용</label>
      <input
        value={contents}
        onChange={(event) => {
          setContents(event.target.value);
        }}
      />
      <button>저장</button>
    </form>
  );
};
