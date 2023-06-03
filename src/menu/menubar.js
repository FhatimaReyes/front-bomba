import './style.css';
import React, { useState } from "react";

function Menu(props) {
    const [estado, setEstado] = useState(1)
    const changeEstado = (e) => {
        e.preventDefault();
        if (estado['estado'] === 1) {
            setEstado({ estado: 2 })
            console.log(estado['estado'])
        } else {
            setEstado({ estado: 1 })
            console.log(estado['estado'])
        }
    }

    const {vista}=props
    return (
        <>

            <div class="navbar">
                <div class="navbar-toggle" onClick={(e) => { changeEstado(e) }}>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                {
                    estado['estado']===2?(
                    <ul class="menu" id="menu" >
                        {vista===1?(<li><a href="#">Vincular</a></li>):(<></>)}
                        <li><a href="#">Modificar</a></li>
                        <li><a href="#">Eliminar</a></li>
                        <li><a href="#">Cerrar Sesión</a></li>
                    </ul>
                    ):(<> </>)
                }
            </div>

        </>
    )
}


export default Menu;