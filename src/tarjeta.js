import './App.css';
import React, { Fragment,useEffect,useState } from 'react';
import ReactDOM from 'react-dom/client';

const Tarjeta=(props)=>{

    return(
        <div className='flexcolum contenedortarjeta sombra'>
            <div className='flexrow'>
                <img src={props.data.owner.picture} className="imgperfil"/>
                <p>{props.data.owner.firstName + " " + props.data.owner.lastName}</p>
            </div>
            <div>
                <img src={props.data.image} className="imagen"/>
            </div>
            <p>{props.data.text}</p>
            <div className='flexrow2'>
                {props.data.tags.map((item)=>{
                    return(
                        <div >
                            <p className='tags'>{item}</p>
                        </div>
                    )
                })}
            </div>
            <div className='flexrow2'>
                <i className="bi bi-hand-thumbs-up-fill"></i>
                <p>{props.data.likes}</p>
            </div>


        </div>
    )

}

export default Tarjeta;