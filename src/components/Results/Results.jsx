import { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import swal from "@sweetalert/with-react";
import { useFavoritesComics } from "../../hooks/useFavorites";
import { UserContext } from "../../contexts/UserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { ComicsContext } from "../../contexts/ComicsContext";
import Loading from "../Loading/Loading";

const Results = () => {
  const [comicsResults, setComicsResults] = useState([]);  
  const { users, userLog,  } = useContext(UserContext);
  const {offset, setOffset, hasMore} = useContext(ComicsContext);
  const favoritesComics = useFavoritesComics();

  let [searchParams] = useSearchParams();
  let keyword = searchParams.get("keyword");

  const filterUsersByUid = users.filter((user) => {
    return user.uid === userLog.uid;
  });

  useEffect(() => {
    const endPoint = `https://gateway.marvel.com/v1/public/comics?titleStartsWith=${keyword}&limit=20&offset=${offset}&ts=1&apikey=34705e890adee3e04d6aa209751a758e&hash=e7b4d3b640f2521b5eb15ecc1dfce4e8`;
    fetch(endPoint)
      .then((res) => res.json())
      .then((response) => {
        const comicsData = response.data.results;
        if (comicsData.length === 0) {
          swal(<h4>No hay resultados para tu búsqueda</h4>);
        }
        setComicsResults(prevComics => prevComics.concat(comicsData));
      })
      .catch(() => {
        swal(<h2>Hubo un error, inténtalo de nuevo</h2>);
      });
  }, [keyword, offset]);
  return (
    <InfiniteScroll
      dataLength={comicsResults.length}
      hasMore={hasMore}
      next={() => setOffset((prevoffset) => prevoffset + 20)}
      loader = {<Loading/>}
    >
    <div>
      <div className="comics">
        <div className="row">
          {comicsResults.map((comic, idx) => {
            return (
              <div className="col-3" key={idx}>
                <div className="card">
                  <img
                    src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <button data-comic-id={comic.id} className="favorite-btn">
                    <img
                      height="13px"
                      src={filterUsersByUid.map((user) => {
                        return user.favorites.includes(comic.id)
                          ? "../images/corazonFav.svg"
                          : "../images/corazonUnFav.svg";
                      })}
                      alt="logo_fav"
                      onClick={favoritesComics(comic.id)}
                    />
                  </button>
                  <div className="card-body">
                    <h5 className="card-title">
                      {comic.title.substring(0, 20)}...
                    </h5>
                    <Link
                      to={`/main/detail?comicId=${comic.id}`}
                      className="btn btn-primary"
                    >
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
    </InfiniteScroll>
  );
};

export default Results;
