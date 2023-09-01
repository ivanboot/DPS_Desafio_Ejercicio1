import React from "react";
import { useState } from 'react';

export const Formulario = () => {

const [datos, setDatos] = useState([]);

    const envioDatos = dato => {

    }

    return (
        <>
        <form className="container-items" onSubmit={e.preventDefault()}>
            <input type="text" name="nombre"  />
            <input type="text" name="apellido" />
            <select name="">
                <option value="En">Ingles</option>
                <option value="Fr">Frances</option>
            </select>
            <input type="numeric" name="cantMes" />
            <button onClick={envioDatos}></button>
            
        </form>
        </>
    );
}
