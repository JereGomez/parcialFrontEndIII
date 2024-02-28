import { useState } from 'react'
import Card from './Card'
const  Form =()=>{

  const [alumno, setAlumno] = useState({nombre:'', email:'', camada:''})
  const [showAlumno, setShowAlumno] = useState(false)
  const [showValidationError, setShowValidationError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if((!alumno.nombre.startsWith(" ") && alumno.nombre.length > 3 && alumno.email.length >=6 && alumno.camada)){
      setShowAlumno(true)
      setShowValidationError(false)
    }
    else{
      setShowAlumno(false)
      setShowValidationError(true)
    }

  }

  return (
    <>
    <h3>Complete sus datos para confirmar la asistencia al examen de Front End 3 Camada 2:</h3>
    <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" value={alumno.nombre} onChange={({target})=> setAlumno({...alumno, nombre: target.value})}/>
        <label>Email</label>
        <input type="text" value={alumno.email} onChange={({target})=> setAlumno({...alumno, email: target.value})}/>
        <label>Camada</label>
        <input type="text" value={alumno.camada} onChange={({target})=> setAlumno({...alumno, camada: target.value})} />
        <button>Agendar</button>
    </form>
    <>
       {showAlumno && <Card setAlumno={setAlumno} setShowAlumno={setShowAlumno} alumno={alumno}></Card>}
       {showValidationError && <h4>Por favor chequea que la información sea correcta</h4>}
    </>
    </>
  )
}

export default Form