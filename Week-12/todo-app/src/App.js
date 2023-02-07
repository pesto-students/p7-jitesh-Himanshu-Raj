import { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  //console.log(todoList);

  const addTodo = () => {
    const newTodo = {
      text: todo,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setTodo("");
  };

  const deleteTodo = (value) => {
    const deletedTodo = todoList?.filter((item) => {
      return item.text !== value.text;
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
      <h2>Todo App</h2>
      <div className="mainContainer">
        <div>
          <input
            type="text"
            name="todo"
            value={todo?.text}
            placeholder="create new todo"
            onChange={(event) => {
              setTodo(event.target.value);
            }}
            required
          />
          <button className="add-button" onClick={addTodo}>
            Add
          </button>
        </div>

        {todoList?.length > 0 ? (
          <div>
            {todoList?.map((item, index) => {
              return (
                <div key={index} className="card">
                  <div className="card-content">
                    <div className="card-action">
                      {!item.isCompleted ? (
                        <FaCheck
                          size={12}
                          onClick={() => isTodoCompleted(index)}
                        />
                      ) : (
                        <text className="completed">completed</text>
                      )}
                      <FaTrash
                        size={12}
                        color="red"
                        onClick={() => deleteTodo(item)}
                      />
                    </div>
                    <div>
                      <h5>{item.text}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h6>No todo added.</h6>
        )}
      </div>
    </div>
  );
}

export default App;
