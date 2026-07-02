import { Flame } from "lucide-react";
import sectionOneImage from "../../../image/section 1.jpeg";
import sectionTwoImage from "../../../image/section2.jpeg";
import sectionThreeImage from "../../../image/section3.jpeg";
import sectionFourImage from "../../../image/section4.jpeg";
import sectionFiveImage from "../../../image/section5.jpeg";

type ContentCard = {
  title?: string;
  items: string[];
};

type ChapterImageProps = {
  src: string;
  alt: string;
};

function ChapterImage({ src, alt }: ChapterImageProps) {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div className="bg-white rounded-2xl p-4 shadow-2xl border-2 border-indigo-100">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
}

function BulletList({ items, className = "text-gray-700" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 text-base sm:text-lg md:text-xl leading-relaxed ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="text-indigo-600">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LiturgyPage() {
  const chapterOne = [
    "معنى الكنيسة: كلمة عبرية ويونانية تعني محفل أو جماعة، وتُطلق على المبنى، وعلى اإلكليروس، وعلى جماعة المؤمنين.",
    "ألقاب الكنيسة: عروس المسيح، جسد المسيح، رعية هللا، كنيسة هللا، بيت هللا، بناء هللا، بيت الصالة، هيكل هللا، البيعة، حظيرة الخراف، حقل هللا، وبيت المالئكة.",
    "رموز الكنيسة: حواء، فلك نوح، مدن الملجأ، الحمامة الوحيدة، الجنة المغلقة، الكرمة، الشبكة الجامعة، أورشليم، والسماء المنيرة.",
    "نشأة كنيسة العهد الجديد : تأسست يوم الخمسين بحلول الروح القدس على التالميذ.",
    "األساس اإليماني: اإليمان بألوهية السيد المسيح.",
    "القصد اإللهي من الكنيسة : توحيد البشرية في المسيح، عيش ملكوت هللا على األرض، نافذة على األبدية، موضع سكنى هللا، االتحاد بالمسيح في اإلفخارستيا، عمل الروح القدس، وإنارة العالم.",
    "عالمات الكنيسة : الواحدة، الوحيدة، المقدسة، الجامعة، الرسولية، األرثوذكسية )مستقيمة التمجيد(."
  ];

  const chapterTwo = [
    "معنى الطقس: كلمة يونانية تعني النظام والترتيب الكنسي في العبادات والمباني.",
    "المفاهيم العميقة للطقوس: ممارسات خارجية تعبر عن عقائد إيمانية وانفعاالت نفسية، وتنقل األثر الروحي للنفس عبر الحواس الخمس، وتُحيي المناسبات القديمة.",
    "مصادر الطقوس: الكتاب المقدس، التقليد المقدس )الرسولي والكنسي(، القوانين الكنسية )قوانين الرسل، المجامع المسكونية والمكانية، قوانين اآلباء، الدسقولية(، وأقوال اآلباء.",
    "فوائد الطقوس: تؤكد نظام هللا، توحد الشعب المسيحي، تقربنا للكنيسة األولى، تحفظ العقائد من التحريف، تُشرك الجسد والروح والحواس في العبادة، وسيلة للتعليم، وتعطي ثباتا للعبادة."
  ];

  const buildingSections: ContentCard[] = [
    {
      title: "أشكال المبنى الكنسي والسقف والمنارة",
      items: [
        "شيوعا في مصر كرمز أشكال المبنى الكنسي: شكل الصليب، شكل الدائرة، وشكل السفينة )المستطيلي( وهو األكثر لفلك نوح .",
        "جمالونا أو قبابا أو قبوات، والمنارة تعمل كبرج مراقبة وبها الجرس للتنبيه للعبادة. السقف والمنارة : السقف يكون"
      ]
    },
    {
      title: "الهيكل ومحتوياته",
      items: [
        "الهيكل )قدس األقداس(: يقع في الشرق ويمثل السماء.",
        "المذبح: يأخذ شكل المكعب ليمثل قبر المسيح، ويُقام غير مالصق للحائط ليُدار حوله.",
        "أغطية المذبح: ثالثة أغطية، الثالث يسمى \"اإلبروسفارين\" ويمثل الحجر على باب القبر .",
        "اللوح المقدس: قطعة خشبية مستطيلة مدشنة توضع على المذبح.",
        "الكرسي )التابوت(: صندوق خشبي لحفظ الكأس أثناء القداس.",
        "الشرقية )حضن اآلب(: تجويف نصف دائري أمام المذبح تُرسم فيه أيقونة ضابط الكل )البانتوكراتور (.",
        "أدوات الخدمة : الكأس، الصينية، القبة)النجم(، الملعقة)الماستير (، إناء الذخيرة، المجمرة )الشورية(، البشارة، صليب اليد، وقارورتا الخمر والماء ."
      ]
    },
    {
      title: "حامل األيقونات",
      items: [
        "حامل األيقونات )األيقونستاسز(: حاجز خشبي أو رخامي يفصل الهيكل عن صحن الكنيسة. يحتوي على 3 أبواب )األوسط هو الملوكي(، وأيقونات مرتبة طقسيا )يسار الداخل: العذراء، البشارة، ميخائيل، مرقس. يمين الداخل: المسيح، يوحنا المعمدان، قديس الكنيسة(. وتتدلى بيض النعام أمامه كرمز للقيامة."
      ]
    },
    {
      title: "صحن الكنيسة",
      items: [
        ":صحن الكنيسة",
        "خورس الشمامسة: يضم المنجليتين )للقراءة(، الشمعدانين، وكرسي األسقف.",
        "مكان الشعب: يضم األعمدة )12 عمودا (، اإلمبل )المنبر (، اللقان )لغسل األرجل(، والمغطس )قديما لعيد الغطاس(.",
        "حجرة المعمودية: تقع في الجانب الغربي الشمالي لمدخل الكنيسة، وتأخذ أشكاال )رباعي، سداسي، ثماني، دائري، صليب( تعبر عن الموت والقيامة واألبدية ."
      ]
    }
  ];

  const chapterFour = [
    "انتظارا لشمس البر، االتجاه للشرق : وتذكرا للفردوس المفقود، وترقبا للمجيء الثاني، وتطلعا للمصلوب.",
    "تسمية الكنائس بأسماء القديسين: لتكريمهم وتذكر جهادهم، ولها أصول كتابية في العهدين القديم والجديد.",
    "الصليب : يوضع فوق المذبح وحامل األيقونات والمنارة إلعالن خضوع الكنيسة للمسيح المصلوب، وهو عالمة المجيء الثاني.",
    "الصور واأليقونات: مسموح بها كعظات مرسومة بسبب \"التجسد اإللهي\" الذي أعلن صورة هللا المنظورة، وتُرسم للسمائيين بهالة نور )هالة المسيح بداخلها صليب(.",
    "البخور: يشير لحضرة هللا، تطهير الشعب، رائحة ذبيحة المسيح، وصلوات القديسين المتصاعدة.",
    "األنوار والشموع: تضاء لتشير لحضرة هللا، نور اإلنجيل، والمالئكة والقديسين ككواكب مضيئة.",
    "الرموز الكنسية: السمكة )ترمز للمسيح \"إخسيس\" وللمؤمنين(، النسر )المسيح الغالب(، الحمل، سنابل القمح وعنقود العنب."
  ];

  const sacraments: ContentCard[] = [
    {
      title: "1. سر المعمودية",
      items: [
        "هو باب األسرار، يمنح الخالص، الوالدة الثانية، غفران الخطايا، ووسما ال يُمحى.",
        "يجب أن يكون بالتغطيس الكامل 3 مرات.",
        "طقوسه: تحليل المرأة )بعد 40 يوما للذكر و80 لألنثى(، جحد الشيطان )جهة الغرب(، إعالن اإليمان )جهة الشرق(، الدهن بزيوت )أبوغالمسيس والغاليالون(، تقديس الماء، والتغطيس."
      ]
    },
    {
      title: "2. سر الميرون ",
      items: [
        "يُمنح لنوال ختم موهبة الروح القدس والتثبيت في الحياة المسيحية.",
        "فورا بعد المعمودية بالدهن بزيت الميرون 36 رشمة على الرأس والحواس والمفاصل. يتم"
      ]
    },
    {
      title: "3. سر التوبة واالعتراف",
      items: [
        "رجوع الخاطئ باعترافه للكاهن لنوال المغفرة .",
        "شروطه: الندم المنسحق، العزم على اإلصالح، اإليمان بدم المسيح، واالعتراف أمام الكاهن."
      ]
    },
    {
      title: "4. سر التناول ",
      items: [
        "سر الشكر والمائدة المقدسة، حيث يتحول الخبز والخمر إلى جسد ودم المسيح.",
        "القربانة )الخبز(: تُصنع من دقيق القمح النقي، بدون ملح، مختمرة )بخميرة تموت بالنار كرمز للخطية التي ماتت في جسد المسيح(، وتُختم بختم )قدوس هللا(، وتُثقب 5 ثقوب كرمز لجراحات المسيح.",
        "مسكرا )مطبوخا بالنار ( ويُمزج بالماء. الخمر: عصير كرمة نقي يُشترط أال يكون",
        "شروط التناول: اإليمان األرثوذكسي، التوبة واالعتراف، الصلح مع اآلخرين، واالستعداد الجسدي )الصوم 9 ساعات للكبار، نظافة الجسد(."
      ]
    },
    {
      title: "5. سر مسحة المرض ",
      items: [
        "لمنح الشفاء الجسدي والروحي للمؤمن المريض ومغفرة الخطايا.",
        "يُصلى 7 صلوات على زيت به 7 فتائل مضاءة."
      ]
    },
    {
      title: "6. سر الزيجة المقدس",
      items: [
        "اتحاد الزوجين برباط مقدس بفعل الروح القدس.",
        "سماته: الوحدانية، الشراكة الحقيقية، واالستمرارية )ال طالق إال لعلة الزنا(.",
        "يسبقه \"الخطبة\" )وعد بالزواج(، وطقس \"عربون الزواج\"، ثم \"صالة اإلكليل\" ووضع األكاليل كعالمة النصر والعفة ."
      ]
    },
    {
      title: "7. سر الكهنوت",
      items: [
        "يمنح السلطان لمباشرة الخدمات واألسرار .",
        "درجة الشماسية )الدياكونية(: رتب للمساعدة )اإلبصالتس/المرتل، األغنسطس/القارئ، اإليبي دياكون/مساعد الشماس، الدياكون/الشماس الكامل، واألرشيدياكون/رئيس الشمامسة(.",
        "درجة القسيسية: )القس والقمص( للرعاية وإتمام األسرار .",
        "درجة األسقفية: )األسقف، المطران، والبطريرك/البابا( كمال الكهنوت ولهم حق السيامة ووضع اليد.",
        "المالبس الكهنوتية: التونية )الرداء األبيض كرمز للمالئكة والنقاء(، البطرشيل )حزام يُلبس بطرق مختلفة حسب الرتبة .كرمز لنير المسيح(، الصدرة، الطيلسانة، والبرنس ده المحتوي"
      ]
    }
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="inline-block p-6 bg-yellow-500/20 rounded-full backdrop-blur-sm border-2 border-yellow-400 mb-8">
            <Flame size={64} className="text-yellow-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl mb-4 md:mb-6 font-bold">الفصل الاول: مقدمة عن الكنيسة</h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-yellow-200 max-w-4xl mx-auto">
            معنى الكنيسة، ألقاب الكنيسة، رموز الكنيسة، نشأة كنيسة العهد الجديد، األساس اإليماني، القصد اإللهي من الكنيسة، عالمات الكنيسة
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-10 md:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-indigo-900 font-bold">الفصل الاول: مقدمة عن الكنيسة</h2>
            <div className="h-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl shadow-md"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 animate-stagger">
            {chapterOne.slice(0, 3).map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 animate-fade-up">
                <div className={`h-4 bg-gradient-to-r ${index === 0 ? "from-blue-500 to-blue-700" : index === 1 ? "from-purple-500 to-purple-700" : "from-green-500 to-green-700"}`}></div>
                <div className="p-6 sm:p-8">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {chapterOne.slice(3).map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-md border-2 border-indigo-100">
                  <BulletList items={[item]} />
                </div>
              ))}
            </div>
          </div>
          <ChapterImage src={sectionOneImage} alt="الفصل األول: مقدمة عن الكنيسة" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-10 md:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-indigo-900 font-bold">الفصل الثاني: مقدمة عن طقوس الكنيسة</h2>
            <div className="h-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl shadow-md"></div>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-6">
            {chapterTwo.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border-2 border-indigo-100">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl text-indigo-600">{index + 1}</div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ChapterImage src={sectionTwoImage} alt="الفصل الثاني: مقدمة عن طقوس الكنيسة" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-10 md:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-indigo-900 font-bold">الفصل الثالث: المبنى الكنسي ومحتوياته</h2>
            <div className="h-4 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl shadow-md"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {buildingSections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border-r-4 border-indigo-500">
                <h3 className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-indigo-800 font-bold">{section.title}</h3>
                <BulletList items={section.items} />
              </div>
            ))}
          </div>
          <ChapterImage src={sectionThreeImage} alt="الفصل الثالث: المبنى الكنسي ومحتوياته" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-800 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-10 md:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 font-bold">الفصل الرابع : عقائد وطقوس تتعلق بالمبنى</h2>
            <div className="h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-md"></div>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 sm:gap-8">
            {chapterFour.map((item, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-white/20 shadow-lg ${index === chapterFour.length - 1 ? "md:col-span-3" : ""}`}>
                <BulletList items={[item]} className="text-white" />
              </div>
            ))}
          </div>
          <div className="max-w-6xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border-2 border-white/20">
              <img
                src={sectionFourImage}
                alt="الفصل الرابع : عقائد وطقوس تتعلق بالمبنى"
                className="w-full h-auto object-contain rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-10 md:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-indigo-900 font-bold">الفصل الخامس: أسرار الكنيسة السبعة</h2>
            <div className="h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-md"></div>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
            {sacraments.map((sacrament, index) => (
              <div key={index} className={`bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border-2 border-indigo-100 ${index === sacraments.length - 1 ? "md:col-span-2" : ""}`}>
                <h3 className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-indigo-800 font-bold">{sacrament.title}</h3>
                <BulletList items={sacrament.items} />
              </div>
            ))}
          </div>
          <ChapterImage src={sectionFiveImage} alt="الفصل الخامس: أسرار الكنيسة السبعة" />
        </div>
      </section>
    </div>
  );
}
