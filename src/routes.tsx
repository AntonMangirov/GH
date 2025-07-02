import { Route, Routes } from "react-router";
import { Home } from "./components/Home";
import { Form } from "./components/Form";
import AppLayout from "./components/App/AppLayout";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Route>
    </Routes>
  );
};
