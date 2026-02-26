import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Calendar, Crown, BookOpen, Sword, Heart, Star } from "lucide-react";

export function HistoryPage() {
  const timeline = [
    {
      year: "42 م",
      title: "تأسيس الكنيسة",
      description: "وصول القديس مرقس الرسول إلى الإسكندرية وتأسيس الكنيسة القبطية",
      icon: <Star size={32} />,
      color: "from-blue-500 to-blue-700"
    },
    {
      year: "190 م",
      title: "مدرسة الإسكندرية",
      description: "ازدهار مدرسة الإسكندرية اللاهوتية تحت قيادة بانتينوس وإكليمندس",
      icon: <BookOpen size={32} />,
      color: "from-green-500 to-green-700"
    },
    {
      year: "250-311 م",
      title: "عصر الاضطهاد",
      description: "فترات الاضطهاد الروماني الشديد خاصة في عهد دقلديانوس",
      icon: <Sword size={32} />,
      color: "from-red-500 to-red-700"
    },
    {
      year: "313 م",
      title: "مرسوم ميلان",
      description: "الحرية الدينية وبداية العصر الذهبي للكنيسة",
      icon: <Crown size={32} />,
      color: "from-yellow-500 to-yellow-700"
    },
    {
      year: "325 م",
      title: "مجمع نيقية",
      description: "المجمع المسكوني الأول ودور أثناسيوس في الدفاع عن الإيمان",
      icon: <Heart size={32} />,
      color: "from-purple-500 to-purple-700"
    },
    {
      year: "451 م",
      title: "مجمع خلقيدونية",
      description: "رفض الكنيسة القبطية لقرارات المجمع والتمسك بالإيمان الأرثوذكسي",
      icon: <Calendar size={32} />,
      color: "from-orange-500 to-orange-700"
    }
  ];

  const eras = [
    {
      title: "العصر الرسولي (33-100 م)",
      content: "بدأت المسيحية في مصر مع وصول القديس مرقس الرسول في منتصف القرن الأول الميلادي. كان القديس مرقس أحد السبعين رسولاً وكاتب الإنجيل الثاني. أسس كنيسة الإسكندرية التي أصبحت إحدى أهم الكراسي الرسولية الخمسة في العالم المسيحي القديم.",
      image: "https://images.unsplash.com/photo-1643609873467-15cfffe782be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbWFudXNjcmlwdHxlbnwxfHx8fDE3Njg5OTM3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "عصر الآباء والمدرسة اللاهوتية (100-250 م)",
      content: "شهدت هذه الفترة ازدهار مدرسة الإسكندرية اللاهوتية، أول وأعظم مدرسة لاهوتية في المسيحية. قادها آباء عظماء مثل بانتينوس وإكليمندس وأوريجانوس. كانت المدرسة مركزاً للبحث اللاهوتي والفلسفي والعلمي.",
      image: "https://images.unsplash.com/photo-1534289907116-888fe70c4806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwYmlibGUlMjBnb3NwZWx8ZW58MXx8fHwxNzY5MDg3OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "عصر الشهداء (250-313 م)",
      content: "أظلم عصر في تاريخ الكنيسة القبطية. تعرض المسيحيون لاضطهادات وحشية، خاصة في عهد الإمبراطور دقلديانوس (284-305 م). استشهد مئات الآلاف من الأقباط. بدأ التقويم القبطي من عام 284 م تخليداً لذكرى الشهداء.",
      image: "https://images.unsplash.com/photo-1686109616991-1acaf4fa7199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwY3Jvc3N8ZW58MXx8fHwxNzY5MDg3OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "العصر الذهبي (313-451 م)",
      content: "بعد مرسوم ميلان الذي منح المسيحيين حرية العبادة، دخلت الكنيسة عصرها الذهبي. ظهر آباء عظماء مثل أثناسيوس الرسولي وكيرلس الكبير. ازدهرت الرهبنة على يد أنطونيوس وباخوميوس. شاركت الكنيسة في المجامع المسكونية الأولى.",
      image: "https://images.unsplash.com/photo-1704276864429-9ed5be4cdd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTAyMjgzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "ما بعد خلقيدونية (451-641 م)",
      content: "رفضت الكنيسة القبطية قرارات مجمع خلقيدونية (451 م) لأنها رأت فيها انحرافاً عن الإيمان الأرثوذكسي. أدى ذلك إلى انفصال الكنيسة عن الإمبراطورية البيزنطية. استمرت الكنيسة في نموها الروحي رغم الضغوط السياسية.",
      image: "https://images.unsplash.com/photo-1649774473714-15500dbc10d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmVkJTIwZ2xhc3MlMjBjaHVyY2h8ZW58MXx8fHwxNzY5MDg3OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "تحت الحكم الإسلامي (641-1517 م)",
      content: "مع الفتح الإسلامي لمصر، أصبح الأقباط أقلية في بلادهم. واجهوا فترات من التسامح والضيق. حافظت الكنيسة على هويتها ولغتها وطقوسها رغم كل التحديات. ظلت مصدر قوة روحية لشعبها.",
      image: "https://images.unsplash.com/photo-1755518346374-8698aef237b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWlybyUyMGVneXB0JTIwaGlzdG9yaWN8ZW58MXx8fHwxNzY5MDg3NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl md:text-7xl mb-6 font-bold">تاريخ الكنيسة القبطية</h1>
          <p className="text-2xl md:text-3xl text-yellow-200 max-w-4xl mx-auto">
            ألفا عام من الإيمان والشهادة والصمود
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-red-900 text-center font-bold">الأحداث الرئيسية</h2>
          <div className="max-w-5xl mx-auto">
            {timeline.map((event, index) => (
              <div key={index} className="flex gap-8 mb-12 items-start">
                <div className="flex-shrink-0 w-48 text-left">
                  <div className="text-3xl font-bold text-red-700">{event.year}</div>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center shadow-xl`}>
                    <div className="text-white">{event.icon}</div>
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
                  <h3 className="text-3xl mb-3 text-gray-800 font-bold">{event.title}</h3>
                  <p className="text-xl text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Eras */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-red-900 text-center font-bold">العصور التاريخية بالتفصيل</h2>
          <div className="space-y-20 animate-stagger">
            {eras.map((era, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white rounded-2xl shadow-2xl overflow-hidden`}>
                <div className="lg:w-1/2">
                  <ImageWithFallback 
                    src={era.image}
                    alt={era.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-10">
                  <h3 className="text-4xl mb-6 text-red-800 font-bold">{era.title}</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">{era.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl mb-16 text-center font-bold">حقائق تاريخية مهمة</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <div className="text-6xl mb-4 text-yellow-400">⚔️</div>
              <h3 className="text-3xl mb-4 font-bold">800,000</h3>
              <p className="text-xl text-yellow-100">شهيد في عصر دقلديانوس وحده</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <div className="text-6xl mb-4 text-yellow-400">🏛️</div>
              <h3 className="text-3xl mb-4 font-bold">أول مدرسة</h3>
              <p className="text-xl text-yellow-100">مدرسة الإسكندرية اللاهوتية هي الأولى في المسيحية</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <div className="text-6xl mb-4 text-yellow-400">🕊️</div>
              <h3 className="text-3xl mb-4 font-bold">مهد الرهبنة</h3>
              <p className="text-xl text-yellow-100">الرهبنة المسيحية بدأت في صحراء مصر</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
