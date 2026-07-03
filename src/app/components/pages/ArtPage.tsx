import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Palette, Image as ImageIcon, Church, BookOpen } from "lucide-react";
import { PageWrapper } from "@/app/components/ui/PageWrapper";
import { motion } from "motion/react";
import { heroFadeScale, fadeUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export function ArtPage() {
  const artForms = [
    {
      icon: <ImageIcon size={48} />,
      title: "الأيقونات القبطية",
      description: "فن الأيقونة القبطية يتميز بعمقه الروحي والرمزي، حيث تُرسم الأيقونات بطريقة تعكس المجد السماوي",
      features: ["الوجوه ذات العيون الواسعة", "الألوان الغنية والذهبية", "البساطة والروحانية", "الرموز اللاهوتية"],
      color: "from-amber-500 to-amber-700"
    },
    {
      icon: <Church size={48} />,
      title: "العمارة القبطية",
      description: "تتميز الكنائس القبطية بتصميمها الفريد الذي يجمع بين التراث الفرعوني والبيزنطي والإسلامي",
      features: ["القباب والأقباء", "الحجاب المقدس", "الهيكل الثلاثي", "الأعمدة والتيجان"],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <BookOpen size={48} />,
      title: "المخطوطات المزخرفة",
      description: "المخطوطات القبطية تحفة فنية تجمع بين الخط القبطي الجميل والزخارف الملونة",
      features: ["الحروف المزخرفة", "الزخارف النباتية", "الألوان الطبيعية", "رسوم القديسين"],
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Palette size={48} />,
      title: "الفنون التطبيقية",
      description: "تشمل النسيج والخشب والمعادن والعاج، كلها تعكس الإيمان والجمال",
      features: ["النسيج القبطي", "الخشب المحفور", "الأواني المعدنية", "الصلبان المزخرفة"],
      color: "from-purple-500 to-purple-700"
    }
  ];

  const symbolism = [
    { symbol: "✝️", name: "الصليب", meaning: "رمز الفداء والخلاص" },
    { symbol: "🕊️", name: "الحمامة", meaning: "الروح القدس" },
    { symbol: "🐟", name: "السمكة", meaning: "رمز المسيح (إخثوس)" },
    { symbol: "⚓", name: "المرساة", meaning: "الرجاء والثبات" },
    { symbol: "🍇", name: "العنب", meaning: "دم المسيح" },
    { symbol: "🌾", name: "القمح", meaning: "جسد المسيح" },
    { symbol: "👑", name: "التاج", meaning: "المجد الأبدي" },
    { symbol: "🦁", name: "الأسد", meaning: "القيامة والقوة" }
  ];

  return (
    <PageWrapper className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            variants={heroFadeScale}
            initial="hidden"
            animate="show"
            className="inline-block p-6 bg-yellow-500/20 rounded-full backdrop-blur-sm border-2 border-yellow-400 mb-8"
          >
            <Palette size={64} className="text-yellow-400" />
          </motion.div>
          <motion.h1
            variants={heroFadeScale}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl mb-4 md:mb-6 font-bold"
          >الفن القبطي</motion.h1>
          <motion.p
            variants={heroFadeScale}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-yellow-200 max-w-4xl mx-auto"
          >
            إبداع روحاني يعبر عن الإيمان والجمال
          </motion.p>
        </div>
      </section>

      {/* Art Forms */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportConfig} className="text-3xl sm:text-4xl md:text-5xl mb-10 md:mb-16 text-amber-900 text-center font-bold">أشكال الفن القبطي</motion.h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportConfig} className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {artForms.map((art, index) => (
              <motion.div variants={staggerItem} key={index} className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2">
                <div className={`h-3 bg-gradient-to-r ${art.color}`}></div>
                <div className="p-6 sm:p-10">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${art.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}>
                    <div className="text-white">{art.icon}</div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-gray-800 font-bold text-center">{art.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">{art.description}</p>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 sm:p-6">
                    <h4 className="text-lg sm:text-xl mb-3 text-amber-800 font-bold">خصائص مميزة:</h4>
                    <ul className="space-y-2">
                      {art.features.map((feature, idx) => (
                        <li key={idx} className="text-base sm:text-lg text-gray-700 flex items-center gap-2">
                          <span className="text-amber-600">●</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Icon Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportConfig} className="text-3xl sm:text-4xl md:text-5xl mb-10 md:mb-16 text-amber-900 text-center font-bold">الأيقونات القبطية</motion.h2>
          <div className="max-w-6xl mx-auto">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportConfig} className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 md:mb-12">
              <motion.div variants={staggerItem} className="relative aspect-[3/4] h-auto w-full rounded-2xl overflow-hidden shadow-2xl group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1650138716474-58d5a9c339a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxpZ2lvdXMlMjBhcnQlMjBpY29uc3xlbnwxfHx8fDE3NjkwODc5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="أيقونة قبطية"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-white text-xl sm:text-2xl font-bold">فن الأيقونة المقدسة</p>
                </div>
              </motion.div>
              <motion.div variants={staggerItem} className="relative aspect-[3/4] h-auto w-full rounded-2xl overflow-hidden shadow-2xl group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1649774473714-15500dbc10d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmVkJTIwZ2xhc3MlMjBjaHVyY2h8ZW58MXx8fHwxNzY5MDg3OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="فن الزجاج الملون"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-white text-xl sm:text-2xl font-bold">الزجاج الملون</p>
                </div>
              </motion.div>
              <motion.div variants={staggerItem} className="relative aspect-[3/4] h-auto w-full rounded-2xl overflow-hidden shadow-2xl group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1704276864429-9ed5be4cdd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTAyMjgzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="العمارة الداخلية"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-white text-xl sm:text-2xl font-bold">جمال العمارة</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportConfig} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-10 shadow-xl">
              <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-amber-900 font-bold text-center">مبادئ رسم الأيقونات</h3>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-2xl mb-3 text-amber-800 font-bold">الأسلوب</h4>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>• ليست صوراً واقعية بل روحية</li>
                    <li>• الوجوه تعبر عن المجد السماوي</li>
                    <li>• عدم استخدام الظلال</li>
                    <li>• المنظور الروحي وليس الطبيعي</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-2xl mb-3 text-amber-800 font-bold">الألوان</h4>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>• الذهب: المجد الإلهي</li>
                    <li>• الأزرق: السماء والقداسة</li>
                    <li>• الأحمر: ��لحب والاستشهاد</li>
                    <li>• الأبيض: النقاء والقيامة</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Christian Symbolism */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportConfig} className="text-3xl sm:text-4xl md:text-5xl mb-10 md:mb-16 text-center font-bold">الرموز المسيحية</motion.h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportConfig} className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {symbolism.map((item, index) => (
              <motion.div variants={staggerItem} key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border-2 border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">{item.symbol}</div>
                <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2 text-yellow-300 font-bold">{item.name}</h3>
                <p className="text-sm sm:text-lg">{item.meaning}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coptic Cross */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportConfig} className="text-3xl sm:text-4xl md:text-5xl mb-10 md:mb-16 text-amber-900 text-center font-bold">الصليب القبطي</motion.h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportConfig} className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1686109616991-1acaf4fa7199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwY3Jvc3N8ZW58MXx8fHwxNzY5MDg3OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="الصليب القبطي"
                  className="w-full aspect-[4/5] md:aspect-square object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportConfig}>
                <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-amber-900 font-bold">رمز الإيمان القبطي</h3>
                <div className="space-y-6">
                  <motion.div variants={staggerItem} className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-2xl mb-3 text-amber-800 font-bold">الصليب الأنصى</h4>
                    <p className="text-lg text-gray-700">الصليب القبطي التقليدي، يتميز بثلاث دوائر عند نهاية كل ذراع ترمز للثالوث القدوس</p>
                  </motion.div>
                  <motion.div variants={staggerItem} className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-2xl mb-3 text-amber-800 font-bold">الزخارف</h4>
                    <p className="text-lg text-gray-700">غالباً ما يُزخرف بنقوش هندسية ورموز مسيحية مثل الألفا والأوميجا</p>
                  </motion.div>
                  <motion.div variants={staggerItem} className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-2xl mb-3 text-amber-800 font-bold">الالاستخدام</h4>
                    <p className="text-lg text-gray-700">يُستخدم في الكنائس، والمنازل، وكوشم على معصم اليد الأيمن</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Coptic Textiles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportConfig} className="text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-12 text-amber-900 text-center font-bold">النسيج القبطي</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportConfig} className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              النسيج القبطي يُعتبر من أروع الفنون التطبيقية. اشتهر الأقباط بنسج الكتان الفاخر والصوف المزخرف بألوان زاهية وتصاميم معقدة.
            </p>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportConfig} className="grid md:grid-cols-3 gap-6">
              <motion.div variants={staggerItem} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🧵</div>
                <h4 className="text-xl text-amber-800 font-bold mb-2">المواد</h4>
                <p className="text-gray-600">الكتان والصوف والحرير</p>
              </motion.div>
              <motion.div variants={staggerItem} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="text-xl text-amber-800 font-bold mb-2">الألوان</h4>
                <p className="text-gray-600">أصباغ طبيعية زاهية ومتنوعة</p>
              </motion.div>
              <motion.div variants={staggerItem} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl mb-3">✨</div>
                <h4 className="text-xl text-amber-800 font-bold mb-2">التصاميم</h4>
                <p className="text-gray-600">رموز مسيحية ونباتية</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
