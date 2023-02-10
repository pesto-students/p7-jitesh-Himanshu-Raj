import React, { useState } from "react";
import "./App.css";
import TodoCard from "./TodoCard";
import TodoInput from "./TodoInput";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  //console.log(todoList);

  const addTodo = (todoValue) => {
    const newTodo = {
      id: todoList?.length + 1,
      text: todoValue,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (value) => {
    const deletedTodo = todoList?.filter((item) => {
      return item.id !== value.id;
    });
    setTodoList(deletedTodo);
  };

  const isTodoCompleted = (index) => {
    const completedTodo = [...todoList];
    completedTodo[index].isCompleted = true;
    setTodoList(completedTodo);
    //console.log("completedTodo:", completedTodo);
  };

  return (
    <div className="App">
      <div className="title">
        <h3>Todo App</h3>
      </div>
      <div className="mainContainer">
        <TodoInput addTodo={addTodo} />
        {todoList?.length > 0 ? (
          <div>
            {todoList?.map((item, index) => {
              return (
                <TodoCard
                  data={item}
                  onDeleteTodo={() => deleteTodo(item)}
                  onCheckTodo={() => isTodoCompleted(index)}
                />
              );
            })}
          </div>
        ) : (
          <h6>No todo added.</h6>
        )}
      </div>
    </div>
  );
};

export default App;
