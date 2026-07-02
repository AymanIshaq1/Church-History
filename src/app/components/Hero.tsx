import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Book, Church, Users, Scroll, Sparkles, Award, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { staggerFadeIn, scrollFadeIn, parallax, pageTransitionIn } from "@/utils/animations";
import { useStaggerFadeIn, useParallax, useAnimationCleanup } from "@/utils/useAnimations";

interface HeroProps {
}

export function Hero({ }: HeroProps) {
  const navigate = useNavigate();
  const heroContentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useAnimationCleanup();

  useEffect(() => {
    // Hero content animation on load
    if (heroContentRef.current) {
      const children = heroContentRef.current.children as HTMLCollection;
      staggerFadeIn(Array.from(children) as HTMLElement[], {
        stagger: 0.15,
        delay: 0.2,
        distance: 30,
        direction: "up",
      });
    }

    // Parallax effect on hero background
    const heroImage = document.querySelector<HTMLElement>(".hero-bg");
    if (heroImage) {
      parallax(heroImage, 0.3);
    }
  }, []);
  const features = [
    {
      icon: <Book size={40} />,
      title: "التاريخ",
      description: "ألفي عام من الإيمان والتراث",
      page: "history",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Church size={40} />,
      title: " الطقس الكنسي",
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
      title: "اللاهوت",
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
      <section className="relative min-h-[500px] h-screen max-h-[900px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-bg">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1597212560167-6cf12ea77252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3B0aWMlMjBjaHVyY2h8ZW58MXx8fHwxNzY5MDg3NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="الكنيسة القبطية"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-orange-900/30"></div>
        </div>
        
        <div ref={heroContentRef} className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto py-10">
          <div className="mb-4 md:mb-8">
            <div className="inline-block p-3 md:p-4 bg-yellow-500/20 rounded-full backdrop-blur-sm border-2 border-yellow-400 mb-4 md:mb-6 hover-scale">
              <Church className="text-yellow-400 w-10 h-10 md:w-16 md:h-16" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl mb-4 md:mb-6 font-bold leading-tight">
            الكنيسة القبطية الأرثوذكسية
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-4 text-yellow-200">
            كنيسة مصر الرسولية
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            رحلة عبر ألفي عام من الإيمان والشهادة والتراث المسيحي العريق
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
            <button 
              onClick={() => navigate("/history")}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-bold shadow-2xl transition-all transform hover:scale-105 hover-lift min-h-[44px]"
            >
              اكتشف التاريخ
            </button>
            <button 
              onClick={() => navigate("/saints")}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-red-900 w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-bold shadow-2xl transition-all transform hover:scale-105 hover-lift min-h-[44px]"
            >
              القديسون
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 md:py-16 bg-gradient-to-r from-red-900 to-orange-900 text-white animate-stagger">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="p-4 md:p-6 hover-scale">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-1 md:mb-2">2000+</div>
              <div className="text-sm sm:text-base md:text-xl">سنة من التاريخ</div>
            </div>
            <div className="p-4 md:p-6 hover-scale">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-1 md:mb-2">1000+</div>
              <div className="text-sm sm:text-base md:text-xl">قديس وشهيد</div>
            </div>
            <div className="p-4 md:p-6 hover-scale">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-1 md:mb-2">20+</div>
              <div className="text-sm sm:text-base md:text-xl">مليون قبطي</div>
            </div>
            <div className="p-4 md:p-6 hover-scale">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-1 md:mb-2">100+</div>
              <div className="text-sm sm:text-base md:text-xl">دير قبطي</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 animate-stagger">
            <h2 className="text-3xl md:text-5xl mb-4 md:mb-6 text-red-900 font-bold">استكشف الكنيسة القبطية</h2>
            <p className="text-lg md:text-2xl text-gray-600">تعرف على تاريخنا وتراثنا الروحي الغني</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-stagger">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => navigate(`/${feature.page}`)}
                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden hover-lift w-full text-right"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 group-hover:scale-150 transition-transform`}></div>
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                  <div className="text-white scale-75 md:scale-100">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl mb-2 md:mb-3 text-gray-800 font-bold">{feature.title}</h3>
                <p className="text-gray-600 text-base md:text-lg">{feature.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section ref={quoteRef} className="py-16 md:py-20 bg-gradient-to-r from-red-800 to-orange-800 text-white animate-fade-up">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl md:text-8xl text-yellow-400 mb-2 md:mb-6 leading-none">"</div>
            <p className="text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 leading-relaxed font-semibold">
              كنيسة الشهداء التي روت بدمائها أرض مصر، وأنارت بإيمانها العالم أجمع
            </p>
            <div className="w-16 md:w-24 h-1 bg-yellow-400 mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-yellow-200">الكنيسة القبطية الأرثوذكسية</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
       
    </div>
  );
}
