import {TableContainer,Table, TableHead, TableBody, TableRow, TableCell, Container} from '@material-ui/core';

import {retornarVehiculos} from '../../services/vehiculos_service';
import React, { useEffect, useState } from "react";
import './index.css';
import carro1 from '../../images/carro1.jpg';
import { tab } from '@testing-library/user-event/dist/tab';

function Vehiculos () {
    const [ arrayVehiculos, setArrayVehiculos ] = useState([]);
    const [ arrayVehiculosFiltrado, setArrayVehiculosFiltrado ] = useState([]);
    const [ filtro, setFiltro ] = useState(null);
    const [ paginaActual, setPaginaActual ] = useState(1);
    const [ vista, setVista ] = useState(1);

    useEffect(() => {
        const llenarVehiculos= retornarVehiculos();
        setArrayVehiculos(llenarVehiculos);
        console.log('retornarVehiculo',llenarVehiculos);
    }, []);

    useEffect(() => {
        mostrarInformacion();
    }, [arrayVehiculos, paginaActual, filtro]);
       //dentro de este corchete se pone lo que quiere verse que se actualice el state


    function onChangeNombre(value) {
        setFiltro(value.target.value);
    }

    function buscar() {
        if (paginaActual === 1){
            mostrarInformacion();
        } else {
            setPaginaActual(1);
        }
    }

    function mostrarLista() {
        if (paginaActual === 1){
            setVista(1);
        } else {
            setPaginaActual(1);
        }
    }

    function mostrarCartas() {
        if (paginaActual === 1){
            setVista(2);
        } else {
            setPaginaActual(1);
        }
        //setVista(mostrarInformacion);
    }

    function mostrarInformacion() {
        let arrayAMostrar = [];

        if (filtro){
            arrayAMostrar = arrayVehiculos.filter(
                value => value.marca.toUpperCase() === filtro.toUpperCase() 
                || value.modelo.toUpperCase() === filtro.toUpperCase()
                || value.segmento.toUpperCase() === filtro.toUpperCase()
                || value.color.toUpperCase() === filtro.toUpperCase()
                || value.ano.toUpperCase() === filtro.toUpperCase()
                || value.cantidad.toUpperCase() === filtro.toUpperCase()
                || value.valor.toUpperCase() === filtro.toUpperCase()
            );
        } else {
            arrayAMostrar = arrayVehiculos;
        }
        arrayAMostrar = arrayAMostrar.slice((paginaActual - 1) * 5, paginaActual * 5);
        setArrayVehiculosFiltrado(arrayAMostrar);
    }
    
    function limpiar() {
        setFiltro(null);

        const tabla = document.getElementById('tabla');    
        tabla.appendChild('<table-row> </>')

    tabla.childNodes = "";

    }

    function anterior() {
        const ant = paginaActual - 1;
        setPaginaActual(ant);
        
    }

    function siguiente() {
        const sigte = paginaActual + 1;
        setPaginaActual(sigte);
    }
    
    function agregar() {
        setArrayVehiculos(arrayVehiculos.push());
        return(
            <form>
                <label> Marca: </label>
                <input type="text" value={arrayVehiculos.marca}/>
                <label> Modelo: </label>
                <input type="text" value={arrayVehiculos.modelo}/>
                <label> Segmento: </label>
                <input type="text" value={arrayVehiculos.segmento}/>
                <label> Color: </label>
                <input type="text" value={arrayVehiculos.color}/>
                <label> Año: </label>
                <input type="text" value={arrayVehiculos.ano}/>
                <label> Cantidad: </label>
                <input type="text" value={arrayVehiculos.cantidad}/>
                <label> Valor: </label>
                <input type="text" value={arrayVehiculos.valor}/>

            </form>
        )
    }

    return (
        <div>
            <div className="buscar">
                <label htmlFor="buscar"> <strong> Buscar: </strong> </label>
                <input type="text" id="buscar" value={filtro} onChange={onChangeNombre}/>
                <button onClick={() => buscar()}>Buscar</button>
                <button onClick={() => limpiar()}>Limpiar</button>
            </div>
            <div className="tipoVista">
                <label> Tipo de vista: </label>
                <button onClick={() => mostrarLista()}>Lista</button>
                <button onClick={() => mostrarCartas()}>Cartas</button>
            </div>

            <div>
                {(() => {
                    if (vista === 1) {
                    return (
                        
                        <div>
                            <div className='tabla'>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell><strong>Marca</strong></TableCell>
                                                <TableCell><strong>Modelo</strong></TableCell>
                                                <TableCell><strong>Segmento</strong></TableCell>
                                                <TableCell><strong>Color</strong></TableCell>
                                                <TableCell><strong>Año</strong></TableCell>
                                                <TableCell><strong>Cantidad</strong></TableCell>
                                                <TableCell><strong>Valor</strong></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {arrayVehiculosFiltrado.map((celda, index) => (
                                                <TableRow key={index} className="row">
                                                    <TableCell>{celda.marca} </TableCell>
                                                    <TableCell>{celda.modelo} </TableCell>
                                                    <TableCell>{celda.segmento} </TableCell>
                                                    <TableCell>{celda.color} </TableCell>
                                                    <TableCell>{celda.ano} </TableCell>
                                                    <TableCell>{celda.cantidad} </TableCell>
                                                    <TableCell>{celda.valor} </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            
                        </div>


                    )
                    } else {
                    return (
                        <div className="card">
                            <p> prueba </p>
                            <div className="container">
                                {arrayVehiculosFiltrado.map((cards, index) => (
                                    <Container key={index} className="card">
                                        <h4><b>{cards.marca}</b></h4>
                                        <h4><b>{cards.modelo}</b></h4>
                                        <p>{cards.segmento}</p>
                                        <p>{cards.color}</p>
                                        <p>{cards.ano}</p>
                                        <p>{cards.cantidad}</p>
                                        <p>{cards.valor}</p>
                                    </Container>
                                ))}
                            </div>
                        </div>
                    )
                    } 
                })()}
            </div>

            <div>
                <button onClick={() => anterior()} disabled={paginaActual===1} className="anterior">Anterior</button>
                <label className='paginaActual'>{paginaActual}</label>
                <button onClick={() => siguiente()}disabled={paginaActual===5} className="siguiente">  Siguiente</button>
            </div>

            <div>
                <button className='botonAgregar' onClick={() => agregar()}>Agregar</button>
                <button className='botonEditar' onClick={() => limpiar()}>Editar</button>
                <button className='botonEliminar' onClick={() => limpiar()}>Eliminar</button>
            </div>

        </div>
    );
}



export default Vehiculos;



