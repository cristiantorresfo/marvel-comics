import "./Main.css";
import { Route, Routes, useSearchParams } from "react-router-dom";

import Comics from "../../components/Comics/Comics";
import Header from "../../components/Header/Header";
import Results from "../../components/Results/Results";
import Detail from "../../components/Detail/Detail";
import Favorites from "../../components/Favorites/Favorites";

const Main = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Comics />} />
        <Route path="/results" element={<Results key={keyword} />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default Main;
