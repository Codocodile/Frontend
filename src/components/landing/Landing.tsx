import { Footer, Header, Section } from "../../containers";
import { Navbar, EventTimeline, FAQ } from "../";

function shuffle(array: number[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

var crocs = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

const timeline = [
  {
    date: "14 Mehr",
    title: "Registeration Starts.",
    description: "ثبت‌نام انفرادی در سایت شروع می‌شود. تیم‌بندی برای مسابقه و کارگاه‌ها در روزهای آتی انجام خواهد شد."
  },
  {
    date: "23 - 26 Mehr",
    title: "Algorithmic Workshops",
    description: "کارگاه‌های آموزشی الگوریتم در ۴ روز از ۲۳ ام تا ۲۶ ام مهر ماه، با موضوعات داده‌ساختار،الگوریتم‌های گراف، تقسیم و حل، الگوریتم‌های حریصانه و برنامه‌نویسی پویا برگزار می‌شوند."
  },
  {
    date: "24 Mehr",
    title: "Registeration Closes.",
    description: "مهلت ثبت‌نام انفرادی در رویداد تمام می‌شود."
  },
  {
    date: "28 Mehr",
    title: "Selection Contest",
    description: "مسابقه انتخابی به صورت مجازی در روز ۲۸ مهر برگزار می‌شود و تیم‌های راه یافته به مرحله نهایی حضوری از نتیجه این مسابقه انتخاب می‌شود."
  },
  {
    date: "3 - 4 Aban",
    title: "Imperfect Minds (Software Engineering Workshop)",
    description: "کارگاه مهندسی نرم‌افزار توسط اسپانسر رویداد، شرکت اسنپ فود، برگزار می‌شود. این کارگاه همراه با مسابقه در دو روز به صورت تیمی و حضوری در دانشگاه شریف برگزار می‌شود‌. توضیحات بیشتر کارگاه را در این بخش می‌توانید بخوانید."
  },
  {
    date: "11 - 12 Aban",
    title: "Final Contest",
    description: "مسابقات نهایی رویداد در دو روز به صورت حضوری در دانشگاه شریف برگزار می‌شود. جوایز و رتبه‌های نهایی پس از این رقابت مشخص خواهد شد."
  },
];

// const staff = [
//   {
//     name: "Ali Salesi",
//     title: "Head of Technical",
//     image: "assets/staff/salesi.jpg",
//   },
//   {
//     name: "Ali Shahali",
//     title: "Head of Event",
//     image: "assets/staff/shahali.jpg",
//   },
//   {
//     name: "Emad Emam Jome",
//     title: "Head of Social",
//     image: "assets/staff/emamjome.jpg",
//   },
// ];

const faq = [
  {
    question: "سطح بندی مسابقه به چه صورت است؟",
    answer:
      "مسابقه در 3 سطح Junior(مناسب دانش‌آموزانی که مدال المپیاد کامپیوتر ندارند)، Senior(مناسب دانشجوهایی که مدال المپیاد کامپیوتر یا ICPC ندارند) و Pro(مناسب دارندگان مدال المپیاد کامپیوتر یا ICPC) برگزار می‌شود.",
  },
  {
    question: "دانشجوهای چه رشته‌هایی امکان شرکت در مسابقه را دارند؟",
    answer:
      "به طور کلی این مسابقه مناسب دانشجویان رشته‌های مهندسی‌کامپیوتر، علوم‌کامپیوتر، مهندسی برق و علوم ریاضی است، اما تمامی دانشجویانی که درس مبانی‌ برنامه‌نویسی را پاس کرده‌اند و به حوزه الگوریتم علاقه دارند، می‌توانند در این مسابقه شرکت کنند.",
  },
  {
    question:
      "از چه زبان‌های برنامه‌نویسی برای شرکت در مسابقه می‌توان استفاده کرد؟",
    answer:
      "سیستم داوری مسابقه از زبان‌های C, C++ , Java , Python پشتیبانی می‌کند.",
  },
  {
    question: "قبل از مسابقه، کارگاه آموزشی برگزار می‌شود؟",
    answer:
      "بله، پیش از برگزاری مسابقه کارگاه‌های ضبط‌شده‌ای در اختیار شرکت‌کنندگان قرار می‌گیرد که تعدادی مسئله هم برای تمرین بیشتر شرکت‌کنندگان دارد.",
  },
  {
    question: "مسابقه به صورت مجازی برگزار می‌شود یا حضوری؟",
    answer:
      "مرحله اول مسابقه به صورت مجازی و مرحله دوم به صورت حضوری در دانشگاه صنعتی شریف برگزار می‌شود.",
  },
  {
    question: "مسابقه به صورت گروهی برگزار می‌شود یا فردی؟",
    answer:
      "مسابقه به صورت گروهی و در گروه‌های 2 نفره برگزار می‌شود. شرکت در مسابقه فقط به صورت تیمی میسر است.",
  },
  {
    question: "در صورت نداشتن هم‌تیمی چه‌طور می‌توانم هم‌تیمی پیدا کنم؟",
    answer:
      "پیش از برگزاری مسابقه گروهی تلگرامی برای شرکت‌کنندگان تشکیل می‌شود. شما می‌توانید در آن گروه برای خود هم‌تیمی پیدا کنید.",
  },
  {
    question:
      "من دانش‌آموز هستم و تجربه برنامه‌نویسی دارم، اما المپیاد کامپیوتری نیستم. آیا امکان شرکت در مسابقه را دارم؟",
    answer:
      "بله، مسابقه در سه سطح برگزار می‌شود و شما می‌توانید در سطح دانش‌آموزی مسابقه شرکت کنید.",
  },
  {
    question: "برای شرکت در مسابقه چه هزینه‌ای باید پرداخت کنم؟",
    answer:
      "شرکت در مسابقه‌ی انتخابی که آنلاین برگزار می‌شود برای همه رایگان است. اما برای تیم‌های راه یافته به مرحله حضوری، مبلغی برای ثبت‌نام در نظر گرفته شده است.",
  },
  {
    question: "چه جایزه‌ای به تیم‌های برتر تعلق می‌گیرد؟",
    answer: "به تیم‌های برتر مسابقه حضوری، جوایز نقدی تعلق می‌گیرد.",
  },
];

function Landing() {
  return (
    <>
      <Navbar />
      <Header />
      <Section name="timeline" side="left" dino={crocs[0]}>
        <EventTimeline events={timeline} />
      </Section>
      {/* <Section name="staff">
        <StaffCarousel staff={staff}/>
      </Section> */}
      <Section name="FAQ" capitalize={true} side="right" dino={crocs[1]}>
        <FAQ data={faq} />
      </Section>
      <Footer />
    </>
  );
}

export default Landing;
