import React from "react";

import "./variables.css";
import "./fonts.css";
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
