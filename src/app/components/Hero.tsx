import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Book, Church, Users, Scroll, Sparkles, Award, Globe, Heart } from "lucide-react";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const features = [
    {
      icon: <Book size={40} />,
      title: "التاريخ العريق",
      description: "ألفي عام من الإيمان والتراث",
      page: "history",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Church size={40} />,
      title: "الطقوس المقدسة",
      description: "احتفالات وصلوات قديمة",
      page: "liturgy",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Users size={40} />,
      title: "القديسون",
      description: "أعمدة الإيمان والشهادة",
      page: "saints",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Scroll size={40} />,
      title: "التعاليم",
      description: "عقيدة راسخة ومتوارثة",
      page: "teachings",
      color: "from-red-500 to-red-700"
    },
    {
      icon: <Sparkles size={40} />,
      title: "الفن القبطي",
      description: "إبداع روحاني فريد",
      page: "art",
      color: "from-pink-500 to-pink-700"
    },
    {
      icon: <Globe size={40} />,
      title: "الأديرة",
      description: "منارات الرهبنة العالمية",
      page: "monasteries",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      icon: <Heart size={40} />,
      title: "الكتاب المقدس",
      description: "كلمة الله الحية",
      page: "bible",
      color: "from-rose-500 to-rose-700"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1597212560167-6cf12ea77252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3B0aWMlMjBjaHVyY2h8ZW58MXx8fHwxNzY5MDg3NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="الكنيسة القبطية"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-orange-900/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-block p-4 bg-yellow-500/20 rounded-full backdrop-blur-sm border-2 border-yellow-400 mb-6">
              <Church size={64} className="text-yellow-400" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl mb-6 font-bold leading-tight">
            الكنيسة القبطية الأرثوذكسية
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-yellow-200">
            كنيسة مصر الرسولية
          </p>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            رحلة عبر ألفي عام من الإيمان والشهادة والتراث المسيحي العريق
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => onNavigate("history")}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl transition-all transform hover:scale-105"
            >
              اكتشف التاريخ
            </button>
            <button 
              onClick={() => onNavigate("saints")}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-red-900 px-10 py-4 rounded-full text-lg font-bold shadow-2xl transition-all transform hover:scale-105"
            >
              القديسون
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-yellow-400 mb-2">2000+</div>
              <div className="text-xl">سنة من التاريخ</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-xl">قديس وشهيد</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-yellow-400 mb-2">20+</div>
              <div className="text-xl">مليون قبطي</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-xl">دير قبطي</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6 text-red-900 font-bold">استكشف الكنيسة القبطية</h2>
            <p className="text-2xl text-gray-600">تعرف على تاريخنا وتراثنا الروحي الغني</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => onNavigate(feature.page)}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform`}></div>
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl mb-3 text-gray-800 font-bold">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-8xl text-yellow-400 mb-6">"</div>
            <p className="text-3xl md:text-4xl mb-8 leading-relaxed font-semibold">
              كنيسة الشهداء التي روت بدمائها أرض مصر، وأنارت بإيمانها العالم أجمع
            </p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-yellow-200">الكنيسة القبطية الأرثوذكسية</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-12 text-red-900 text-center font-bold">معرض الصور</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1704276864429-9ed5be4cdd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTAyMjgzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="داخل الكنيسة"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white text-2xl font-bold">جمال العمارة القبطية</p>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1666689464584-eaf83dc3ac70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBtb25hc3Rlcnl8ZW58MXx8fHwxNzY5MDg3OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="دير في الصحراء"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white text-2xl font-bold">أديرة الصحراء</p>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1616428882609-7443facdbe81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjYW5kbGVzJTIwcHJheWVyfGVufDF8fHx8MTc2OTAyMzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="شموع الصلاة"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white text-2xl font-bold">الصلاة والتأمل</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
