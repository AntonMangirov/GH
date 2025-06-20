import Header from "../../Header";
import "./index.css";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app">
      <Header />
      <main className="content">{children}</main>
    </div>
  );
};

export default AppLayout;
