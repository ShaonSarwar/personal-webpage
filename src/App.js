import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import HomePage from './HomePage'
import { ThemeContext } from "./contexts/theme";
import { BuzzPath } from "./components/routePaths";
import BuzzCabs from "./components/SubProjects/BuzzCabs";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={BuzzPath} element={<BuzzCabs />} />
        </Routes>
        <ScrollToTop/>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
