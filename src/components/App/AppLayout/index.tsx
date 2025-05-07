import Header from "../../Header/Header";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout(props: Props) {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">{props.children}</main>
    </div>
  );
}
