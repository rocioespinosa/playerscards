import React from 'react';
import './styles.css'

export default function Card ({url, title, year, goals}) {
  return <div>
<div className="card">
 <div className="slides">
 <div slide-id="1" slide-color="#D18B49" class="slideActive">  
</div>
 <div className="thumbnail"><img src={url} alt="first"/> </div>
 <h1 class="title">{title}</h1>
      <p class="year">{year}</p>
      <p class="goals">{goals}</p>
 
 </div>
  </div>
  </div>
  
}
