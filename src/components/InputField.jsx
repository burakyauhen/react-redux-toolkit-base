import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";

const InputField = ({text, setText}) => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(addTodo({text}));
    setText('');
  }

    return (
        <label>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => handleClick()}>Add todo</button>
      </label> 
    );
} 

export { InputField }