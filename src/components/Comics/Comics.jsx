import './Comics.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ComicsContext } from '../../contexts/ComicsContext';

const Comics = () => {

    const {comicsList} = useContext(ComicsContext);

    
  return (
  <div className='comics'>
  <div className="row">
  {comicsList.map((comic, idx) => {
    return (
        <div className="col-3" key={idx}>
          <div className="card">
             <img src={`${comic.thumbnail.path}/portrait_medium.${comic.thumbnail.extension}`} className="card-img-top" alt="..." />
            <button  data-comic-id={comic.id} className="favorite-btn">🖤</button> 
             <div className="card-body">
              <h5 className="card-title">{comic.name}...</h5>
              <p className="card-text">
                {comic.name}...
              </p>
              <Link to={`/detalle?comicID=${comic.id}`} className="btn btn-primary">
                View detail
              </Link>
            </div>             
          </div>
        </div>
    );
  })}
  </div>
  </div>
  )
}

export default Comics