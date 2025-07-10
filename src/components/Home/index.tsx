import { Link as RouterLink } from "react-router";
import { Typography, List, ListItem, Link, Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="body1">
        Умный анализ ваших доходов и расходов. Получайте персонализированные
        рекомендации по оптимизации бюджета с помощью искусственного интеллекта.
      </Typography>

      <List>
        <ListItem>Визуализация финансовых потоков</ListItem>
        <ListItem>Анализ моделей расходов</ListItem>
        <ListItem>Рекомендации по экономии</ListItem>
      </List>

      <Link component={RouterLink} to="/form" variant="h6" underline="hover">
        Начать планирование
      </Link>
    </Container>
  );
};

export default Home;
