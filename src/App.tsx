import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";
import Maps from "./pages/Maps";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<HomePage />} />
          <Route path="detail" element={<Detail />} />
          <Route path="maps" element={<Maps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
