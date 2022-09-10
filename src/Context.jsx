import React, { createContext, useEffect, useState } from "react";
// import useFetch from "./components/useFetch";

const context = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  useEffect(() => {
    async function doFetch() {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        );
        const data = await res.json();

        setAllPhotos(data);
      } catch (e) {
        console.error(e);
      }
    }

    doFetch();
  }, []);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        console.log(id);
        console.log(!photo.isFavorite);
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  }

  return (
    <context.Provider value={{ allPhotos, toggleFavorite }}>
      {props.children}
    </context.Provider>
  );
}

export { ContextProvider, context as ContextObject };
