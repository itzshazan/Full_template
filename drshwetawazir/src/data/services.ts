import { serviceImages } from "./cards.generated";

/**
 * Service pages. Each one renders with the "service details" layout:
 * hero image → intro → image + checklist → "More information" Q&A → "Some Facts" box → CTA band.
 *
 * `path` is the main URL (the one used in the menu); `aliases` are other URLs from the
 * old site that should show the same service (the /service/... ones use the single-post layout).
 */
export interface ServiceQA {
  q: string;
  a?: string;
  list?: string[];
}

export interface Service {
  path: string;
  aliases: string[];
  title: string;
  summary: string;
  intro: string;
  detail: string;
  qa: ServiceQA[];
  facts: { intro?: string; list: string[]; outro?: string };
  images: string[];
  date: string;
}

export const serviceChecklist = [
  "Comprehensive and multi disciplinary services",
  "Patient-centered and supportive approach",
  "Compliance with general ethics and standards",
  "State-of-the-art technology and personalized care",
];

const welcome = (topic: string) =>
  `At Silvernest, Dr. Shweta Bansal Wazir and her team look after women with ${topic} with careful assessment, clear explanations and a treatment plan built around each patient's health, age and plans for the future.`;

type ServiceInput = Omit<Service, "images" | "detail"> & { imageKey: string; detail?: string; topic: string };

const make = (s: ServiceInput): Service => ({
  ...s,
  detail: s.detail ?? welcome(s.topic),
  images: serviceImages[s.imageKey] ?? [],
});

export const services: Service[] = [
  /* ----------------------------- Obstetrics ----------------------------- */
  make({
    path: "/high-risk-pregnancy",
    aliases: [],
    imageKey: "high-risk-pregnancy",
    title: "High-Risk Pregnancy",
    date: "2023-08-05",
    topic: "high-risk pregnancies",
    summary: "Closer monitoring and specialist care when health conditions or pregnancy complications raise the risk for mother or baby.",
    intro:
      "A pregnancy is described as high-risk when the mother, the baby or both need extra monitoring because of an existing health condition, the mother's age or a complication that develops along the way. With early planning and regular check-ups, most women with a high-risk pregnancy go on to have healthy babies.",
    qa: [
      {
        q: "What can make a pregnancy high-risk?",
        list: [
          "Age under 17 or over 35 at the time of pregnancy",
          "Long-term conditions such as diabetes, high blood pressure, thyroid disease or epilepsy",
          "Problems in a previous pregnancy, such as preterm birth or pre-eclampsia",
          "Carrying twins or more",
          "Smoking, alcohol use or being significantly over- or underweight",
        ],
      },
      {
        q: "How can I keep a high-risk pregnancy as healthy as possible?",
        list: [
          "Book a pre-pregnancy consultation if you have a medical condition",
          "Attend every antenatal appointment and scan",
          "Take prescribed supplements and medicines as advised",
          "Eat well, stay active within safe limits and avoid tobacco and alcohol",
        ],
      },
      {
        q: "Will I need extra tests?",
        a: "Depending on your situation, your doctor may suggest detailed ultrasound scans, cervical length checks, blood pressure and sugar monitoring, fetal growth scans or specific screening and diagnostic tests. Each test is explained beforehand so you can decide with confidence.",
      },
    ],
    facts: {
      intro: "Contact your doctor promptly if you notice:",
      list: [
        "Vaginal bleeding or a gush of fluid",
        "Severe or persistent headaches or blurred vision",
        "Lower abdominal pain or regular tightening",
        "Reduced baby movements",
        "Burning or pain while passing urine",
      ],
      outro: "Early attention to warning signs makes a real difference to outcomes.",
    },
  }),
  make({
    path: "/early-pregnancy",
    aliases: [],
    imageKey: "early-pregnancy",
    title: "Early Pregnancy",
    date: "2023-08-05",
    topic: "early pregnancy concerns",
    summary: "Care and reassurance in the first trimester, from confirming the pregnancy to managing early complications.",
    intro:
      "The first twelve weeks are a time of rapid development for the baby and big changes for the mother. Early pregnancy care confirms the pregnancy is in the right place, dates it accurately and helps you manage symptoms like nausea and tiredness.",
    qa: [
      {
        q: "What problems can happen in early pregnancy?",
        list: ["Bleeding or spotting", "Ectopic pregnancy (outside the womb)", "Miscarriage", "Severe nausea and vomiting (hyperemesis)"],
      },
      {
        q: "Why does early miscarriage happen?",
        a: "Most early miscarriages happen because of a one-off chromosomal problem in the developing pregnancy. They are rarely caused by anything the mother did, such as working, exercising or having sex.",
      },
      {
        q: "What care is available after a miscarriage?",
        a: "Depending on the situation, a miscarriage may be managed by waiting for it to complete naturally, with medicines or with a minor procedure. Emotional support matters just as much, and most women can try again for a pregnancy once they feel ready.",
      },
    ],
    facts: {
      list: ["Start folic acid before conception and continue for the first 12 weeks", "Have an early scan if you have pain or bleeding", "Avoid smoking, alcohol and unprescribed medicines"],
      outro: "Please call us straight away if you have heavy bleeding or one-sided abdominal pain.",
    },
  }),
  make({
    path: "/diet-in-pregnancy",
    aliases: [],
    imageKey: "diet-in-pregnancy",
    title: "Diet In Pregnancy",
    date: "2023-08-05",
    topic: "nutrition questions in pregnancy",
    summary: "Practical nutrition advice to support your baby's growth and keep you healthy through every trimester.",
    intro:
      "Good nutrition supports your baby's growth and your own energy levels. A varied diet with plenty of vegetables, fruit, whole grains, protein and dairy usually provides most of what you need, alongside a few recommended supplements.",
    qa: [
      {
        q: "Why is iron so important in pregnancy?",
        a: "Your blood volume increases a lot during pregnancy, and iron is needed to make extra red blood cells. Low iron leads to anaemia, which causes tiredness and can affect the baby's growth. Green leafy vegetables, legumes, jaggery, dates and iron supplements all help.",
      },
      {
        q: "How can I cope with morning sickness?",
        list: ["Eat small, frequent meals", "Keep plain crackers or dry toast nearby", "Sip fluids through the day", "Avoid strong smells and greasy food", "Tell your doctor if you cannot keep fluids down"],
      },
      {
        q: "Are salads safe in pregnancy?",
        a: "Yes, as long as vegetables are washed thoroughly and freshly prepared. Avoid pre-cut salads that have been left out, and be careful with unpasteurised dairy dressings.",
      },
    ],
    facts: {
      list: ["Take folic acid, iron and calcium as advised", "Drink plenty of water", "Limit caffeine", "Avoid raw or undercooked meat and eggs"],
    },
  }),
  make({
    path: "/normal-delivery",
    aliases: [],
    imageKey: "normal-delivery",
    title: "Normal Delivery",
    date: "2023-08-05",
    topic: "planning a normal delivery",
    summary: "Support for a natural vaginal birth, from antenatal preparation and birth planning through labour and recovery.",
    intro:
      "A normal delivery is the birth of the baby through the vagina, with labour starting and progressing naturally. With good antenatal preparation and support during labour, it is the safest and most common way to give birth for most women.",
    qa: [
      {
        q: "What are the advantages of a normal delivery?",
        list: ["Shorter hospital stay and faster recovery", "Lower risk of infection and surgical complications", "Earlier skin-to-skin contact and breastfeeding", "Fewer complications in future pregnancies"],
      },
      {
        q: "How can I improve my chances of a normal delivery?",
        list: ["Stay active and attend antenatal classes", "Keep weight gain within the recommended range", "Practise breathing and relaxation techniques", "Discuss your birth preferences with your doctor"],
      },
      {
        q: "How do I know labour has started?",
        a: "Signs include regular contractions that grow stronger and closer together, a show (mucus with a little blood), lower back ache, or your waters breaking.",
      },
      {
        q: "Which position should the baby be in?",
        a: "Ideally the baby is head-down and facing your back towards the end of pregnancy, which makes it easiest to move through the birth canal.",
      },
    ],
    facts: {
      list: ["Most first labours last 12 to 18 hours", "Pain relief options, including epidurals, are available", "Walking and changing positions can help labour progress"],
    },
  }),
  make({
    path: "/caesarean-section",
    aliases: [],
    imageKey: "caesarean-section",
    title: "Caesarean section",
    date: "2023-08-05",
    topic: "planned or emergency caesarean births",
    summary: "Safe planned and emergency caesarean deliveries when a vaginal birth is not the best option for mother or baby.",
    intro:
      "A caesarean section (C-section) is an operation to deliver the baby through a cut in the abdomen and womb. It may be planned in advance or done as an emergency when labour does not progress safely.",
    qa: [
      {
        q: "Why might I need a C-section?",
        list: ["The baby is in a breech or transverse position", "Problems with the placenta, such as placenta praevia", "Labour is not progressing or the baby shows signs of distress", "Twins or triplets in certain positions", "Previous caesarean births in some cases"],
      },
      {
        q: "Is a C-section a big operation?",
        a: "Yes. It is a common and generally safe operation, but it is still major abdominal surgery, so recovery takes longer than after a vaginal birth.",
      },
      {
        q: "What are the possible risks?",
        list: ["Infection of the wound or womb", "Heavier bleeding", "Blood clots", "Longer recovery time"],
      },
      {
        q: "How long does recovery take?",
        a: "Most women stay in hospital for two to four days and feel close to normal within about six weeks. Avoid heavy lifting during this time and follow your doctor's advice on wound care.",
      },
    ],
    facts: {
      list: ["Spinal anaesthesia means you are awake to meet your baby", "Early walking helps recovery", "Many women can have a vaginal birth after a caesarean (VBAC)"],
    },
  }),
  make({
    path: "/complexobstetrics-surgeries",
    aliases: [],
    imageKey: "complexobstetrics-surgeries",
    title: "Complex obstetrics surgeries",
    date: "2023-08-05",
    topic: "pregnancies that need specialised surgery",
    summary: "Expert surgical care for difficult deliveries and complications that arise during pregnancy and childbirth.",
    intro:
      "Some pregnancies need surgery beyond a routine caesarean, for example when the placenta is abnormally attached, after several previous operations or when bleeding is heavy after birth. These procedures need experienced surgeons and a well-prepared team.",
    qa: [
      {
        q: "When is complex obstetric surgery needed?",
        list: ["Placenta accreta or placenta praevia", "Multiple previous caesareans with scar tissue", "Severe bleeding after delivery", "Cervical cerclage for a weak cervix", "Fibroids or other conditions complicating delivery"],
      },
      {
        q: "Can these operations be planned in advance?",
        a: "Often, yes. Detailed scans help identify risks early, so the delivery can be scheduled with the right team, blood products and facilities ready.",
      },
      {
        q: "What are the risks?",
        a: "Risks include heavier bleeding, infection and injury to nearby organs. Careful planning and an experienced team keep these risks as low as possible.",
      },
    ],
    facts: {
      list: ["Early diagnosis allows for safer planning", "Delivery in a well-equipped hospital is recommended", "Recovery is supported by a multidisciplinary team"],
    },
  }),
  make({
    path: "/postpartum-issues",
    aliases: [],
    imageKey: "postpartum-issues",
    title: "Postpartum issues",
    date: "2023-08-05",
    topic: "recovery after childbirth",
    summary: "Help with the physical and emotional changes after birth, including the baby blues, postpartum depression and breastfeeding.",
    intro:
      "The weeks after birth bring big physical and emotional changes. Feeling tearful or low in the first few days (the baby blues) is very common, but if low mood lasts beyond two weeks it may be postpartum depression, which is treatable.",
    qa: [
      {
        q: "What can I do to feel better emotionally after birth?",
        list: ["Rest whenever the baby sleeps", "Accept help from family and friends", "Talk openly about how you feel", "Eat regularly and get some gentle exercise", "Seek help early if low mood persists"],
      },
      {
        q: "When should I start breastfeeding?",
        a: "Ideally within the first hour after birth. Early skin-to-skin contact helps the baby latch and starts milk production.",
      },
      {
        q: "What breastfeeding problems are common?",
        list: ["Sore or cracked nipples", "Breast engorgement", "Blocked ducts or mastitis", "Concerns about milk supply"],
      },
    ],
    facts: {
      list: ["Up to 3 in 4 new mothers have the baby blues", "Postpartum depression affects around 1 in 7 mothers", "A six-week postnatal check is recommended"],
      outro: "If you have thoughts of harming yourself or your baby, seek help immediately.",
    },
  }),

  /* ------------------------------ Gynecology ------------------------------ */
  make({
    path: "/male-infertility-best-gynecologist-in-sector-49-gurgaon",
    aliases: ["/male-infertility", "/service/male-infertility"],
    imageKey: "male-infertility-best-gynecologist-in-sector-49-gurgaon",
    title: "Male Infertility",
    date: "2023-08-05",
    topic: "fertility concerns in male partners",
    summary: "Assessment of male fertility as part of a couple's evaluation, with guidance on lifestyle changes and treatment.",
    intro:
      "Male factors contribute to around half of all cases of infertility. Problems with sperm count, movement or shape, as well as hormonal or structural issues, can all make conception harder.",
    qa: [
      { q: "How is male fertility tested?", a: "The main test is a semen analysis, which checks the number, movement and shape of sperm. Blood tests for hormones and sometimes an ultrasound may also be advised." },
      { q: "What if the sperm count is low?", a: "A low count does not always mean conception is impossible. Treating underlying causes, lifestyle changes or assisted reproduction such as IUI or IVF/ICSI can help." },
      { q: "What helps improve male fertility?", list: ["Stopping smoking and limiting alcohol", "Maintaining a healthy weight", "Avoiding excessive heat to the groin", "Treating infections or hormonal problems"] },
    ],
    facts: { list: ["Sperm take about three months to develop", "Lifestyle changes can improve results within months", "Both partners should be evaluated together"] },
  }),
  make({
    path: "/infertility-in-women-fertility-specialist-gurgaon",
    aliases: ["/infertility-in-women", "/service/infertility-in-women"],
    imageKey: "infertility-in-women-fertility-specialist-gurgaon",
    title: "Infertility in Women",
    date: "2023-08-05",
    topic: "difficulty conceiving",
    summary: "Evaluation and treatment for women who have been trying to conceive for a year, or six months if over 35.",
    intro:
      "Infertility means not becoming pregnant after a year of regular unprotected sex, or after six months if you are over 35. Common causes include ovulation problems, blocked tubes, endometriosis and age-related changes in egg quality.",
    qa: [
      { q: "What treatments are available?", list: ["Medicines to help ovulation", "Treatment of conditions such as PCOS, fibroids or endometriosis", "Intrauterine insemination (IUI)", "In vitro fertilisation (IVF)"] },
      { q: "Does treatment always work?", a: "Not every treatment works first time. Success depends on age, the cause of infertility and how long you have been trying, and your doctor will explain realistic chances for each option." },
      { q: "When is IVF recommended?", a: "IVF may be suggested for blocked tubes, severe male factor problems, unexplained infertility or when other treatments have not worked." },
      { q: "How will I know a treatment is working?", a: "Progress is tracked with ultrasound scans, blood tests and ovulation monitoring, and a pregnancy test at the end of each treatment cycle." },
    ],
    facts: { list: ["Fertility declines more quickly after 35", "Both partners should be assessed", "Healthy weight improves fertility outcomes"] },
  }),
  make({
    path: "/contraception-best-pregnancy-care-clinic-in-gurgaon",
    aliases: ["/contraception", "/service/contraception"],
    imageKey: "contraception-best-pregnancy-care-clinic-in-gurgaon",
    title: "Contraception",
    date: "2023-08-05",
    topic: "choosing contraception",
    summary: "Personalised advice on the full range of contraceptive methods, from pills to long-acting options.",
    intro:
      "Contraception lets you choose if and when to have a baby. There are many safe options, and the best one depends on your health, lifestyle and plans for future pregnancies.",
    qa: [
      { q: "What contraceptive methods are available?", list: ["Combined and progestogen-only pills", "Copper IUD (Copper-T) and hormonal IUS", "Injections and implants", "Condoms", "Permanent methods such as tubectomy or vasectomy"] },
      { q: "Why do pills sometimes fail?", a: "Missed pills, vomiting, diarrhoea or some medicines can reduce effectiveness. Long-acting methods avoid the need to remember a daily pill." },
      { q: "What about emergency contraception?", a: "Emergency pills work best when taken as soon as possible after unprotected sex. A copper IUD fitted within five days is the most effective emergency option." },
    ],
    facts: { list: ["IUDs and implants are over 99% effective", "Condoms also protect against STIs", "Contraception can be changed as your needs change"] },
  }),
  make({
    path: "/polycystic-ovary-syndrome-womens-health-clinic-gurgaon",
    aliases: ["/polycystic-ovary-syndrome"],
    imageKey: "polycystic-ovary-syndrome",
    title: "Polycystic Ovary Syndrome (PCOS)",
    date: "2023-08-05",
    topic: "PCOS",
    summary: "Diagnosis and long-term management of PCOS, including cycle control, fertility support and lifestyle guidance.",
    intro:
      "Polycystic ovary syndrome is a common hormonal condition that can cause irregular periods, excess hair growth, acne and difficulty getting pregnant. It is linked with insulin resistance, so lifestyle changes are a key part of treatment.",
    qa: [
      { q: "What are the signs of PCOS?", list: ["Irregular or missed periods", "Excess facial or body hair", "Acne or oily skin", "Weight gain", "Thinning scalp hair"] },
      { q: "Can PCOS affect long-term health?", a: "PCOS increases the risk of type 2 diabetes, high cholesterol, sleep apnoea and thickening of the womb lining if periods are very infrequent. Regular check-ups help reduce these risks." },
      { q: "How is PCOS treated?", a: "Treatment may include healthy eating, regular exercise, weight management, hormonal pills to regulate periods and medicines that improve insulin sensitivity." },
      { q: "Can I get pregnant with PCOS?", a: "Yes. Many women with PCOS conceive naturally or with help from ovulation-inducing medicines. Losing even a small amount of weight can restore ovulation." },
    ],
    facts: { list: ["PCOS affects roughly 1 in 10 women of reproductive age", "A 5–10% weight loss can improve symptoms", "PCOS is manageable with the right care"] },
  }),
  make({
    path: "/pelvic-inflammatory-disease-gynecologist-in-sector-49-gurgaon",
    aliases: ["/pelvic-inflammatory-disease", "/service/pelvic-inflammatory-disease"],
    imageKey: "pelvic-inflammatory-disease-gynecologist-in-sector-49-gurgaon",
    title: "Pelvic inflammatory disease",
    date: "2023-08-05",
    topic: "pelvic infections",
    summary: "Prompt diagnosis and treatment of pelvic infections to protect long-term fertility.",
    intro:
      "Pelvic inflammatory disease (PID) is an infection of the womb, fallopian tubes or ovaries, often caused by sexually transmitted bacteria. Early treatment is important to prevent scarring, chronic pain and fertility problems.",
    qa: [
      { q: "What symptoms can PID cause?", list: ["Lower abdominal or pelvic pain", "Unusual vaginal discharge", "Pain during sex", "Bleeding between periods or after sex", "Fever"] },
      { q: "How is PID diagnosed?", a: "Diagnosis is based on symptoms, a pelvic examination, swab tests and sometimes an ultrasound scan." },
      { q: "Can PID be prevented?", a: "Using condoms, getting tested for STIs and treating infections early all reduce the risk." },
      { q: "Does my partner need treatment?", a: "Yes. Partners should be tested and treated to prevent the infection from coming back." },
    ],
    facts: { list: ["PID is treated with a course of antibiotics", "Complete the full course even if you feel better", "Untreated PID can cause infertility or ectopic pregnancy"] },
  }),
  make({
    path: "/preventive-oncology-best-gynae-doctor-in-gurgaon",
    aliases: ["/preventive-oncology", "/service/preventive-oncology"],
    imageKey: "preventive-oncology-best-gynae-doctor-in-gurgaon",
    title: "Preventive Oncology",
    date: "2023-08-05",
    topic: "cancer screening and prevention",
    summary: "Screening, vaccination and early detection to lower the risk of cervical, breast and other gynaecological cancers.",
    intro:
      "Preventive oncology focuses on finding changes early, before they become cancer, or catching cancer at its most treatable stage. Regular screening and HPV vaccination are among the most effective tools available.",
    qa: [
      { q: "Which cancers are most common in women?", a: "Breast and cervical cancer are the most common cancers among women in India. Both can often be detected early through regular screening." },
      { q: "How is cervical cancer screened for?", a: "With a Pap smear and/or HPV test, which look for abnormal cells or the virus that causes most cervical cancers." },
      { q: "Is screening painful?", a: "Screening tests are usually quick and cause only mild discomfort." },
      { q: "What if my results are abnormal?", a: "An abnormal result rarely means cancer. You may need a repeat test or a colposcopy to look more closely at the cervix." },
    ],
    facts: { list: ["HPV vaccination is most effective before sexual activity begins", "Do monthly breast self-checks", "Report any unusual bleeding promptly"] },
  }),
  make({
    path: "/menopause-menopause-treatment-gurgaon",
    aliases: ["/menopause", "/service/menopause"],
    imageKey: "menopause-menopause-treatment-gurgaon",
    title: "Menopause",
    date: "2023-08-05",
    topic: "menopause",
    summary: "Support through perimenopause and menopause, from symptom relief to bone and heart health.",
    intro:
      "Menopause is when periods stop for good, usually between 45 and 55. Falling hormone levels can cause hot flushes, night sweats, mood changes, vaginal dryness and sleep problems, and they affect long-term bone and heart health.",
    qa: [
      { q: "Is there a test for menopause?", a: "Menopause is usually diagnosed from your symptoms and age. Blood tests can help in younger women or when the picture is unclear." },
      { q: "Can I still get pregnant?", a: "Yes, until you have gone 12 months without a period (or 2 years if under 50), so continue contraception until then." },
      { q: "What can I do to ease symptoms?", list: ["Dress in layers and keep your bedroom cool", "Exercise regularly", "Limit caffeine, alcohol and spicy food", "Ask about hormone therapy or non-hormonal options"] },
      { q: "How can I protect my bones?", a: "Get enough calcium and vitamin D, do weight-bearing exercise and ask about a bone density scan if you have risk factors." },
    ],
    facts: { list: ["The average age of menopause in India is around 46–47", "Symptoms can last several years", "Effective treatments are available"] },
  }),
  make({
    path: "/menstrual-irregularities-best-lady-gynecologist-in-gurgaon",
    aliases: ["/menstrual-irregularities", "/service/menstrual-irregularities"],
    imageKey: "menstrual-irregularities-best-lady-gynecologist-in-gurgaon",
    title: "Menstrual Irregularities",
    date: "2023-08-05",
    topic: "irregular, heavy or painful periods",
    summary: "Diagnosis and treatment for irregular, heavy, painful or missed periods.",
    intro:
      "Periods that are irregular, very heavy, very painful or that stop altogether can be a sign of an underlying problem such as hormonal imbalance, thyroid disease, fibroids or PCOS. Most causes can be treated once identified.",
    qa: [
      { q: "How can I ease period pain at home?", list: ["Apply a hot water bottle to your lower abdomen", "Take pain relief as advised", "Do gentle exercise", "Get enough rest"] },
      { q: "What causes irregular periods?", list: ["PCOS", "Thyroid problems", "Stress or sudden weight change", "Excessive exercise", "Approaching menopause"] },
      { q: "How are heavy periods treated?", a: "Options include medicines to reduce bleeding, hormonal treatments such as the hormonal IUS, and procedures for fibroids or polyps if they are the cause." },
    ],
    facts: { list: ["A normal cycle is 21–35 days", "Soaking a pad every hour is considered heavy bleeding", "Keep a period diary to share with your doctor"] },
  }),
  make({
    path: "/fibroids-best-pregnancy-care-clinic-in-gurgaon",
    aliases: ["/fibroids", "/service/fibroids"],
    imageKey: "fibroids-best-pregnancy-care-clinic-in-gurgaon",
    title: "Fibroids",
    date: "2023-08-05",
    topic: "uterine fibroids",
    summary: "Medical and minimally invasive treatment for fibroids that cause heavy bleeding, pain or fertility problems.",
    intro:
      "Fibroids are non-cancerous growths of muscle in the womb. Many cause no symptoms, but others lead to heavy periods, pelvic pain, pressure on the bladder or difficulty getting pregnant.",
    qa: [
      { q: "How is the right treatment chosen?", a: "It depends on the size, number and position of the fibroids, your symptoms, your age and whether you want to have children in the future." },
      { q: "What treatment options are there?", list: ["Watchful waiting for small fibroids without symptoms", "Medicines to control bleeding and pain", "Hysteroscopic or laparoscopic removal (myomectomy)", "Hysterectomy when family is complete"] },
      { q: "What if I still want children?", a: "Myomectomy removes the fibroids while keeping the womb, and can be done through keyhole surgery in many cases." },
    ],
    facts: { list: ["Fibroids are very common and rarely cancerous", "They often shrink after menopause", "Minimally invasive surgery means faster recovery"] },
  }),
  make({
    path: "/prolapse-of-uterus-womens-health-checkup-gurgaon",
    aliases: ["/prolapse-of-uterus", "/service/prolapse-of-uterus"],
    imageKey: "prolapse-of-uterus-womens-health-checkup-gurgaon",
    title: "Prolapse of uterus",
    date: "2023-08-05",
    topic: "pelvic organ prolapse",
    summary: "Treatment options for a dropped womb or vaginal walls, from pelvic floor exercises to surgery.",
    intro:
      "Uterine prolapse happens when weakened pelvic floor muscles and ligaments allow the womb to drop into the vagina. It is more common after vaginal births and menopause, and can be treated effectively.",
    qa: [
      { q: "What are the symptoms?", list: ["A feeling of heaviness or dragging in the vagina", "A bulge you can feel or see", "Urinary leakage or difficulty emptying the bladder", "Discomfort during sex"] },
      { q: "What causes prolapse?", list: ["Pregnancy and vaginal birth", "Lower oestrogen after menopause", "Chronic coughing or constipation", "Heavy lifting and being overweight"] },
      { q: "How is mild prolapse treated?", a: "Pelvic floor exercises, weight loss, treating constipation and a vaginal pessary can all relieve symptoms." },
      { q: "And more severe prolapse?", a: "Surgery to repair the pelvic floor or, in some cases, a vaginal hysterectomy may be recommended." },
    ],
    facts: { list: ["Pelvic floor exercises help prevent and improve prolapse", "Treatment depends on severity and symptoms", "Prolapse is common and nothing to be embarrassed about"] },
  }),
  make({
    path: "/endometriosis-best-pregnancy-care-clinic-in-gurgaon",
    aliases: ["/endometriosis", "/service/endometriosis-and-hormonal-imbalance"],
    imageKey: "endometriosis-best-pregnancy-care-clinic-in-gurgaon",
    title: "Endometriosis",
    date: "2023-08-05",
    topic: "endometriosis",
    summary: "Diagnosis and treatment of endometriosis to relieve pain and protect fertility.",
    intro:
      "Endometriosis is a condition where tissue similar to the lining of the womb grows outside it, on the ovaries, tubes or pelvic lining. It can cause painful periods, pain during sex and difficulty getting pregnant.",
    qa: [
      { q: "How is endometriosis diagnosed?", a: "Symptoms and an examination give the first clues. Ultrasound or MRI can show cysts, and laparoscopy remains the most accurate way to confirm it." },
      { q: "What medicines are used?", list: ["Pain relief", "Hormonal pills or progestogens", "Hormonal IUS", "Other hormone-suppressing medicines"] },
      { q: "When is surgery needed?", a: "Laparoscopic surgery can remove endometriosis patches and cysts, relieving pain and sometimes improving fertility." },
    ],
    facts: { list: ["Endometriosis affects around 1 in 10 women", "Diagnosis is often delayed for years", "Many women with endometriosis conceive successfully"] },
  }),
  make({
    path: "/teen-times-teenage-treatment-gurgaon",
    aliases: ["/teen-times", "/service/teen-times"],
    imageKey: "teen-times-teenage-treatment-gurgaon",
    title: "Teen Times",
    date: "2023-08-05",
    topic: "adolescent health",
    summary: "Confidential, friendly care for teenage girls on periods, puberty and sexual health.",
    intro:
      "Puberty brings physical and emotional changes that can raise lots of questions. Our teen consultations offer a safe, confidential space to talk about periods, body changes, acne, weight and sexual health.",
    qa: [
      { q: "What should teenagers know about sexual health?", a: "Understanding consent, contraception and the risks of sexually transmitted infections helps young people make safe, informed choices." },
      { q: "Which infections are common in teenagers?", list: ["Chlamydia", "Gonorrhoea", "HPV", "Genital herpes"] },
      { q: "How can STIs be prevented?", list: ["Using condoms every time", "HPV vaccination", "Regular check-ups if sexually active"] },
    ],
    facts: { list: ["Periods can be irregular for the first two years", "HPV vaccination is recommended from age 9", "Consultations are private and judgement-free"] },
  }),
  make({
    path: "/pap-smear-pap-smear-test-gurgaon",
    aliases: ["/pap-smear", "/service/pap-smear"],
    imageKey: "pap-smear-pap-smear-test-gurgaon",
    title: "Pap smear",
    date: "2023-08-05",
    topic: "cervical screening",
    summary: "A quick screening test of the cervix that picks up early cell changes long before they can develop into cancer.",
    intro:
      "A Pap smear collects a small sample of cells from the cervix to check for changes that could develop into cancer if left untreated. It takes only a few minutes and is one of the most effective cancer screening tests available.",
    qa: [
      { q: "When should I start having Pap tests?", a: "Screening usually starts at 21 and is repeated every three years, or every five years with HPV co-testing from age 30." },
      { q: "How should I prepare?", list: ["Book the test when you are not on your period", "Avoid vaginal creams or douching for two days before", "Avoid sex for 24–48 hours before the test"] },
      { q: "Do I need Pap tests after a hysterectomy?", a: "If your cervix was removed for a non-cancerous reason, you may not need further tests. Your doctor will advise based on your history." },
      { q: "Do I still need tests if I've had the HPV vaccine?", a: "Yes. The vaccine does not protect against every type of HPV, so regular screening is still important." },
    ],
    facts: { list: ["The test takes about five minutes", "Most abnormal results are not cancer", "Regular screening greatly reduces cervical cancer risk"] },
  }),
  make({
    path: "/abnormal-pap-test-best-pregnancy-care-clinic-in-gurgaon",
    aliases: ["/abnormal-pap-test", "/service/abnormal-pap-test"],
    imageKey: "abnormal-pap-test-best-pregnancy-care-clinic-in-gurgaon",
    title: "Abnormal Pap test",
    date: "2023-08-05",
    topic: "abnormal cervical screening results",
    summary: "Clear guidance and follow-up care when a Pap test shows abnormal cells.",
    intro:
      "An abnormal Pap test means some cells on the cervix look different from normal. It rarely means cancer; most changes are caused by HPV and many clear up on their own.",
    qa: [
      { q: "Will I need more tests?", a: "You may be offered a repeat Pap test, an HPV test or a colposcopy, depending on the type of change found." },
      { q: "When should my next test be?", a: "This depends on your result. Mild changes may only need a repeat test in a year, while others need follow-up sooner." },
      { q: "What happens at a colposcopy?", a: "The cervix is examined with a magnifying instrument, and a small sample (biopsy) may be taken from any abnormal area." },
    ],
    facts: { list: ["Most abnormal results are minor", "Early treatment of changed cells prevents cancer", "Keep all follow-up appointments"] },
  }),

  /* ------------------------ Minimal invasive surgery ------------------------ */
  make({
    path: "/hysteroscopy",
    aliases: [],
    imageKey: "hysteroscopy",
    title: "Hysteroscopy",
    date: "2023-08-05",
    topic: "conditions inside the womb",
    summary: "A camera examination of the inside of the womb to diagnose and treat polyps, fibroids and other problems.",
    intro:
      "Hysteroscopy uses a thin telescope passed through the vagina and cervix to look inside the womb. It can find the cause of abnormal bleeding or fertility problems, and polyps or small fibroids can often be removed in the same procedure.",
    qa: [
      { q: "Are there alternatives to hysteroscopy?", a: "Ultrasound scans or a sample of the womb lining can give some information, but hysteroscopy lets the doctor see and treat problems directly." },
      { q: "What are signs of infection afterwards?", list: ["Fever", "Worsening abdominal pain", "Foul-smelling discharge", "Heavy bleeding"] },
      { q: "What are the risks?", a: "Hysteroscopy is very safe. Rare risks include infection, bleeding or injury to the womb." },
      { q: "What is recovery like?", a: "Most women go home the same day. Mild cramping and light spotting for a few days are normal." },
    ],
    facts: { list: ["Usually a day-care procedure", "No cuts are needed on the abdomen", "Most women return to normal activity within a day or two"] },
  }),
  make({
    path: "/laparoscopy",
    aliases: [],
    imageKey: "laparoscopy",
    title: "Laparoscopy",
    date: "2023-08-05",
    topic: "keyhole gynaecological surgery",
    summary: "Keyhole surgery for cysts, fibroids, endometriosis and more, with smaller scars and faster recovery.",
    intro:
      "Laparoscopy is keyhole surgery performed through a few small cuts in the abdomen using a camera and fine instruments. It is used to diagnose and treat many gynaecological conditions.",
    qa: [
      { q: "What are the benefits over open surgery?", list: ["Smaller scars", "Less pain after surgery", "Shorter hospital stay", "Faster return to normal life"] },
      { q: "Which operations can be done this way?", list: ["Removal of ovarian cysts", "Treatment of endometriosis", "Myomectomy for fibroids", "Hysterectomy", "Treatment of ectopic pregnancy"] },
      { q: "What can I expect after surgery?", a: "Mild shoulder pain from the gas used, bloating and tiredness are common for a few days and settle quickly." },
      { q: "Are serious complications common?", a: "Serious complications are rare. Your surgeon will discuss the specific risks of your procedure beforehand." },
    ],
    facts: { list: ["Many patients go home within 24 hours", "Return to work is often within 1–2 weeks", "Performed under general anaesthesia"] },
  }),
  make({
    path: "/colposcopy",
    aliases: [],
    imageKey: "colposcopy",
    title: "Colposcopy",
    date: "2023-08-05",
    topic: "follow-up after abnormal screening",
    summary: "A detailed look at the cervix after an abnormal Pap test to find and treat changed cells early.",
    intro:
      "Colposcopy is a close examination of the cervix using a magnifying instrument called a colposcope. It is usually done after an abnormal Pap or HPV test to check for cell changes and decide whether treatment is needed.",
    qa: [
      { q: "How should I prepare for a colposcopy?", list: ["Book it when you are not on your period", "Avoid sex and vaginal products for 24 hours before", "Bring a list of your medicines"] },
      { q: "What else can colposcopy detect?", list: ["Genital warts", "Inflammation of the cervix", "Benign growths such as polyps"] },
      { q: "Are there risks?", a: "Colposcopy is safe. If a biopsy is taken, light bleeding or discharge for a few days is normal." },
      { q: "Can I have it with an IUD fitted?", a: "Yes, a colposcopy can usually be done with an IUD in place." },
    ],
    facts: { list: ["The procedure takes about 15–20 minutes", "No anaesthesia is usually needed", "Results guide whether treatment is required"] },
  }),
];

/** Lookup by any of a service's URLs. */
export const serviceByPath: Record<string, { service: Service; alias: boolean }> = (() => {
  const map: Record<string, { service: Service; alias: boolean }> = {};
  for (const s of services) {
    map[s.path] = { service: s, alias: false };
    for (const a of s.aliases) map[a] = { service: s, alias: true };
  }
  return map;
})();
