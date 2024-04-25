import '../stylesheets/tarea.css'
import { AiOutlineMinusCircle } from "react-icons/ai";
import { PiTrashFill } from "react-icons/pi";


export default function Tarea({ id, text, isComplete, setTaskComplete, deleteTask }) {
  return (
    <div className={isComplete ? "tarea-contenedor completada" : "tarea-contenedor"}>
      <div
        className="tarea-texto"
        onClick={() => setTaskComplete(id)}>
        {text}
      </div>
      <div
        className='tarea-contenedor-iconos'
        onClick={() => deleteTask(id)}>
        <PiTrashFill className="tarea-icono" />
      </div>
    </div>
  );

}