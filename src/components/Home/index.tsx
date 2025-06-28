import { useNavigate } from "react-router-dom";
import "./index.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home">
      <p>
        Умный анализ ваших доходов и расходов. Получайте персонализированные
        рекомендации по оптимизации бюджета с помощью искусственного интеллекта.
      </p>

      <ul className="home-features">
        <li>Визуализация финансовых потоков</li>
        <li>Анализ моделей расходов</li>
        <li>Рекомендации по экономии</li>
      </ul>

      <button className="home-button" onClick={() => navigate("")}>
        Начать анализ
      </button>
    </section>
  );
};
