import { BookOpen, Heart, Users, Cross, Star, Shield } from "lucide-react";

export function TeachingsPage() {
  const teachings = [
    {
      icon: <Cross size={48} />,
      title: "الثالوث القدوس",
      content: "نؤمن بإله واحد: الآب والابن والروح القدس، ثالوث في واحد وواحد في ثالوث. الآب غير مولود، والابن مولود من الآب قبل كل الدهور، والروح القدس منبثق من الآب.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Heart size={48} />,
      title: "التجسد الإلهي",
      content: "نؤمن أن الله الكلمة تجسد وصار إنساناً من أجل خلاصنا. اتحد اللاهوت بالناسوت في طبيعة واحدة هي طبيعة الله الكلمة المتجسد، بغير اختلاط ولا امتزاج ولا تغيير.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: <Shield size={48} />,
      title: "الفداء والخلاص",
      content: "نؤمن بموت السيد المسيح الكفاري على الصليب لأجل خطايانا، وبقيامته في اليوم الثالث منتصراً على الموت والشيطان. بموته وقيامته صار لنا الخلاص والحياة الأبدية.",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Star size={48} />,
      title: "العذراء مريم",
      content: "نكرم القديسة مريم العذراء والدة الإله، فهي التي ولدت الله الكلمة المتجسد. نسميها ثيئوتوكوس (والدة الإله) ونطلب شفاعتها، لكننا لا نعبدها لأن العبادة لله وحده.",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Users size={48} />,
      title: "الكنيسة",
      content: "نؤمن بكنيسة واحدة مقدسة جامعة رسولية. الكنيسة هي جسد المسيح، وهو رأسها. نؤمن بخلافة الرسل وبسلطان الكهنوت الذي سلمه المسيح لرسله.",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      icon: <BookOpen size={48} />,
      title: "الأسرار المقدسة",
      content: "نؤمن بسبعة أسرار كنسية: المعمودية، والميرون، والإفخارستيا، والتوبة والاعتراف، ومسحة المرضى، والزواج، والكهنوت. هذه الأسرار هي وسائط النعمة الإلهية.",
      color: "from-pink-500 to-pink-700"
    }
  ];

  const creed = [
    "بالحقيقة نؤمن بإله واحد، الله الآب ضابط الكل، خالق السماء والأرض، ما يُرى وما لا يُرى.",
    "نؤمن برب واحد يسوع المسيح، ابن الله الوحيد، المولود من الآب قبل كل الدهور، نور من نور، إله حق من إله حق.",
    "مولود غير مخلوق، مساوٍ للآب في الجوهر، الذي به كان كل شيء.",
    "هذا الذي من أجلنا نحن البشر ومن أجل خلاصنا نزل من السماء، وتجسد من الروح القدس ومن مريم العذراء وتأنس.",
    "وصُلب عنا على عهد بيلاطس البنطي، وتألم وقُبر، وقام من بين الأموات في اليوم الثالث كما في الكتب.",
    "وصعد إلى السموات، وجلس عن يمين أبيه، وأيضاً يأتي في مجده ليدين الأحياء والأموات، الذي ليس لملكه انقضاء.",
    "نعم نؤمن بالروح القدس، الرب المحيي، المنبثق من الآب، نسجد له ونمجده مع الآب والابن، الناطق في الأنبياء."
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="inline-block p-6 bg-yellow-500/20 rounded-full backdrop-blur-sm border-2 border-yellow-400 mb-8">
            <BookOpen size={64} className="text-yellow-400" />
          </div>
          <h1 className="text-6xl md:text-7xl mb-6 font-bold">التعاليم والعقيدة</h1>
          <p className="text-2xl md:text-3xl text-yellow-200 max-w-4xl mx-auto">
            الإيمان الأرثوذكسي المستقيم الرأي
          </p>
        </div>
      </section>

      {/* Main Teachings */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-purple-900 text-center font-bold">العقائد الأساسية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
            {teachings.map((teaching, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-up">
                <div className={`w-24 h-24 bg-gradient-to-br ${teaching.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <div className="text-white">{teaching.icon}</div>
                </div>
                <h3 className="text-3xl mb-4 text-gray-800 font-bold text-center">{teaching.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{teaching.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nicene Creed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-purple-900 text-center font-bold">قانون الإيمان النيقوي</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12 shadow-2xl border-4 border-purple-200">
            <div className="space-y-6">
              {creed.map((line, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed flex-1">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nature of Christ */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-12 text-center font-bold">طبيعة المسيح</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-white/20">
              <h3 className="text-4xl mb-8 text-yellow-400 font-bold text-center">الطبيعة الواحدة المتحدة</h3>
              <p className="text-2xl mb-8 leading-relaxed">
                نؤمن أن ربنا يسوع المسيح هو إله كامل وإنسان كامل. اتحد اللاهوت بالناسوت اتحاداً حقيقياً بغير اختلاط ولا امتزاج ولا تغيير، وصارا طبيعة واحدة هي طبيعة الله الكلمة المتجسد.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 rounded-2xl p-8">
                  <h4 className="text-3xl mb-4 text-yellow-300 font-bold">اللاهوت</h4>
                  <p className="text-xl leading-relaxed">إله حق من إله حق، مساوٍ للآب في الجوهر، خالق السماوات والأرض</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-8">
                  <h4 className="text-3xl mb-4 text-yellow-300 font-bold">الناسوت</h4>
                  <p className="text-xl leading-relaxed">إنسان كامل، أخذ جسداً من العذراء مريم، وروحاً عاقلة ناطقة</p>
                </div>
              </div>
              <div className="text-center bg-yellow-500/20 rounded-2xl p-8 border-2 border-yellow-400">
                <p className="text-3xl font-bold text-yellow-300">اتحدا في طبيعة واحدة بلا انفصال</p>
                <p className="text-xl mt-4">"الكلمة صار جسداً وحل بيننا" - يوحنا 1: 14</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Seven Sacraments */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-purple-900 text-center font-bold">الأسرار السبعة المقدسة</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { name: "المعمودية", desc: "الميلاد الجديد بالماء والروح" },
              { name: "الميرون", desc: "موهبة الروح القدس" },
              { name: "الإفخارستيا", desc: "جسد الرب ودمه الأقدسين" },
              { name: "التوبة والاعتراف", desc: "غفران الخطايا والتجديد" },
              { name: "مسحة المرضى", desc: "شفاء النفس والجسد" },
              { name: "الزواج", desc: "سر الوحدة والمحبة" },
              { name: "الكهنوت", desc: "خدمة الأسرار والشعب" }
            ].map((sacrament, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-r-4 border-purple-500 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl text-purple-900 font-bold">{sacrament.name}</h3>
                </div>
                <p className="text-lg text-gray-600 mr-16">{sacrament.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
