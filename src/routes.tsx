import { Route, Routes as ReactRouterRoutes } from "react-router";
import Home from "./components/Home";
import Form from "./components/Form";
import Results from "./components/Results";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/results" element={<Results />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
