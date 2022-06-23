import swal from "sweetalert";
import { createContext, useEffect, useState } from "react";

export const ComicsContext = createContext();

export const ComicsProvider = ({ children }) => {
  const [comicsList, setComicsList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=34705e890adee3e04d6aa209751a758e&hash=e7b4d3b640f2521b5eb15ecc1dfce4e8";

    fetch(endPoint)
      .then((res) => res.json())
      .then((res) => setComicsList(res.data.results))
      .catch((error) => {
        swal(<h2>Tuvimos problemas, inténtalo de nuevo</h2>);
      });
  }, [setComicsList]);
  return (
    <ComicsContext.Provider
      value={{
        setComicsList,
        comicsList,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};
