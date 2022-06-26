import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useFavoritesComics } from "../../hooks/useFavorites";

const Card = ({ comics = [] }) => {
  const { users, userLog } = useContext(UserContext);
  const favoritesComics = useFavoritesComics();

  const filterUsersByUid = users.filter((user) => {
    return user.uid === userLog.uid;
  });
  return (
    <div className="row">
      {comics.map((comic, idx) => {
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
  );
};

export default Card;
