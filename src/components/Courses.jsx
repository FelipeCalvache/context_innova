import { Students } from "./Students"

const Courses = ({curso}) => {
  return (
    <div><h2>{curso.nombre}</h2><Students curso={curso}/> </div>
  )
}

export default Courses