import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
