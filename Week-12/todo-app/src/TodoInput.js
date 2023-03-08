import { useState, memo } from "react";

const TodoInput = (props) => {
  const { addTodo } = props;

  const [todoValue, setTodoValue] = useState("");

  const onChange = (event) => {
    setTodoValue(event.target.value);
  };

  const onAddTodo = () => {
    addTodo(todoValue);
    setTodoValue("");
  };

  return (
    <div>
      <input
        type="text"
        name="todo"
        //defaultValue={todo}   //to be searched
        value={todoValue}
        placeholder="create new todo"
        onChange={onChange}
      />
      <button className="add-button" onClick={onAddTodo}>
        Add
      </button>
    </div>
  );
};

export default memo(TodoInput);
