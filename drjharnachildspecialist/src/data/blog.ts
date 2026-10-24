export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Category = { slug: string; name: string };

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  category: string; // Category slug
  image: string;
  body: Block[];
};

export const categories: Category[] = [
  { slug: "general", name: "General" },
  { slug: "first-aid-for-kids", name: "First Aid For Kids" },
  { slug: "food", name: "Food" },
  { slug: "fever", name: "Fever" },
  { slug: "sleep-training-guide", name: "Sleep Training Guide" },
  { slug: "sexual-education", name: "Sexual Education" },
  { slug: "baby-massage", name: "Baby Massage" },
  { slug: "cervical-cancer", name: "Cervical Cancer" },
  { slug: "child-rsquo-s-immunity", name: "Child’s Immunity" },
];

const img = (slug: string) => `/images/blog/${slug}.jpg`;

const SEE_DOCTOR =
  "This article is general information for parents and is not a substitute for a consultation. If you are worried about your child, please book an appointment.";

// Newest first, matching the order of the blog listing.
export const posts: Post[] = [
  {
    slug: "monsoon-illnesses-in-children",
    title: "MONSOON ILLNESSES IN CHILDREN",
    date: "2024-07-21",
    category: "general",
    image: img("monsoon-illnesses-in-children"),
    body: [
      { type: "p", text: "Rain brings relief from the heat, along with a sharp rise in childhood infections. Stagnant water, damp surroundings and food or water contamination all give germs and mosquitoes ideal conditions to spread." },
      { type: "h3", text: "Common monsoon illnesses" },
      { type: "ol", items: [
        "Viral fevers, colds and coughs, which spread easily in crowded, humid indoor spaces.",
        "Mosquito-borne illnesses such as dengue, malaria and chikungunya.",
        "Water- and food-borne infections, including diarrhoea, typhoid and hepatitis A.",
        "Skin and fungal infections caused by prolonged dampness.",
      ] },
      { type: "h3", text: "Simple ways to protect your child" },
      { type: "ul", items: [
        "Give boiled or filtered water, and avoid cut fruit and street food.",
        "Empty containers, coolers and pots where water collects; use nets and repellents.",
        "Dress children in light full-sleeved clothing and change damp clothes promptly.",
        "Encourage frequent hand-washing, especially before meals.",
        "Keep vaccinations, including typhoid and hepatitis A, up to date.",
      ] },
      { type: "p", text: "See a doctor if fever lasts more than two days or comes with rash, vomiting, unusual sleepiness, reduced urine or bleeding. " + SEE_DOCTOR },
    ],
  },
  {
    slug: "how-to-increase-your-childs-immunity",
    title: "How to Increase Your Child’s Immunity",
    date: "2023-09-21",
    category: "child-rsquo-s-immunity",
    image: img("how-to-increase-your-childs-immunity"),
    body: [
      { type: "p", text: "There is no single food or tonic that \"boosts\" immunity overnight. A child's defences are built steadily through everyday habits." },
      { type: "ul", items: [
        "Vaccinate on schedule. It is the most reliable protection against serious infections.",
        "Offer a varied plate: fruits, vegetables, whole grains, pulses, dairy, eggs or other proteins.",
        "Protect sleep. Toddlers need 11–14 hours, school children 9–12 hours.",
        "Make time for outdoor play. Exercise and sunlight both support health.",
        "Teach hand-washing and limit sugary drinks and packaged snacks.",
        "Keep children away from cigarette smoke.",
      ] },
      { type: "p", text: "Frequent colds in the first years of nursery or school are normal and usually settle as children get older. Talk to us if infections seem unusually severe, prolonged or are affecting growth. " + SEE_DOCTOR },
    ],
  },
  {
    slug: "hpv-vaccination-and-cervical-cancer",
    title: "HPV VACCINATION AND CERVICAL CANCER",
    date: "2022-10-13",
    category: "cervical-cancer",
    image: img("hpv-vaccination-and-cervical-cancer"),
    body: [
      { type: "p", text: "Human papillomavirus (HPV) is a very common virus. Persistent infection with certain types can, years later, lead to cervical cancer, one of the leading cancers among women in India. Vaccination before exposure offers strong protection." },
      { type: "h3", text: "Who should get it" },
      { type: "p", text: "HPV vaccination works best in pre-teens and early teenagers, ideally starting between 9 and 14 years of age, when fewer doses are needed and the immune response is strongest. Older adolescents and young adults can also benefit." },
      { type: "h3", text: "What parents ask" },
      { type: "ul", items: [
        "The vaccine has an excellent safety record; a sore arm or brief dizziness is the most common side effect.",
        "It does not replace regular cervical screening later in adult life.",
        "The number of doses depends on age at the first dose. We will advise the right schedule for your child.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "baby-massage-tips-and-benefits",
    title: "Baby Massage: Tips And Benefits",
    date: "2021-12-06",
    category: "baby-massage",
    image: img("baby-massage-tips-and-benefits"),
    body: [
      { type: "p", text: "Massage is a lovely way to bond with your baby. It can help them relax and settle to sleep, and it gives parents a calm, close routine." },
      { type: "h3", text: "Tips" },
      { type: "ul", items: [
        "Choose a warm room and a time when baby is awake and content, not straight after a feed.",
        "Use a little plain, unscented oil and test it on a small patch of skin first.",
        "Use slow, gentle strokes and watch your baby's cues; stop if they fuss or turn away.",
        "Avoid the umbilical stump until it has healed, and never put oil in the ears or nose.",
        "Keep it short at first. 10–15 minutes is plenty.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "sexual-education-in-children-at-different-ages",
    title: "Sexual Education In Children At Different Ages",
    date: "2021-08-13",
    category: "sexual-education",
    image: img("sexual-education-in-children-at-different-ages"),
    body: [
      { type: "p", text: "Body-safety and puberty conversations work best as many small, age-appropriate talks rather than one big one. Children who can talk openly with parents are better protected." },
      { type: "h3", text: "Toddlers and preschoolers" },
      { type: "ul", items: [
        "Use the correct names for body parts.",
        "Teach that private parts are private, and the difference between safe and unsafe touch.",
        "Make it clear they can always tell you, without being in trouble.",
      ] },
      { type: "h3", text: "School-age children" },
      { type: "ul", items: [
        "Answer questions simply and honestly as they come up.",
        "Start preparing them for puberty before it begins.",
        "Talk about privacy and safety online.",
      ] },
      { type: "h3", text: "Teenagers" },
      { type: "ul", items: [
        "Discuss consent, respect and healthy relationships.",
        "Share accurate information on body changes, hygiene and health.",
        "Stay approachable. Listening matters as much as talking.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "teething-issues-and-oral-care-in-young-children",
    title: "TEETHING ISSUES AND ORAL CARE IN YOUNG CHILDREN",
    date: "2021-06-21",
    category: "general",
    image: img("teething-issues-and-oral-care-in-young-children"),
    body: [
      { type: "p", text: "Most babies cut their first tooth around six months, though anywhere from four to twelve months is normal. Drooling, chewing, irritability and disturbed sleep are common during teething." },
      { type: "h3", text: "Easing discomfort" },
      { type: "ul", items: [
        "Offer a clean, chilled (not frozen) teething ring.",
        "Gently rub the gums with a clean finger.",
        "Avoid teething gels with numbing agents and amber necklaces, which are not considered safe.",
      ] },
      { type: "p", text: "Teething does not cause high fever or diarrhoea. If these occur, have your child checked." },
      { type: "h3", text: "Caring for new teeth" },
      { type: "ul", items: [
        "Wipe gums and brush the first teeth twice a day with a soft brush and a smear of fluoride toothpaste.",
        "Avoid putting baby to bed with a bottle of milk or juice.",
        "Plan a first dental visit around the first birthday.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "child-rsquo-s-relationship-with-food-ndash-part-iii",
    title: "Child’s Relationship With Food – Part III",
    date: "2021-03-31",
    category: "food",
    image: img("child-rsquo-s-relationship-with-food-ndash-part-iii"),
    body: [
      { type: "p", text: "In this final part of the series we look at mealtime routines that help children become relaxed, independent eaters." },
      { type: "ul", items: [
        "Eat together at the table whenever possible, without screens.",
        "Serve small portions and let children ask for more.",
        "Keep a predictable rhythm of meals and snacks so children come to the table hungry.",
        "Involve children in shopping, washing vegetables and simple cooking.",
        "Praise trying, not finishing, and never use dessert as a reward.",
      ] },
      { type: "p", text: "Patience pays off: positive experiences add up over months and years. " + SEE_DOCTOR },
    ],
  },
  {
    slug: "first-aid-at-home-for-children",
    title: "First Aid At Home For Children",
    date: "2021-03-31",
    category: "first-aid-for-kids",
    image: img("first-aid-at-home-for-children"),
    body: [
      { type: "p", text: "A well-stocked first-aid kit and a few basic skills help you stay calm when minor accidents happen." },
      { type: "h3", text: "Keep at home" },
      { type: "ul", items: [
        "A digital thermometer and your pediatrician's recommended fever medicine.",
        "Assorted bandages, sterile gauze, tape and antiseptic solution.",
        "Oral rehydration salts (ORS), tweezers and scissors.",
        "Emergency numbers written down where everyone can see them.",
      ] },
      { type: "h3", text: "Common situations" },
      { type: "ul", items: [
        "Minor cuts: rinse with clean water, apply gentle pressure, then cover.",
        "Burns: cool under running tap water for 20 minutes. Do not apply ice, toothpaste or butter.",
        "Nosebleeds: sit upright, lean forward and pinch the soft part of the nose for 10 minutes.",
        "Swallowed object, poison or medicine: seek medical help immediately.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "how-to-talk-to-your-children-about-corona-virus",
    title: "How To Talk To Your Children About Corona Virus",
    date: "2021-03-31",
    category: "general",
    image: img("how-to-talk-to-your-children-about-corona-virus"),
    body: [
      { type: "p", text: "Children notice when adults are worried. Honest, calm conversations about illness help them feel safe and in control." },
      { type: "ul", items: [
        "Find out what they already know and gently correct misinformation.",
        "Use simple words suited to their age, and keep answers short.",
        "Focus on what they can do: wash hands, cover coughs, stay home when unwell.",
        "Limit exposure to frightening news and keep routines steady.",
        "Reassure them that most children who catch it recover well, and that doctors are helping.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "ideas-to-entertain-your-little-one-at-home-during-lock-down",
    title: "Ideas To Entertain Your Little One At Home During Lock Down",
    date: "2021-03-31",
    category: "general",
    image: img("ideas-to-entertain-your-little-one-at-home-during-lock-down"),
    body: [
      { type: "p", text: "Long stretches indoors are hard on little ones. A loose daily routine plus a few low-cost activities can keep days happy and screen time in check." },
      { type: "ul", items: [
        "Build a blanket fort or cardboard-box house.",
        "Make play dough, finger paintings or collages from old magazines.",
        "Bake or cook something simple together.",
        "Run a treasure hunt or an indoor obstacle course.",
        "Read aloud daily and let them act out the story.",
        "Dance, stretch or do kids' yoga to burn off energy.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "childs-relationship-with-food-ndash-part-ii",
    title: "Child’s Relationship with Food – Part II",
    date: "2021-03-31",
    category: "food",
    image: img("childs-relationship-with-food-ndash-part-ii"),
    body: [
      { type: "p", text: "In Part II we look at fussy eating, a normal phase for many toddlers and young children." },
      { type: "ul", items: [
        "Children may need to see a new food 10–15 times before accepting it, so keep offering without pressure.",
        "Serve one familiar food alongside a new one.",
        "Avoid bribing, forcing or making separate meals on request.",
        "Limit milk and juice between meals so appetite isn't spoiled.",
        "Trust your child's appetite. Intake often varies from day to day but balances out over a week.",
      ] },
      { type: "p", text: "If your child is losing weight, has very few accepted foods or mealtimes cause great distress, speak to us. " + SEE_DOCTOR },
    ],
  },
  {
    slug: "fever-in-children",
    title: "Fever in Children",
    date: "2021-03-26",
    category: "fever",
    image: img("fever-in-children"),
    body: [
      { type: "p", text: "Fever is the body's natural response to infection and is usually not harmful by itself. How your child looks and behaves matters more than the exact number on the thermometer." },
      { type: "h3", text: "At home" },
      { type: "ul", items: [
        "Offer plenty of fluids and light clothing.",
        "Use fever medicine only as advised by your pediatrician, with the dose based on your child's weight.",
        "Avoid cold sponging or alcohol rubs.",
      ] },
      { type: "h3", text: "Seek medical care promptly if" },
      { type: "ul", items: [
        "Your baby is under three months old with a temperature of 100.4°F (38°C) or more.",
        "Fever lasts more than two to three days.",
        "Your child is unusually drowsy, irritable, breathing fast, refusing fluids or passing little urine.",
        "There is a rash, a seizure, a stiff neck or persistent vomiting.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "sleep-regression-and-sleep-training-ndash-i",
    title: "Sleep Regression And Sleep Training – I",
    date: "2021-03-26",
    category: "sleep-training-guide",
    image: img("sleep-regression-and-sleep-training-ndash-i"),
    body: [
      { type: "p", text: "A baby who was sleeping well can suddenly start waking often. These \"sleep regressions\" commonly appear around 4, 8–10 and 18 months, alongside developmental leaps, teething or changes in routine." },
      { type: "ul", items: [
        "Regressions are usually temporary, lasting a few weeks.",
        "Keep bedtime routines consistent and calm.",
        "Offer comfort, but avoid introducing new sleep habits you don't want to keep.",
        "Make sure daytime naps are adequate. Overtired babies often sleep worse.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "sleep-training-guide",
    title: "Sleep Training Guide",
    date: "2021-03-26",
    category: "sleep-training-guide",
    image: img("sleep-training-guide"),
    body: [
      { type: "p", text: "Sleep training simply means helping your baby learn to fall asleep on their own. Most babies are ready from around six months; there is no single right method." },
      { type: "ol", items: [
        "Set a short, predictable bedtime routine: bath, feed, story, lights off.",
        "Put your baby down drowsy but awake.",
        "Choose an approach that suits your family, whether gradual retreat, timed check-ins or another gentle method, and stick with it for at least a week.",
        "Keep night feeds calm and dim.",
      ] },
      { type: "p", text: "Always place babies on their back to sleep, on a firm, flat surface without pillows or soft toys. " + SEE_DOCTOR },
    ],
  },
  {
    slug: "tips-for-healthy-monsoon",
    title: "Tips For Healthy Monsoon",
    date: "2021-03-26",
    category: "general",
    image: img("tips-for-healthy-monsoon"),
    body: [
      { type: "p", text: "A few everyday precautions go a long way towards keeping children healthy through the rainy season." },
      { type: "ul", items: [
        "Drink safe water and eat freshly cooked, hot meals.",
        "Wash fruit and vegetables thoroughly.",
        "Dry children fully after they get wet, including feet and skin folds.",
        "Use mosquito nets and repellents, and remove standing water around the home.",
        "Keep up with vaccinations and hand hygiene.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "child-rsquo-s-relationship-with-food",
    title: "Child’s Relationship With Food",
    date: "2021-03-26",
    category: "food",
    image: img("child-rsquo-s-relationship-with-food"),
    body: [
      { type: "p", text: "The habits children form around food in their early years tend to stay with them. In this first part we look at sharing responsibility at mealtimes." },
      { type: "ul", items: [
        "Parents decide what, when and where food is served.",
        "Children decide whether to eat and how much.",
        "Offer a wide variety of foods, colours and textures from the start of weaning.",
        "Avoid labelling foods as \"good\" or \"bad\"; focus on balance.",
        "Model the eating you hope to see. Children copy what adults do.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "first-few-weeks-for-new-parents",
    title: "First Few Weeks For New Parents",
    date: "2021-03-26",
    category: "general",
    image: img("first-few-weeks-for-new-parents"),
    body: [
      { type: "p", text: "The first weeks with a newborn are full of joy and exhaustion. Here's what to expect and when to call your pediatrician." },
      { type: "h3", text: "What's normal" },
      { type: "ul", items: [
        "Feeding every 2–3 hours, including at night.",
        "Losing a little weight in the first days, then regaining birth weight by about two weeks.",
        "Mild yellowing of the skin in the first week.",
        "Sneezing, hiccups and noisy breathing during sleep.",
      ] },
      { type: "h3", text: "Call us if your baby" },
      { type: "ul", items: [
        "Has a fever, or feels unusually cold.",
        "Feeds poorly, vomits repeatedly or has fewer wet nappies.",
        "Looks very yellow, especially on the palms and soles, or jaundice spreads after the first week.",
        "Is unusually sleepy, floppy or has trouble breathing.",
      ] },
      { type: "p", text: "Rest when you can, accept help, and look after yourself too. " + SEE_DOCTOR },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  const day = String(d.getUTCDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  return `${day} ${month}, ${d.getUTCFullYear()}`;
}

export function excerpt(post: Post, max = 260) {
  const first = post.body.find((b) => b.type === "p");
  const text = first && first.type === "p" ? first.text : "";
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

/** Archive months, oldest first, matching the original sidebar order. */
export function archiveMonths() {
  const seen = new Map<string, { year: number; month: number }>();
  for (const p of posts) {
    const [y, m] = p.date.split("-").map(Number);
    seen.set(`${y}-${m}`, { year: y, month: m });
  }
  return [...seen.values()].sort((a, b) => a.year - b.year || a.month - b.month);
}

export function monthLabel(year: number, month: number) {
  const d = new Date(Date.UTC(year, month - 1, 1));
  return `${d.toLocaleString("en-US", { month: "short", timeZone: "UTC" })} ${year}`;
}
