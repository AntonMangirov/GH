import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  LinearProgress,
  Paper,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { AnalysisResult } from '../../Utils/openaiService';

interface AnalysisResultProps {
  result: AnalysisResult;
  onReset: () => void;
  isVisible: boolean;
}

const AnalysisResultComponent: React.FC<AnalysisResultProps> = ({
  result,
  onReset,
  isVisible,
}) => {
  if (!isVisible) return null;

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'high': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  const getRiskText = (level: string) => {
    switch (level) {
      case 'low': return 'Низкий';
      case 'medium': return 'Средний';
      case 'high': return 'Высокий';
      default: return 'Неизвестно';
    }
  };

  return (
    <Box sx={{ mt: 4, mb: 4 }}>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
        {/* Основные показатели */}
        <Card sx={{ flex: '1 1 300px', minWidth: 300 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Ежемесячные сбережения
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              {result.monthlySavings.toLocaleString()} ₽
            </Typography>
            <LinearProgress
              variant="determinate"
              value={Math.min((result.monthlySavings / 100000) * 100, 100)}
              sx={{ height: 8, borderRadius: 4 }}
            />
          </CardContent>
        </Card>

        <Card sx={{ flex: '1 1 300px', minWidth: 300 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Процент сбережений
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              {result.savingsPercentage.toFixed(1)}%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={Math.min(result.savingsPercentage, 100)}
              sx={{ height: 8, borderRadius: 4 }}
            />
          </CardContent>
        </Card>

        <Card sx={{ flex: '1 1 300px', minWidth: 300 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              Уровень риска
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 80 }}>
              <Chip
                label={getRiskText(result.riskLevel)}
                sx={{
                  backgroundColor: getRiskColor(result.riskLevel),
                  color: 'white',
                  fontSize: '1.2rem',
                  padding: 2,
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Простая визуализация */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
        <Paper sx={{ p: 2, flex: '1 1 400px', minWidth: 400, height: 300 }}>
          <Typography variant="subtitle1" gutterBottom>
            Динамика накоплений за 6 месяцев
          </Typography>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={[
              { month: '1м', current: result.monthlySavings, potential: result.monthlySavings * 1.3 },
              { month: '2м', current: result.monthlySavings * 2, potential: result.monthlySavings * 1.3 * 2 },
              { month: '3м', current: result.monthlySavings * 3, potential: result.monthlySavings * 1.3 * 3 },
              { month: '4м', current: result.monthlySavings * 4, potential: result.monthlySavings * 1.3 * 4 },
              { month: '5м', current: result.monthlySavings * 5, potential: result.monthlySavings * 1.3 * 5 },
              { month: '6м', current: result.monthlySavings * 6, potential: result.monthlySavings * 1.3 * 6 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value: any) => [`${value.toLocaleString()} ₽`, 'Накопления']}
                labelFormatter={(label: any) => `${label} месяц`}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#8884d8" 
                strokeWidth={3}
                name="Текущие накопления"
                dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="potential" 
                stroke="#4CAF50" 
                strokeWidth={3}
                name="С экономией расходов"
                dot={{ fill: '#4CAF50', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: 'text.secondary', mt: 1 }}>
            Фиолетовая линия - текущие накопления, зеленая - с экономией расходов
          </Typography>
        </Paper>

        <Paper sx={{ p: 2, flex: '1 1 400px', minWidth: 400, height: 300 }}>
          <Typography variant="subtitle1" gutterBottom>
            Время достижения цели
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="primary" gutterBottom>
                {result.estimatedTimeToGoal > 0 ? result.estimatedTimeToGoal : '∞'}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {result.estimatedTimeToGoal > 0 ? 'месяцев' : 'Цель недостижима'}
              </Typography>
              {result.estimatedTimeToGoal > 0 && (
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                  При текущих сбережениях
                </Typography>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Рекомендации */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Рекомендации
          </Typography>
          <Typography variant="body1" paragraph>
            {result.recommendations}
          </Typography>
          {result.estimatedTimeToGoal > 0 && (
            <Typography variant="body2" color="text.secondary">
              Оценка времени достижения цели: {result.estimatedTimeToGoal} месяцев
            </Typography>
          )}
        </CardContent>
      </Card>

    </Box>
  );
};

export default AnalysisResultComponent;
