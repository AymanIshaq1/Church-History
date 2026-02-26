import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { MapPin, Users, Book, Mountain } from "lucide-react";

export function MonasteriesPage() {
  const monasteries = [
    {
      name: "دير القديس أنطونيوس",
      location: "البحر الأحمر",
      founded: "القرن الرابع الميلادي",
      founder: "تلاميذ القديس أنطونيوس",
      description: "أقدم دير في العالم المسيحي، يقع في الصحراء الشرقية بالقرب من البحر الأحمر. أُسس بعد نياحة القديس أنطونيوس مباشرة.",
      features: [
        "مغارة القديس أنطونيوس على ارتفاع 680 متر",
        "كنيسة أثرية تعود للقرن الرابع",
        "مكتبة تحوي مخطوطات نادرة",
        "أيقونات جدارية قديمة"
      ],
      image: "https://images.unsplash.com/photo-1666689464584-eaf83dc3ac70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBtb25hc3Rlcnl8ZW58MXx8fHwxNzY5MDg3OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-orange-500 to-orange-700"
    },
    {
      name: "دير القديس بولا",
      location: "البحر الأحمر",
      founded: "القرن الخامس الميلادي",
      founder: "الرهبان الأوائل",
      description: "يقع بالقرب من دير الأنبا أنطونيوس، مكرّس للقديس بولا أول السواح الذي عاش في القرن الثالث الميلادي.",
      features: [
        "مغارة القديس بولا",
        "كنيسة القديس بولا الأثرية",
        "ينبوع ماء عذب في الصحراء",
        "حياة نسكية صارمة"
      ],
      image: "https://images.unsplash.com/photo-1720129885899-a10aa393c233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25hc3RlcnklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY5MDg3NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "دير السريان",
      location: "وادي النطرون",
      founded: "القرن السادس الميلادي",
      founder: "الرهبان السريان",
      description: "من أعظم أديرة وادي النطرون، سُمي بهذا الاسم نسبة للرهبان السريان الذين سكنوه في القرن الثامن.",
      features: [
        "مكتبة غنية بالمخطوطات السريانية والقبطية",
        "كنيسة السيدة العذراء الأثرية",
        "قلالي الرهبان القديمة",
        "حصن دفاعي قديم"
      ],
      image: "https://images.unsplash.com/photo-1597212560167-6cf12ea77252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3B0aWMlMjBjaHVyY2h8ZW58MXx8fHwxNzY5MDg3NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-purple-500 to-purple-700"
    },
    {
      name: "دير الأنبا بيشوي",
      location: "وادي النطرون",
      founded: "القرن الرابع الميلادي",
      founder: "القديس بيشوي",
      description: "أحد أكبر الأديرة القبطية، يحتضن جسد القديس بيشوي الطاهر غير المتحلل. مقر البابا شنودة الثالث السابق.",
      features: [
        "جسد القديس بيشوي",
        "كرسي البطريركية",
        "معهد لاهوتي",
        "مجمع كنائس ضخم"
      ],
      image: "https://images.unsplash.com/photo-1704276864429-9ed5be4cdd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTAyMjgzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-green-500 to-green-700"
    },
    {
      name: "دير القديسة كاترين",
      location: "سيناء",
      founded: "القرن السادس الميلادي (527-565 م)",
      founder: "الإمبراطور جستنيان",
      description: "أحد أقدم الأديرة المسيحية المأهولة بشكل مستمر في العالم، يقع عند سفح جبل موسى حيث تلقى النبي موسى الوصايا العشر.",
      features: [
        "مكتبة تحوي أقدم المخطوطات في العالم",
        "العليقة الملتهبة",
        "جبل موسى وجبل كاترين",
        "أيقونات نادرة من القرن السادس"
      ],
      image: "https://images.unsplash.com/photo-1642242737988-028bb19d48ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBjaHJpc3RpYW58ZW58MXx8fHwxNzY5MDg3NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-red-500 to-red-700"
    },
    {
      name: "دير المحرق",
      location: "أسيوط",
      founded: "القرن الرابع الميلادي",
      founder: "الرهبان الأوائل",
      description: "يقع في المكان الذي استراحت فيه العائلة المقدسة خ��ال رحلتها إلى مصر. يُعتبر من أقدس الأماكن القبطية.",
      features: [
        "كنيسة السيدة العذراء الأثرية",
        "المغارة التي اختبأت فيها العائلة المقدسة",
        "بئر ماء قديم",
        "موقع حج مقدس"
      ],
      image: "https://images.unsplash.com/photo-1755518346374-8698aef237b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWlybyUyMGVneXB0JTIwaGlzdG9yaWN8ZW58MXx8fHwxNzY5MDg3NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-pink-500 to-pink-700"
    }
  ];

  const monasticLife = [
    {
      icon: <Users size={40} />,
      title: "الحياة الجماعية",
      description: "الرهبان يعيشون في شركة روحية، يشتركون في الصلوات اليومية والقداسات والوجبات",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Book size={40} />,
      title: "الدراسة والعمل",
      description: "التوازن بين الصلاة والعمل اليدوي والدراسة اللاهوتية",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Mountain size={40} />,
      title: "النسك والتقشف",
      description: "حياة بسيطة خالية من الرفاهيات، تركز على النمو الروحي والقرب من الله",
      color: "from-purple-500 to-purple-700"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="inline-block p-6 bg-yellow-500/20 rounded-full backdrop-blur-sm border-2 border-yellow-400 mb-8">
            <Mountain size={64} className="text-yellow-400" />
          </div>
          <h1 className="text-6xl md:text-7xl mb-6 font-bold">الأديرة القبطية</h1>
          <p className="text-2xl md:text-3xl text-yellow-200 max-w-4xl mx-auto">
            منارات الرهبنة المسيحية في العالم
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl mb-12 text-orange-900 text-center font-bold">مهد الرهبنة المسيحية</h2>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 shadow-2xl mb-12">
              <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
                ولدت الرهبنة المسيحية في صحراء مصر على يد القديس أنطونيوس الكبير (251-356 م)، أب الرهبان. 
                اعتزل العالم وعاش في الصحراء متفرغاً للصلاة والنسك، فتبعه آلاف من الباحثين عن الكمال الروحي.
              </p>
              <p className="text-2xl text-gray-700 leading-relaxed">
                ثم جاء القديس باخوميوس (292-348 م) ووضع أول قانون رهباني في المسيحية، مؤسساً الرهبنة الجماعية (الشركة).
                من مصر انتشرت الرهبنة إلى جميع أنحاء العالم المسيحي.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {monasticLife.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-orange-500">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-2xl mb-4 text-gray-800 font-bold text-center">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monasteries */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-orange-900 text-center font-bold">أشهر الأديرة القبطية</h2>
          <div className="space-y-16">
            {monasteries.map((monastery, index) => (
              <div key={index} className={`max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex`}>
                <div className="lg:w-1/2">
                  <ImageWithFallback 
                    src={monastery.image}
                    alt={monastery.name}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                </div>
                <div className="lg:w-1/2 p-10">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${monastery.color} text-white rounded-full mb-4`}>
                    تأسس: {monastery.founded}
                  </div>
                  <h3 className="text-4xl mb-4 text-gray-800 font-bold">{monastery.name}</h3>
                  <div className="flex items-center gap-2 text-orange-600 mb-6">
                    <MapPin size={24} />
                    <span className="text-xl font-semibold">{monastery.location}</span>
                  </div>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">{monastery.description}</p>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
                    <h4 className="text-2xl mb-4 text-orange-800 font-bold">المعالم الرئيسية:</h4>
                    <ul className="space-y-3">
                      {monastery.features.map((feature, idx) => (
                        <li key={idx} className="text-lg text-gray-700 flex items-center gap-3">
                          <span className="text-orange-600 text-2xl">✦</span>
                          {feature}
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

      {/* Wadi Natrun */}
      <section className="py-20 bg-gradient-to-r from-orange-800 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-12 text-center font-bold">وادي النطرون - قلب الرهبنة القبطية</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border-2 border-white/20 mb-12">
              <p className="text-2xl mb-6 leading-relaxed">
                وادي النطرون، المعروف قديماً باسم "شيهيت" أو "صحراء القديسين"، يقع في الصحراء الغربية بين القاهرة والإسكندرية. 
                كان موطناً لأكثر من 50 ديراً وآلاف الرهبان في العصور الأولى.
              </p>
              <p className="text-2xl leading-relaxed">
                اليوم، يبقى أربعة أديرة رئيسية عامرة بالرهبان: دير الأنبا بيشوي، ودير السريان، ودير البراموس، ودير الأنبا مقار.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                <h3 className="text-3xl mb-4 text-yellow-300 font-bold">أهمية تاريخية</h3>
                <ul className="space-y-3 text-xl">
                  <li>• مركز الرهبنة العالمية</li>
                  <li>• مدرسة روحية للآباء</li>
                  <li>• محفوظات تراثية قيّمة</li>
                  <li>• مخطوطات نادرة</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                <h3 className="text-3xl mb-4 text-yellow-300 font-bold">الحياة الرهبانية</h3>
                <ul className="space-y-3 text-xl">
                  <li>• صلوات يومية منتظمة</li>
                  <li>• عمل يدوي وزراعة</li>
                  <li>• دراسة لاهوتية عميقة</li>
                  <li>• خدمة الزائرين والحجاج</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monastic Rules */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-orange-900 text-center font-bold">القوانين الرهبانية</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl mb-6 text-orange-800 font-bold">نذور الرهبنة</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-2xl mb-2 text-orange-700 font-bold">الطاعة</h4>
                  <p className="text-lg text-gray-700">الخضوع الكامل لإرشاد الأب الروحي ورئيس الدير</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-2xl mb-2 text-orange-700 font-bold">العفة</h4>
                  <p className="text-lg text-gray-700">البتولية والنقاوة الكاملة في الفكر والقلب والجسد</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-2xl mb-2 text-orange-700 font-bold">الفقر</h4>
                  <p className="text-lg text-gray-700">التخلي عن كل الممتلكات الشخصية والعيش في بساطة</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl mb-6 text-blue-800 font-bold">النظام اليومي</h3>
              <div className="space-y-3 text-lg text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌙</span>
                  <div>
                    <span className="font-bold">منتصف الليل:</span> صلاة نصف الليل
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌅</span>
                  <div>
                    <span className="font-bold">الفجر:</span> صلاة باكر والتسبحة
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">☀️</span>
                  <div>
                    <span className="font-bold">الصباح:</span> القداس الإلهي
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔨</span>
                  <div>
                    <span className="font-bold">النهار:</span> العمل اليدوي والخدمة
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📖</span>
                  <div>
                    <span className="font-bold">المساء:</span> القراءة الروحية والدراسة
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌆</span>
                  <div>
                    <span className="font-bold">الغروب:</span> صلاة الغروب والنوم
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl text-orange-600 mb-6">"</div>
            <p className="text-4xl text-gray-800 mb-8 leading-relaxed font-semibold">
              اهرب من الناس وتخلص
            </p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-2xl text-gray-600">القديس أرسانيوس معلم أولاد الملوك</p>
          </div>
        </div>
      </section>
    </div>
  );
}
