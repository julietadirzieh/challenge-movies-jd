import { Route, Routes } from "react-router-dom";
import HomePage from "../screens/HomePage";
import MovieDetailPage from "../screens/MovieDetailPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
    </Routes>
  );
};

export default MainRouter;
