import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, BookOpen, Music, Flame } from "lucide-react";

export function LiturgyPage() {
  const liturgies = [
    {
      title: "القداس الباسيلي",
      author: "القديس باسيليوس الكبير",
      description: "أطول قداس وأكثرهم استخداماً في الكنيسة القبطية، يُصلى في معظم أيام السنة",
     
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "القداس الغريغوري",
      author: "القديس غريغوريوس الناطق بالإلهيات",
      description: "يُصلى في الأعياد الكبرى والمناسبات الخاصة",
     
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "القداس الكيرلسي",
      author: "القديس كيرلس الإسكندري",
      description: "أقصر القداسات، يُصلى من يوم عيد الميلاد حتى عيد الغطاس",
     
      color: "from-green-500 to-green-700"
    }
  ];

  const prayers = [
    {
      time: "باكر (الفجر)",
      description: "صلاة السحر، تبدأ قبل الفجر وتتضمن المزامير والتسابيح",
      icon: "🌅"
    },
    {
      time: "الثالثة (9 صباحاً)",
      description: "تذكار حلول الروح القدس على التلاميذ",
      icon: "⛪"
    },
    {
      time: "السادسة (12 ظهراً)",
      description: "وقت صلب المسيح على الصليب",
      icon: "✝️"
    },
    {
      time: "التاسعة (3 عصراً)",
      description: "وقت موت السيد المسيح",
      icon: "🕊️"
    },
    {
      time: "الغروب (المساء)",
      description: "صلاة نهاية اليوم وشكر الله",
      icon: "🌆"
    },
    {
      time: "النوم (الليل)",
      description: "صلاة ختام اليوم قبل النوم",
      icon: "🌙"
    },
    {
      time: "نصف الليل",
      description: "صلاة الرهبان في منتصف الليل",
      icon: "⭐"
    }
  ];

  const rituals = [
    {
      title: "رفع بخور عشية",
      description: "يُرفع مساء كل يوم، يتضمن المزامير والذكصولوجيات والثيئوتوكيات"
    },
    {
      title: "رفع بخور باكر",
      description: "يُرفع في الصباح الباكر قبل القداس الإلهي"
    },
    {
      title: "القداس الإلهي",
      description: "ذروة الحياة الكنسية، تحويل الخبز والخمر لجسد الرب ودمه"
    },
    {
      title: "صلاة الأجبية",
      description: "سبع صلوات يومية تشمل المزامير والقراءات والأواشي"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="inline-block p-6 bg-yellow-500/20 rounded-full backdrop-blur-sm border-2 border-yellow-400 mb-8">
            <Flame size={64} className="text-yellow-400" />
          </div>
          <h1 className="text-6xl md:text-7xl mb-6 font-bold">الطقوس والصلوات</h1>
          <p className="text-2xl md:text-3xl text-yellow-200 max-w-4xl mx-auto">
            عبادة سماوية على الأرض
          </p>
        </div>
      </section>

      {/* The Three Liturgies */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-indigo-900 text-center font-bold">القداسات الثلاثة</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12 animate-stagger">
            {liturgies.map((liturgy, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 animate-fade-up">
                <div className={`h-4 bg-gradient-to-r ${liturgy.color}`}></div>
                <div className="p-8">
                  <div className="text-6xl mb-6 text-center">📖</div>
                  <h3 className="text-3xl mb-4 text-gray-800 font-bold text-center">{liturgy.title}</h3>
                  <p className="text-lg text-indigo-600 mb-4 text-center font-semibold">{liturgy.author}</p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{liturgy.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-10 shadow-xl">
            <h3 className="text-3xl mb-6 text-indigo-900 font-bold text-center">مراحل القداس الإلهي</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-2xl mb-3 text-indigo-700 font-bold">قداس الموعوظين</h4>
                <ul className="space-y-2 text-gray-700 text-lg">
                  <li>• صلاة الشكر</li>
                  <li>• قراءات من الكتاب المقدس</li>
                  <li>• العظة</li>
                  <li>• قانون الإيمان</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-2xl mb-3 text-indigo-700 font-bold">قداس المؤمنين</h4>
                <ul className="space-y-2 text-gray-700 text-lg">
                  <li>• التقدمة والإفخارستيا</li>
                  <li>• التحويل (تحويل الخبز والخمر)</li>
                  <li>• كسر الخبز</li>
                  <li>• التناول المقدس</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Prayers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-indigo-900 text-center font-bold">الصلوات السبع (الأجبية)</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {prayers.map((prayer, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-indigo-100">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">{prayer.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3 text-indigo-800 font-bold">{prayer.time}</h3>
                      <p className="text-lg text-gray-700">{prayer.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-10 text-center shadow-2xl">
            <Music size={64} className="mx-auto mb-6" />
            <h3 className="text-3xl mb-4 font-bold">الألحان القبطية</h3>
            <p className="text-xl leading-relaxed">
              الألحان القبطية هي موسيقى مقدسة عمرها أكثر من ألفي عام، تُورث شفاهياً من جيل إلى جيل. 
              تعتبر من أقدم أنواع الموسيقى المسيحية في العالم.
            </p>
          </div>
        </div>
      </section>

      {/* Church Rituals */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-indigo-900 text-center font-bold">الطقوس الكنسية</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {rituals.map((ritual, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-r-4 border-indigo-500">
                <h3 className="text-3xl mb-4 text-indigo-800 font-bold">{ritual.title}</h3>
                <p className="text-xl text-gray-700 leading-relaxed">{ritual.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liturgical Year */}
      <section className="py-20 bg-gradient-to-r from-indigo-800 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-12 text-center font-bold">السنة الطقسية</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <h3 className="text-3xl mb-4 text-yellow-400 font-bold">فترات الصوم</h3>
              <ul className="space-y-3 text-xl">
                <li>• الصوم الكبير (55 يوماً)</li>
                <li>• صوم الميلاد (43 يوماً)</li>
                <li>• صوم الرسل (متغير)</li>
                <li>• صوم العذراء (15 يوماً)</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <h3 className="text-3xl mb-4 text-yellow-400 font-bold">الأعياد الكبرى</h3>
              <ul className="space-y-3 text-xl">
                <li>• القيامة المجيد</li>
                <li>• الميلاد المجيد</li>
                <li>• الغطاس</li>
                <li>• العنصرة</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <h3 className="text-3xl mb-4 text-yellow-400 font-bold">أعياد السيدة</h3>
              <ul className="space-y-3 text-xl">
                <li>• البشارة</li>
                <li>• الميلاد</li>
                <li>• دخول المسيح الهيكل</li>
                <li>• صعود السيد المسيح</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Church Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1616428882609-7443facdbe81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjYW5kbGVzJTIwcHJheWVyfGVufDF8fHx8MTc2OTAyMzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="الصلاة في الكنيسة"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="text-center mt-8">
              <p className="text-2xl text-gray-600 italic">"صلوا بلا انقطاع" - 1 تسالونيكي 5: 17</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}