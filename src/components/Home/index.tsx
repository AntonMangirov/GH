import { useNavigate } from "react-router-dom";
import classes from "./index.module.css";

export const Home = () => {
  const navigate = useNavigate();

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

      <button className={classes.button} onClick={() => navigate("")}>
        Начать анализ
      </button>
    </section>
  );
};
