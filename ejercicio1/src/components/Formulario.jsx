import React from "react";
import { useState } from 'react';

const Formulario = () => {

const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    curso: '',
    cantMes: 0,
    pagoMensual: 0,
    descuentoTotal: 0,
    porcentDescuento: 0,
    Total:0
});

    const actualizarNombre = e => setDatos({
        [e.target.name]: e.target.value,        
    })

    const actualizarApellido = e => setDatos({
        [e.target.name]: e.target.value,        
    })

    const actualizarCampo = e => setDatos({
        [e.target.name]: e.target.value,        
    })

    const envioDatos = e => {
        datos.pagoMensual=25;
        if(datos.cantMes >1 && datos.cantMes<=3){
            datos.porcentDescuento=0.1;
            datos.descuentoTotal=  datos.pagoMensual * datos.porcentDescuento;        
        }else if(datos.cantMes >3 && datos.cantMes<=5){
            datos.porcentDescuento=0.20;
            datos.descuentoTotal= datos.pagoMensual * datos.porcentDescuento;
        }else if(datos.cantMes >5 && datos.cantMes<=7){
            datos.porcentDescuento=0.27;
            datos.descuentoTotal= datos.pagoMensual * datos.porcentDescuento;
        }else if(datos.cantMes >7 && datos.cantMes<=9){
            datos.porcentDescuento=0.37;
            datos.descuentoTotal= datos.pagoMensual * datos.porcentDescuento;
        }else if(datos.cantMes >9){
            datos.porcentDescuento=0.53;
            datos.descuentoTotal= datos.pagoMensual * datos.porcentDescuento;
        }

        datos.Total = (datos.pagoMensual * datos.cantMes) - datos.descuentoTotal;

        console.log(datos);
    }

    return (
        <>
        <form className="container-items" onSubmit={e => e.preventDefault()}>
            <input type="text" name="nombre" onChange={actualizarNombre}  />
            <input type="text" name="apellido" onChange={actualizarApellido} />        
            <input type="numeric" name="cantMes" onChange={actualizarCampo}
             />
             <select name="curso" onChange={actualizarCampo}>
                <option value="En">Ingles</option>
                <option value="Fr">Frances</option>
            </select>
            <button onClick={envioDatos}>Enviar</button>
            
        </form>
        </>
    );
}

export default Formulario