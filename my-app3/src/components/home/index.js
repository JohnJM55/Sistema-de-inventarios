import React from 'react';
import './styles.css';
import carro1 from '../../images/carro1.jpg';
import mercedes from '../../images/mercedes.png';

function Home () {
    return (
        <div>
            <div className="containerAutos">
                <div className='container'>
                    <img src={carro1} weight={600} height={250}/>
                </div>
                <div className='container'>
                    <h1>RENAULT DUSTER</h1>
                    <h3>Para la nueva temporada de tu vida</h3>
                    <p1>No vino a intentar nada, vino a cambiarlo todo </p1>
                    <p1>¡facilita tu vida a bordo! </p1>
                    <p1>la nueva DUSTER cuenta con equipamiento totalmente confiable y útil.​</p1>
                </div>
            </div>
            <div className="containerAutos">
                <div className='container'>
                    <h1>MERCEDES-BENZ AMG</h1>
                    <h3>El dominador de los carros deportivos</h3>
                    <label>Si Mercedes-Benz es un dominador en las carreras de auto, </label>
                    <label>la línea AMG adopta el diseño y potencia deportiva y lo traslada </label>
                    <label>a las calles para imponer un nuevo estilo en conducción.</label>
                </div>
                <div className='container'>
                    <img src={mercedes} weight={600} height={250}/>
                </div>
            </div>
            
        </div>
    );
}

export default Home;