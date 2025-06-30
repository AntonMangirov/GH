import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
