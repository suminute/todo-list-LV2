import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { todoSave } from "./redux/modules/todos";
import { useEffect, useRef, useState } from "react";

const StContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

function App() {
  const todosStore = useSelector((state) => state).todos;

  const dispatch = useDispatch();

  const titleRef = useRef("");
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // const onChangeHandler = (event)=>{setTitle(event.target.value)}
  return (
    <StContainer>
      <header>
        <h1>Todo-List</h1>
      </header>
      <main
        style={{
          backgroundColor: "wheat",
        }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (title && contents) {
              dispatch(todoSave({ title, contents }));
              setTitle("");
              setContents("");
            } else {
              alert("제목과 내용을 입력해주세요!");
            }
          }}>
          <input
            value={title}
            ref={titleRef}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            value={contents}
            onChange={(event) => {
              setContents(event.target.value);
            }}
          />
          <button>저장</button>
        </form>
        <div>
          <h2>Working...🔥</h2>
          {todosStore.map((todo) => {
            return (
              <div
                key={todo.id}
                style={{
                  border: "1px solid black",
                  margin: "10px",
                }}>
                <p>{todo.id}</p>
                <h3>{todo.title}</h3>
                <div>{todo.contents}</div>
                <div>{todo.isDone.toString()}</div>
              </div>
            );
          })}
        </div>
        <h2>Done...🎉</h2>
      </main>
      <footer>footer</footer>
    </StContainer>
  );
}

export default App;
