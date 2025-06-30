import { Link } from "react-router-dom";
import classes from "./index.module.css";

export const Home = () => {
  return (
    <section className={classes.home}>
      <p>
        Умный анализ ваших доходов и расходов. Получайте персонализированные
        рекомендации по оптимизации бюджета с помощью искусственного интеллекта.
      </p>

      <ul>
        <li>Визуализация финансовых потоков</li>
        <li>Анализ моделей расходов</li>
        <li>Рекомендации по экономии</li>
      </ul>

      <Link to="/form" className={classes.button}>
        Начать анализ
      </Link>
    </section>
  );
};
