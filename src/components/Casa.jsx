import React from "react";
import Componente from "./Componente";
import Portada from "./Portada";
import './Casa.css'

function Casa () {
    return (
        <div className="mainCasa">
            <Portada
                urlPortada ='https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            />
             <div className="contenidoCasa">
                <div className="gpoCasa">
                    <h1>Mis Grupos</h1>
                    <div className="noRegistros">
                        <p>No. Máximo de Registros:</p>
                        <p>5</p>
                        <p>Registros Actuales:</p>
                        <p>5</p>
                    </div>
                    <div className="gpoTinacos">
                        <button className="nuevoTinaco">
                            <box-icon name='folder-plus' color='#456c75' ></box-icon>
                            <p>Crear</p>
                        </button>
                        <Componente
                            nombre = "Baño 1"
                        />
                        <Componente
                            nombre = "Baño 2"
                        />
                        <Componente
                            nombre = "Cocina"
                        />
                        <Componente
                            nombre = "Jardín"
                        />
                        <Componente
                            nombre = "Alberca"
                        />
                    </div>
                </div>
                <div className="altaAlmacenamiento">
                    <h2>Alta de Almacenamiento</h2>
                    <form action="">
                        <label htmlFor="nombreAlmacenamiento">Nombre</label>
                        <input type="text" id="nombreAlmacenamiento" />
                        <label htmlFor="capacidadMax">Capacidad Máxima</label>
                        <input type="number" id="capacidadax" />
                        <label htmlFor="ubicacionAlmacenamiento">Ubicación</label>
                        <input type="text" id="ubicacionAlmacenamiento" />
                    </form>
                    <div className="botonesAlta">
                        <button>Crear</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Casa;