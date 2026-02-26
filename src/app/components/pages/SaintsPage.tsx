import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Crown, Heart, Star } from "lucide-react";

export function SaintsPage() {
  const saints = [
    {
      name: "القديس مرقس الرسول",
      title: "مؤسس الكنيسة القبطية",
      period: "استشهد عام 68 م",
      description: "كاتب الإنجيل الثاني، أحد السبعين رسولاً، أول بطريرك لكرسي الإسكندرية. وصل إلى مصر حوالي عام 42 م وأسس الكنيسة القبطية. استشهد في الإسكندرية عام 68 م.",
      contributions: [
        "تأسيس كنيسة الإسكندرية",
        "كتابة الإنجيل الثاني",
        "إنشاء مدرسة الإسكندرية",
        "رسامة أول أسقف قبطي (أنيانوس)"
      ],
       imageSrc: "/src/image/download.jpg",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "القديس أنطونيوس الكبير",
      title: "أب الرهبان",
      period: "251 - 356 م",
      description: "مؤسس الرهبنة المسيحية في العالم. ترك العالم في سن العشرين وعاش في الصحراء 105 سنوات. تبعه آلاف الرهبان وانتشرت الرهبنة من مصر إلى العالم.",
      contributions: [
        "تأسيس الرهبنة الفردية (الوحدة)",
        "حياة نسكية مثالية",
        "محاربة الشياطين والتجارب",
        "إرشاد آلاف الرهبان"
      ],
      imageSrc: "/src/image/download (1).jpg",
      color: "from-orange-500 to-orange-700"
    },
    {
      name: "القديس أثناسيوس الرسولي",
      title: "عمود الدين",
      period: "296 - 373 م",
      description: "البطريرك العشرون لكرسي الإسكندرية. دافع عن الإيمان الأرثوذكسي ضد الأريوسية. نُفي خمس مرات بسبب إيمانه. كتب عدة كتب لاهوتية عظيمة.",
      contributions: [
        "الدفاع عن ألوهية المسيح",
        "مقاومة بدعة أريوس",
        "كتابة حياة القديس أنطونيوس",
        "حضور مجمع نيقية"
      ],
      imageSrc: "/src/image/download (2).jpg",
      color: "from-red-500 to-red-700"
    },
    {
      name: "القديس كيرلس الكبير",
      title: "عمود الدين وكاتب الإيمان",
      period: "378 - 444 م",
      description: "البطريرك الرابع والعشرون، لقب بـ'ختم الآباء'. دافع عن عقيدة الطبيعة الواحدة للمسيح. رئس مجمع أفسس المسكوني الثالث عام 431 م.",
      contributions: [
        "رئاسة مجمع أفسس",
        "الدفاع عن لقب 'والدة الإله' للعذراء",
        "مقاومة بدعة نسطور",
        "كتابة تفاسير كتابية عميقة"
      ],
      imageSrc: "/src/image/download (3).jpg",
      color: "from-purple-500 to-purple-700"
    },
    {
      name: "القديس باخوميوس",
      title: "أب الشركة",
      period: "292 - 348 م",
      description: "مؤسس الرهبنة الجماعية (الشركة). وضع أول قانون رهباني في المسيحية. أنشأ تسعة أديرة وديرين للراهبات، ضمت آلاف الرهبان.",
      contributions: [
        "تأسيس الرهبنة الجماعية",
        "وضع أول قانون رهباني",
        "إنشاء 11 ديراً",
        "تنظيم الحياة الرهبانية"
      ],
        imageSrc: "/src/image/download (4).jpg",
      color: "from-green-500 to-green-700"
    },
    
      
  ];

  const martyrs = [
    {
      name: "الشهيدة دميانة والأربعون عذراء",
      story: "رفضن التخلي عن إيمانهن وتزويجهن قسراً، فاستشهدن جميعاً في عهد دقلديانوس",
      date: "13 طوبة"
    },
    {
      name: "الشهيد مار جرجس الروماني",
      story: "ضابط روماني رفيع، اعترف بإيمانه أمام الإمبراطور دقلديانوس، فعُذب وقُتل",
      date: "23 برمودة"
    },
    {
      name: "الشهيد أبو سيفين (مرقوريوس)",
      story: "جندي روماني شجاع، استشهد بسبب إيمانه بالمسيح، اشتهر بمعجزاته",
      date: "25 هاتور"
    },
    {
      name: "الشهيدة رفقة وأولادها الخمسة",
      story: "أم قديسة شجعت أبناءها على الاستشهاد من أجل المسيح، ثم استشهدت هي أيضاً",
      date: "3 برمودة"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="inline-block p-6 bg-yellow-500/20 rounded-full backdrop-blur-sm border-2 border-yellow-400 mb-8">
            <Crown size={64} className="text-yellow-400" />
          </div>
          <h1 className="text-6xl md:text-7xl mb-6 font-bold">القديسون والشهداء</h1>
          <p className="text-2xl md:text-3xl text-yellow-200 max-w-4xl mx-auto">
            أعمدة الإيمان ونجوم السماء
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 shadow-2xl">
              <h2 className="text-4xl mb-6 text-indigo-900 font-bold text-center">سحابة من الشهود</h2>
              <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
                الكنيسة القبطية غنية بقديسيها وشهدائها الذين سطروا تاريخاً مجيداً من الإيمان والتضحية. 
                من الرسل والآباء الأوائل إلى الشهداء الذين رووا الأرض بدمائهم، كل واحد منهم نموذج للحياة المسيحية الحقيقية.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                نحتفل بذكراهم، نطلب شفاعتهم، ونقتدي بسيرتهم العطرة في رحلتنا نحو السماء.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Saints */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-indigo-900 text-center font-bold">قديسون عظماء</h2>
          <div className="space-y-12">
            {saints.map((saint, index) => (
              <div key={index} className={`max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex`}>
                <div className="lg:w-1/3 flex items-center justify-center p-12" style={{background: `linear-gradient(135deg, ${saint.color.split(' ')[1]}, ${saint.color.split(' ')[3]})`}}>
                  <div className="text-center text-white w-full">
                    {saint.imageSrc && (
                      <ImageWithFallback 
                        src={saint.imageSrc} 
                        alt={saint.name}
                        className="w-64 h-80 mx-auto mb-6 object-cover rounded-lg"
                      />
                    )}
                    <div className="text-3xl font-bold">{saint.period}</div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-10">
                  <h3 className="text-4xl mb-3 text-gray-800 font-bold">{saint.name}</h3>
                  <p className={`text-2xl mb-6 bg-gradient-to-r ${saint.color} bg-clip-text text-transparent font-bold`}>{saint.title}</p>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">{saint.description}</p>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                    <h4 className="text-2xl mb-4 text-indigo-800 font-bold flex items-center gap-2">
                      <Star size={24} />
                      إسهاماته:
                    </h4>
                    <ul className="space-y-2">
                      {saint.contributions.map((contribution, idx) => (
                        <li key={idx} className="text-lg text-gray-700 flex items-center gap-3">
                          <span className="text-indigo-600 text-2xl">✦</span>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Martyrs */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-center font-bold">شهداء عظماء</h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border-2 border-white/20 mb-12">
              <p className="text-2xl mb-6 leading-relaxed">
                "عصر الشهداء" هو أظلم فترة في تاريخ الكنيسة القبطية. استشهد مئات الآلاف من الأقباط، خاصة في عهد الإمبراطور دقلديانوس (284-305 م). 
              </p>
              <p className="text-2xl leading-relaxed">
                يبدأ التقويم القبطي من عام 284 م (عام الشهداء) تخليداً لذكرى هؤلاء الأبطال الذين فضّلوا الموت على إنكار إيمانهم.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {martyrs.map((martyr, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">👑</div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2 text-yellow-300 font-bold">{martyr.name}</h3>
                      <p className="text-sm text-yellow-200 mb-3">{martyr.date}</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed">{martyr.story}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desert Fathers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-indigo-900 text-center font-bold">آباء البرية</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { name: "أنبا أنطونيوس", title: "أب الرهبان", quote: "رأيت فخاخ إبليس منصوبة على الأرض كلها",  icon: "⛰️" },
              { name: "أنبا بولا", title: "أول السواح", quote: "عاش 90 سنة في البرية", icon: "🦁" },
              { name: "أنبا مقاريوس", title: "أب البرية", quote: "إن لم تقل في قلبك أنا وحدي والله في الأرض، لن تستريح", icon: "🏜️" },
              { name: "أنبا بيشوي", title: "الكامل المحبة", quote: "اشتاق لغسل أقدام المسيح", icon: "❤️" },
              { name: "أنبا شنودة", title: "رئيس المتوحدين", quote: "دافع عن الإيمان الأرثوذكسي", icon: "📜" },
              { name: "أنبا موسى", title: "الأسود القوي", quote: "تاب من حياة اللصوصية", icon: "⚡" }
            ].map((father, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
                <div className="text-6xl mb-4 text-center">{father.icon}</div>
                <h3 className="text-2xl mb-2 text-indigo-900 font-bold text-center">{father.name}</h3>
                <p className="text-lg text-indigo-600 mb-4 text-center font-semibold">{father.title}</p>
                <p className="text-base text-gray-600 italic text-center">"{father.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Saints */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-indigo-900 text-center font-bold">قديسون معاصرون</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-5xl mb-4"><ImageWithFallback src="/src/image/download (5).jpg" alt="البابا كيرلس السادس" className="w-64 h-100 mx-auto mb-6 object-cover rounded-lg" /></div>
              <h3 className="text-3xl mb-3 text-indigo-800 font-bold">البابا كيرلس السادس</h3>
              <p className="text-lg text-gray-600 mb-4">1902 - 1971 م</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                البطريرك الـ116، عُرف بحياته النسكية وصلواته القوية. شهد عصره ظهورات العذراء في الزيتون. 
                قام بإحياء روحي كبير في الكنيسة.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-5xl mb-4"><ImageWithFallback src="/src/image/download (6).jpg" alt="البابا شنودة الثالث" className="w-64 h-100 mx-auto mb-6 object-cover rounded-lg" /></div>
              <h3 className="text-3xl mb-3 text-indigo-800 font-bold">البابا شنودة الثالث</h3>
              <p className="text-lg text-gray-600 mb-4">1923 - 2012 م</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                البطريرك الـ117، معلم الأجيال. خدم لمدة 40 عاماً، نشر التعليم والكرازة في العالم كله. 
                كاتب وشاعر ومعلم عظيم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intercession */}
      <section className="py-20 bg-gradient-to-r from-indigo-800 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart size={64} className="mx-auto mb-8 text-yellow-400" />
            <h2 className="text-5xl mb-8 font-bold">شفاعة القديسين</h2>
            <p className="text-2xl mb-8 leading-relaxed">
              نؤمن بشفاعة القديسين، فهم أحياء عند الله وقادرون على الصلاة من أجلنا. 
              نطلب صلواتهم كما نطلب صلوات إخوتنا على الأرض.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <p className="text-xl italic">
                "إذاً إذ لنا سحابة من الشهود مقدار هذه محيطة بنا، لنطرح كل ثقل، والخطية المحيطة بنا بسهولة، ولنحاضر بالصبر في الجهاد الموضوع أمامنا"
              </p>
              <p className="text-lg mt-4 text-yellow-300">- عبرانيين 12: 1</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
