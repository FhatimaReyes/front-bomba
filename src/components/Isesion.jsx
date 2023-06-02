import React from "react";
import '../components/Isesion.css';

function Isesion () {
    return (
        <main>
            <div className="bienvenido-item">
                <div className="img-bienvenida"></div>
                <h1>Bienvenido</h1>
                <p>Sistema Semiautomático para el Control en el Abastecimiento de Agua.</p>
                <div className="botones-bienvenida">
                    <button>Iniciar Sesión</button>
                    <button>Registrarse</button>
                </div>
            </div>
            <div className="registrarse-item">
                <h2>Registrarse</h2>
                <form action="">
                    <label htmlFor="nombreUsuario-login">Nombre de Usuario</label>
                    <input type="text" id="nombreUsuario" />
                    <label htmlFor="contrasena">Contraseña</label>
                    <input type="password" id="contrasena" />
                    <label htmlFor="confContrasena">Confirmar Contrasea</label>
                    <input type="password" id="confContrasena"/>
                </form>
                <button>Registrarse</button>
            </div>
            <div className="isesion-item">
                <h2>Iniciar Sesión</h2>
                <form action="">
                    <label htmlFor="nombreUsuario-signin">Nombre de Usuario</label>
                    <input type="text" id="nombreUsuario-signin" />
                    <label htmlFor="contrasena-signin">Contraseña</label>
                    <input type="password" id="contrasena-signin" />
                </form>
                <button>Iniciar Sesión</button>
            </div>
        </main>
    );
}

export default Isesion;