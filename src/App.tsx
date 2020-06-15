import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <Header />
      </header>
    </div>
  );
}

export default App;
