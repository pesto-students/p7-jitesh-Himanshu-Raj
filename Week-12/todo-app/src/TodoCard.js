import { FaCheck, FaTrash } from "react-icons/fa";
import "./TodoCard.css";

const TodoCard = (props) => {
  const { data, onDeleteTodo, onCheckTodo } = props;
  return (
    <div key={data?.id} className="card">
      <div className="card-content">
        <div className="card-action">
          {!data?.isCompleted ? (
            <FaCheck size={12} onClick={onCheckTodo} />
          ) : (
            <text className="completed">completed</text>
          )}
          <FaTrash size={12} color="red" onClick={onDeleteTodo} />
        </div>
        <div>
          <h5>{data?.text}</h5>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
