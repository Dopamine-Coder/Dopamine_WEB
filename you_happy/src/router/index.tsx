import { Routes, Route } from "react-router-dom";
import Header from "../components/Common/Header";
import StartPage from "../pages/StartPage";
import SurveyPage from "../pages/SurveyPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/survel" element={<SurveyPage />} />
    </Routes>
  );
}
