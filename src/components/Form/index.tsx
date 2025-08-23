import { Container, Button } from "@mui/material";
import { FormProvider, useFormContext } from "./FormContext";
import LoadingOverlay from "../Common/LoadingOverlay";
import Income from "./components/income";
import Expense from "./components/expense";
import Purposes from "./components/purposes";

const FormContent = () => {
  const { handleCalculate, isLoading } = useFormContext();

  return (
    <Container maxWidth="md">
      <Income />
      <Expense />
      <Purposes />
      <Button 
        variant="contained" 
        size="large" 
        onClick={handleCalculate}
        sx={{ 
          mt: 3, 
          mb: 4,
          py: 1.5,
          px: 4,
          fontSize: '1.1rem',
          fontWeight: 600,
        }}
      >
        Рассчитать план накоплений
      </Button>
      <LoadingOverlay isVisible={isLoading} />
    </Container>
  );
};

const Form = () => {
  return (
    <FormProvider>
      <FormContent />
    </FormProvider>
  );
};

export default Form;
