import React from "react";

export  default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "online") {
        badgeText = "ONLINE"
    }
    return (
    <div className="card">
            {badgeText && <div className="card--badge"> {badgeText}</div> }          
            <img src={`./images/${props.coverImg}`} className="card--image" alt="Katie Zaferes" />
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" alt="star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
                
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><span className="bold">${props.price}</span> /person</p>
    </div>
   )
}

