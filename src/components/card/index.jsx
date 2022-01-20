import React from 'react';
import './styles.css'



export default function index() {
  return <div>

<div className="mkt-3dSlider py-6">
  <h1 className="mkt-3dSlider-title">TOP GOALSCORER EACH DECADE</h1>
   <p className="mkt-3dSlider-description">(POST WWII)</p>
<section id="slider">
<div><img src={'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg'} alt="boohoo" className="imageCover"/></div>
  <label for="s2" id="slide2" className="card-slider"></label>
 
  <input className="card-slider" type="radio" name="slider" id="s1"/>
  <input className="card-slider" type="radio" name="slider" id="s2"/>
  <input className="card-slider" type="radio" name="slider" id="s3" checked/>
  <input className="card-slider" type="radio" name="slider" id="s4"/>
  <input className="card-slider"type="radio" name="slider" id="s5"/>


  <label for="s1" id="slide1" className="card-slider"></label>
  
  <label for="s3" id="slide3" className="card-slider"></label>
  <label for="s4" id="slide4" className="card-slider"></label>
  <label for="s5" id="slide5" className="card-slider"></label>
</section>
</div>


  </div>;
}
