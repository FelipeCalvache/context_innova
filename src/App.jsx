import "./App.css";
import info from "./assets/data.json";
import Courses from "./components/Courses";

function App() {
  function hadleClick() {}

  return (
    <>
      <div style={{ border: "solid black 1px" }}>
        <h2>Colegios</h2>
        {info.map((school, index) => (
          <button key={index} onClick={hadleClick}>
            {school.colegio.nombre}
          </button>
        ))}
      </div>
      {
        <div style={{ border: "solid black 1px" }}>
          <h2>Cursos</h2>
          {info.map((school, index) =>
            school.colegio.cursos.map((curso) => (
              <button key={index}>
                <Courses curso={curso} />
              </button>
            ))
          )}
        </div>
      }
    </>
  );
}

export default App;
