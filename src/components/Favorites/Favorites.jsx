import { useContext } from "react";
import "./Favorites.css";
import { Link } from "react-router-dom";
import { ComicsContext } from "../../contexts/ComicsContext";
import { UserContext } from "../../contexts/UserContext";
import { useFavoritesComics } from "../../hooks/useFavorites";

const Favorites = () => {
  const { users, userLog } = useContext(UserContext);
  const { comicsList } = useContext(ComicsContext);
  const favoritesComics = useFavoritesComics();

  const filterUsersByUid = users.filter((user) => {
    return user.uid === userLog.uid;
  });

  const array = [];

  filterUsersByUid.forEach((user) => {
    comicsList.map((comic) => {
      return user.favorites.includes(comic.id) && array.push(comic);
    });
  });
  let hash = {};
  const comicsFilterByFavorite = array.filter((ele) => {
    const exists = !hash[ele.id];
    hash[ele.id] = true;
    return exists;
  });

  return (
    <div className="favorites">
      <h2>Favoritos</h2>
      {comicsFilterByFavorite.length === 0 && (
        <h5>No has agregado favoritos</h5>
      )}
      <div className="row">
        {comicsFilterByFavorite.map((comic, idx) => {
          return (
            <div className="col-3" key={comic.id}>
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
  );
};

export default Favorites;
