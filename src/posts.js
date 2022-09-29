import './App.css';
import React, { Fragment,useEffect,useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Tarjeta from './tarjeta';

const Posts=()=>{
    const [listpost,setlistpost]=useState([]);

    useEffect(()=>{
            axios.get("https://dummyapi.io/data/v1/post",{
                headers: {
                    "app-id":"6300429055fb0cac79259c03"
                }
            }).then((res)=>{
                console.log("respuestaPeticion",res);
                setlistpost(res.data.data);
            })
        },[]
    )
    return(
        <div className='listapost flexrow'>
            {listpost.map((item)=>{
                return(
                    <Fragment>
                        <Tarjeta data={item}></Tarjeta>
                    </Fragment>
                )
            })}

        </div>
    )

}

export default Posts;