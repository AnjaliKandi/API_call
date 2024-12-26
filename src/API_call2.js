import React from 'react'
import "./App.css";

export default function API_call2({title,category,image,price,rating}) //destructing the props ..so that we can directly use the name orals we have to use like pros.title
{


  return (
  
    <div className="card">
        <img src={image}></img>
        <h5>{title}</h5>
        <h5>${price}</h5>
    </div>
      
  )
}
