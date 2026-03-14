import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Calendar, Crown, BookOpen, Sword, Heart, Star } from "lucide-react";

export function HistoryPage() {

  const timeline = [
    {
      year: "42 م",
      title: "تأسيس الكنيسة",
      description: "وصول القديس مرقس الرسول إلى الإسكندرية وتأسيس الكنيسة القبطية",
      icon: <Star size={28} />,
      color: "from-blue-500 to-blue-700"
    },
    {
      year: "190 م",
      title: "مدرسة الإسكندرية",
      description: "ازدهار مدرسة الإسكندرية اللاهوتية تحت قيادة بانتينوس وإكليمندس",
      icon: <BookOpen size={28} />,
      color: "from-green-500 to-green-700"
    },
    {
      year: "250-311 م",
      title: "عصر الاضطهاد",
      description: "فترات الاضطهاد الروماني الشديد خاصة في عهد دقلديانوس",
      icon: <Sword size={28} />,
      color: "from-red-500 to-red-700"
    },
    {
      year: "313 م",
      title: "مرسوم ميلان",
      description: "الحرية الدينية وبداية العصر الذهبي للكنيسة",
      icon: <Crown size={28} />,
      color: "from-yellow-500 to-yellow-700"
    },
    {
      year: "325 م",
      title: "مجمع نيقية",
      description: "المجمع المسكوني الأول ودور أثناسيوس في الدفاع عن الإيمان",
      icon: <Heart size={28} />,
      color: "from-purple-500 to-purple-700"
    },
    {
      year: "451 م",
      title: "مجمع خلقيدونية",
      description: "رفض الكنيسة القبطية لقرارات المجمع والتمسك بالإيمان الأرثوذكسي",
      icon: <Calendar size={28} />,
      color: "from-orange-500 to-orange-700"
    }
  ];

  const eras = [
    {
      title: "العصر الرسولي (33-100 م)",
      content: "بدأت المسيحية في مصر مع وصول القديس مرقس الرسول في منتصف القرن الأول الميلادي. أسس كنيسة الإسكندرية التي أصبحت إحدى أهم الكراسي الرسولية في العالم المسيحي القديم.",
      image: "https://images.unsplash.com/photo-1643609873467-15cfffe782be"
    },
    {
      title: "عصر الآباء والمدرسة اللاهوتية (100-250 م)",
      content: "شهدت هذه الفترة ازدهار مدرسة الإسكندرية اللاهوتية بقيادة بانتينوس وإكليمندس وأوريجانوس وكانت مركزاً للفكر اللاهوتي.",
      image: "https://images.unsplash.com/photo-1534289907116-888fe70c4806"
    },
    {
      title: "عصر الشهداء (250-313 م)",
      content: "تعرض المسيحيون لاضطهادات شديدة خاصة في عهد دقلديانوس واستشهد مئات الآلاف من الأقباط.",
      image: "https://images.unsplash.com/photo-1686109616991-1acaf4fa7199"
    },
    {
      title: "العصر الذهبي (313-451 م)",
      content: "بعد مرسوم ميلان دخلت الكنيسة عصرها الذهبي وظهر أثناسيوس الرسولي وازدهرت الرهبنة.",
      image: "https://images.unsplash.com/photo-1704276864429-9ed5be4cdd25"
    },
    {
      title: "ما بعد خلقيدونية (451-641 م)",
      content: "رفضت الكنيسة القبطية قرارات مجمع خلقيدونية وتمسكت بإيمانها الأرثوذكسي رغم الضغوط.",
      image: "https://images.unsplash.com/photo-1649774473714-15500dbc10d6"
    },
    {
      title: "تحت الحكم الإسلامي (641-1517 م)",
      content: "أصبح الأقباط أقلية في بلادهم لكن الكنيسة حافظت على هويتها وطقوسها.",
      image: "https://images.unsplash.com/photo-1755518346374-8698aef237b8"
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">
            تاريخ الكنيسة القبطية
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-yellow-200 max-w-4xl mx-auto">
            ألفا عام من الإيمان والشهادة والصمود
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-12 text-red-900 text-center font-bold">
            الأحداث الرئيسية
          </h2>

          <div className="max-w-5xl mx-auto">

            {timeline.map((event, index) => (

              <div key={index} className="flex flex-col sm:flex-row gap-6 mb-10 items-start">

                <div className="flex-shrink-0 sm:w-32">
                  <div className="text-2xl sm:text-3xl font-bold text-red-700">
                    {event.year}
                  </div>
                </div>

                <div className={`w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center shadow-xl text-white`}>
                  {event.icon}
                </div>

                <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 text-gray-800 font-bold">
                    {event.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">
                    {event.description}
                  </p>
                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Eras */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-stone-100">

        <div className="container mx-auto px-4">

          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-14 text-red-900 text-center font-bold">
            العصور التاريخية بالتفصيل
          </h2>

          <div className="space-y-16">

            {eras.map((era, index) => (

              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white rounded-2xl shadow-xl overflow-hidden`}
              >

                <div className="lg:w-1/2 w-full">
                  <ImageWithFallback
                    src={era.image}
                    alt={era.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </div>

                <div className="lg:w-1/2 p-6 sm:p-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-red-800 font-bold">
                    {era.title}
                  </h3>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {era.content}
                  </p>
                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-800 to-orange-800 text-white">

        <div className="container mx-auto px-4">

          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-12 text-center font-bold">
            حقائق تاريخية مهمة
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="text-5xl mb-4 text-yellow-400">⚔️</div>
              <h3 className="text-2xl sm:text-3xl mb-3 font-bold">800,000</h3>
              <p className="text-lg text-yellow-100">شهيد في عصر دقلديانوس</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="text-5xl mb-4 text-yellow-400">🏛️</div>
              <h3 className="text-2xl sm:text-3xl mb-3 font-bold">أول مدرسة</h3>
              <p className="text-lg text-yellow-100">
                مدرسة الإسكندرية اللاهوتية أول مدرسة مسيحية
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="text-5xl mb-4 text-yellow-400">🕊️</div>
              <h3 className="text-2xl sm:text-3xl mb-3 font-bold">مهد الرهبنة</h3>
              <p className="text-lg text-yellow-100">
                الرهبنة بدأت في صحراء مصر
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
