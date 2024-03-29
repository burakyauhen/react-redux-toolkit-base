import "./App.css";
// import { useState } from "react";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";

const App = () => {
  // const [text, setText] = useState('');


  return (
    <div className="App">
      <InputField 
        // text={text}
        // setText={setText}
      /> 
      <TodoList />
    </div>
  );
}

export default App; 