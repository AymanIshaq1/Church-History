import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { HistoryPage } from "@/app/components/pages/HistoryPage";
import { TeachingsPage } from "@/app/components/pages/TeachingsPage";
import { LiturgyPage } from "@/app/components/pages/LiturgyPage";
import { ArtPage } from "@/app/components/pages/ArtPage";
import { SaintsPage } from "@/app/components/pages/SaintsPage";
import { BiblePage } from "@/app/components/pages/BiblePage";
import { ReferencesPage } from "@/app/components/pages/ReferencesPage";
import { Footer } from "@/app/components/Footer";
import { AmbientAudioProvider } from "@/lib/audio/AmbientAudioContext";
import { AmbientSoundToggle } from "@/app/components/ui/AmbientSoundToggle";
import { SearchProvider } from "@/lib/search/SearchContext";
import { GlobalSearchModal } from "@/app/components/search/GlobalSearchModal";

function AppContent() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    setCurrentPage(path);
  }, [location]);

  // Handle Hash Scrolling and Highlight
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Wait for React to render the new page
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Calculate position respecting sticky header
          const header = document.querySelector('header');
          const headerHeight = header ? header.getBoundingClientRect().height : 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight - 24; // 24px extra padding

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          // Apply a temporary subtle glow
          const originalTransition = element.style.transition;
          element.style.transition = "all 0.5s ease-in-out";
          element.classList.add("ring-2", "ring-indigo-400", "ring-offset-4", "ring-offset-slate-50", "bg-indigo-50/40", "shadow-[0_0_20px_rgba(99,102,241,0.2)]");
          
          setTimeout(() => {
            element.classList.remove("ring-2", "ring-indigo-400", "ring-offset-4", "ring-offset-slate-50", "bg-indigo-50/40", "shadow-[0_0_20px_rgba(99,102,241,0.2)]");
            setTimeout(() => {
              element.style.transition = originalTransition;
            }, 500);
          }, 2000);
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash, location.pathname, location.key]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 overflow-x-hidden flex flex-col" dir="rtl" lang="ar">
      <Header currentPage={currentPage} />
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/teachings" element={<TeachingsPage />} />
            <Route path="/liturgy" element={<LiturgyPage />} />
            <Route path="/art" element={<ArtPage />} />
            <Route path="/saints" element={<SaintsPage />} />
            <Route path="/bible" element={<BiblePage />} />
            <Route path="/references" element={<ReferencesPage />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AmbientAudioProvider>
        <SearchProvider>
          <AppContent />
          <GlobalSearchModal />
          <AmbientSoundToggle />
        </SearchProvider>
      </AmbientAudioProvider>
    </Router>
  );
}
