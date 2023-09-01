import React from "react";
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

const DataTable = () => {

    //const [datos, setDatos] = useState([]);


    return (
        <>
            <Table table table-striped-columns>
                <thead>
                    <tr>
                        <th>Nombre Cliente</th>
                        <th>Apellido Cliente</th>
                        <th>Curso contratado</th>
                        <th>Meses a pagar</th>
                        <th>Descuento</th>
                        <th>Porcentaje aplicado</th>
                        <th>Total a pagar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default DataTable;