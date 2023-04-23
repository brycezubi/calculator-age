import Image from "/images/icon-arrow.svg";
import { useState } from "react";
import "./app.css";

function App() {
  const [years, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [nuevoDia, setNuevoDay] = useState("");
  const [nuevoMes, setNuevoMonth] = useState("");
  const [nuevoAño, setNuevoYear] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("enviando");

    if (years === "" || month === "" || day === "") {
      setError(true);
      return;
    }
    setError(false);

    calcularEdad()
    
  };

  const calcularEdad =()=>{
    const hoy = new Date()
    setNuevoYear(hoy.getFullYear() - years)
    setNuevoMonth((hoy.getMonth() - month) +1)
    setNuevoDay(hoy.getDate() - day)
  }

  

  return (
    <main className="contenido">
      <form onSubmit={handleSubmit} className="formulario">
        <div className="inputs">
          <div className="input__content">
            <label htmlFor="day">Day</label>
            <input
              style={{ border: error ? "1px solid red" : "" }}
              value={day}
              onChange={(e) => setDay(+e.target.value)}
              id="day"
              type="number"
              placeholder="DD"
            />
            {error && <small className="error">Campo vacio</small>}
          </div>
          <div className="input__content">
            <label htmlFor="month">Month</label>
            <input
              style={{ border: error ? "1px solid red" : "" }}
              value={month}
              onChange={(e) => setMonth(+e.target.value)}
              id="month"
              type="number"
              placeholder="MM"
            />
            {error && <small className="error">Campo vacio</small>}
          </div>
          <div className="input__content">
            <label htmlFor="year">year</label>
            <input
              style={{ border: error ? "1px solid red" : "" }}
              value={years}
              onChange={(e) => setYear(+e.target.value)}
              id="year"
              type="number"
              placeholder="YYYY"
            />
            {error && <small className="error">Campo vacio</small>}
          </div>
        </div>
        <div className="separador">
          <div className="separador-el"></div>
          <button type="submit" className="btn">
            <img src={Image} alt="image reference click" />
          </button>
        </div>
      </form>

      <footer className="data">
        <h1 className="age">
          {nuevoAño  === ''? "--" : nuevoAño} <span>years</span>{" "}
        </h1>
        <h2 className="age">
          {nuevoMes  === ''? "--" : nuevoMes} <span>months</span>{" "}
        </h2>
        <h2 className="age">
          {nuevoDia  === ''? "--" : nuevoDia} <span>days</span>{" "}
        </h2>
      </footer>
    </main>
  );
}

export default App;
