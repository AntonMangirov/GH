import AppLayout from "./AppLayout";
import Routes from "../../routes";
import { FormProvider } from "../Form/FormContext";

const App = () => {
  return (
    <FormProvider>
      <AppLayout>
        <Routes />
      </AppLayout>
    </FormProvider>
  );
};

export default App;
