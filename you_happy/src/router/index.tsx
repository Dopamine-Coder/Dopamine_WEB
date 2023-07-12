import { Routes, Route } from "react-router-dom";
import Header from "../components/Common/Header";
import StartPage from "../pages/StartPage";
import SurveyPage from "../pages/SurveyPage";
import ResultPage from "../pages/ResultPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/survel/:page" element={<SurveyPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}
