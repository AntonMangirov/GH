import React from "react";

import "../../styles/variables.css";
import "../../styles/fonts.css";
import AppLayout from "./AppLayout";
import FormPage from "../FormPage";

class App extends React.Component {
  render() {
    return (
      <AppLayout>
        <FormPage />
      </AppLayout>
    );
  }
}

export default App;
