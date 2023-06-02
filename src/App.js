import './App.css';
import Isesion from './components/Isesion.jsx';
import Administrador from './components/Administrador.jsx';
import Sucursal from './components/Sucursal.jsx';
import Casa from './components/Casa.jsx'
import Almacenamiento from './components/Almacenamiento';

function App() {
  return (
    <div className="App">
       <Isesion /> 
       <Administrador /> 
       <Sucursal /> 
       <Casa /> 
      <Almacenamiento />
    </div>
  );
}

export default App;
