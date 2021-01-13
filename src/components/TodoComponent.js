import React, { useState } from  "react";

function RenderTodo ({todo, index, completeTodo, removeTodo}) {
   return(
       <div className="todo" style={{textDecoration : todo.isCompleted ? "line-through" :"" }}>
           {todo.text}<div><button onClick={() => completeTodo(index)}>Complete</button>
           <button onClick={() => removeTodo(index)}>x</button>
           </div>
       </div>

   )
}

function TodoForm({addTodo}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} placeholder="Tope here to add a Todo item in the list" onChange={e => setValue(e.target.value)}/>
        </form>
    )
}

function Todo() {
    const [todos, setTodos] = useState([
        
            {text: "Learning React hooks",
            isCompleted: false},
            {text: "Learning integration of Express Application and Moongose",
            isCompleted: false},
            {text: "Create a full fledged REST API Server",
            isCompleted: false}
        
    ]);

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
      };

    const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

    const addTodo = (text) => {
        const newTodos = [...todos, {text}];
        setTodos(
            newTodos
        )
    }
    

    return(
        <div className="app">
        <div className="todo-list">
            {todos.map((todo, index) => (
            <RenderTodo index={index} key={index} todo={todo} completeTodo={completeTodo}  removeTodo={removeTodo}/>
            
        ))}
        <TodoForm addTodo={addTodo}/>
        </div>
        </div>
    );

}


export default Todo;