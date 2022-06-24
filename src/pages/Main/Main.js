import "./Main.css";
import { Route, Routes } from "react-router-dom";

import Comics from "../../components/Comics/Comics";
import Header from "../../components/Header/Header";
import Results from "../../components/Results/Results";
import Detail from "../../components/Detail/Detail";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Comics />} />
        <Route path="/results" element={<Results />} />
        <Route path="/detalle" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default Main;
