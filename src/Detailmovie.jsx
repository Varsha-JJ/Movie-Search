import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';




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
    <div className='cardalign'>
      <Card style={{ width: '30rem' }} className='cardstyles mt-5'>
      <Card.Img variant="top" src={data.Poster} className='imgsty'/>
    </Card>

    <Card style={{ width: '40rem' }} className='cardstyle mt-5'>
      <Card.Body className='cardbody'>
        <Card.Title className='titlesty mt-5'>{data.Title}</Card.Title>
        <Card.Subtitle className="mb-2 mt-3">Released : {data.Released}</Card.Subtitle>
        <Card.Text>
          {data.Plot}
        </Card.Text>
        <Card.Subtitle className="mb-2 mt-3">Language : {data.Language}</Card.Subtitle>
        <Card.Subtitle className="mb-2 mt-3">Actors : {data.Actors}</Card.Subtitle>
        <Card.Subtitle className="mb-2 mt-3">Genre : {data.Genre}</Card.Subtitle>
        <Link to='/'><button className='btn'>Go back</button></Link>
      </Card.Body>
    </Card>
    <div></div>
    </div>
    
  )
}



export default Detailmovie
