import React, { useContext, useState } from "react";
import { ContextObject } from "../Context";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const {toggleFavorite} = useContext(ContextObject)

  const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>
  
  return (
    <div className={`${className} image-container`}>
      {heartIcon}
      {cartIcon}

      <img
        src={img.url}
        className="image-grid"
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        />
    </div>
  );
}

export default Image;
