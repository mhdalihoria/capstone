import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils/index";
import { ContextObject } from "../Context";

function Photos() {
  const { allPhotos } = useContext(ContextObject || null);
  
  const imageElements = allPhotos.map((image, index) => {
    return <Image key={image.id} img={image} className={getClass(index)} />;
  });

  return (
    <main className="photos">
        {imageElements}
    </main>
  )
}

export default Photos;
