// Типы для анализа финансовых данных
export interface FormData {
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

export interface AnalysisResult {
  monthlySavings: number;
  totalSavings: number;
  savingsPercentage: number;
  riskLevel: string;
  recommendations: string;
  estimatedTimeToGoal: number;
  isLocalAnalysis?: boolean;
}

// Функция для анализа финансовых данных через OpenAI API
export const analyzeFinancialData = async (
  formData: FormData
): Promise<AnalysisResult> => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  // Если нет API ключа, используем локальный анализ
  if (!apiKey) {
    console.log("API ключ OpenAI не найден, используем локальный анализ");
    return performLocalAnalysis(formData);
  }

  // Подготовка данных для анализа
  const totalIncome =
    parseFloat(formData.mainIncome || "0") +
    parseFloat(formData.extraIncome || "0");
  const totalExpenses =
    parseFloat(formData.housing || "0") +
    parseFloat(formData.food || "0") +
    parseFloat(formData.transport || "0") +
    parseFloat(formData.health || "0") +
    parseFloat(formData.entertainment || "0") +
    parseFloat(formData.other || "0");

  const monthlySavings = totalIncome - totalExpenses;
  const targetAmount = parseFloat(formData.purpose || "0");
  const timeframe = parseInt(formData.timeframe || "12");

  // Если нет доступа к API, используем локальный анализ
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Ты финансовый консультант. Анализируй данные и давай рекомендации на русском языке.",
          },
          {
            role: "user",
            content: `Проанализируй финансовую ситуацию:
            - Общий доход: ${totalIncome} руб/мес
            - Общие расходы: ${totalExpenses} руб/мес
            - Ежемесячные сбережения: ${monthlySavings} руб/мес
            - Цель накопления: ${targetAmount} руб
            - Срок: ${timeframe} месяцев
            
            Дай рекомендации по:
            1. Уровню риска (low/medium/high)
            2. Конкретным шагам для достижения цели
            3. Оптимизации расходов
            4. Возможностям увеличения дохода`,
          },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`API ошибка: ${response.status}`);
    }

    const data = await response.json();
    const analysis = data.choices[0]?.message?.content || "";

    // Парсинг ответа от AI
    const riskLevel = analysis.toLowerCase().includes("высокий")
      ? "high"
      : analysis.toLowerCase().includes("средний")
      ? "medium"
      : "low";

    const estimatedTimeToGoal =
      monthlySavings > 0 ? Math.ceil(targetAmount / monthlySavings) : 0;

    return {
      monthlySavings,
      totalSavings: monthlySavings * timeframe,
      savingsPercentage:
        totalIncome > 0 ? (monthlySavings / totalIncome) * 100 : 0,
      riskLevel,
      recommendations: analysis,
      estimatedTimeToGoal,
    };
  } catch (error) {
    console.error("Ошибка при обращении к OpenAI API:", error);

    // Локальный анализ как fallback
    return performLocalAnalysis(formData);
  }
};

// Локальный анализ без использования API
const performLocalAnalysis = (formData: FormData): AnalysisResult => {
  const totalIncome =
    parseFloat(formData.mainIncome || "0") +
    parseFloat(formData.extraIncome || "0");
  const totalExpenses =
    parseFloat(formData.housing || "0") +
    parseFloat(formData.food || "0") +
    parseFloat(formData.transport || "0") +
    parseFloat(formData.health || "0") +
    parseFloat(formData.entertainment || "0") +
    parseFloat(formData.other || "0");

  const monthlySavings = totalIncome - totalExpenses;
  const targetAmount = parseFloat(formData.purpose || "0");
  const timeframe = parseInt(formData.timeframe || "12");
  const estimatedTimeToGoal =
    monthlySavings > 0 ? Math.ceil(targetAmount / monthlySavings) : 0;

  // Определение уровня риска
  let riskLevel = "medium";
  if (monthlySavings < 0) {
    riskLevel = "high";
  } else if (monthlySavings > totalIncome * 0.3) {
    riskLevel = "low";
  }

  // Базовые рекомендации
  let recommendations = "";
  if (monthlySavings < 0) {
    recommendations =
      " Ваши расходы превышают доходы. Рекомендуется сократить расходы или найти дополнительные источники дохода.";
  } else if (monthlySavings < targetAmount / timeframe) {
    recommendations =
      " Для достижения цели нужно увеличить ежемесячные сбережения. Рассмотрите возможность оптимизации расходов.";
  } else {
    recommendations =
      " Отличная финансовая дисциплина! Вы на правильном пути к достижению цели.";
  }

  return {
    monthlySavings,
    totalSavings: monthlySavings * timeframe,
    savingsPercentage:
      totalIncome > 0 ? (monthlySavings / totalIncome) * 100 : 0,
    riskLevel,
    recommendations,
    estimatedTimeToGoal,
    isLocalAnalysis: true,
  };
};
