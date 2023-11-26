import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    //liaison avec le back
    /*const getTodos = async () => {
        const response = await fetch("http://127.0.0.1:5000/tasks")
        const res = await response.json()
        setTodos(res)
    } 
    useEffect(() => {getTodos()},[])*/

    //supprimer une tâche 
    const addTodo = (task) => {
        const newTodos = [...todos, { id: Date.now(), text: task }];
        setTodos(newTodos);
    };
    //supprimer une tâche 
    const removeTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

     //marquer une tâche comme complétée
    const toggleComplete = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    //modifier une tâche 
    const updateTodo = (id, newText) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: newText };
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <AddTodo onAddTodo={addTodo} />

            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onRemoveTodo={removeTodo} 
                    onToggleComplete={toggleComplete}
                    onUpdateTodos={updateTodo}
                />
             
            ))}
        </div>
    );

   
}







export default TodoList;
