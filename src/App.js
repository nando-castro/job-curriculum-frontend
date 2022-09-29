import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./assets/css/reset";
import GlobalStyle from "./assets/css/global";
import HomeScreen from "./pages/home/HomeScreen";
import LoginScreen from "./pages/signin/LoginScreen";
import RegisterScreen from "./pages/signup/RegisterScreen";

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signin" element={<LoginScreen />} />
        <Route path="/signup" element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
