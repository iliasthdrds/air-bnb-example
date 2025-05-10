import React from "react";

export  default function Card(props) {
    return (
    <div className="card">
            <img src={`./images/${props.img}`} className="card--image" alt="Katie Zaferes" />
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.review}) • </span>
                <span className="gray">{props.country}</span>
                
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">${props.price}</span> /person</p>
    </div>
   )
}




