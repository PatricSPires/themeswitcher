import React from "react";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
