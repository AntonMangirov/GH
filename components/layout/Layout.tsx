export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header>Шапка</header>
        <main>{children}</main>
        <footer>Подвал</footer>
      </div>
    )
  }