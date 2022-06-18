import './App.css';
import Testimonio from './components/Testimonio.js';
import {testimonios} from './js/testimonios';

function App() {
  return (
    <div className="App">
      <div className = 'contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {testimonios.map(data => (
          <>
            <Testimonio
              nombre = {data.nombre}
              pais = {data.pais}
              imagen = {data.imagen}
              cargo = {data.cargo}
              empresa = {data.empresa}
              testimonio = {data.testimonio}/>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
