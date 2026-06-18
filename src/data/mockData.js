// Mock data for Vindhya Eye Care Hospital
import cardiacCampImg from '../assets/image_9e2966.jpeg';
import equipment1 from '../assets/equipment1.jpg';
import operation from '../assets/operation.jpg';
import emergency from '../assets/emergency.jpg';
import operation3 from '../assets/operation3.jpg';
import advancedtech from '../assets/advancedtech.jpg';
import equipment3 from '../assets/equipment3.jpg';
import patientbed1 from '../assets/patientbed1.jpg';
import patientbed2 from '../assets/patientbed2.jpg';
import patientbed5 from '../assets/patientbed5.jpg';
import patientbed8 from '../assets/patientbed8.jpg';
import outdoor1 from '../assets/outdoor1.jpg';
import outdoorpatientblock from '../assets/outdoorpatientblock.jpg';
import reception4 from '../assets/reception4.jpg';
import reception7 from '../assets/reception7.jpg';
import waitinghall2 from '../assets/waitinghall2.jpg';
import eyeglasses1 from '../assets/eyeglasses1.jpg';
import eyeglasses2 from '../assets/eyeglasses2.jpg';
import glaucoma from '../assets/glaucoma.png';
import diabetic from '../assets/diabetic.png';
import cataract from '../assets/cataract.png';
import gynecology from '../assets/gynecology.png';
import lasik from '../assets/lasik.png';
import pediatric from '../assets/pediatric.png';
import orthopedic from '../assets/orthopedic.png';
import NavneethServey from '../assets/NavneethServey.jpg';
import TejeswiniNese from '../assets/TejeswiniNese.jpg';
import RahulKuraganti from '../assets/RahulKuraganti.jpg';
import General from '../assets/General.jpg';
import retina from '../assets/retina.png';
import cornea from '../assets/cornea.png';
import event2 from '../assets/event2.jpeg';

export const DEPARTMENTS = [
  {
    id: "general-medicine",
    name: "General Medicine & Triage Desk",
    icon: "FaUserMd",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600",
    description: "Not sure which doctor to see? Book an initial evaluation with our general medicine desk for proper diagnostic routing.",
    detailedDescription: "The General Medicine and Primary Consultation unit acts as the primary health evaluation layer for Vindhya Health Care. If you are uncertain about the root cause of your symptoms, our general practitioners will run baseline checks, analyze vitals, provide primary diagnoses, and route you directly to the correct specialized expert.",
    services: [
      "Primary Clinical Consultations & Baseline Vitals Audit",
      "Symptom Evaluation and Multi-Specialty Department Routing",
      "Routine Health Screenings and Diagnostic Lab Order Setup",
      "Chronic Health Condition Monitoring (Hypertension, Blood Sugar Base)",
      "General Wellness Consultations & Preventive Healthcare Guidelines"
    ]
  },
  {
    id: "gynecology",
    name: "Gynecology & Fertility",
    icon: "FaVenus",
    image: gynecology,
    description: "Comprehensive women's healthcare focusing on high-risk obstetrics, laparoscopic surgeries, and reproductive fertility solution pathways.",
    detailedDescription: "The Gynecology Department at Vindhya Health Care delivers compassionate, end-to-end care for women across all stages of life. From early prenatal diagnostics and high-risk pregnancy management to modern minimally invasive laparoscopic procedures and comprehensive fertility evaluations, our specialists combine clinical excellence with state-of-the-art monitoring technologies.",
    services: [
      "Comprehensive High-Risk Obstetric Care and Personalized Delivery Mapping",
      "Advanced Fertility Evaluations and Reproductive Endocrinology Pathways",
      "Minimally Invasive Gynecological Laparoscopic & Hysteroscopic Surgeries",
      "PCOS, Endometriosis, and Menopause Clinical Management Frameworks",
      "Pre-conceptional Counseling, Genetic Screening, and Antenatal Care Grids",
      "Preventive Cancer Screenings including Pap Smears and HPV Colposcopy"
    ]
  },
  {
    id: "orthopedics-rheumatology",
    name: "Orthopedic Surgery & Rheumatology",
    icon: "FaBone",
    image: orthopedic,
    description: "Advanced joint replacements, minimally invasive fracture reconstructions, and clinical management for chronic autoimmune rheumatic conditions.",
    detailedDescription: "Our Orthopedics and Rheumatology Division offers international-standard surgical and therapeutic solutions for musculoskeletal and chronic joint conditions. Specializing in advanced joint reconstructions (arthroplasty), trauma care, and complex clinical rheumatology workflows, the department provides comprehensive recovery models for arthritis, sports injuries, and degenerative bone health issues.",
    services: [
      "Total and Partial Joint Replacements (Knee, Hip, and Shoulder Arthroplasty)",
      "Comprehensive Rheumatology Screening Panels for Autoimmune Disorders",
      "Minimally Invasive Arthroscopic Surgeries for Sports and Ligament Tears",
      "Complex Fracture Management, Trauma Reconstruction, and Bone Grafting",
      "Intra-articular PRP and Viscosupplementation Injections for Osteoarthritis",
      "Advanced Pediatric Orthopedics and Congenital Bone Alignment Corrections"
    ]
  },
  {
    id: "cataract",
    name: "Cataract Services",
    icon: "FaEye",
    image: cataract,
    description: "Advanced clear vision restoration using AI-assisted planning and navigation-guided microsurgeries.",
    detailedDescription: "The Cataract Department at Vindhya Eye Care handles advanced clear lens restorations utilizing stitch-less micro-incision cataract surgery (MICS). Equipped with real-time digital overlays and high-resolution operating microscopes, our specialists customize premium monofocal, multifocal, and toric intraocular lens (IOL) implantations to restore sharp, crystal-clear vision.",
    services: [
      "Micro-Incision Cataract Surgery (MICS) with Phacoemulsification",
      "AI-driven Premium Intraocular Lens (IOL) Selection & Mapping",
      "Navigation-Guided Toric and Multifocal Lens Alignments",
      "Laser-Assisted Capsulotomy for Secondary Cataracts",
      "Pre-operative Corneal Endothelial Cell Density Profiling",
      "Complex Cataract Management with Capsular Tension Rings"
    ]
  },
  {
    id: "retina",
    name: "Retina & Vitreous Care",
    icon: "FaProcedures",
    image: retina,
    description: "Comprehensive medical and surgical interventions for complex posterior segment disorders.",
    detailedDescription: "Our Retina and Vitreous Center specializes in the diagnostic screening and surgical repair of delicate posterior eye complications. Utilizing high-speed Optical Coherence Tomography (OCT) systems and micro-incision vitrectomy instruments, our vitreoretinal surgeons effectively manage diabetic retinopathy, age-related macular degeneration (ARMD), retinal detachments, and severe vascular blockages.",
    services: [
      "Micro-Incision Vitrectomy Surgery (MIVS) for Retinal Tears",
      "Intraocular Anti-VEGF Intravitreal Injection Pathways",
      "High-Resolution Optical Coherence Tomography (OCT) Grids",
      "Digital Fundus Fluorescein Angiography (FFA) Retinal Mapping",
      "Targeted Argon Laser Photocoagulation for Diabetic Retinopathy",
      "Management of Retinal Vein Occlusions and Macular Edema"
    ]
  },
  {
    id: "lasik-refractive",
    name: "LASIK & Refractive Studio",
    icon: "FaGlasses",
    image: lasik,
    description: "Blade-free laser vision correction and implantable contact lenses designed for spectacle-free living.",
    detailedDescription: "Eliminate dependency on glasses and standard contact lenses safely. Our Refractive Studio features advanced wavefront-guided laser systems that precisely map corneal irregularities. We provide advanced touchless laser variations (SMILE/Contoura Vision) and premium Implantable Collamer Lenses (ICL) for patients with thin corneas or high prescriptions.",
    services: [
      "Blade-Free, Customized Wavefront LASIK Vision Correction",
      "Implantable Collamer Lens (ICL) Sizing & Implantation",
      "Topography-Guided Laser Ablation (Contoura Vision Tracking)",
      "Photorefractive Keratectomy (PRK) for Customized Corneal Thickness",
      "Comprehensive Pre-LASIK Corneal Pachymetry Profiling",
      "Phakic Intraocular Lens Options for High Myopia Balance"
    ]
  },
  {
    id: "glaucoma",
    name: "Glaucoma Management",
    icon: "FaEyeSlash",
    image: glaucoma,
    description: "Early intraocular pressure screening and progressive management to protect optic nerve health.",
    detailedDescription: "Often labeled as the silent thief of sight, glaucoma requires early tracking. This department relies on highly automated visual field analyzers, precise tonometry, and laser diagnostics to arrest disease progression, regulate fluid pressure imbalances, and preserve optimal peripheral visual fields.",
    services: [
      "Automated Visual Field Perimetry (Humphrey Field Analyzer)",
      "Optical Coherence Tomography for Optic Nerve Head Profiling",
      "Selective Laser Trabeculoplasty (SLT) for Pressure Control",
      "Advanced Filtering Surgeries (Trabeculectomy with Ocular Implants)",
      "Pachymetry Correlated Applanation Tonometry Tracks",
      "Gonioscopy for Irido-Corneal Angle Structural Metrics"
    ]
  },
  {
    id: "pediatric-squint",
    name: "Pediatric & Squint Division",
    icon: "FaChild",
    image: pediatric,
    description: "Dedicated clinical checkups and muscle balance corrections for lazy eyes and congenital anomalies in children.",
    detailedDescription: "Our Pediatric Ophthalmology unit provides customized, stress-free clinical screening for infants and children. We focus heavily on resolving refractive variances early, treating lazy eyes (amblyopia), and performing precise muscle adjustment surgeries to resolve squint alignments (strabismus) to secure proper visual development.",
    services: [
      "Amblyopia (Lazy Eye) Occlusion Therapy and Synchronization Training",
      "Surgical Adjustments for Squint and Strabismus Realignments",
      "Pediatric Cycloplegic Refraction & Binocular Vision Assays",
      "Congenital Cataract and Glaucoma Pediatric Surgeries",
      "Retinopathy of Prematurity (ROP) Critical Screenings",
      "Pediatric Low Vision Aids and Adaptation Counseling"
    ]
  },
  {
    id: "cornea-surface",
    name: "Cornea & Ocular Surface Center",
    icon: "FaStethoscope",
    image: cornea,
    description: "Expert corneal transplantation and therapeutic treatments for severe ocular surface diseases.",
    detailedDescription: "The Cornea and Ocular Surface division offers top-tier surgical treatments for corneal dystrophies, severe scars, keratoconus, and traumatic eye burns. We feature modern preservation storage parameters and specialize in partial-thickness corneal tissue grafts to minimize rejection profiles.",
    services: [
      "Full & Partial Thickness Corneal Transplantation (Keratoplasty)",
      "Corneal Collagen Cross-Linking (C3R / CXL) for Keratoconus",
      "Amniotic Membrane Grafting for Ocular Surface Chemical Burns",
      "Severe Dry Eye Diagnostic Panels & Meibomian Gland Expression",
      "Pterygium Excision Surgery with Sutureless Autografting",
      "Therapeutic Contact Lens Fittings for Persistent Epithelial Defects"
    ]
  },
  {
    id: "ocular-trauma",
    name: "Ocular Trauma & Emergency",
    icon: "FaAmbulance",
    image: emergency,
    description: "Dedicated emergency unit for accidental eye trauma, chemical burns, and foreign body removals.",
    detailedDescription: "The Ocular Emergency and Trauma Wing is a rapid-response unit designed to save sight during critical emergencies. Manned by dedicated on-call trauma ophthalmologists, the center handles open-globe injuries, accidental perforations, corneal foreign body extractions, and acute micro-surgical repairs instantly.",
    services: [
      "Reconstruction Care for Open-Globe and Perforating Injuries",
      "Emergency Ocular Surface Irrigation Protocols for Chemical Burns",
      "Micro-surgical Repair of Eyelid Lacerations and Canalicular Tears",
      "Precision Surgical Extraction of Deep Intraocular Foreign Bodies",
      "Fast-Track Management for Acute Angle-Closure Glaucoma Crises",
      "Emergency Repair of Traumatic Iris and Crystalline Lens Dislocations"
    ]
  },
  {
    id: "diagnostics-opticals",
    name: "Specialty Diagnostics Studio",
    icon: "FaMicroscope",
    image: advancedtech,
    description: "State-of-the-art diagnostic imaging, digital visual fields mapping, and custom lens dispensing setups.",
    detailedDescription: "The Specialty Diagnostics Department utilizes ultra-modern imaging modalities to support our clinical teams with unmatched analytical clarity. From mapping corneal curvature maps via automated systems to computing optical coherence structures, we ensure precise baseline matrices to formulate accurate ocular treatment plans.",
    services: [
      "High-Definition 3D Optical Coherence Tomography (OCT-Angiography)",
      "Automated Corneal Topography and Wavefront Aberrometry Grids",
      "Digital Fundus Autofluorescence and Slit-Lamp Photography",
      "Specular Microscopy and Precision Ultrasound A-Scan/B-Scan Biometry",
      "Computerized Vision Studio Dispensing and Pupil Distance Alignment",
      "Contact Lens Custom Sizing Matrices for Irregular Corneas"
    ]
  }
];

export const DOCTORS = [
  {
    "id": "dr-navneeth-servey",
    "name": "Dr. Navneeth Servey (Managing Director)",
    "photo": NavneethServey,
    "qualification": "M.B.B.S (Osm), M.S. Ophthal (GMC, Sarojini Devi Eye Hospital), Fellow in Phaco Surgery (Aravind Eye Hospital), Fellow in Refractive & Lasik Surgeries",
    "departmentId": "ophthalmology",
    "departmentName": "Ophthalmology & Laser Eye Surgery",
    "specialization": "Consultant Ophthalmic Surgeon, Phaco & Refractive Specialist",
    "experience": "12+ Years",
    "timings": "Mon - Sat: 10:00 AM - 02:00 PM, 05:00 PM - 08:00 PM",
    "bio": "Dr. Navneeth Servey is a highly skilled Consultant Ophthalmic Surgeon specializing in advanced Phacoemulsification, Refractive, and Lasik surgeries. With extensive training from premier institutes like Sarojini Devi Eye Hospital and Aravind Eye Hospital, he delivers precise vision correction and advanced eye care.",
    "attachments": [
      "Fellow in Phaco Surgery - Aravind Eye Hospital, Coimbatore",
      "Fellow in Refractive & Lasik Surgeries - New Vision Laser Centre, Gujrat",
      "Former Senior Surgeon & Faculty at E.S.I.C. MCH., Sanatnagar"
    ]
  },
  {
    "id": "dr-tejeswini-nese",
    "name": "Dr. Tejeswini Nese",
    "photo": TejeswiniNese,
    "qualification": "M.B.B.S (Osm), M.S. OBG (Gandhi)",
    "departmentId": "gynecology",
    "departmentName": "Gynecology & Fertility",
    "specialization": "Gynaecologist & Fertility Specialist",
    "experience": "10+ Years",
    "timings": "Mon - Sat: 11:00 AM - 03:00 PM, 06:00 PM - 08:30 PM",
    "bio": "Dr. Tejeswini Nese is a dedicated Gynaecologist and Fertility Specialist with extensive postgraduate training from the prestigious Gandhi Medical College. She specializes in high-risk pregnancies, reproductive health issues, and comprehensive infertility evaluations.",
    "attachments": [
      "Alumnus of Osmania Medical College and Gandhi Medical College",
      "Expertise in High-Risk Obstetrics and Laparoscopic Gynecology",
      "Dedicated advocate for comprehensive women's reproductive health and wellness"
    ]
  },
  {
    "id": "dr-rahul-kuraganti",
    "name": "Dr. Rahul Kuraganti",
    "photo": RahulKuraganti,
    "qualification": "M.B.B.S (Osm), M.S. Ortho (Osm), Fellow in Arthroplasty, Fellow Orthopaediae (Germany), PGP Rheumatology (Johns Hopkins, USA)",
    "departmentId": "orthopedics",
    "departmentName": "Orthopedic Surgery & Rheumatology",
    "specialization": "Consultant Orthopaedic Surgeon & Rheumatology Specialist",
    "experience": "14+ Years",
    "timings": "Mon - Sat: 09:30 AM - 01:30 PM, 05:30 PM - 08:00 PM",
    "bio": "Dr. Rahul Kuraganti is a globally trained Consultant Orthopaedic Surgeon specializing in joint replacements, arthroplasty, and clinical rheumatology. His international training in Germany and clinical credentials from Johns Hopkins university allow him to handle complex bone, joint, and chronic rheumatic disorders effectively.",
    "attachments": [
      "Fellow Orthopaediae - Bruder Krankenhaus, Germany",
      "Post Graduate Program in Rheumatology - Johns Hopkins University, USA",
      "Specialist in Advanced Arthroplasty and Minimally Invasive Joint Replacements"
    ]
  },
  {
    id: "dr-general-triage",
    name: "General Medicine Desk",
    photo: General,
    qualification: "M.B.B.S / Consultant Physicians",
    departmentId: "general-medicine",
    departmentName: "General Medicine & Triage Desk",
    specialization: "Primary Healthcare & Specialist Allocation Specialist",
    experience: "10+ Years",
    timings: "Mon - Sat: 09:00 AM - 08:00 PM",
    bio: "Our General Medicine Desk is staffed by experienced practitioners dedicated to helping patients who are uncertain about their clinical symptoms. We check your health baseline and connect you directly with the exact gynaecology, orthopaedic, or eye surgeon you require.",
    attachments: [
      "Comprehensive Primary Physical Assessment Models",
      "Fast-Track Referral Channels into Speciality Clinical Units",
      "Dedicated to smooth, stress-free care navigation for new patients"
    ]
  },
];

export const TREATMENTS_DATA = [
  {
    id: "basic-eye-screen",
    title: "Primary Vision Review",
    price: "₹499",
    tagline: "Essential tracking for baseline refraction metric safety",
    description: "An entry-level evaluation designed for routine eye check-ups, power adjustments, and monitoring structural eye alignment thresholds.",
    benefits: ["Computerized Autorefraction Test", "Subjective Visual Acuity Testing", "Slit-Lamp Anterior Segment Check", "Intraocular Pressure (NCT) Screening", "Color Vision Base Assessment"],
    testsCount: 5,
    frequency: "Recommended once a year for all screen users"
  },
  {
    id: "diabetic-eye-track",
    title: "Retina & Diabetic Eye Care",
    price: "₹1,999",
    tagline: "Comprehensive checkup tailored for diabetic patients",
    description: "A comprehensive retinal panel addressing diabetes-related vascular changes, micro-aneurysms, and macular consistency.",
    benefits: ["All Primary Vision tests", "Pharmacological Pupil Dilation", "Digital Indirect Ophthalmoscopy", "Optical Coherence Tomography (OCT Scan)", "Fundus Photography Imaging", "Macular Thickness Grid Mapping"],
    testsCount: 8,
    frequency: "Highly critical every 6-12 months for diabetic individuals"
  },
  {
    id: "glaucoma-screening",
    title: "Glaucoma Evaluation Pack",
    price: "₹2,499",
    tagline: "Advanced profiling for progressive nerve pressure tracking",
    description: "A targeted preventative package focused on measuring fluid circulation channels and tracking optic nerve health dimensions.",
    benefits: ["Applanation Tonometry Pressure Check", "Automated Visual Field Perimetry", "Optic Nerve Head OCT Scan", "Central Corneal Pachymetry Test", "Gonioscopy Angle Evaluation", "Detailed Ophthalmologist Consultation"],
    testsCount: 7,
    frequency: "Recommended annually for individuals over 40 or with family history"
  },
  {
    id: "pre-lasik-assessment",
    title: "Pre-LASIK Fitness Profile",
    price: "₹2,999",
    tagline: "Advanced mapping for spectacle-free laser eligibility",
    description: "A highly specialized analytical package computed to map absolute corneal structural thickness rules prior to laser vision correction.",
    benefits: ["3D Corneal Topography Mapping", "Ultrasound Pachymetry (Thickness Check)", "Dry Eye Tear Film Breakdown Assay", "Wavefront Aberrometry Distortion Grid", "Dilated Fundus Peripheral Review", "Refractive Surgeon Assessment Consultation"],
    testsCount: 9,
    frequency: "Prerequisite mapping prior to booking LASIK or ICL surgery"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Arun Venkat",
    age: 54,
    rating: 5,
    storyTitle: "Pristine Sight Restored Instantly",
    text: "I was diagnosed with an advanced nuclear cataract that severely limited my night driving. Dr. Rajeshwari Nair performed micro-incision phaco surgery and implanted a multifocal lens. The structural speed, lack of pain, and crystal-clear outcomes are truly life-changing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    videoUrl: ""
  },
  {
    id: 2,
    name: "Dr. Shruti Iyer",
    age: 28,
    rating: 5,
    storyTitle: "Glasses-Free Life Post LASIK",
    text: "Being a medical professional, wearing thick prescription lenses inside sterile settings was tedious. The Pre-LASIK data profiling at Vindhya Eye Care was exceptionally thorough, and the blade-free laser modification by Dr. Vikram Kiran gave me perfect 6/6 vision within 24 hours.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    videoUrl: ""
  },
  {
    id: 3,
    name: "Ramanathan K.",
    age: 67,
    rating: 5,
    storyTitle: "Saved My Sight From Retinal Tear",
    text: "I experienced sudden floaters and flashes of light while traveling. I rushed to Vindhya's emergency trauma room where Dr. Anand Vardhan diagnosed a retinal tear. Immediate barrier laser photocoagulation saved my vision. Exceptional clinical response time!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    videoUrl: ""
  }
];

export const BLOG_POSTS = [
  {
    id: "diabetic-retinopathy-guide",
    title: "Preserving Vision with Diabetes: Retinal Screening Updates",
    category: "Medical Awareness",
    author: "Dr. Navneeth Servey",
    date: "May 24, 2026",
    image: diabetic,
    excerpt: "Understand how blood sugar spikes impact weak retinal capillaries and learn why routine dilated fundus tracking arrests progressive vision damage.",
    content: `The primary clinical challenge with diabetic retinopathy is its asymptomatic nature during early stages. A patient can comfortably maintain normal vision while micro-aneurysms, capillary blockages, and retinal ischemia actively accumulate. Waiting for noticeable symptoms—such as floating dark spots, blurred central text, or sudden vision fluctuations—frequently means catching the pathology only after significant structural damage has established itself.

    Loss of Pericyte Support: High ambient sugar leads to the selective loss of pericytes—the structural guard cells that wrap around and stabilize microscopic blood vessels.

    Micro-Aneurysm Formation: Deprived of cell support, capillary walls thin and balloon outward into tiny, fragile pouches.

    Capillary Occlusion and Ischemia: As these weak pouches rupture or clot, the surrounding capillary networks begin to shut down entirely. This blocks vital blood flow, starving sections of the retina of oxygen and nutrients—a silent state known as retinal ischemia.

    The Angiogenic Switch (VEGF Overdrive): In a desperate bid to survive the suffocating lack of oxygen, the starved retinal tissue releases a chemical distress signal called Vascular Endothelial Growth Factor (VEGF). VEGF's job is to stimulate new blood vessel growth to restore oxygen flow, but in the diabetic eye, this mechanism backfires.

    Neovascularization and Catastrophic Failure: Induced by VEGF, a wave of abnormal, highly fragile new blood vessels begins to sprout across the surface of the retina. Lacking tight cellular junctions, these new sprouts leak fluid and blood constantly, leading to vitreous hemorrhages (bleeding into the eye's gel) or tractional retinal detachment, where scar tissue physically pulls the retina away from the back of the eye.

    Clinical Takeaway: Because the macular zone—responsible for sharp, central vision—can remain untouched until the late stages of this cascade, annual dilated fundus examinations remain the only reliable clinical window to catch and arrest diabetic retinopathy before irreversible structural damage occurs.`
  },
  {
    id: "glaucoma-silent-thief",
    title: "Understanding Glaucoma: Tracking Pressure Imbalances Proactively",
    category: "Health Tips",
    author: "Dr. Smriti Saxena",
    date: "June 02, 2026",
    image: glaucoma,
    excerpt: "High intraocular pressure can slowly restrict optic nerve fibres. Learn to read tracking indicators before peripheral visual activity drops.",
    content: `Glaucoma is often called the silent thief of sight because central vision remains entirely intact while peripheral field limits are slowly, unnoticeably compromised. The pathology centers around a structural pressure mismatch within the eye's anterior chamber that ultimately starves and destroys the optic nerve. 

    The Mechanics of Fluid Dynamics: The eye continuously produces a clear fluid called aqueous humor to nourish its front structures. In a healthy eye, this fluid drains out at an equal rate through a microscopic meshwork (the trabecular meshwork) located at the angle where the iris and cornea meet.

    The Drainage Blockage: In open-angle glaucoma, this drainage system becomes microscopicly clogged over time. While fluid production remains steady, the exit path is restricted, causing fluid to back up. This fluid accumulation drives up the Intraocular Pressure (IOP).

    Optic Nerve Compression: The elevated IOP creates mechanical stress and restricts micro-capillary blood flow at the back of the eye, specifically hitting the optic nerve head (optic disc). This chronic pressure slowly suffocates and kills individual nerve fibers.

    Periphery-First Vision Loss: Because the nerve fibers responsible for side vision are located on the outer bundles of the optic nerve, peripheral vision is always the first to go. A patient can comfortably read the smallest line on an eye chart while losing chunks of their side vision without realizing it.

    Clinical Intervention: Dr. Smriti Saxena emphasizes that relying on 'blurry vision' as a warning sign is a dangerous strategy. Early detection requires regular automated visual perimetry (visual field testing) to map out early blind spots, alongside advanced Selective Laser Trabeculoplasty (SLT) or pressure-lowering drops to open drainage pathways and manage ocular pressures safely before irreversible optic disc modifications settle.`
  }
];

export const GALLERY_ITEMS = [
  { id: 1, category: "infrastructure", title: "Vindhya Eye Care Outdoor View", image: outdoor1 },
  { id: 2, category: "infrastructure", title: "In Patient and OT Block", image: outdoorpatientblock },
  { id: 3, category: "equipment", title: "Computerized Refraction Suite", image: equipment1 },
  { id: 4, category: "operation", title: "Precision Microsurgery Operating Flow", image: operation },
  { id: 5, category: "operation", title: "Emergency Trauma Micro-repair", image: emergency },
  { id: 6, category: "operation", title: "Sterile Laser Ablation Suite", image: operation3 },
  { id: 7, category: "infrastructure", title: "Specialty Diagnostic Center", image: advancedtech },
  /* { id: 8, category: "events", title: "Free Blindness Prevention Mobile Camp", image: cardiacCampImg }, */
  { id: 9, category: "infrastructure", title: "Optech Motorized Ophthalmic Refraction Unit", image: equipment3 },
  { id: 10, category: "infrastructure", title: "Patient Recovery & Observation Beds", image: patientbed1 },
  { id: 11, category: "infrastructure", title: "Post-Operative Care & Recovery Area", image: patientbed2 },
  { id: 12, category: "infrastructure", title: "Advanced Patient Observation Beds", image: patientbed5 },
  { id: 13, category: "infrastructure", title: "State-of-the-Art Patient Recovery Beds", image: patientbed8 },
  { id: 14, category: "infrastructure", title: "Hospital Reception", image: reception4 },
  { id: 15, category: "infrastructure", title: "Hospital Reception & Patient Registration", image: reception7 },
  { id: 16, category: "infrastructure", title: "Spacious Waiting Hall for Patients", image: waitinghall2 },
  { id: 17, category: "opticals", title: "Premium Eyeglasses Collection", image: eyeglasses1 },
  { id: 18, category: "opticals", title: "Designer Eyewear Frames & Lenses", image: eyeglasses2 },
  { id: 8, category: "events", title: "Free Blindness Prevention Mobile Camp", image: cardiacCampImg },
  { id: 19, category: "events", title: "Independence day Celebration", image: event2 }
];

export const FACILITIES = [
  {
    name: "Sterile Ophthalmic Operation Suites",
    description: "Ultra-clean surgical theatres engineered with vertical laminar airflow systems and high-efficiency particulate air (HEPA) units to eliminate micro-contamination parameters completely.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=500",
    features: ["Real-time digital surgical overlays", "Pendant-mounted operating microscopes", "Automated phacoemulsification platforms", "Wavefront configuration consoles"]
  },
  {
    name: "Advanced Retinal Imaging Core",
    description: "A centralized specialty diagnostic hub housing high-speed cross-sectional tracking sensors to capture micrometer-scale structural data of the macula and optic nerve layers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
    features: ["Optical Coherence Tomography (OCT-A)", "Automated Perimetry Field Mapping", "Digital Fundus Fluorescein Angiography", "High-Resolution Ocular Ultrasound Probes"]
  },
  {
    name: "In-House Vision Studio & Refractive Labs",
    description: "A custom dispensing framework that combines certified optometry assessments with computer-navigated lens centration tools to assure perfect alignment properties.",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=500",
    features: ["Automated Pupil Distance Calibrators", "Keratoconus Specialty Lens Customization", "Premium Anti-glare Protective Lenses", "Designer Brand Eyewear Studio Frameworks"]
  }
];

export const CAREERS = [
  {
    id: "clinical-optometrist",
    title: "Clinical Optometrist",
    department: "Ophthalmology & Refractive Wing",
    experience: "2+ Years",
    location: "Main Branch, Vindhya Healthcare",
    mode: "Full-Time",
    description: "Seeking a qualified Optometrist (B.Optom) experienced in handling comprehensive refractions, computer-navigated vision screening, contact lens evaluations, and baseline diagnostic data tracking."
  },
  {
    id: "consultant-ophthalmologist",
    title: "Consultant Ophthalmologist",
    department: "Ophthalmology Department",
    experience: "3+ Years",
    location: "Main Branch, Vindhya Healthcare",
    mode: "Full-Time",
    description: "Looking for a dedicated ophthalmic surgeon with MS/DNB credentials. The candidate will manage outpatient specialities, perform core day-care procedures (such as phacoemulsification surgeries), and oversee treatment planning."
  },
  {
    id: "medical-receptionist",
    title: "Front Desk Medical Receptionist",
    department: "Administration & Triage Desk",
    experience: "2+ Years",
    location: "Main Branch, Vindhya Healthcare",
    mode: "Full-Time",
    description: "Position open for a compassionate, billing-literate front desk executive. Responsibilities include patient registrations, appointment tracking, managing inbound helpdesk enquiries, and cross-department routing."
  },
  {
    id: "ot-staff-nurse",
    title: "OT Staff Nurse",
    department: "Modular Operation Theatre",
    experience: "2+ Years",
    location: "Main Branch, Vindhya Healthcare",
    mode: "Full-Time",
    description: "Seeking a registered nursing professional (B.Sc / GNM) specializing in perioperative care. Must be adept at scrubbing, circulating, managing sterile fields, and coordinating post-op recovery protocols."
  },
  {
    id: "ot-technician",
    title: "Operation Theatre Technician",
    department: "Modular Operation Theatre",
    experience: "2+ Years",
    location: "Main Branch, Vindhya Healthcare",
    mode: "Full-Time",
    description: "Urgent requirement for an OT Technician certified in maintaining sterile environments, prepping advanced micro-surgical equipment, coordinating laminar flow systems, and assisting surgeons during day-care blocks."
  },
  {
    id: "security-personnel",
    title: "Security Guard / Staff",
    department: "Facilities & Security Division",
    experience: "2+ Years",
    location: "Main Branch, Vindhya Healthcare",
    mode: "Full-Time",
    description: "Looking for disciplined security personnel to monitor campus safety, assist patients with mobility tracking at the entrance block, manage parking flows, and secure premises during operational shifts."
  },
  {
    id: "patient-counsellor",
    title: "Patient Counsellor",
    department: "Patient Relations & Triage Desk",
    experience: "2+ Years",
    location: "Main Branch, Vindhya Healthcare",
    mode: "Full-Time",
    description: "Seeking an empathetic patient relation officer to guide families through treatment timelines, explain pre-op preparation guidelines, assist with cashless insurance processing options, and smooth out procedural handovers."
  }
];