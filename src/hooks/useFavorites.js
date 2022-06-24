import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { updateUser } from "../firebase";

export function useFavoritesComics() {
  const { users, userLog } = useContext(UserContext);

  const favoritesComics = (comicId) => (e) => {
    users.map((user) => {
      user.uid === userLog.uid &&
        (!user.favorites.includes(comicId) ? (
          <>
            {user.favorites.push(comicId)}
            {(e.target.src = "../images/corazonFav.svg")}
          </>
        ) : (
          <>
            {
              (user.favorites = user.favorites.filter((fav) => {
                return fav !== comicId;
              }))
            }
            {(e.target.src = "../images/corazonUnFav.svg")}
          </>
        ));

      return updateUser(user.id, { favorites: user.favorites });
    });
    // !fav.includes(userLog.uid)
    //   ? fav.push(userLog.uid)
    //   : (fav = fav.filter((fa) => {
    //       return fa !== userLog.uid;
    //     }));
  };

  return favoritesComics;
}
