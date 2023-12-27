import { Route, Routes } from "react-router-dom";
import App from "../App";
import HistoryPage from "../pages/HistoryPage";

export const MainRouter = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/history" element={<HistoryPage />} />
    </Route>
  </Routes>
);
