import React from "react";
import './Administrador.css';
import Portada from './Portada.jsx';
import Componente from './Componente'

function Administrador() {
    return (
        <div className="mainAdministrador">
            <Portada
                urlPortada='https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            />
            <div className="contenidoAdministrador">
                <div className="gpoAdministrador">
                    <h1>Mis Grupos</h1>
                    <div className="noRegistros">
                        <p>No. Máximo de Registros:</p>
                        <p>5</p>
                        <p>Registros Actuales:</p>
                        <p>5</p>
                    </div>
                    <div className="gpoGrupos">
                        <button className="nuevaSucursal">
                            <box-icon name='folder-plus' color='#456c75' ></box-icon>
                            <p>Crear</p>
                        </button>
                        <Componente
                            nombre = "Sucursal Córdoba"
                        />
                        <Componente
                            nombre = "Sucursal Orizaba"
                        />
                        <Componente
                            nombre = "Sucursal Veracruz"
                        />
                        <Componente
                            nombre = "Sucursal Nogales"
                        />
                        <Componente
                            nombre = "Sucursal Fortin"
                        />
                    </div>
                </div>
                <div className="altaGrupo">
                    <h2>Alta de Grupo</h2>
                    <form action="">
                        <label htmlFor="nombreAlta">Nombre</label>
                        <input type="text" />
                    </form>
                    <div className="botonesAlta">
                        <button>Crear</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Administrador;