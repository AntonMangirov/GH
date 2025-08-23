import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { analyzeFinancialData } from '../../Utils/openaiService';

// Упрощенные типы для мидл-разработчика
interface FormData {
  mainIncome: string;
  extraIncome: string;
  housing: string;
  food: string;
  transport: string;
  health: string;
  entertainment: string;
  other: string;
  purpose: string;
  timeframe: string;
}

interface AnalysisResult {
  monthlySavings: number;
  totalSavings: number;
  savingsPercentage: number;
  riskLevel: string;
  recommendations: string;
  estimatedTimeToGoal: number;
  isLocalAnalysis?: boolean;
}

interface FormContextType {
  formData: FormData;
  setFormData: (data: FormData) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  analysisResult: AnalysisResult | null;
  setAnalysisResult: (result: AnalysisResult | null) => void;
  showResult: boolean;
  setShowResult: (show: boolean) => void;
  handleCalculate: () => Promise<void>;
  handleReset: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    mainIncome: '',
    extraIncome: '',
    housing: '',
    food: '',
    transport: '',
    health: '',
    entertainment: '',
    other: '',
    purpose: '',
    timeframe: '12'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = async () => {
    console.log('=== ДАННЫЕ ФОРМ ===');
    console.log('Доходы:');
    console.log('- Основной доход:', formData.mainIncome);
    console.log('- Дополнительный доход:', formData.extraIncome);
    console.log('');
    console.log('Расходы:');
    console.log('- Жилье:', formData.housing);
    console.log('- Питание:', formData.food);
    console.log('- Транспорт:', formData.transport);
    console.log('- Здоровье:', formData.health);
    console.log('- Развлечения:', formData.entertainment);
    console.log('- Другие расходы:', formData.other);
    console.log('');
    console.log('Цели:');
    console.log('- Сумма для накопления:', formData.purpose);
    console.log('- Срок накопления:', formData.timeframe, 'месяцев');
    console.log('==================');

    setIsLoading(true);
    setShowResult(false);

    try {
      const result = await analyzeFinancialData(formData);
      setAnalysisResult(result);
      setShowResult(true);
      console.log('Результат анализа:', result);
      // Перенаправляем на страницу результатов
      navigate('/results');
    } catch (error) {
      console.error('Ошибка при анализе данных:', error);
      
      // Простая обработка ошибки для мидл-разработчика
      const fallbackResult: AnalysisResult = {
        monthlySavings: 0,
        totalSavings: 0,
        savingsPercentage: 0,
        riskLevel: 'medium',
        estimatedTimeToGoal: 0,
        recommendations: 'AI в данный момент не отвечает. Анализ создан локально.',
        isLocalAnalysis: true
      };
      setAnalysisResult(fallbackResult);
      setShowResult(true);
      navigate('/results');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      mainIncome: '',
      extraIncome: '',
      housing: '',
      food: '',
      transport: '',
      health: '',
      entertainment: '',
      other: '',
      purpose: '',
      timeframe: '12'
    });
    setAnalysisResult(null);
    setShowResult(false);
    navigate('/form');
  };

  return (
    <FormContext.Provider value={{
      formData,
      setFormData,
      isLoading,
      setIsLoading,
      analysisResult,
      setAnalysisResult,
      showResult,
      setShowResult,
      handleCalculate,
      handleReset
    }}>
      {children}
    </FormContext.Provider>
  );
};
