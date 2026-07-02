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
    { id: "teachings", label: "اللاهوت" },
    { id: "liturgy", label: "الطقس الكنسي" },
    { id: "art", label: "الفن القبطي" },
    { id: "saints", label: "القديسون" },
    { id: "bible", label: "الكتاب المقدس" }
  ];

  const handleClick = (page: string) => {
    navigate(`/${page === "home" ? "" : page}`);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-gradient-to-r from-red-900 via-red-800 to-orange-900 shadow-2xl sticky top-0 z-50 border-b-4 border-yellow-600 animate-slide-down">
      <div className="container mx-auto px-4 py-3 md:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4 cursor-pointer hover-scale" onClick={() => handleClick("home")}>
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300 hover-glow shrink-0">
              <Cross className="text-red-900 w-6 h-6 md:w-7 md:h-7" strokeWidth={3} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold tracking-wide">الكنيسة القبطية</h1>
              <p className="text-yellow-200 text-xs sm:text-sm">كنيسة الشهداء والقديسين</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1 xl:gap-2 flex-wrap justify-end">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`px-3 xl:px-4 py-2 rounded-lg transition-all transform hover:scale-105 text-sm xl:text-base ${
                  currentPage === item.id
                    ? "bg-yellow-500 text-red-900 font-bold shadow-lg"
                    : "text-white hover:bg-red-700 hover:shadow-md"
                }`}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white bg-red-700 p-2 rounded-lg hover:bg-red-600 transition-all hover-scale min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col gap-2 pb-4 animate-stagger">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`px-4 py-3 rounded-lg transition-all text-right transform hover:translate-x-1 min-h-[44px] ${
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
