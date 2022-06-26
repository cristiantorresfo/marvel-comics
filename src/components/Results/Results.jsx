import { useContext, useEffect, useState } from "react";
import {useSearchParams } from "react-router-dom";
import swal from "@sweetalert/with-react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ComicsContext } from "../../contexts/ComicsContext";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";

const Results = () => {
  const [comicsResults, setComicsResults] = useState([]);
  const { offset, setOffset, hasMore } = useContext(ComicsContext);

  let [searchParams] = useSearchParams();
  let keyword = searchParams.get("keyword");

  useEffect(() => {
    const endPoint = `https://gateway.marvel.com/v1/public/comics?titleStartsWith=${keyword}&limit=20&offset=${offset}&ts=1&apikey=34705e890adee3e04d6aa209751a758e&hash=e7b4d3b640f2521b5eb15ecc1dfce4e8`;
    fetch(endPoint)
      .then((res) => res.json())
      .then((response) => {
        const comicsData = response.data.results;
        if (comicsData.length === 0) {
          swal(<h4>No hay resultados para tu búsqueda</h4>);
        }
        setComicsResults((prevComics) => prevComics.concat(comicsData));
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
      loader={<Loading />}
    >
      <div>
        <div className="comics">
          <Card comics={comicsResults} />
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Results;
