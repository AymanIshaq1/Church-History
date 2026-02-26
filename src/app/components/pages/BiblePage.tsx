import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { BookOpen, Heart, Star, Scroll } from "lucide-react";

export function BiblePage() {
  const oldTestament = [
    { name: "التكوين", chapters: 50, category: "التوراة" },
    { name: "الخروج", chapters: 40, category: "التوراة" },
    { name: "اللاويين", chapters: 27, category: "التوراة" },
    { name: "العدد", chapters: 36, category: "التوراة" },
    { name: "التثنية", chapters: 34, category: "التوراة" },
    { name: "يشوع", chapters: 24, category: "التاريخ" },
    { name: "المزامير", chapters: 150, category: "الشعر" },
    { name: "الأمثال", chapters: 31, category: "الحكمة" },
    { name: "إشعياء", chapters: 66, category: "الأنبياء الكبار" },
    { name: "إرميا", chapters: 52, category: "الأنبياء الكبار" }
  ];

  const newTestament = [
    { name: "متى", chapters: 28, category: "الأناجيل" },
    { name: "مرقس", chapters: 16, category: "الأناجيل" },
    { name: "لوقا", chapters: 24, category: "الأناجيل" },
    { name: "يوحنا", chapters: 21, category: "الأناجيل" },
    { name: "أعمال الرسل", chapters: 28, category: "التاريخ" },
    { name: "الرومية", chapters: 16, category: "رسائل بولس" },
    { name: "كورنثوس الأولى", chapters: 16, category: "رسائل بولس" },
    { name: "كورنثوس الثانية", chapters: 13, category: "رسائل بولس" },
    { name: "العبرانيين", chapters: 13, category: "الرسائل" },
    { name: "الرؤيا", chapters: 22, category: "النبوة" }
  ];

  const copticContributions = [
    {
      title: "الترجمة القبطية",
      description: "من أقدم ترجمات الكتاب المقدس، تمت في القرن الثالث الميلادي",
      details: [
        "ترجمة مباشرة من النصوص اليونانية الأصلية",
        "ساعدت في حفظ النص الكتابي الأصلي",
        "شهادة على صحة النصوص الموجودة",
        "استخدمت اللهجات القبطية المختلفة"
      ],
      icon: "📜",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "التفاسير الآبائية",
      description: "كتب الآباء القبط تفاسير عميقة للكتاب المقدس",
      details: [
        "تفاسير القديس كيرلس الكبير",
        "تفاسير أوريجانوس",
        "شروحات القديس أثناسيوس",
        "كتابات ديديموس الضرير"
      ],
      icon: "✍️",
      color: "from-green-500 to-green-700"
    },
    {
      title: "المخطوطات",
      description: "حفظت الكنيسة القبطية آلاف المخطوطات الثمينة",
      details: [
        "مخطوطات نجع حمادي",
        "مكتبة دير سانت كاترين",
        "مخطوطات وادي النطرون",
        "البرديات القبطية القديمة"
      ],
      icon: "📖",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const dailyReadings = [
    { time: "باكر", readings: "إنجيل باكر - مزمور - إنجيل" },
    { time: "القداس", readings: "البولس - الكاثوليكون - الإبركسيس - المزمور - الإنجيل" },
    { time: "المساء", readings: "مزامير الغروب - قراءات" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="inline-block p-6 bg-yellow-500/20 rounded-full backdrop-blur-sm border-2 border-yellow-400 mb-8">
            <BookOpen size={64} className="text-yellow-400" />
          </div>
          <h1 className="text-6xl md:text-7xl mb-6 font-bold">الكتاب المقدس</h1>
          <p className="text-2xl md:text-3xl text-yellow-200 max-w-4xl mx-auto">
            كلمة الله الحية والفعالة
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 shadow-2xl mb-12">
              <h2 className="text-4xl mb-6 text-emerald-900 font-bold text-center">كلام الله المكتوب</h2>
              <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
                الكتاب المقدس هو كلمة الله الموحى بها، كُتب بوحي من الروح القدس على مدى 1600 سنة. 
                يتكون من 66 سفراً مقسمة إلى العهد القديم (39 سفراً) والعهد الجديد (27 سفراً).
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                الكنيسة القبطية تؤمن بقدسية الكتاب المقدس وسلطانه المطلق في مسائل الإيمان والحياة المسيحية.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl p-8 shadow-xl">
                <div className="text-6xl mb-4 text-center">📖</div>
                <h3 className="text-3xl mb-4 font-bold text-center">العهد القديم</h3>
                <p className="text-xl text-center mb-4">39 سفراً</p>
                <p className="text-lg leading-relaxed">
                  كُتب بالعبرية والآرامية، يحكي قصة الخلق والعهد مع إسرائيل والنبوات عن المسيح المنتظر
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl p-8 shadow-xl">
                <div className="text-6xl mb-4 text-center">✝️</div>
                <h3 className="text-3xl mb-4 font-bold text-center">العهد الجديد</h3>
                <p className="text-xl text-center mb-4">27 سفراً</p>
                <p className="text-lg leading-relaxed">
                  كُتب باليونانية، يروي حياة المسيح وتعاليمه وتأسيس الكنيسة وانتشار المسيحية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Books */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-emerald-900 text-center font-bold">أسفار الكتاب المقدس</h2>
          
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-4xl mb-8 text-blue-800 font-bold text-center">أسفار العهد القديم (نماذج)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {oldTestament.map((book, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-blue-500">
                  <h4 className="text-xl mb-2 text-gray-800 font-bold">{book.name}</h4>
                  <p className="text-sm text-blue-600 mb-2">{book.category}</p>
                  <p className="text-gray-600">{book.chapters} إصحاح</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl mb-8 text-green-800 font-bold text-center">أسفار العهد الجديد (نماذج)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {newTestament.map((book, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-green-500">
                  <h4 className="text-xl mb-2 text-gray-800 font-bold">{book.name}</h4>
                  <p className="text-sm text-green-600 mb-2">{book.category}</p>
                  <p className="text-gray-600">{book.chapters} إصحاح</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coptic Contributions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-emerald-900 text-center font-bold">إسهامات الكنيسة القبطية</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {copticContributions.map((contribution, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl">
                <div className={`h-3 bg-gradient-to-r ${contribution.color}`}></div>
                <div className="p-8">
                  <div className="text-6xl mb-6 text-center">{contribution.icon}</div>
                  <h3 className="text-3xl mb-4 text-gray-800 font-bold text-center">{contribution.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{contribution.description}</p>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
                    <ul className="space-y-2">
                      {contribution.details.map((detail, idx) => (
                        <li key={idx} className="text-base text-gray-700 flex items-start gap-2">
                          <span className="text-emerald-600 text-xl mt-1">•</span>
                          <span>{detail}</span>
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

      {/* Daily Readings */}
      <section className="py-20 bg-gradient-to-r from-emerald-800 to-teal-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-center font-bold">القراءات اليومية</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border-2 border-white/20 mb-12">
              <p className="text-2xl leading-relaxed text-center">
                الكنيسة القبطية تقرأ الكتاب المقدس بشكل منتظم في كل صلواتها اليومية. 
                كل يوم له قراءاته الخاصة من العهدين القديم والجديد.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {dailyReadings.map((reading, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="text-5xl mb-4 text-center text-yellow-400">📖</div>
                  <h3 className="text-3xl mb-4 text-yellow-300 font-bold text-center">{reading.time}</h3>
                  <p className="text-lg leading-relaxed text-center">{reading.readings}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <h3 className="text-3xl mb-6 text-yellow-300 font-bold text-center">القراءات الكنسية</h3>
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <div>
                  <h4 className="text-2xl mb-3 text-yellow-200 font-bold">القداس الإلهي</h4>
                  <ul className="space-y-2">
                    <li>• البولس (من رسائل بولس)</li>
                    <li>• الكاثوليكون (الرسائل الجامعة)</li>
                    <li>• الإبركسيس (أعمال الرسل)</li>
                    <li>• السنكسار (سيَر القديسين)</li>
                    <li>• المزمور والإنجيل</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl mb-3 text-yellow-200 font-bold">الأجبية</h4>
                  <ul className="space-y-2">
                    <li>• 12 مزموراً في كل صلاة</li>
                    <li>• إنجيل الصلاة</li>
                    <li>• قطع من الكتاب المقدس</li>
                    <li>• القراءات الخاصة بكل ساعة</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1534289907116-888fe70c4806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwYmlibGUlMjBnb3NwZWx8ZW58MXx8fHwxNzY5MDg3OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="الكتاب المقدس"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl mb-8"
            />
            <div className="text-center">
              <p className="text-2xl text-gray-600 italic mb-4">
                "كل الكتاب هو موحى به من الله، ونافع للتعليم والتوبيخ، للتقويم والتأديب الذي في البر"
              </p>
              <p className="text-xl text-emerald-700 font-bold">- 2 تيموثاوس 3: 16</p>
            </div>
          </div>
        </div>
      </section>

      {/* Memorization */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-emerald-900 text-center font-bold">أهمية حفظ الكتاب المقدس</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <Heart size={64} className="text-red-500" />
              </div>
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed text-center">
                "خبأت كلامك في قلبي لكيلا أخطئ إليك" - مزمور 119: 11
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">💡</div>
                  <h4 className="text-xl mb-2 text-emerald-800 font-bold">الإرشاد</h4>
                  <p className="text-gray-600">نور لطريقنا في الحياة</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🛡️</div>
                  <h4 className="text-xl mb-2 text-blue-800 font-bold">الحماية</h4>
                  <p className="text-gray-600">سلاح ضد التجارب</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🌱</div>
                  <h4 className="text-xl mb-2 text-purple-800 font-bold">النمو</h4>
                  <p className="text-gray-600">غذاء للنفس والروح</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scroll size={64} className="mx-auto mb-8 text-yellow-400" />
            <div className="text-8xl text-yellow-400 mb-6">"</div>
            <p className="text-4xl mb-8 leading-relaxed font-semibold">
              السماء والأرض تزولان ولكن كلامي لا يزول
            </p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-2xl text-yellow-200">- متى 24: 35</p>
          </div>
        </div>
      </section>
    </div>
  );
}
