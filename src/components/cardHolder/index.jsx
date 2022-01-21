import React from 'react';
import Card from '../card';
import { useState } from "react";
import './styles.css'


export default function CardHolder() {

const cardsInfo = [{ 
    url:"https://upload.wikimedia.org/wikipedia/commons/6/67/Alfredo_Di_Stefano_River_Plate.jpg",
    title: "Alfredo Di Stéfano",
    year:"1950s",
    goals: "301 GOALS"

}, { 
    url:"https://i.pinimg.com/originals/9e/39/92/9e3992a9975d4a316bdaf9417bed9ba6.jpg",
    title: "Thierry Henry",
    year:"2000s",
    goals: "313 GOALS"
},  { 
    url:"https://www.ceroacero.es/img/jogadores/98/740098_med__20210109204134_hugo_sanchez.jpg",
    title: "Hugo Sánchez",
    year:"1980s",
    goals: "315 GOALS"
},
{ 
    url:"https://http2.mlstatic.com/D_NQ_NP_994545-MLM43967849090_112020-O.jpg",
    title: "Romario",
    year:"1990s",
    goals: "340 GOALS"
},
{ 
    url:"https://www.eluniverso.com/resizer/UKDZIhZPKTrvOIcUF0bt-0-a00s=/685x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/JH7S77TVO5CKVASBOS3NHTVSEI.jpg",
    title: "Pelé",
    year:"1960s",
    goals: "403 GOALS"
},


] 

const [index, setIndex] = useState(0);

function onRightClick() {
  setIndex ((index+1) % cardsInfo.length);
}

function onLeftClick() {
    if (index===0) { 
        setIndex (cardsInfo.length -1)
    }
    else { 
        setIndex (index -1)
    }
}


  return <div>
      <img  className="imageOne" src="https://cdn-icons.flaticon.com/png/512/3661/premium/3661484.png?token=exp=1642714898~hmac=9a87daf2c5da47ebcc53012a056ea300" alt="first" onClick={onLeftClick}/>
      <Card url={cardsInfo[index].url} title={cardsInfo[index].title} year={cardsInfo[index].year} goals={cardsInfo[index].goals}/>
<img className="imageTwo" src="https://cdn-icons.flaticon.com/png/512/3661/premium/3661482.png?token=exp=1642714895~hmac=2aea42f323cac9fc3be827fcb47e8b9a" alt="first" onClick={onRightClick}/>
      
  </div>;
}
