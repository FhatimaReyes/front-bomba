import React from "react";
import './Componente.css';

function Componente (props) {
    return(
        <div className="mainComponente">{props.nombre}</div>
    );
}

export default Componente;