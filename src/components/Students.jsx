export const Students = ({ curso }) => {
  return (
    <div style={{ border: "solid black 1px" }}>
      <h2>Estudiantes</h2>
      {curso.estudiantes.map((estudiante, index) => (
        <ul key={index}>
          <li>{estudiante.nombre}</li>
        </ul>
      ))}
    </div>
  );
};
