import { Link } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>
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
    </Box>
  );
};

export default Home;
