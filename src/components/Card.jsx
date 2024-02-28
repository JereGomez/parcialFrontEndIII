const  Card = ({setShowAlumno, alumno, setAlumno})=>{
  return (
    <>
    <h3>Gracias por completar los datos, su asistencia ha sido confirmada.</h3>
    <br></br>
    <h4>Nombre: {alumno.nombre}</h4>
    <h4>Email: {alumno.email}</h4>
    <h4>Camada: {alumno.camada}</h4>
    <button onClick={() =>{setShowAlumno(false) ;setAlumno({nombre:"", email:"", camada:""})}}>Finalizar</button>
    </>
  )
  }

export default Card