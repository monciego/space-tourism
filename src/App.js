import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Crew from "./pages/Crew/Crew";
import Destination from "./pages/Destination/Destination";
import Home from "./pages/Home/Home";
import Technology from "./pages/Technology/Technology";
import GlobalStyle from "./styles/globalStyles/globalStlyes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
