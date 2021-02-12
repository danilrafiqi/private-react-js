import React, { useState } from "react";
import "./Todo.css";
export default function Todo() {
  const [todos, setTodos] = useState(["Belajar react", "Membaca"]);
  const [task, setTask] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [todoIdx, setTodoIdx] = useState(0);
  return (
    <div className="todo">
      <div className="todo__wrapper">
        <div className="todo__header">Todo List</div>
        <div className="todo__create">
          <input
            type="text"
            name="todo"
            className="todo__create__input"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          {isEdit > 0 ? (
            <button
              className="todo__create__button"
              onClick={() => {
                setTodos((prev) => {
                  let newData = [...prev];
                  newData.splice(todoIdx, 1, task);
                  return newData;
                });
                setTodoIdx(0);
                setTask("");
              }}
            >
              {console.log("todoIdx", todoIdx)}
              Update
            </button>
          ) : (
            <button
              className="todo__create__button"
              onClick={() => {
                setTodos((prev) => [...prev, ...[task]]);
                setTask("");
              }}
            >
              Create
            </button>
          )}
        </div>

        <div className="todo__check-all">
          <input type="checkbox" name="" className="todo__check-all__check" />
          <div className="todo__check-all__text">Select All</div>
        </div>

        <div className="todo__list">
          {todos.map((v, i) => {
            return (
              <div className="todo__list__card" key={v}>
                <div className="todo__list__content">
                  <input
                    className="todo__list__content__check"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <div className="todo__list__content__title">{v}</div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setIsEdit(true);
                      setTask(v);
                      setTodoIdx(i);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setTodos((prev) => {
                        let newData = [...prev];
                        newData.splice(i, 1);
                        return newData;
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div>1 of 3 task done.</div>
      </div>
    </div>
  );
}
