import React, { useState } from 'react';

function TodoItem({ todo, onRemoveTodo, onToggleComplete, onUpdateTodos }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onUpdateTodos(todo.id, editedText);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setEditedText(e.target.value);
    };
    const todoClasses = `todo-text ${todo.completed ? 'completed' : ''}`;
    return (
        <div className="todo-item">
            {isEditing ? (
                <input type="text" value={editedText} onChange={handleChange} />
            ) : (
                <span  className={todoClasses}  style={{ textDecoration: ! todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                </span>
            )}

            <button className="completer" onClick={() => onToggleComplete(todo.id)}>
                {todo.completed ? 'Incomplet' : 'Complet'}
            </button>

            {isEditing ? (
                <button className="sauvegarder" onClick={handleSaveClick}>Sauvegarder</button>
            ) : (
                <button className="modifier" onClick={handleEditClick}>Modifier</button>
            )}

            <button className="supprimer" onClick={() => onRemoveTodo(todo.id)}>Supprimer</button>
        </div>
    );
}

export default TodoItem;
