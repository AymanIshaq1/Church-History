import { useState } from "react";
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

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch(currentPage) {
      case "home":
        return <Hero onNavigate={setCurrentPage} />;
      case "history":
        return <HistoryPage />;
      case "teachings":
        return <TeachingsPage />;
      case "liturgy":
        return <LiturgyPage />;
      case "art":
        return <ArtPage />;
      case "monasteries":
        return <MonasteriesPage />;
      case "saints":
        return <SaintsPage />;
      case "bible":
        return <BiblePage />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100" dir="rtl" lang="ar">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
