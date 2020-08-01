import React ,{useState} from 'react';
import './App.css';
import Todo from './composants/Todo';
import TodoForm from './composants/form';


function App() {
  const data = [
    { text : "apprendre js" , isCompleted: false},
    { text : "apprendre React" , isCompleted: false},
    { text : "apprendre axios" , isCompleted: false}
  ];
  const [todos, setTodos] = useState(data);

  const addTodo = (text) => {
    const newTodos = [...todos , {text}];
    setTodos(newTodos);
  };

  const completedTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true; 
    setTodos(newTodos); 
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  return (
    <div className="app">
      <div className="list-todo">
        {todos.map((todo, index) => (
          <Todo 
            key={index} 
            index={index} 
            todo={todo} 
            completedTodo = {completedTodo}
            removeTodo={removeTodo}
            
            />
        ))}
        
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;
