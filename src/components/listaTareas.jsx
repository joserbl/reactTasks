import { useState } from "react";
import TareaFormulario from "./tareaFormulario";
import Tarea from "./tarea";
import '../stylesheets/listaTareas.css'

function ListaTareas() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {

    console.log(task);
    //checking the new task is not empty 
    if (task.text.trim()) {
      task.text = task.text.trim();
      //creating a new array with all the elements from tasks, and putting the new task at the first position 
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);

  };

  const completeTask = id => {

    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);

  };


  return (
    <>
      <TareaFormulario onSubmit={addTask} />
      <div className="tareas-lista-contenedor">
        {
          tasks.map((task) =>
            <Tarea
              //key and id contain the same id for the task because the "key" element is not accesible as a prop in react, thus we create the "id" element
              key={task.id}
              id={task.id}
              text={task.text}
              isComplete={task.isComplete}
              deleteTask={deleteTask}
              setTaskComplete={completeTask}
            />
          )
        }
      </div>
    </>
  );
};


export default ListaTareas; 