import React, { createContext, useContext, useState, ReactNode } from 'react';

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

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleCalculate: () => void;
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
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
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

  const handleCalculate = () => {
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
    
    
    setTimeout(() => {
      setIsLoading(false);
      alert('Расчет завершен! Проверьте консоль для просмотра данных форм.');
    }, 3000);
  };

  return (
    <FormContext.Provider value={{
      formData,
      setFormData,
      isLoading,
      setIsLoading,
      handleCalculate
    }}>
      {children}
    </FormContext.Provider>
  );
};
