import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { HistoryPage } from "@/app/components/pages/HistoryPage";
import { TeachingsPage } from "@/app/components/pages/TeachingsPage";
import { LiturgyPage } from "@/app/components/pages/LiturgyPage";
import { ArtPage } from "@/app/components/pages/ArtPage";
import { MonasteriesPage } from "@/app/components/pages/MonasteriesPage";
import { SaintsPage } from "@/app/components/pages/SaintsPage";
import { BiblePage } from "@/app/components/pages/BiblePage";
import { Footer } from "@/app/components/Footer";

function AppContent() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    setCurrentPage(path);
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100" dir="rtl" lang="ar">
      <Header currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/teachings" element={<TeachingsPage />} />
        <Route path="/liturgy" element={<LiturgyPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/monasteries" element={<MonasteriesPage />} />
        <Route path="/saints" element={<SaintsPage />} />
        <Route path="/bible" element={<BiblePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
