import React, { useState } from "react";

//Estados para las tareas
const TodoList = () => {
    const [tarea, setTarea] = useState("");
    const [tareas, setTareas] = useState([]);

//Función flecha para añadir tareas
    const addTarea = (newTask) => {
        setTareas([...tareas, newTask])
    }

//Función flecha para eliminar tareas
    const deleteTarea = (index) => {
        const newTasks = tareas.filter((_, i) => i !== index);
        setTareas(newTasks);
    };

    return (
        <div className="App">
            <div>
                <h1>Lista de tareas:</h1>
                <input className="escribir" type="text" placeholder="Añadir una nueva tarea..."
                onChange={(e) => {setTarea(e.target.value)}}
                value={tarea} onKeyDown={ (e) => {
                    if (e.key === "Enter") {
                        addTarea(tarea);
                        setTarea("");
                    }
                }}
                />
            </div>
            <div className="lista">
                <ul>
                    {
                    tareas.map( (task, index) => (
                        <li key={index} className="task-item">
                            <div>
                                • {task}
                            </div>
                            <div>
                                <button className="delete-btn"
                                    onClick={() =>
                                        deleteTarea(index)}>x
                                </button>
                            </div>
                        </li>
                        ))
                    }
                    <li className="contarTareas">
                        {tareas.length === 0 ? "No hay tareas pendientes" :
                        `Tienes ${tareas.length} tarea${tareas.length > 1 ? 's' : ''}
                        pendiente${tareas.length > 1 ? 's' : ''}`}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TodoList;