import React from "react";
import { Input } from "../components/Input";
import { Todolist } from "../components/Todolist";
import { useLocation, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main
      style={{
        padding: "10px",
      }}>
      <Input />
      <Todolist listIsDone={false} />
      <Todolist listIsDone={true} />
    </main>
  );
};

export default Main;
