import { cardGrids, type Card } from "./cards.generated";
import { img } from "./site";
import { services } from "./services";

/* ------------------------------------------------------------------ */
/* Card-grid pages (/service, hub pages, /media)                       */
/* ------------------------------------------------------------------ */

export interface GridPage {
  path: string;
  title: string; // banner title
  sub: string; // small heading above "Silver Nest Clinic"
  intro: string;
  cards: (Card & { text?: string })[];
  ctaLabel?: string;
}

const summaryByLink = new Map<string, string>();
for (const s of services) [s.path, ...s.aliases].forEach((p) => summaryByLink.set(p, s.summary));

const grid = (key: string, path: string, title: string, intro: string, withText = false): GridPage => {
  const source = cardGrids[key] ?? { sub: title, cards: [] };
  return {
    path,
    title,
    sub: source.sub || title,
    intro,
    cards: source.cards.map((c) => {
      // Some links on the old site were WordPress preview URLs – drop the query string and trailing slash.
      const link = c.link.startsWith("/") ? c.link.split("?")[0].replace(/\/+$/, "") || "/" : c.link;
      return { ...c, link, text: withText ? summaryByLink.get(link) : undefined };
    }),
  };
};

export const gridPages: GridPage[] = [
  grid(
    "service",
    "/service",
    "Service",
    "SilverNest Clinic offers complete, compassionate care for women at every age, with services shaped around each patient's individual needs.",
    true
  ),
  grid("pcos", "/pcos", "PCOS", "Articles and videos from Dr. Shweta Bansal Wazir on understanding and managing polycystic ovary syndrome."),
  grid("about-menopause", "/about-menopause", "Menopause", "Guides to the changes that come with menopause and practical ways to manage symptoms."),
  grid("about-endometriosis", "/about-endometriosis", "Endometriosis", "Articles explaining endometriosis symptoms, diagnosis, fertility and treatment."),
  grid("about-uterine-fibroids", "/about-uterine-fibroids", "Uterine Fibroids", "Everything you need to know about fibroids, from symptoms to treatment choices."),
  grid("about-pap-smear", "/about-pap-smear", "Pap Smear", "Information on cervical screening: what the test involves, how often to have it and what results mean."),
  grid("fertility-and-infertility", "/fertility-and-infertility", "Fertility and Infertility", "Advice for couples trying to conceive, and an overview of fertility treatments."),
  grid("about-pre-and-post-operative", "/about-pre-and-post-operative", "Pre and Post-Operative", "How to prepare for gynaecological surgery and recover well afterwards."),
  grid("twin-pregnancy", "/twin-pregnancy", "Twin Pregnancy", "What to expect when you are expecting twins, from early signs to scans and monitoring."),
  grid("about-pregnancy-care", "/about-pregnancy-care", "Pregnancy Care", "Expert guidance on common conditions and concerns during pregnancy."),
  grid(
    "faith-fasting-and-motherhood-festive-care-tips-for-every-expecting-mother",
    "/faith-fasting-and-motherhood-festive-care-tips-for-every-expecting-mother",
    "Faith Fasting and Motherhood",
    "Festive-season tips for expecting and new mothers on fasting, nutrition and staying well."
  ),
  {
    ...grid("media", "/media", "Media", "Dr. Shweta Bansal Wazir regularly shares her expertise on women's health with leading newspapers, magazines and health portals."),
  },
];

/* ------------------------------------------------------------------ */
/* About → Our Introduction                                            */
/* ------------------------------------------------------------------ */

export const introduction = {
  path: "/our-introduction-best-pregnancy-care-clinic-in-gurgaon",
  aliases: ["/our-introduction"],
  title: "Our Introduction",
  tag: "SILVER NEST Clinic",
  heading: "About Our Clinic",
  paragraphs: [
    "Silvernest is a women's health and pregnancy care clinic in Sector 49, Gurgaon, led by Dr. Shweta Bansal Wazir. We care for women through adolescence, pregnancy, the reproductive years and menopause.",
    "Our aim is simple: unhurried consultations, honest advice and treatment that fits your life. We look forward to welcoming you to Silvernest.",
  ],
  image: img("uploads/2023/07/drshweta-e1690092540452.jpeg"),
  listIntro: "What sets our clinic apart:",
  list: [
    "Highly qualified and expert gynaecologist",
    "Comprehensive Services",
    "Advanced Medical Equipment and modalities",
    "Clean and comfortable environment",
    "Patient-centric approach",
  ],
  clinic: {
    tag: "About our clinic",
    title: "Hightech and Clean Clinic",
    paragraphs: [
      "We use modern diagnostic equipment and digital records so that assessments are accurate and information is always at hand when you need it.",
      "Strict hygiene standards and a calm, comfortable setting help every visit feel safe and relaxed.",
    ],
    image: img("uploads/2022/01/about-us.jpg"),
  },
  mission: {
    tag: "clinic vision",
    title: "Our Mission",
    paragraphs: [
      "To provide excellent, evidence-based care to women of every age, delivered with warmth and respect.",
      "We look after the whole person, not only physical health but also emotional wellbeing, and help each woman make informed choices about her care.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* About → Doctor Profile                                              */
/* ------------------------------------------------------------------ */

export const doctorProfile = {
  path: "/doctor-profile-best-gynecologist-in-gurugram-sector-49-pregnancy-care-clinic",
  aliases: ["/doctor-profile"],
  title: "Doctor Profile",
  bannerTitle: "Best Gynecologist in Gurugram Sector 49 | Pregnancy Care Clinic",
  image: img("uploads/2023/07/drshweta-1.jpeg"),
  tag: "20 Years plus experience in Obstetrics and Gynecology",
  name: "Dr. Shweta Bansal Wazir, MBBS, DGO, MD (Obs & Gyn), MRCOG (UK)",
  bio: "Dr. Shweta Bansal Wazir is an Obstetrician & Gynecologist with more than twenty years of experience, known for her careful clinical judgement and caring manner with patients.",
  experienceTitle: "Working Experience in Hospital",
  experience: [
    "MBBS, R.G. Kar Medical College, Kolkata (Calcutta University), 1999",
    "DGO, Calcutta, 2003 · MD (Obs & Gyn), Pt. JNM Medical College, Raipur, 2006",
    "Started practice in Kolkata in 2007",
    "Specialist Registrar, Queen Elizabeth Hospital, Newcastle, UK",
    "Senior Consultant, Motherhood Hospital, Sector 57, Gurugram",
    "Own clinic: Silver Nest Clinic, Eros City Square, Sector 49, Gurugram",
  ],
  consultantTitle: "Senior Consultant Obstetrician & Gynecologist",
  consultantText:
    "Holding the MRCOG from the Royal College of Obstetricians and Gynaecologists (UK), an internationally recognised qualification, Dr. Shweta brings global standards of practice to routine and complex care alike.",
  ukTitle: "Professional Experience",
  ukText: "During her time in the UK she worked in specialised clinics covering:",
  ukList: [
    "High-Risk Pregnancy Care",
    "Early Pregnancy Assessment",
    "Colposcopy Services",
    "Menopause Management",
    "Gynecologic Oncology",
    "Laparoscopy",
    "Hysteroscopy",
  ],
  registrations: [
    "Haryana Medical Council- India.",
    "General Medical Council-UK.",
    "Royal College of Obstetricians & Gynecologists.",
    "Member, Royal College of Obstetricians and Gynaecologists (RCOG), United Kingdom",
  ],
  memberships: [
    "Gurgaon Obstetrics and Gynae Society",
    "Indian Medical association",
    "Society of fetal medicine of India",
    "Society of Obstetric Medicine India",
    "Society of endocrinology and reproductive medicine India",
  ],
  publications: [
    "Serum creatinine kinase in ectopic pregnancy — Journal of Obstetrics & Gynecology of India, Vol. 55 No. 5, 2005 (nominated for best paper of the year)",
    "NDVH: are there any contraindications? — Journal of Obstetrics & Gynecology of India, Vol. 56 No. 2, 2006",
    "Comparative study of morbidity & mortality: non-descent vaginal vs abdominal hysterectomy — International Journal of Surgery",
  ],
  presentations: [
    "Rhesus negative pregnancy and dilated cardiomyopathy — AICC-RCOG Annual Conference, North Zone, 2009",
    "Non-descent vaginal hysterectomy — FOGSI North Zone Labour Delivery Conference, Agra, 2005",
    "Fetal growth retardation — AICC-RCOG Annual Conference, East Zone",
    "Atypical presentation of HELLP syndrome (poster) — AICC-RCOG Annual Conference, North Zone",
  ],
  publicationsImage: img("uploads/2023/07/top-view-career-guidance-items-doctors.jpg"),
};

/* ------------------------------------------------------------------ */
/* About → Testimonials                                                */
/* ------------------------------------------------------------------ */

const maleAvatar = img("uploads/2023/10/image_processing20220801-17461-17aqi03-64x63.png");
const femaleAvatar = img("uploads/2023/10/beautiful-woman-avatar-character-icon-free-vector-64x63.jpg");

/**
 * Patient reviews. Only short excerpts are included – paste each patient's full review
 * into `quote` (with their permission) to show it on the Testimonials page.
 */
export const testimonialsPage = {
  path: "/testimonials-best-gynecologist-in-gurgaon",
  aliases: ["/testimonials"],
  title: "Testimonials",
  tag: "Testimonials",
  heading: "What do our clients say?",
  intro: "Patient feedback matters to us. Here are a few words from families who have been cared for at Silver Nest Clinic.",
  items: [
    { name: "Paresh Alwani", avatar: maleAvatar, quote: "Excellent care and affection by Dr Shweta Bansal Wazir…" },
    { name: "Sonal Modi", avatar: femaleAvatar, quote: "Dr Shweta Bansal is very experienced and dedicated towards her work…" },
    { name: "Taruna Chettri", avatar: femaleAvatar, quote: "Big Thank you to her from the bottom of our hearts…" },
    { name: "Niketan Jha", avatar: maleAvatar, quote: "" },
    { name: "Vipul Arora", avatar: maleAvatar, quote: "" },
    { name: "Rajat Bhatia", avatar: maleAvatar, quote: "" },
    { name: "Vandana Sharma", avatar: femaleAvatar, quote: "" },
    { name: "Richa Yadav", avatar: femaleAvatar, quote: "" },
    { name: "Sakshi Jain", avatar: femaleAvatar, quote: "" },
    { name: "Raman Yadav", avatar: maleAvatar, quote: "" },
    { name: "Anupam Goyal", avatar: maleAvatar, quote: "" },
    { name: "Apurva Sharma", avatar: femaleAvatar, quote: "" },
    { name: "Jyoti Yadav", avatar: femaleAvatar, quote: "" },
  ],
};

/* ------------------------------------------------------------------ */
/* About → FAQs                                                        */
/* ------------------------------------------------------------------ */

export const faqPage = {
  path: "/faqs-gynecologist-in-gurgaon",
  aliases: ["/faqs"],
  title: "Faqs",
  tag: "Ask your questions",
  heading: "Frequently Ask Questions",
  columns: [
    [
      {
        q: "Does nausea and vomiting in pregnancy go away on its own?",
        a: "For most women, yes. Morning sickness usually eases by around 12 to 14 weeks. If you cannot keep food or fluids down, see your doctor, as severe vomiting needs treatment.",
      },
      {
        q: "How is PCOS treated?",
        a: "Treatment depends on your symptoms and goals. It often combines healthy eating, regular exercise and weight management with medicines to regulate periods, reduce excess hair or acne, or help with ovulation if you want to conceive.",
      },
      {
        q: "Can a test confirm menopause?",
        a: "Menopause is usually diagnosed from your age and symptoms, after 12 months without a period. Blood hormone tests can help in women under 45 or when the picture is unclear.",
      },
    ],
    [
      {
        q: "Are medicines for pregnancy sickness safe?",
        a: "Several anti-sickness medicines have been used safely in pregnancy for many years. Your doctor will recommend one that suits your stage of pregnancy and symptoms.",
      },
      {
        q: "Is it safe to travel while pregnant?",
        a: "In an uncomplicated pregnancy, travel is generally safe, and the middle trimester is often the most comfortable time. Check with your doctor first, carry your medical notes and stay hydrated on long journeys.",
      },
      {
        q: "How often will I see my doctor during pregnancy?",
        a: "A typical schedule for a low-risk pregnancy is:",
        list: ["Up to 28 weeks: once a month", "28 to 36 weeks: every two weeks", "36 weeks until birth: every week"],
        after: "Twins, high blood pressure, diabetes and other high-risk situations need more frequent visits.",
      },
    ],
  ],
};

/* ------------------------------------------------------------------ */
/* About → Gallery                                                     */
/* ------------------------------------------------------------------ */

export const galleryPage = {
  path: "/our-gallery-female-gynecologist-in-gurgaon",
  aliases: ["/our-gallery"],
  title: "Our Gallery",
  items: [
    { thumb: img("uploads/2022/01/gallery-1-1.jpg"), full: img("uploads/2022/01/gallery-1-1.jpg") },
    { thumb: img("uploads/2023/07/Untitled-2-6-370x326.png"), full: img("uploads/2023/07/Untitled-2-6.png") },
    { thumb: img("uploads/2023/07/pregnancy-care-370x326.jpg"), full: img("uploads/2023/07/pregnancy-care.jpg") },
    { thumb: img("uploads/2022/01/white-1-2.jpg"), full: img("uploads/2022/01/white-1-2.jpg") },
    { thumb: img("uploads/2023/07/drshweta-370x326.jpeg"), full: img("uploads/2023/07/drshweta.jpeg") },
    { thumb: img("uploads/2023/07/3-370x326.png"), full: img("uploads/2023/07/3.png") },
  ],
};

/* ------------------------------------------------------------------ */
/* Contact page                                                        */
/* ------------------------------------------------------------------ */

export const contactPage = {
  tag: "GET IN TOUCH",
  heading: "Book An Appointment",
  intro: "Fill in the form below and our team will get back to you to confirm a time.",
  widgets: [
    { title: "Address", lines: ["Eros city Square Mall", "Silver Nest Clinic", "Shop no.198 ff", "Opposite Rosewood Apartments", "Sector 49-50, Gurgaon, 122018"] },
    { title: "Phone", lines: ["+91 84481 28007"], href: "tel:+918448128007" },
    { title: "Email", lines: ["ask@drshwetawazir.com"], href: "mailto:ask@drshwetawazir.com" },
    { title: "Business Hours", lines: ["Mon - Thu (Evening) : 5:00 pm - 7:00 pm", "Sat (Evening) : 5:00 pm - 7:00 pm", "Fri & Sun: Closed"] },
    { title: "Address", lines: ["Motherhood Hospital Address -", "Plot no.55,56& 57", "Sector - 57", "Gurugram, Haryana 122018"] },
    { title: "Business Hours", lines: ["Mon - Sat : 9:00 am - 2:00 pm", "Sunday: 10:00am - 2:00pm"] },
  ],
};
