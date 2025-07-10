import { Route, Routes as ReactRouterRoutes } from "react-router";
import Home from "./components/Home";
import Form from "./components/Form";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
