import { Route, Routes } from "react-router";
import { Home } from "./components/Home";
import { Form } from "./components/Form";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};
