// process.env.PUBLIC_URL
import React from "react"
import pinIcon from "../images/pin_icon_small.png"

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={process.env.PUBLIC_URL + props.img} alt="card img" className="card-img"></img>
      <div className="card-items">
        <div className="location-items">
          <div className="location-items-one">
            <img src={pinIcon} alt="pin img" className="location-img"></img>
            <span className="location-title">{props.location}</span>
          </div>
          <div className="location-items-two">
            <a href={props.map_url} className="map-url">View on Google Maps</a>
          </div>
        </div>
        <h3 className="title">{props.title}</h3>
        <div className="schedule">
          <strong>{props.start.toDateString()}</strong>
          <span>-</span>
          <strong>{props.end.toDateString()}</strong>
        </div>
        <p className="description">{props.description}</p>
      </div>
    </div>
  )
}

export default Card