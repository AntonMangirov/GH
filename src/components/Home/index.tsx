import { Link } from "react-router";
import { Typography, List, ListItem, Button, Container } from "@mui/material";

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

      <Button
        component={Link}
        to="/form"
        variant="contained"
        sx={{ marginTop: "16px" }}
      >
        Начать планирование
      </Button>
    </Container>
  );
};

export default Home;
