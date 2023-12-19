import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import DetailPage from "./pages/DetailPage";
import MapPage from "./pages/MapPage";
import TestPage from "./pages/TestPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * TODO:
 * - 404 페이지
 * - 리다이렉트
 */
export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="detail" element={<DetailPage />} />
            <Route path="map" element={<MapPage />} />
            <Route path="/*" element={<TestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
