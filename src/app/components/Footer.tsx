import { Cross, Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: "home", label: "الرئيسية" },
    { id: "history", label: "التاريخ" },
    { id: "teachings", label: "التعاليم" },
    { id: "liturgy", label: "الطقوس" },
    { id: "art", label: "الفن القبطي" },
    { id: "monasteries", label: "الأديرة" },
    { id: "saints", label: "القديسون" },
    { id: "bible", label: "الكتاب المقدس" }
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-red-950 via-red-900 to-orange-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <Cross className="text-red-900" size={24} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold">الكنيسة القبطية</h3>
            </div>
            <p className="text-yellow-100 leading-relaxed text-lg">
              كنيسة مصر الرسولية، تأسست على يد القديس مرقس الرسول في القرن الأول الميلادي. 
              كنيسة الشهداء والقديسين، منارة الإيمان الأرثوذكسي.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl mb-6 font-bold text-yellow-400">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigation(link.id)}
                    className="text-yellow-100 hover:text-yellow-300 transition-colors text-lg hover:mr-2 transition-all"
                  >
                    ← {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-2xl mb-6 font-bold text-yellow-400">المزيد</h3>
            <ul className="space-y-3">
              {quickLinks.slice(5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigation(link.id)}
                    className="text-yellow-100 hover:text-yellow-300 transition-colors text-lg hover:mr-2 transition-all"
                  >
                    ← {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="text-2xl mb-6 font-bold text-yellow-400">معلومات مهمة</h3>
            <div className="space-y-4 text-yellow-100 text-lg">
              <div className="flex items-start gap-3">
                <MapPin size={24} className="flex-shrink-0 mt-1 text-yellow-400" />
                <p>مصر - مهد المسيحية والرهبنة</p>
              </div>
              <div className="flex items-start gap-3">
                <Cross size={24} className="flex-shrink-0 mt-1 text-yellow-400" />
                <p>التقويم القبطي: يبدأ من عام 284 م (عام الشهداء)</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={24} className="flex-shrink-0 mt-1 text-yellow-400" />
                <p>اللغة القبطية: آخر مراحل اللغة المصرية القديمة</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-yellow-600/30 pt-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
              <div className="text-4xl font-bold text-yellow-400 mb-2">2000+</div>
              <div className="text-yellow-100 text-lg">سنة من التاريخ</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
              <div className="text-4xl font-bold text-yellow-400 mb-2">118</div>
              <div className="text-yellow-100 text-lg">بطريرك</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-yellow-100 text-lg">دير قبطي</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
              <div className="text-4xl font-bold text-yellow-400 mb-2">20M+</div>
              <div className="text-yellow-100 text-lg">قبطي حول العالم</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-yellow-600/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-yellow-100 text-lg text-center md:text-right">
              © 2026 تاريخ الكنيسة القبطية الأرثوذكسية. جميع الحقوق محفوظة.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => handleNavigation("home")}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-red-900 rounded-lg font-bold transition-colors"
              >
                العودة للرئيسية
              </button>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-yellow-200 text-xl italic">
              "وأما أنتم فجنس مختار، وكهنوت ملوكي، أمة مقدسة، شعب اقتناء"
            </p>
            <p className="text-yellow-300 mt-2 font-semibold">- 1 بطرس 2:9</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
