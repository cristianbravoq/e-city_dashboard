import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Topbar from "./views/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <main className="content"></main>
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
