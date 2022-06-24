import "./Comics.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ComicsContext } from "../../contexts/ComicsContext";
import { useFavoritesComics } from "../../hooks/useFavorites";
import { UserContext } from "../../contexts/UserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading/Loading";

const Comics = () => {
  const { comicsList, setOffset, hasMore } = useContext(ComicsContext);
  const { users, userLog } = useContext(UserContext);

  const favoritesComics = useFavoritesComics();

  const filterUsersByUid = users.filter((user) => {
    return user.uid === userLog.uid;
  });

  return (
    <InfiniteScroll
      dataLength={comicsList.length}
      hasMore={hasMore}
      next={() => setOffset((prevOffset) => prevOffset + 20)}
      loader={<Loading />}
    >
      <div className="comics">
        <div className="row">
          {comicsList.map((comic, idx) => {
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
    </InfiniteScroll>
  );
};

export default Comics;
