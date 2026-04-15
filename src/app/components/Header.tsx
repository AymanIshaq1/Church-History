import { Menu, X, Cross } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  currentPage: string;
}

export function Header({ currentPage }: HeaderProps) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "الرئيسية" },
    { id: "history", label: "التاريخ" },
    { id: "teachings", label: "التعاليم" },
    { id: "liturgy", label: "الطقوس" },
    { id: "art", label: "الفن القبطي" },
    { id: "monasteries", label: "الأديرة" },
    { id: "saints", label: "القديسون" },
    { id: "bible", label: "الكتاب المقدس" }
  ];

  const handleClick = (page: string) => {
    navigate(`/${page === "home" ? "" : page}`);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-gradient-to-r from-red-900 via-red-800 to-orange-900 shadow-2xl sticky top-0 z-50 border-b-4 border-yellow-600">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleClick("home")}>
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300">
              <Cross className="text-red-900" size={28} strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-3xl text-white font-bold tracking-wide">الكنيسة القبطية</h1>
              <p className="text-yellow-200 text-sm">كنيسة الشهداء والقديسين</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === item.id
                    ? "bg-yellow-500 text-red-900 font-bold shadow-lg"
                    : "text-white hover:bg-red-700 hover:shadow-md"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white bg-red-700 p-2 rounded-lg hover:bg-red-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 flex flex-col gap-3 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`px-4 py-3 rounded-lg transition-all text-right ${
                  currentPage === item.id
                    ? "bg-yellow-500 text-red-900 font-bold"
                    : "text-white bg-red-700 hover:bg-red-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
