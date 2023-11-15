import React, { useState,useEffect} from 'react';
import './Movie.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Detailmovie =() => {
    const {id}=useParams()

    const [data,setdata]=useState({})
    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=7cbef1e2`).then((res)=>{
            console.log(res)
            setdata(res.data)
          })
    },[])
  return (
    <div className='container-fluid'>
            <div class="row">
            <div class="col-sm-12">
                <div class="card m-lg-5 cards">
                    <div class="card-body">
                        <img src={data.Poster} alt="poster" class="poster"/>
                        <h5 class="card-title">Movie name : {data.Title}</h5>
                        <p class="card-text">Type : {data.Type}</p>
                        <p class="card-text">Year : {data.Year}</p>
                        <p class="card-text">Released : {data.Released}</p>
                        <p class="card-text">Language : {data.Language}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}



export default Detailmovie
