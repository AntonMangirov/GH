import Header from "../../Header";
import classes from "./index.module.css";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default AppLayout;
