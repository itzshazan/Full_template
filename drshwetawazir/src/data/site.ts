/**
 * All site content lives here so it can be edited without touching components.
 *
 * Images are loaded from the live WordPress uploads folder via ASSET_BASE.
 * To self-host, download them into /public/images and change ASSET_BASE to "/images".
 */
export const ASSET_BASE = "https://www.drshwetawazir.com/wp-content";

export const img = (path: string): string => `${ASSET_BASE}/${path}`;

export const clinic = {
  name: "Silver Nest Clinic",
  doctor: "Dr. Shweta Bansal Wazir",
  credentials: "MBBS, DGO, MD (Obs & Gyn), MRCOG (UK)",
  tagline: "Best Gynecologist Clinic in Gurgaon",
  email: "ask@drshwetawazir.com",
  phone: "+91 84481 28007",
  phoneHref: "tel:+918448128007",
  logo: img("uploads/2023/07/siolvernest-logo.png"),
  addressLines: ["198 First Floor", "Eros City Square Mall", "Rosewood City Rd, Sector 49", "Gurugram, Haryana 122018"],
  footerAddress:
    "Eros City Square Mall, Silver Nest Clinic, Shop no. 198 FF, Opposite Rosewood Apartments, Sector 49-50 Gurgaon, 122018",
  hours: ["Monday - Thursday : 5 pm - 7 pm", "Saturday : 5pm - 7pm", "Friday, Sunday : Closed"],
  hospital: {
    name: "Motherhood Hospital",
    address: "Motherhood hospital, Gurugram, Haryana 122018",
    hours: ["Monday - Friday : 9:00 am to 2:00 pm", "Saturday : 9:00 am to 2:00 pm", "Sunday : 10:00 am to 2:00 pm"],
  },
  mapEmbed:
    "https://maps.google.com/maps?width=707&height=502&hl=en&q=Dr.%20Shweta%20Bansal%20Wazir,%20Rosewood%20City%20Road,%20Sector%2049,%20Gurugram,%20Haryana&t=&z=14&ie=UTF8&iwloc=B&output=embed",
  googleReview: "https://g.page/r/CTS7rxaL9SsaEB0/review",
  social: {
    facebook: "https://www.facebook.com/SilverNestClinic/",
    instagram: "https://www.instagram.com/silvernestclinic/",
    youtube: "https://www.youtube.com/@drshwetabansalwazir/",
  },
  introVideo: "https://www.youtube.com/embed/0e9lHyv1BLo?autoplay=1",
};

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export interface NavItem {
  label: string;
  to?: string; // internal route
  href?: string; // external link
  children?: NavItem[];
}

/** Turns a list of [label, slug] pairs into nav items. */
const links = (pairs: [string, string][]): NavItem[] => pairs.map(([label, slug]) => ({ label, to: `/${slug}` }));

export const navigation: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    children: links([
      ["Our Introduction", "our-introduction-best-pregnancy-care-clinic-in-gurgaon"],
      ["Doctor Profile", "doctor-profile-best-gynecologist-in-gurugram-sector-49-pregnancy-care-clinic"],
      ["Testimonials", "testimonials-best-gynecologist-in-gurgaon"],
      ["Faqs", "faqs-gynecologist-in-gurgaon"],
      ["Our Gallery", "our-gallery-female-gynecologist-in-gurgaon"],
    ]),
  },
  {
    label: "Service",
    to: "/service",
    children: [
      {
        label: "Gynecology",
        children: links([
          ["Male Infertility", "male-infertility-best-gynecologist-in-sector-49-gurgaon"],
          ["Infertility in Women", "infertility-in-women-fertility-specialist-gurgaon"],
          ["Contraception", "contraception-best-pregnancy-care-clinic-in-gurgaon"],
          ["Polycystic Ovary Syndrome", "polycystic-ovary-syndrome-womens-health-clinic-gurgaon"],
          ["Pelvic inflammatory disease", "pelvic-inflammatory-disease-gynecologist-in-sector-49-gurgaon"],
          ["Preventive Oncology", "preventive-oncology-best-gynae-doctor-in-gurgaon"],
          ["Menopause", "menopause-menopause-treatment-gurgaon"],
          ["Menstrual Irregularities", "menstrual-irregularities-best-lady-gynecologist-in-gurgaon"],
          ["Fibroids", "fibroids-best-pregnancy-care-clinic-in-gurgaon"],
          ["Prolapse of uterus", "prolapse-of-uterus-womens-health-checkup-gurgaon"],
          ["Endometriosis", "endometriosis-best-pregnancy-care-clinic-in-gurgaon"],
          ["Teen Times", "teen-times-teenage-treatment-gurgaon"],
          ["Pap smear", "pap-smear-pap-smear-test-gurgaon"],
          ["Abnormal Pap test", "abnormal-pap-test-best-pregnancy-care-clinic-in-gurgaon"],
        ]),
      },
      {
        label: "Obstetrics",
        children: links([
          ["High-Risk Pregnancy", "high-risk-pregnancy"],
          ["Early pregnancy", "early-pregnancy"],
          ["Diet In Pregnancy", "diet-in-pregnancy"],
          ["Normal delivery", "normal-delivery"],
          ["Caesarean section", "caesarean-section"],
          ["Complex obstetrics surgeries", "complexobstetrics-surgeries"],
          ["Postpartum issues", "postpartum-issues"],
        ]),
      },
      {
        label: "Minimal Invasive Surgery",
        children: links([
          ["Hysteroscopy", "hysteroscopy"],
          ["Laparoscopy", "laparoscopy"],
          ["Colposcopy", "colposcopy"],
        ]),
      },
    ],
  },
  {
    label: "Blog",
    to: "/blogs",
    children: [
      {
        label: "Health problems and treatment",
        children: [
          ...links([
            ["Pelvic Inflammatory Disease: Diagnosis and Treatment Options", "pregnancy-care-clinic-in-gurgaon-pelvic-inflammatory-disease-diagnosis-and-treatment-options"],
            ["Pelvic inflammatory disease: Symptoms and the Causes", "pregnancy-care-clinic-in-gurgaon-pelvic-inflammatory-disease-symptoms-and-the-causes"],
            ["Menopause: Meaning and the symptoms", "gynecologist-doctor-in-gurgaon-menopause-meaning-and-the-symptoms"],
            ["What is Laparoscopic Surgery?", "gynecologist-doctor-in-gurgaon-what-is-laparoscopic-surgery"],
            ["Breast Cancer: Risk factors", "gynecologist-doctor-in-gurgaon-breast-cancer-risk-factors"],
            ["Breast Cancer: Symptoms and Causes", "gynecologist-doctor-in-gurgaon-breast-cancer-symptoms-and-causes"],
            ["Is surgery the only solution to treat ovarian cysts?", "is-surgery-the-only-solution-to-treat-ovarian-cysts"],
            ["Can ovarian cysts affect fertility?", "can-ovarian-cysts-affect-fertility"],
            ["Do all ovarian cysts need to be operated?", "do-all-ovarian-cysts-need-to-be-operated"],
            ["Can ovarian cysts lead to serious complications?", "can-ovarian-cysts-lead-to-serious-complications"],
          ]),
          {
            label: "Antepartum",
            children: links([
              ["How to Handle Cravings in Gestational Diabetes", "best-obstetrician-in-gurgaon-how-to-handle-cravings-in-gestational-diabetes"],
              ["How does obesity affect pregnancy?", "how-does-obesity-affect-pregnancy"],
              ["Can obesity during pregnancy be managed?", "can-obesity-during-pregnancy-be-managed"],
              ["What Is Gestational Diabetes?", "best-obstetrician-in-gurgaon-what-is-gestational-diabetes"],
              ["Can obesity during pregnancy affect a baby’s birth?", "can-obesity-during-pregnancy-affect-a-babys-birth"],
              ["Is maternal health at risk during hypertension in pregnancy?", "is-maternal-health-at-risk-during-hypertension-in-pregnancy"],
              ["Is Hypertension during pregnancy putting your foetus at risk?", "is-hypertension-during-pregnancy-putting-your-foetus-at-risk"],
              ["Hypertension during pregnancy: What to expect during labour or delivery?", "hypertension-during-pregnancy-what-to-expect-during-labour-or-delivery"],
              ["Risk Factors and Caesarean Scar Pregnancy", "caesarean-scar-pregnancy-potential-risk-factors-associated"],
              ["Can caesarean scar pregnancy pose risks to both mother and baby?", "caesarean-scar-pregnancy-potential-risks-to-mother-and-baby"],
              ["Does heart disease in pregnancy show symptoms?", "does-heart-disease-in-pregnancy-show-symptoms"],
            ]),
          },
          {
            label: "Uterine Fibroids",
            children: links([
              ["Uterine Fibroids", "best-gynecologist-in-gurgaon-uterine-fibroids"],
              ["Uterine Fibroids: Treatment and Expectation", "best-gynecologist-in-gurgaon-uterine-fibroids-treatment-and-expectation"],
              ["Uterine Fibroids: Treatment", "best-gynecologist-in-gurgaon-uterine-fibroids-treatment"],
              ["Uterine fibroids: symptoms and diagnosis", "best-gynecologist-in-gurgaon-uterine-fibroids-symptoms-and-diagnosis"],
            ]),
          },
          {
            label: "Blood in Urine",
            children: links([
              ["Blood in Urine: Risk Factors", "pregnancy-care-clinic-in-gurgaon-blood-in-urine-risk-factors"],
              ["Blood in Urine: Diagnosis and Treatment", "pregnancy-care-clinic-in-gurgaon-blood-in-urine-diagnosis-and-treatment"],
              ["Blood in Urine: Causes", "pregnancy-care-clinic-in-gurgaon-blood-in-urine-causes"],
            ]),
          },
          {
            label: "Kidney Stones",
            children: links([
              ["Kidney Stones: Symptoms and Types", "best-gynae-doctor-in-gurgaon-kidney-stones-symptoms-and-types"],
              ["Kidney Stones: Causes & Risks", "best-gynae-doctor-in-gurgaon-kidney-stones-causes-and-risks"],
              ["Kidney Stones: Treatment", "best-gynae-doctor-in-gurgaon-kidney-stones-treatment"],
              ["Kidney Stones: Diagnosis & Treatment", "best-obstetrician-in-gurgaon-kidney-stones-diagnosis-andtreatment"],
              ["Kidney Stones: Prevention", "best-obstetrician-in-gurgaon-kidney-stones-prevention"],
            ]),
          },
          {
            label: "Lactose Intolerance",
            children: links([
              ["Lactose Intolerance: Symptoms and Risks", "best-obstetrician-in-gurgaon-lactose-intolerance-symptoms-and-risks"],
              ["Lactose Intolerance: Causes", "best-obstetrician-in-gurgaon-lactose-intolerance-causes"],
              ["Lactose Intolerance: Diagnosis & Treatment", "best-gynecologist-in-gurgaon-lactose-intolerance-diagnosis-and-treatment"],
            ]),
          },
          {
            label: "Osteoporosis",
            children: links([
              ["Osteoporosis", "best-gynecologist-in-gurgaon-osteoporosis"],
              ["Osteoporosis: Risk and Prevention", "best-gynecologist-in-gurgaon-osteoporosis-risk-and-prevention"],
              ["Osteoporosis: Cause and Diagnosis", "best-gynecologist-in-gurgaon-osteoporosis-cause-and-diagnosis"],
            ]),
          },
          {
            label: "Postpartum care",
            children: links([
              ["Breastfeeding: Warmth, Nourishment and Love", "best-gynae-in-gurgaon-breastfeeding-a-wonderful-mix-of-warmth-nourishment-and-love"],
              ["Alcohol while Breastfeeding", "best-gynae-in-gurgaon-alcohol-while-breastfeeding-finding-and-managing-the-right-balance"],
              ["Breastfeeding in Various Situations", "best-gynae-in-gurgaon-breastfeeding-a-diverse-and-exciting-experience-in-various-situations"],
              ["Breastfeeding Challenges", "best-gynae-in-gurgaon-breastfeeding-challenges-a-journey-of-commitment-persistence-and-resilience"],
            ]),
          },
          {
            label: "Nutrition and care",
            children: links([
              ["How to celebrate holi in pregnancy?", "pregnancy-care-clinic-in-gurgaon-how-to-celebrate-holi-in-pregnancy"],
              ["Can I fast during pregnancy?", "pregnancy-care-clinic-in-gurgaon-can-i-fast-during-pregnancy"],
              ["Habits That Can Help Reduce the Incidence Of PCOS", "pregnancy-care-clinic-in-gurgaon-habits-that-can-help-reduce-the-incidence-of-pcos-in-women"],
            ]),
          },
        ],
      },
      {
        label: "PregCare Blog",
        children: [
          {
            label: "Pre and Post-Operative",
            to: "/about-pre-and-post-operative",
            children: links([
              ["Dietary Recommendations for Pre- and Post-Operative", "dietary-recommendations-for-pre-and-post-operative-gynecological-care"],
              ["Pre and Post-Operative Tests", "pre-and-post-operative-tests-and-preparations-for-gynecological-procedures"],
              ["How to Manage Pain After Surgeries", "how-to-manage-pain-after-gynecological-surgeries-expert-tips"],
              ["Physical Activity Guidelines After Gynecological Surgeries", "physical-activity-guidelines-after-gynecological-surgeries"],
              ["C-Section Recovery Made Easy", "c-section-recovery-made-easy-expert-tips-from-dr-shweta-bansal-wazir-the-best-gynecologist-in-gurgaon"],
            ]),
          },
          {
            label: "Twin Pregnancy",
            to: "/twin-pregnancy",
            children: links([
              ["Early Signs and Symptoms of a Twin Pregnancy", "early-signs-and-symptoms-of-a-twin-pregnancy"],
              ["Prenatal Checkups during Twin Pregnancy", "what-to-expect-during-prenatal-checkups-during-twin-pregnancy"],
              ["Biweekly Ultrasounds for Monochorionic Twins", "biweekly-ultrasounds-for-monitoring-monochorionic-twins"],
              ["Dichorionic Twins: Monitoring and Care from 20 Weeks", "dichorionic-twins-monitoring-and-care-from-20-weeks"],
            ]),
          },
          {
            label: "Pregnancy Care",
            to: "/about-pregnancy-care",
            children: links([
              ["Conjunctivitis in pregnancy", "best-obstetrician-in-gurgaon-conjunctivitis-in-pregnancy"],
              ["Dengue in Pregnancy", "best-obstetrician-in-gurgaon-dengue-in-pregnancy"],
              ["Obstetric Cholestasis in Pregnancy", "obstetric-cholestasis-in-pregnancy"],
              ["A Comprehensive Guide to Contraception", "a-comprehensive-guide-to-contraception"],
            ]),
          },
          {
            label: "Contraception",
            children: links([
              ["Contraception: Methods, Failure Rates, and Considerations", "comprehensive-guide-to-contraception-methods-failure-rates"],
              ["A Comprehensive Guide to Contraception", "a-comprehensive-guide-to-contraception"],
            ]),
          },
          {
            label: "Thyroid and Pregnancy",
            children: links([
              ["Thyroid and Pregnancy: Causes, Symptoms & Effects", "thyroid-and-pregnancy-causes-symptoms-and-how-it-affects-mother-baby"],
              ["Managing Thyroid Problems During Pregnancy", "managing-thyroid-problems-during-pregnancy-tests-risks-and-safe-treatments"],
              ["Thyroid After Pregnancy", "thyroid-after-pregnancy-postpartum-thyroiditis-breastfeeding-and-long-term-care"],
            ]),
          },
          {
            label: "Faith Fasting and Motherhood",
            to: "/faith-fasting-and-motherhood-festive-care-tips-for-every-expecting-mother",
            children: links([
              ["Pregnancy and Navratri Fasting", "pregnancy-and-navratri-fasting-safe-practices-every-mother-to-be-should-know"],
              ["Nutrition Tips for Pregnant Women During Navratri", "essential-nutrition-tips-for-pregnant-women-during-navratri"],
              ["Festival Stress and Women’s Health", "festival-stress-and-womens-health-how-to-stay-calm-before-navratri"],
              ["Balancing Fasting and Health During Navratri", "how-pregnant-women-can-balance-fasting-and-health-during-navratri"],
              ["Festival Housework Precautions for Expecting Mothers", "festival-housework-precautions-for-expecting-mothers-cleaning-cooking-and-energy-balance"],
              ["Child & Mother Care During Navratri", "child-mother-care-during-navratri-hygiene-and-immunity-tips"],
            ]),
          },
        ],
      },
      {
        label: "Healthcare Blog",
        children: [
          {
            label: "PCOS",
            to: "/pcos",
            children: links([
              ["PCOS Symptoms Explained", "pcos-symptoms-explained-whats-happening-in-your-body"],
              ["The Link Between PCOS and Fertility", "the-link-between-pcos-and-fertility-what-you-need-to-know"],
              ["PCOS and Your Skin: Acne and Hair Loss", "pcos-and-your-skin-acne-and-hair-loss"],
              ["How PCOS Affects Your Future Health", "how-pcos-affects-your-future-health-risks-and-prevention"],
              ["PCOS Medications: What Works", "pcos-medications-what-works-and-what-you-should-know"],
              ["Lifestyle Changes to Manage PCOS Naturally", "lifestyle-changes-that-can-help-manage-pcos-naturally"],
              ["Can Birth Control Help Manage PCOS?", "can-birth-control-help-manage-pcos-heres-the-truth"],
              ["Stress and PCOS", "stress-and-pcos-how-your-mind-affects-your-hormones"],
              ["Insulin Resistance and PCOS", "insulin-resistance-and-pcos-how-theyre-connected"],
              ["Hormonal Imbalance in PCOS", "understanding-hormonal-imbalance-in-pcos-and-its-impact"],
              ["Difference Between PCOS and PCOD", "difference-between-pcos-and-pcod-why-it-is-important-for-you"],
            ]),
          },
          {
            label: "Menopause",
            to: "/about-menopause",
            children: links([
              ["Menopause Symptoms and Solutions", "menopause-symptoms-and-solutions-everything-you-need-to-know"],
              ["Menopause and Weight Gain", "menopause-and-weight-gain-causes-prevention-and-tips"],
              ["Hot Flashes and Night Sweats", "hot-flashes-and-night-sweats-how-to-stay-cool-during-menopause"],
              ["Early Menopause: Causes and Signs", "early-menopause-causes-signs-and-what-you-can-do"],
            ]),
          },
          {
            label: "Endometriosis",
            to: "/about-endometriosis",
            children: links([
              ["Endometriosis Explained", "endometriosis-explained-symptoms-causes-early-warning-signs-every-woman-should-know"],
              ["Can I Get Pregnant with Endometriosis?", "can-i-get-pregnant-with-endometriosis-what-every-woman-needs-to-know"],
              ["Endometriosis and Hormonal Imbalance", "endometriosis-and-hormonal-imbalance-whats-the-connection"],
              ["Endometriosis vs PCOS", "endometriosis-vs-pcos-whats-the-difference-and-how-to-tell"],
            ]),
          },
          {
            label: "Uterine Fibroids",
            to: "/about-uterine-fibroids",
            children: links([
              ["What Are Uterine Fibroids?", "what-are-uterine-fibroids-understanding-symptoms-causes-and-treatment-options"],
              ["Managing Uterine Fibroids", "managing-uterine-fibroids-natural-remedies-and-the-pros-cons-of-surgical-vs-non-surgical-treatment"],
              ["Can Uterine Fibroids Affect Fertility?", "can-uterine-fibroids-affect-fertility-insights-and-medical-advice"],
              ["Diet, Stress and Uterine Fibroids", "discover-how-your-diet-nutrition-and-stress-levels-silently-shape-the-growth-and-symptoms-of-uterine-fibroids"],
            ]),
          },
          {
            label: "Pap Smear",
            to: "/about-pap-smear",
            children: links([
              ["What Is a Pap Smear Test?", "what-is-a-pap-smear-test-purpose-procedure-what-to-expect"],
              ["Pap Smear vs HPV Test", "pap-smear-vs-hpv-test-whats-the-difference-do-you-need-both"],
              ["Pap Smear Guidelines by Age", "pap-smear-guidelines-by-age-when-to-start-how-often-and-when-to-stop-understanding-abnormal-pap-smear-results"],
            ]),
          },
          {
            label: "PMS",
            children: links([
              ["Understanding PMS", "understanding-pms-what-happens-during-your-menstrual-cycle-and-how-to-manage-it-naturally"],
              ["PMS: Diet, Lifestyle and Symptom Tracking", "pms-how-diet-lifestyle-mental-health-and-symptom-tracking-can-improve-your-cycle"],
            ]),
          },
          {
            label: "Fertility and Infertility",
            to: "/fertility-and-infertility",
            children: links([
              ["Fertility Explained", "fertility-explained-how-to-boost-your-chances-of-getting-pregnant-naturally"],
              ["Age and Fertility", "understanding-age-and-fertility-how-age-affects-your-chances-of-conceiving"],
              ["Emotional Impact of Infertility", "emotional-mental-health-impact-of-infertility-coping-strategies-for-couples"],
              ["Male and Female Infertility", "male-and-female-infertility-causes-symptoms-and-when-to-see-a-doctor"],
              ["Top Fertility Treatments: IVF, IUI & More", "top-fertility-treatments-for-infertility-ivf-iui-medications-more"],
            ]),
          },
        ],
      },
    ],
  },
  {
    label: "Media",
    to: "/media",
    children: [
      {
        label: "7 Pro Monsoon Health and Safety Tips for Moms to Be",
        href: "https://www.indiatoday.in/information/story/7-pro-monsoon-health-and-safety-tips-for-moms-to-be-2573296-2024-07-29",
      },
    ],
  },
  { label: "Contact", to: "/contact-us" },
];

/** Flattens the nav tree into a route → title lookup used by inner pages. */
export const routeTitles: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  const walk = (items: NavItem[]) =>
    items.forEach((item) => {
      if (item.to && !map[item.to]) map[item.to] = item.label;
      if (item.children) walk(item.children);
    });
  walk(navigation);
  return map;
})();

/* ------------------------------------------------------------------ */
/* Home page sections                                                  */
/* ------------------------------------------------------------------ */

export const heroSlides = [
  img("uploads/2023/10/Black-and-Orange-Bold-Tech-Gamer-Personal-Website-12.png"),
  img("uploads/2023/10/Black-and-Orange-Bold-Tech-Gamer-Personal-Website-13.png"),
  img("uploads/2023/10/Black-and-Orange-Bold-Tech-Gamer-Personal-Website-14.png"),
];

export const hero = {
  tag: "Silver Nest Clinic",
  title: "Best Gynecologist in Gurgaon",
  text: "Dr. Shweta Bansal Wazir is a respected Obstetrician & Gynecologist in Gurgaon, valued by her patients for her sincerity, warm bedside manner and sharp clinical judgement.",
};

export const featureStrip = {
  image: img("uploads/2023/07/pregnancy-care.jpg"),
  items: [
    { icon: img("uploads/2022/01/calander.png"), title: "Make an appointment", lines: ["Online doctor appointment system"], link: "/contact-us" },
    { icon: img("uploads/2022/02/phone.png"), title: "Call Us Today", lines: [clinic.phone], link: clinic.phoneHref },
    { icon: img("uploads/2022/01/clock.png"), title: "Open hours", lines: clinic.hours },
  ],
};

export const welcome = {
  tag: "Silver Nest Clinic",
  title: "Welcome to Silvernest",
  subtitle: "Pregnancy Care clinic in Gurgaon",
  paragraphs: [
    `Silvernest is a pregnancy and women's health clinic in Gurgaon led by ${clinic.doctor}, ${clinic.credentials}. With more than twenty years in practice, she looks after routine and high-risk pregnancies, fertility concerns and gynecological problems for women of every age.`,
    "Dr. Shweta earned her MBBS from R.G. Kar Medical College, Kolkata (Calcutta University) in 1999 and chose obstetrics and gynecology early in her career. At Silvernest she pairs international clinical standards with unhurried, personal attention in a calm and comfortable setting.",
  ],
  list: ["Pregnancy Care", "Labor and Delivery", "Infertility In Women", "Diet in Pregnancy"],
  images: [
    img("uploads/2023/07/Untitled-2-6.png"),
    img("uploads/2023/07/217CDAE3-93E8-456F-91DD86C5AC2CA951_source-e1690042681521.webp"),
  ],
};

export const servicesIntro = {
  tag: "What we do for our patients?",
  title: "Services Offered By Silver Nest Clinic",
  text: "SilverNest Clinic offers complete, compassionate care for women at every age, with services shaped around each patient's individual needs.",
};

export const services = [
  {
    title: "Postpartum issues",
    image: img("uploads/2022/01/postnatal-period-with-mother-child-scaled.jpg"),
    text: "Feeling low after childbirth is very common. We help new mothers recognise and manage the baby blues, postpartum depression and the physical changes that follow delivery.",
    to: "/postpartum-issues",
  },
  {
    title: "Pelvic inflammatory disease",
    image: img("uploads/2022/01/side-view-woman-dealing-with-std_23-2149485524-238x150.jpg"),
    text: "PID is an infection of the female reproductive organs, often sexually transmitted. Early diagnosis and treatment help prevent long-term complications.",
    to: "/pelvic-inflammatory-disease-gynecologist-in-sector-49-gurgaon",
  },
  {
    title: "Pap smear",
    image: img("uploads/2022/01/front-view-doctor-holding-anatomic-model_23-2149351652-238x150.jpg"),
    text: "A quick screening test of the cervix that picks up early cell changes long before they can develop into cervical cancer.",
    to: "/pap-smear-pap-smear-test-gurgaon",
  },
  {
    title: "Normal Delivery",
    image: img("uploads/2023/08/vaginal-birth-2020-722x406-1-238x150.jpg"),
    text: "Support for a natural vaginal birth, from antenatal preparation and birth planning through labour and recovery.",
    to: "/normal-delivery",
  },
];

export const doctor = {
  image: img("uploads/2023/07/Dr.-Shweta-Bansal-Wazir-1-removebg-preview-e1690043408345.png"),
  tag: "Meet Doctor",
  title: "Dr. Shweta Bansal Wazir, MBBS, DGO, MD (Obs & Gyn), MRCOG (UK)",
  paragraphs: [
    "Dr. Shweta Bansal Wazir is an Obstetrician & Gynecologist with over two decades of experience in women's healthcare, known for a caring, patient-first approach.",
    "After her MBBS at R.G. Kar Medical College, Kolkata, she completed her DGO in Calcutta (2003) and her MD at Pt. JNM Medical College, Raipur (2006), and began practising in Kolkata in 2007.",
    "She then worked as a Specialist Registrar at Queen Elizabeth Hospital, Newcastle, UK, gaining experience in high-risk pregnancy, early pregnancy, colposcopy, menopause, oncology, laparoscopy and hysteroscopy clinics. Holding the MRCOG (UK), she brings global standards of care to every consultation.",
  ],
};

export const whyChooseUs = {
  tag: "Our features",
  title: "Why Choose Us",
  text: "Every woman deserves care that fits her life. Whether you are planning a pregnancy, expecting, approaching menopause or dealing with another health concern, our team will guide you through each stage.",
  features: [
    { title: ["Friendly", "environment"], icon: img("uploads/2022/01/fun-2.png"), text: "Talk openly and in confidence about any health concern in a relaxed, welcoming clinic." },
    { title: ["Modern technology", "and equipment"], icon: img("uploads/2022/01/fun-3.png"), text: "Up-to-date diagnostic and treatment equipment helps us deliver accurate, high-quality care." },
    { title: ["Wide range of", "services"], icon: img("uploads/2022/01/choose-us-icon.png"), text: "From antenatal care to infertility treatment, we cover obstetrics and gynecology at every life stage." },
    { title: ["Knowledge", "and guidance"], icon: img("uploads/2022/01/doctor.png"), text: "We explain your options clearly so you can make confident, informed decisions about your health." },
  ],
};

export const hospitalCta = {
  background: img("uploads/2023/07/website-banner-c.jpg"),
  tag: "Dr. SHWETA BANSAL WAZIR",
  title: "Practising In Motherhood Hospital Gurgaon",
  text: "Dr. Shweta Bansal Wazir is a senior consultant in obstetrics and gynaecology at Motherhood Hospital, Sector 57, Gurgaon, with around 20 years of experience. Her areas of expertise include high-risk pregnancy, cervical cerclage, hysterectomy, tubectomy, infertility evaluation, menopausal care and laparoscopic gynaecological surgery. Hospital timings: 9 am to 2 pm (Monday to Saturday) and 10 am to 2 pm (Sunday).",
};

export const testimonialsIntro = {
  tag: "Silver Nest Clinic",
  title: "What do our clients say?",
  text: "Patient feedback matters to us. Here are a few words from families who have been cared for at our clinic.",
};

/** Short excerpts – full reviews are on the Testimonials page / Google reviews. */
export const testimonials = [
  { name: "Paresh Alwani", avatar: img("uploads/2023/10/image_processing20220801-17461-17aqi03-64x63.png"), quote: "Excellent care and affection by Dr Shweta Bansal Wazir…" },
  { name: "Sonal Modi", avatar: img("uploads/2023/10/beautiful-woman-avatar-character-icon-free-vector-64x63.jpg"), quote: "Dr Shweta Bansal is very experienced and dedicated towards her work…" },
  { name: "Taruna Chettri", avatar: img("uploads/2023/10/beautiful-woman-avatar-character-icon-free-vector-64x63.jpg"), quote: "Big Thank you to her from the bottom of our hearts…" },
];

export const aboutPregnancy = {
  images: [
    img("uploads/2024/12/engestational-hypertension-pregnancy-induced-hypertension-pihesla-hipertension-gestacional-hipertension-inducida-por-el-embarazo-hie-e1733545750275.webp"),
    img("uploads/2025/05/pregnant-woman-training_23-2147785017-e1746267195702.jpg"),
  ],
  tag: "Expert Pregnancy Care and Gynecology Services",
  title: "Top Pregnancy Care Clinic in Gurgaon",
  paragraphs: [
    "Silver Nest Clinic in Sector 49, Gurgaon, offers complete pregnancy and gynecology care under Dr. Shweta Bansal Wazir — from early pregnancy and normal or painless delivery to fertility and general women's health.",
    "Conveniently located near Sohna Road and South City 2, the clinic also provides PCOS treatment, routine gynae consultations and easy online appointment booking, with a personal, trusted approach for every patient.",
  ],
};

export const newsIntro = {
  tag: "Latest News",
  title: "News & Articles",
  text: ["Explore our latest article for expert insights, trusted guidance,", "and valuable tips on women’s health and pregnancy care."],
};

export const news = [
  {
    title: "Can Stress Delay Pregnancy? Expert Fertility Advice for Indian Women | Dr. Shweta Bansal Wazir",
    image: img("uploads/2026/08/Can-Stress-Delay-Pregnancy-Expert-Fertility-Advice-for-Indian-Women-Dr.-Shweta-Bansal-Wazir-370x272.png"),
    day: "07",
    month: "Aug",
    to: "/can-stress-delay-pregnancy-expert-fertility-advice-for-indian-women-dr-shweta-bansal-wazir",
  },
  {
    title: "Ovulation Symptoms Every Woman Should Know",
    image: img("uploads/2026/08/Ovulation-Symptoms-Every-Woman-Should-Know-370x272.png"),
    day: "04",
    month: "Aug",
    to: "/ovulation-symptoms-every-woman-should-know",
  },
  {
    title: "Best Age for Pregnancy: Medical Facts, Common Myths & Fertility Tests Every Couple Should Know",
    image: img("uploads/2026/07/Best-Age-for-Pregnancy-Medical-Facts-Common-Myths-Fertility-Tests-Every-Couple-Should-Know-370x272.png"),
    day: "27",
    month: "Jul",
    to: "/best-age-for-pregnancy-medical-facts-common-myths-fertility-tests-every-couple-should-know",
  },
];

export const stats = [
  { icon: img("uploads/2022/01/fun-1.png"), value: 100000, label: "Happy Patient" },
  { icon: img("uploads/2022/01/fun-2.png"), value: 100000, label: "Patient Treated" },
  { icon: img("uploads/2022/01/calander.png"), value: 20, label: "Years Experience" },
];

export const mapSection = {
  background: img("uploads/2022/02/map-bg.jpg"),
  tag: "Get in touch",
  title: "Visit Our Clinic",
};

export const footerAbout =
  "Silvernest is a women's health clinic in Gurgaon run by Obstetrician & Gynecologist Dr. Shweta Bansal Wazir, trusted for her sincerity, warm bedside manner and clinical expertise.";
