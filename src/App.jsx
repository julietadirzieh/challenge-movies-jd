import { BrowserRouter } from "react-router-dom";

import MainRouter from "./router/MainRouter";
import { MovieProvider } from "./context/MovieProvider";

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <MainRouter />
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
