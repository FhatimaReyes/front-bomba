import React from "react";
import Portada from "./Portada";
import Componente from "./Componente";
import './Sucursal.css';

function Sucursal() {
    return (
        <div className="mainSucursal">
            <Portada
                urlPortada="https://images.unsplash.com/photo-1533077162801-86490c593afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            />
            <div className="contenidoSucursal">
                <div className="gpoSucursal">
                    <h1>Sucursal Córdoba</h1>
                    <div className="noRegistros">
                        <p>No. Máximo de Registros:</p>
                        <p>5</p>
                        <p>Registros Actuales:</p>
                        <p>5</p>
                    </div>
                    <div className="gpoAlmacenamientos">
                        <button className="nuevoAlmacenamiento">
                            <box-icon name='folder-plus' color='#456c75' ></box-icon>
                            <p>Crear</p>
                        </button>
                        <Componente
                            nombre="Tinaco Uno"
                        />
                        <Componente
                            nombre="Tinaco Dos"
                        />
                        <Componente
                            nombre="Tinaco Tres"
                        />
                        <Componente
                            nombre="Tinaco Cuatro"
                        />
                        <Componente
                            nombre="Tinaco Cinco"
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

export default Sucursal;