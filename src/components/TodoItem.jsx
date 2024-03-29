import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todosSlice";

const TodoItem = ({id, text, completed}) => {
  const dispatch = useDispatch();
    return (
        <li>
        <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodo({id}))} />
        <span>{text}</span>
        <span className="delete" onClick={()=> dispatch(removeTodo({id}))} >&times;</span>
      </li>    

    );
}

export { TodoItem }