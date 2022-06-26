import "./Comics.css";
import React, { useContext } from "react";
import { ComicsContext } from "../../contexts/ComicsContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";

const Comics = () => {
  const { comicsList, setOffset, hasMore } = useContext(ComicsContext);

  return (
    <InfiniteScroll
      dataLength={comicsList.length}
      hasMore={hasMore}
      next={() => setOffset((prevOffset) => prevOffset + 20)}
      loader={<Loading />}
    >
      <div className="comics">
        <Card comics={comicsList} />
      </div>
    </InfiniteScroll>
  );
};

export default Comics;
