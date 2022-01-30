import React from "react";
import Card from "../card";
import { useState } from "react";
import "./styles.css";

export default function CardHolder() {
  const cardsInfo = [
    {
      url: "https://tmssl.akamaized.net/images/foto/galerie/alfredo-di-stefano-legende-von-real-madrid-1543500967-19025.jpg?lm=1543500978",
      title: "Alfredo Di Stéfano",
      year: "1950s",
      goals: "301 GOALS",
    },
    {
      url: "https://tmssl.akamaized.net/images/foto/galerie/thierry-henry-arsenal-jubel-2012-1592828479-41984.jpg?lm=1592828454",
      title: "Thierry Henry",
      year: "2000s",
      goals: "313 GOALS",
    },
    {
      url: "https://www.poblanerias.com/wp-content/archivos/2016/10/hug.jpg",
      title: "Hugo Sánchez",
      year: "1980s",
      goals: "315 GOALS",
    },
    {
      url: "https://www.clarin.com/img/2014/01/21/HyHjX4e4l_720x0.jpg",
      title: "Romario",
      year: "1990s",
      goals: "340 GOALS",
    },
    {
      url: "https://www.eluniverso.com/resizer/UKDZIhZPKTrvOIcUF0bt-0-a00s=/685x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/JH7S77TVO5CKVASBOS3NHTVSEI.jpg",
      title: "Pelé",
      year: "1960s",
      goals: "403 GOALS",
    },

    {
      url: "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/6YON27YBYRAMJCCUYPNBVWSECA.jpg",
      title: "Josef Bican",
      year: "1940s",
      goals: "470 GOALS",
    },

    {
      url: "https://i.eurosport.com/2021/06/04/3145737-64470469-640-480.jpg",
      title: "Lionel Messi",
      year: "2010s",
      goals: "579 GOALS",
    },
  ];

  const [index, setIndex] = useState(0);

  function onRightClick() {
    setIndex((index + 1) % cardsInfo.length);
  }

  function onLeftClick() {
    if (index === 0) {
      setIndex(cardsInfo.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div className="cardHolder-container">
      <img
        className="cardHolder-leftArrow"
        src="https://cdn-icons.flaticon.com/png/512/3661/premium/3661484.png?token=exp=1642714898~hmac=9a87daf2c5da47ebcc53012a056ea300"
        alt="left"
        onClick={onLeftClick}
      />
      <Card
        className="cardHolder-card"
        url={cardsInfo[index].url}
        title={cardsInfo[index].title}
        year={cardsInfo[index].year}
        goals={cardsInfo[index].goals}
      />
      <img
        className="cardHolder-rightArrow"
        src="https://cdn-icons.flaticon.com/png/512/3661/premium/3661482.png?token=exp=1642714895~hmac=2aea42f323cac9fc3be827fcb47e8b9a"
        alt="right"
        onClick={onRightClick}
      />
    </div>
  );
}
