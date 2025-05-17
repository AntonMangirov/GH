import Header from "../../Header";
import "./AppLayout.css";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-container">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
