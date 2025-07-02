import { Outlet } from "react-router";
import Header from "../../Header";
import classes from "./index.module.css";

const AppLayout = () => {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
