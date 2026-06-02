export const SITE = {
  name: "Maximus Care",
  full: "Maximus Care Physio & Rehab Unit (Pvt) Ltd",
  phone: "077 647 9364",
  phoneIntl: "+94776479364",
  whatsapp: "94776479364",
  hours: "Daily 9:00 AM – 9:00 PM",
  email: "info@maximuscare.lk",
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
    directions: "https://www.google.com/maps/dir/?api=1&destination=Pinwatta+Road+Dehiwala+Sri+Lanka",
  },
  {
    slug: "bandaragama",
    name: "Maximus Care Bandaragama",
    tag: "Branch",
    address: "Mawatha, Atulugama, Bandaragama, Sri Lanka",
    maps: "https://www.google.com/maps?q=Atulugama+Bandaragama+Sri+Lanka&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Atulugama+Bandaragama+Sri+Lanka",
  },
  {
    slug: "beruwala",
    name: "Nexus Physio & Rehab Center",
    tag: "Partner Branch",
    address: "100/4A, Hena Road, Beruwala, Sri Lanka",
    maps: "https://www.google.com/maps?q=Hena+Road+Beruwala+Sri+Lanka&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Hena+Road+Beruwala+Sri+Lanka",
  },
  {
    slug: "kalubowila",
    name: "Maximus Care Neuro Unit",
    tag: "Neuro Specialty",
    address: "Kalubowila, Dehiwala, Sri Lanka",
    maps: "https://www.google.com/maps?q=Kalubowila+Dehiwala+Sri+Lanka&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Kalubowila+Dehiwala+Sri+Lanka",
  },
];

export const SERVICES = [
  ["Physiotherapy", "Hands-on manual therapy and exercise programs that restore movement and relieve pain."],
  ["Neurological Rehabilitation", "Specialised therapy for stroke, brain injury and progressive neurological conditions."],
  ["Stroke Rehabilitation", "Intensive recovery programs to rebuild strength, speech and independence after stroke."],
  ["Orthopedic Rehabilitation", "Recovery from fractures, joint problems and musculoskeletal injuries."],
  ["Sports Injury Rehabilitation", "Return-to-play programs for athletes of every level."],
  ["Post-Surgical Rehabilitation", "Structured recovery after orthopaedic, spinal and joint replacement surgery."],
  ["Pain Management", "Evidence-based treatments for chronic back, neck, joint and nerve pain."],
  ["Pediatric Physiotherapy", "Gentle, child-friendly therapy for developmental and neurological conditions."],
  ["Geriatric Rehabilitation", "Mobility, balance and strength programs for older adults."],
  ["Dry Needling", "Targeted myofascial release for muscle tightness and trigger points."],
  ["Medical Hijama Therapy", "Clinically supervised wet-cupping for pain and circulation."],
  ["Sunnah Hijama Therapy", "Traditional sunnah cupping practised in a hygienic clinical setting."],
  ["Acupuncture", "Fine-needle therapy supporting pain relief and recovery."],
  ["Speech Therapy", "Language, swallowing and communication therapy for neurological patients."],
  ["Home Visit Physiotherapy", "Professional rehabilitation delivered in the comfort of your home."],
  ["Workplace Injury Rehabilitation", "Return-to-work programs for occupational injuries."],
  ["Balance & Fall Prevention", "Strength and stability training to keep seniors safely on their feet."],
  ["Women's Health Physiotherapy", "Pre and postnatal, pelvic floor and women-specific care."],
  ["Aqua Therapy", "Pool-based hydrotherapy for low-impact rehabilitation."],
  ["Inpatient Rehabilitation", "Round-the-clock intensive rehabilitation with daily multidisciplinary care."],
] as const;

export const PROGRAMS = [
  ["Stroke Recovery Program", "Structured neuroplasticity-driven recovery rebuilding strength, speech and mobility."],
  ["Parkinson's Rehabilitation", "Movement, balance and big-amplitude therapy slowing functional decline."],
  ["Neurological Rehabilitation Program", "Tailored therapy for MS, GBS, brain injury and spinal conditions."],
  ["Spinal Cord Injury Rehabilitation", "Comprehensive mobility, transfers and independence training."],
  ["Erb's Palsy Rehabilitation", "Specialised paediatric nerve and shoulder rehabilitation."],
  ["Sports Return-To-Play Program", "Phased rehab returning athletes to peak performance safely."],
  ["Joint Replacement Rehabilitation", "Pre and post-operative programs for hip, knee and shoulder replacements."],
  ["Elderly Mobility Program", "Strength, gait and confidence training for active ageing."],
  ["Chronic Pain Recovery Program", "Multidisciplinary plan combining therapy, education and pain modulation."],
  ["Post-Surgical Recovery Program", "Stage-by-stage recovery after major surgery."],
] as const;

export const WHY = [
  "Experienced Physiotherapy Team",
  "Personalized Rehabilitation Programs",
  "Evidence-Based Treatments",
  "Neurological Rehabilitation Expertise",
  "Stroke Recovery Specialists",
  "Affordable Care Packages",
  "Home Visit Services",
  "Inpatient Rehabilitation Facilities",
  "Multiple Branches Across Sri Lanka",
  "Advanced Rehabilitation Equipment",
  "Long-Term Recovery Focus",
  "Patient-Centered Care",
];

export const TESTIMONIALS = [
  { name: "Nimal Perera", role: "Stroke recovery, 14 months", stars: 5, quote: "After my stroke I could not stand. The Maximus Care team rebuilt my strength step by step. Today I walk to the temple every morning." },
  { name: "Fathima Rizwan", role: "Post-surgical, knee replacement", stars: 5, quote: "Their inpatient program gave me three sessions a day and constant guidance. I was climbing stairs within a month." },
  { name: "Sanjeewa Bandara", role: "Sports injury", stars: 5, quote: "Professional, evidence-based and genuinely caring. They returned me to competitive cricket safely." },
  { name: "Mrs. Silva", role: "Mother of patient with Erb's palsy", stars: 5, quote: "The paediatric team is patient and skilled. We have seen amazing progress in our son's arm movement." },
  { name: "Rohan Jayasinghe", role: "Chronic back pain", stars: 5, quote: "Years of pain managed in weeks. The combination of physio and dry needling changed my life." },
  { name: "Mr. Wickramasinghe", role: "Parkinson's, ongoing care", stars: 5, quote: "The home visit therapists treat my father with respect and skill. We cannot thank them enough." },
];
