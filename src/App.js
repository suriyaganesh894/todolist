import React from "react";
import Forminput from "./Components/Forminput";
import List from "./Components/List";
import Footer from "./Components/Footer";
import { DataProvider } from "./Components/DataProvider";
function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>Todo List</h1>

        <Forminput />

        <List />

        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
