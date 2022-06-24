import  {  useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom";
import swal from '@sweetalert/with-react'


const Results = () => {
const [comicsResults, setComicsResults] = useState([]);
  let [searchParams] = useSearchParams()
  let keyword = searchParams.get('keyword')
  
  useEffect(() => {
    const endPoint = `https://gateway.marvel.com/v1/public/comics?title=${keyword}&ts=1&apikey=34705e890adee3e04d6aa209751a758e&hash=e7b4d3b640f2521b5eb15ecc1dfce4e8`;
    fetch(endPoint)
    .then(res => res.json())
      .then((response) => {
        const comicsData = response.data.results;
        if (comicsData.length === 0) {
          swal(<h4>No hay resultados para tu búsqueda</h4>);
        }
        setComicsResults(comicsData);
      })
      .catch(() => {
        swal(<h2>Hubo un error, inténtalo de nuevo</h2>);
      });
  }, [keyword]);
  return (
    <div>
       <div className='comics'>
  <div className="row">
  {comicsResults.map((comic, idx) => {
    return (
        <div className="col-3" key={idx}>
          <div className="card">
             <img src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`} className="card-img-top" alt="..." />
            <button  data-comic-id={comic.id} className="favorite-btn">🖤</button> 
             <div className="card-body">
              <h5 className="card-title">{comic.title.substring(0, 20)}...</h5>
              <Link to={`/main/detalle?comicId=${comic.id}`} className="btn btn-primary">
                View detail
              </Link>
            </div>             
          </div>
        </div>
    );
  })}
  </div>
  </div>
    </div>
  )
}

export default Results