import React from "react";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";
import "./styles.css";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />

        <FormInput />

        <List />

        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
