import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState(["Membaca buku", "Menulis"]);
  const [task, setTask] = useState("");

  return (
    <div>
      <div>Todo List</div>
      <br />
      <br />
      <br />

      <div>
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          type="text"
          name=""
          id=""
        />
        <button
          onClick={() => {
            setTodo((prev) => {
              const newData = [...prev];
              newData.push(task);
              return newData;
            });
            setTask("");
          }}
        >
          Create
        </button>
      </div>
      <br />
      <br />

      {todo.map((v, i) => {
        return (
          <div>
            <div>{v}</div>
            <button
              onClick={() => {
                setTask(v);
              }}
            >
              edit
            </button>
            <button
              onClick={() => {
                setTodo((prev) => {
                  const newData = [...prev];
                  newData.splice(i, 1);
                  return newData;
                });
              }}
            >
              delete
            </button>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
