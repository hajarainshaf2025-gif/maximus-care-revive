export const SITE = {
  name: "Maximus Care",
  full: "Maximus Care Physio & Rehab Unit (Pvt) Ltd",
  phone: "077 647 9364",
  phoneIntl: "+94776479364",
  whatsapp: "94776479364",
  whatsapp2: "94741041324",
  whatsappDisplay: "077 647 9364",
  whatsapp2Display: "074 104 1324",
  hours: "Open Daily · 9:00 AM – 9:00 PM",
  email: "maximuscare.rehab@gmail.com",
  facebook: "https://facebook.com/maximuscare",
  instagram: "https://instagram.com/maximuscare",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/programs", label: "Rehab Programs" },
  { to: "/inpatient", label: "Inpatient" },
  { to: "/branches", label: "Branches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export const BRANCHES = [
  {
    slug: "dehiwala",
    name: "Maximus Care Dehiwala",
    tag: "Main Branch",
    address: "3/15, Pinwatta Road, Dehiwala, Sri Lanka",
    maps: "https://www.google.com/maps?q=Pinwatta+Road+Dehiwala+Sri+Lanka&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Pinwatta+Road+Dehiwala+Sri+Lanka",
  },
  {
    slug: "bandaragama",
    name: "Maximus Care Bandaragama",
    tag: "Branch",
    address: "Mahawatta, Atulugama, Bandaragama, Sri Lanka",
    maps: "https://www.google.com/maps?q=Mahawatta+Atulugama+Bandaragama+Sri+Lanka&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Mahawatta+Atulugama+Bandaragama+Sri+Lanka",
  },
  {
    slug: "beruwala",
    name: "Nexus Physio & Rehab Center",
    tag: "Branch",
    address: "100/4A, Hena Road, Beruwala, Sri Lanka",
    maps: "https://www.google.com/maps?q=Hena+Road+Beruwala+Sri+Lanka&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Hena+Road+Beruwala+Sri+Lanka",
  },
  {
    slug: "kalubowila",
    name: "Maximus Care Neuro Unit",
    tag: "Neuro Specialty",
    address: "No 97, Woodland Avenue, Anderson Road, Kalubowila, Dehiwala, Sri Lanka",
    maps: "https://www.google.com/maps?q=6.860529,79.881981&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=6.860529,79.881981",
  },
];

export const SERVICES = [
  [
    "Physiotherapy",
    "Hands-on manual therapy and exercise programs that restore movement and relieve pain.",
  ],
  [
    "Neurological Rehabilitation",
    "Specialised therapy for stroke, brain injury and progressive neurological conditions.",
  ],
  [
    "Stroke Rehabilitation",
    "Intensive recovery programs to rebuild strength, speech and independence after stroke.",
  ],
  [
    "Orthopedic Rehabilitation",
    "Recovery from fractures, joint problems and musculoskeletal injuries.",
  ],
  ["Sports Injury Rehabilitation", "Return-to-play programs for athletes of every level."],
  [
    "Post-Surgical Rehabilitation",
    "Structured recovery after orthopaedic, spinal and joint replacement surgery.",
  ],
  ["Pain Management", "Evidence-based treatments for chronic back, neck, joint and nerve pain."],
  [
    "Pediatric Physiotherapy",
    "Gentle, child-friendly therapy for developmental and neurological conditions.",
  ],
  ["Geriatric Rehabilitation", "Mobility, balance and strength programs for older adults."],
  ["Dry Needling", "Targeted myofascial release for muscle tightness and trigger points."],
  ["Medical Hijama Therapy", "Clinically supervised wet-cupping for pain and circulation."],
  ["Sunnah Hijama Therapy", "Traditional sunnah cupping practised in a hygienic clinical setting."],
  ["Acupuncture", "Fine-needle therapy supporting pain relief and recovery."],
  ["Speech Therapy", "Language, swallowing and communication therapy for neurological patients."],
  ["Home Visit Physiotherapy", "Professional physiotherapy delivered in the comfort of your home."],
  ["Workplace Injury Rehabilitation", "Return-to-work programs for occupational injuries."],
  [
    "Balance & Fall Prevention",
    "Strength and stability training to keep seniors safely on their feet.",
  ],
  ["Women's Health Physiotherapy", "Pre and postnatal, pelvic floor and women-specific care."],
  ["Aqua Therapy", "Pool-based hydrotherapy for low-impact rehabilitation."],
  [
    "Inpatient Rehabilitation",
    "Round-the-clock intensive rehabilitation with daily multidisciplinary care.",
  ],
] as const;

export const PROGRAMS = [
  [
    "Stroke Recovery Program",
    "Structured neuroplasticity-driven recovery rebuilding strength, speech and mobility.",
  ],
  [
    "Parkinson's Rehabilitation",
    "Movement, balance and big-amplitude therapy slowing functional decline.",
  ],
  [
    "Neurological Rehabilitation Program",
    "Tailored therapy for MS, GBS, brain injury and spinal conditions.",
  ],
  [
    "Spinal Cord Injury Rehabilitation",
    "Comprehensive mobility, transfers and independence training.",
  ],
  ["Erb's Palsy Rehabilitation", "Specialised paediatric nerve and shoulder rehabilitation."],
  ["Sports Return-To-Play Program", "Phased rehab returning athletes to peak performance safely."],
  [
    "Joint Replacement Rehabilitation",
    "Pre and post-operative programs for hip, knee and shoulder replacements.",
  ],
  ["Elderly Mobility Program", "Strength, gait and confidence training for active ageing."],
  [
    "Chronic Pain Recovery Program",
    "Multidisciplinary plan combining therapy, education and pain modulation.",
  ],
  ["Post-Surgical Recovery Program", "Stage-by-stage recovery after major surgery."],
] as const;

export const WHY = [
  "Experienced Physiotherapy Team",
  "Personalized Physiotherapy Programs",
  "Evidence-Based Treatments",
  "Neurological Rehabilitation Expertise",
  "Stroke Recovery Specialists",
  "Affordable Care Packages",
  "Home Visit Physiotherapy",
  "Inpatient Rehabilitation Facilities",
  "Multiple Branches Across Sri Lanka",
  "Advanced Physiotherapy Equipment",
  "Long-Term Recovery Focus",
  "Patient-Centered Care",
];

export const STATS = [
  ["5+", "Years of Service"],
  ["10+", "Therapists"],
  ["5000+", "Patients Treated"],
  ["4", "Branches Across Sri Lanka"],
  ["10000+", "Treatment Sessions"],
] as const;

export const GOOGLE_REVIEWS = {
  rating: "5.0",
  count: "73+",
};

export const TESTIMONIALS = [
  {
    name: "Mohamed Arkam",
    role: "Family of stroke patient",
    stars: 5,
    quote:
      "My mother, a stroke patient, received dedicated physiotherapy treatment and showed remarkable improvement. The team's care, professionalism and commitment made a significant difference in her recovery.",
  },
  {
    name: "Shifan Riyas",
    role: "Shoulder pain & stiffness",
    stars: 5,
    quote:
      "I experienced shoulder pain and muscle stiffness for nearly a month. After assessment and treatment at Maximus Care, my symptoms improved significantly. The team was honest, professional and focused on the right treatment.",
  },
  {
    name: "Hajara Sabry",
    role: "Shoulder dislocation care",
    stars: 5,
    quote:
      "My friend suffered a shoulder dislocation and received excellent care. The treatment was gentle, professional and highly effective. We are truly grateful for the support provided.",
  },
  {
    name: "Insaf Ismail",
    role: "Neck & back pain",
    stars: 5,
    quote:
      "After physiotherapy and cupping therapy, my neck and upper back pain improved dramatically. Professional therapists, affordable pricing and excellent results.",
  },
  {
    name: "Sheik Aroos",
    role: "Family of patient",
    stars: 5,
    quote:
      "My mother underwent physiotherapy treatment and had a very positive experience. The staff were caring, professional and dedicated throughout her recovery journey.",
  },
  {
    name: "Rizni Reza",
    role: "Physiotherapy patient",
    stars: 5,
    quote:
      "The physiotherapists carefully assessed my condition, explained the treatment plan and supported my recovery every step of the way. Excellent service and patient care.",
  },
  {
    name: "Jannathul Firdhousiya Aroos",
    role: "Knee pain & swelling",
    stars: 5,
    quote:
      "I visited Maximus Care with severe knee pain and swelling. The team was extremely supportive and professional, and my condition improved significantly.",
  },
  {
    name: "Mambo Rami Travel Blog",
    role: "Back pain recovery",
    stars: 5,
    quote:
      "I had severe back pain and received excellent physiotherapy treatment. The therapists were friendly, professional and guided me throughout the recovery process.",
  },
  {
    name: "MN Gmail",
    role: "Inpatient rehabilitation",
    stars: 5,
    quote:
      "One of the best physiotherapy centres in the Colombo region. Excellent physiotherapists and inpatient rehabilitation facilities.",
  },
  {
    name: "Feizia",
    role: "Post-surgical hand therapy",
    stars: 5,
    quote:
      "Following hand surgery, physiotherapy helped improve my hand stability and function. The therapists were patient, knowledgeable and professional.",
  },
];
