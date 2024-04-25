import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/tareaFormulario.css'

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  // method that handles the creation of a new task
  const submitNewTask = e => {
    e.preventDefault();
    console.log("Saving task...");

    const newTask = {
      id: uuidv4(),
      text: input,
      isComplete: false
    };

    props.onSubmit(newTask);
    setInput('');
  };

  return (
    <form className='tarea-formulario'
      onSubmit={submitNewTask}>
      <input className='tarea-input' type='text' placeholder='Add an entry' name='text'
        onChange={handleChange}
      />

      <button className='tarea-boton'>
        Add new task
      </button>
    </form>
  );
};


export default TareaFormulario; 