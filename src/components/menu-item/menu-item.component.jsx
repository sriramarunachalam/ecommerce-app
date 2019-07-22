import React from "react";
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    
    <div // This is to resize the image on hover. Its given as a separate div so that it doesnt affect the other elements.
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title"> {title.toUpperCase()} </h1>
      <span className="subtitle"> Shop Now </span>
    </div>
  </div>
);

export default MenuItem;