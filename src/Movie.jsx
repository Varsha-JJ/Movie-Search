import React, { useState,useEffect} from 'react';
import './Movie.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movie = () => {
    const [moviedata,setmoviedata] = useState([])
    const [searchdata,setsearchdata] = useState('')
    const change = (event)=>{
      setsearchdata(event.target.value);
    }
    console.log("searchdata",searchdata);

    
    const handlesearch = ()=>{
        axios.get(`http://www.omdbapi.com/?s=${searchdata}&apikey=7cbef1e2`).then((res)=>{
            console.log("res",res);
            setmoviedata(res.data.Search)
        }).catch((err)=>{
          console.log("err");
        });
    };
    console.log("moviedata",moviedata);

  return (
    <div>
      <div className='headmain'>
        <div className='alig'>
        <h3 className='text-center text-light text'>Movie Search</h3>
        </div>
        <div className='input-align'>
             <input type="text" className='form-control' placeholder="search movie" name="title" value={searchdata} onChange={change} />
             <button onClick={handlesearch}>Search</button>
        </div>
      </div>
      <div className='container-fluid'>
            <div class="row">
               {moviedata?.map((movie)=>(
                <div class="col-sm" >
                    <div class="card mt-4 image" >
                        <Link to={`/view/${movie.imdbID}`}> <img class="card-img-top" src={movie.Poster} alt="Card image cap"/></Link>
                    </div>
                </div>
               ))}
            </div>
      </div>
      <div></div>
    </div>
  )
}

export default Movie
