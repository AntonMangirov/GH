import classes from "./index.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>
        Финансовый помощник с использованием ИИ
      </h1>
    </header>
  );
};

export default Header;
