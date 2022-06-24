import "./Detail.css";
import { useEffect, useState } from "react";
import swal from "@sweetalert/with-react";

const Detail = () => {
  const [comic, setComic] = useState(null);

  let query = new URLSearchParams(window.location.search);
  let comicId = query.get("comicId");
  console.log(comicId);
  useEffect(() => {
    const endPoint = `https://gateway.marvel.com/v1/public/comics/${comicId}?ts=1&apikey=34705e890adee3e04d6aa209751a758e&hash=e7b4d3b640f2521b5eb15ecc1dfce4e8`;
    fetch(endPoint)
      .then((res) => res.json())
      .then((response) => {
        const comicData = response.data.results;
        console.log(comicData);
        if (comicData.length === 0) {
          swal(<h4>No hay resultados para tu búsqueda</h4>);
        }
        setComic(comicData);
      })
      .catch(() => {
        swal(<h2>Hubo un error, inténtalo de nuevo</h2>);
      });
  }, [comicId]);

  return (
    <>
      {comic && (
        <div className="detail">
          <h2>Título: {comic[0].title}</h2>
          <div className="row">
            <div className="col-4">
              <img
                src={`${comic[0].thumbnail.path}/portrait_incredible.${comic[0].thumbnail.extension}`}
                className="img-fluid"
                alt="comic_post"
              />
            </div>
            <div className="col-8">
              <h5>Descripción: </h5>
              <p>{comic[0].description}</p>
              <h5>Serie: </h5>
              <p>{comic[0].series.name}</p>
              <h5>Personajes: </h5>
              <ul>
                {comic[0].characters.items.map((item, idx) => (
                  <li key={idx}>{item.name}</li>
                ))}
              </ul>
              <h5>Variantes:</h5>
              <ul>
                {comic[0].variants.map((variant, idx) => (
                  <li key={idx}>{variant.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
