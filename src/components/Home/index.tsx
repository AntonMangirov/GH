import { Link as RouterLink } from "react-router";
import { 
  Typography, 
  List, 
  ListItem, 
  Link, 
  Container, 
  Box, 
  Card, 
  CardContent,
  Button,
  Paper
} from "@mui/material";
import { 
  TrendingUp, 
  Analytics, 
  Lightbulb, 
  Security, 
  Speed, 
  Psychology 
} from "@mui/icons-material";

const Home = () => {
  const features = [
    {
      icon: <Analytics sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Умный анализ данных",
      description: "Искусственный интеллект анализирует ваши доходы, расходы и цели накоплений"
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Персонализированные рекомендации",
      description: "Получайте советы по оптимизации бюджета и увеличению сбережений"
    },
    {
      icon: <Security sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Оценка рисков",
      description: "Определяем уровень финансового риска и предлагаем стратегии защиты"
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Быстрые расчеты",
      description: "Мгновенный анализ с помощью современных AI технологий"
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Планирование целей",
      description: "Рассчитываем время достижения ваших финансовых целей"
    },
    {
      icon: <Lightbulb sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Инвестиционные идеи",
      description: "Предлагаем варианты для увеличения доходности ваших сбережений"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Заголовок */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          FinancePlanner AI
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ maxWidth: 800, mx: 'auto' }}>
          Умный анализ ваших доходов и расходов с помощью искусственного интеллекта. 
          Получайте персонализированные рекомендации по оптимизации бюджета и достижению финансовых целей.
        </Typography>
        <Button 
          component={RouterLink} 
          to="/form" 
          variant="contained" 
          size="large"
          sx={{ 
            mt: 3, 
            px: 4, 
            py: 1.5, 
            fontSize: '1.1rem',
            fontWeight: 600
          }}
        >
          Начать планирование
        </Button>
      </Box>

      {/* Основные возможности */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Что умеет наш AI-аналитик
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ flex: '1 1 350px', minWidth: 350 }}>
              <Card sx={{ height: '100%', p: 2 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Как это работает */}
      <Paper sx={{ p: 4, mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Как это работает
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <Box sx={{ flex: '1 1 300px', minWidth: 300, textAlign: 'center' }}>
            <Typography variant="h3" color="primary" gutterBottom>1</Typography>
            <Typography variant="h6" gutterBottom>Введите данные</Typography>
            <Typography variant="body2" color="text.secondary">
              Укажите ваши доходы, ежемесячные расходы и финансовые цели
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', minWidth: 300, textAlign: 'center' }}>
            <Typography variant="h3" color="primary" gutterBottom>2</Typography>
            <Typography variant="h6" gutterBottom>AI анализирует</Typography>
            <Typography variant="body2" color="text.secondary">
              Искусственный интеллект обрабатывает данные и выявляет паттерны
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 300px', minWidth: 300, textAlign: 'center' }}>
            <Typography variant="h3" color="primary" gutterBottom>3</Typography>
            <Typography variant="h6" gutterBottom>Получите результат</Typography>
            <Typography variant="body2" color="text.secondary">
              Визуализация данных, рекомендации и план достижения целей
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Преимущества */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Преимущества AI-анализа
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              🎯 <strong>Точность:</strong> AI учитывает множество факторов для точного анализа
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              ⚡ <strong>Скорость:</strong> Мгновенные расчеты и рекомендации
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              🔒 <strong>Безопасность:</strong> Ваши данные обрабатываются локально
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              📊 <strong>Визуализация:</strong> Понятные графики и диаграммы
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              💡 <strong>Персонализация:</strong> Рекомендации под вашу ситуацию
            </Typography>
          </ListItem>
        </List>
      </Box>

      {/* Призыв к действию */}
      <Box sx={{ textAlign: 'center', p: 4, bgcolor: 'primary.main', color: 'white', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Готовы оптимизировать свои финансы?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Начните прямо сейчас и получите персональный финансовый план
        </Typography>
        <Button 
          component={RouterLink} 
          to="/form" 
          variant="contained" 
          size="large"
          sx={{ 
            bgcolor: 'white', 
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'grey.100'
            }
          }}
        >
          Создать план накоплений
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
