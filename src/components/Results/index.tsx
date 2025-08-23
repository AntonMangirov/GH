import React from 'react';
import { Container, Box, Typography, Button, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import AnalysisResult from '../Common/AnalysisResult';
import { useFormContext } from '../Form/FormContext';

const Results = () => {
  const { analysisResult, showResult, handleReset } = useFormContext();

  if (!analysisResult || !showResult) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Результаты не найдены
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Сначала необходимо заполнить формы и произвести расчет.
        </Typography>
        <Button 
          component={RouterLink} 
          to="/form" 
          variant="contained" 
          size="large"
        >
          Перейти к формам
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Результаты анализа
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Ваш персональный финансовый план
        </Typography>
        {analysisResult.isLocalAnalysis && (
          <Alert severity="info" sx={{ mt: 2, mb: 2 }}>
            Извините, но нейросеть по техническим причинам временно недоступна. 
            Мы создали для вас рекомендации самостоятельно на основе ваших данных.
          </Alert>
        )}
      </Box>

      <AnalysisResult 
        result={analysisResult}
        onReset={handleReset}
        isVisible={true}
      />

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button 
          component={RouterLink} 
          to="/" 
          variant="outlined" 
          size="large"
          sx={{ mr: 2 }}
        >
          На главную
        </Button>
        <Button 
          component={RouterLink} 
          to="/form" 
          variant="contained" 
          size="large"
        >
          Новый расчет
        </Button>
      </Box>
    </Container>
  );
};

export default Results;
