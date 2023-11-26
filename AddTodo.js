import React, { useState } from 'react';

function AddTodo({ onAddTodo }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;
        onAddTodo(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Ajouter une tâche..."
            />
            <button className="ajouter" type="submit">Ajouter</button>
        </form>
    );
}

export default AddTodo;
