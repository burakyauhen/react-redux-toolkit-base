import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todosSlice";
import { setText } from "../store/textSlice";

const InputField = () => {

  const dispatch = useDispatch();
  const text = useSelector(state => state.text.text);

  const handleClick = () => {
    dispatch(addTodo({text}));
    dispatch(setText({text: ''})) 
  }

  return (
      <label>
      <input type='text' value={text} 
        onChange={(e) => {
            const text = e.target.value;
            dispatch(setText({text}));
          }
        } />
      <button onClick={() => handleClick()}>Add todo</button>
    </label> 
  );
} 

export { InputField }