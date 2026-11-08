/**
 * ISHANVI Hostel & Accommodation - Exact Verified Reference Data
 */

export interface RoomItem {
  id: string;
  name: string;
  category: 'single' | 'sharing' | 'premium';
  kicker: string;
  tagline: string;
  priceNote: string;
  image: string;
  authenticImage?: string;
  iconType: 'bed' | 'users' | 'crown';
  description: string;
  highlights: string[];
  dimensions: string;
  occupancy: string;
  bathroom: string;
  furnishings: string[];
}

export interface AmenityItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  category?: 'daily' | 'study' | 'wellness' | 'security';
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  institution?: string;
  quote: string;
  rating: number;
  roomType?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const HOSTEL_INFO = {
  name: 'ISHANVI',
  fullName: 'ISHANVI HOSTEL & ACCOMMODATION',
  logoUrl: '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.09.48_AM_ffe35bd4.jpeg',
  bannerUrl: '/assets/images/hero_slide_flyer_clean.jpg',
  tagline: 'SAFE STAY  |  BETTER LIVING  |  BRIGHTER TOMORROW',
  heroKicker: 'A SAFE PLACE FOR A BRIGHTER TOMORROW',
  heroTitle: 'Premium Hostel & Accommodation',
  heroSubtitle: 'Comfortable Living  |  Safe Environment  |  Brighter Future',
  phonePrimary: '+91 77670 58988',
  phoneSecondary: '+91 77670 58988',
  email: 'enquiry@ishanvihostel.com',
  address: 'Near ISMS Sankalp Business School, Ambegaon Bk, Pune - 411066',
  googleMapsUrl: 'https://maps.google.com/?q=Near+ISMS+Sankalp+Business+School,+Ambegaon+Bk,+Pune+-+411066',
  visitingHours: '9:00 AM – 8:00 PM (Every Day)',
  gateCurfew: '10:00 PM (Extension with prior warden intimation)',
};

export const ROOMS_DATA: RoomItem[] = [
  {
    id: 'single-room',
    name: 'Single Room',
    category: 'single',
    kicker: 'PRIVACY & PEACE',
    tagline: 'Privacy & Peace',
    priceNote: 'Enquire for pricing · Contact us for availability',
    image: '/assets/images/room_single_auth.jpg',
    authenticImage: '/assets/images/room_single_auth.jpg',
    iconType: 'bed',
    description: 'A private room for focused study or work, with a desk, storage and a cosy bed.',
    dimensions: '160 sq. ft.',
    occupancy: '1 Resident (Private)',
    bathroom: 'Attached / Dedicated Sanitized Bath',
    furnishings: [
      'Single Bed with comfortable orthopaedic mattress',
      'Solid wooden study workstation with lamp',
      'High-back ergonomic study chair',
      'Floor-to-ceiling wooden wardrobe with key & mirror',
      'Ceiling fan and natural daylight window',
    ],
    highlights: [
      'Private personal bedroom with dedicated lock',
      'Wide study desk and ergonomic chair',
      'Spacious wooden wardrobe with mirror',
      'High-speed Wi-Fi & ceiling fan ventilation',
      'Large window with curtains providing natural daylight',
    ],
  },
  {
    id: 'sharing-room',
    name: 'Double / Sharing Room',
    category: 'sharing',
    kicker: 'COMFORT WITH COMPANIONSHIP',
    tagline: 'Comfort with Companionship',
    priceNote: 'Enquire for pricing · Contact us for availability',
    image: '/assets/images/room_double_auth.jpg',
    authenticImage: '/assets/images/room_double_auth.jpg',
    iconType: 'users',
    description: 'A friendly shared room with individual beds and space for everyone.',
    dimensions: '240 sq. ft.',
    occupancy: '2 Residents (Twin Sharing)',
    bathroom: 'Attached Spacious Bath',
    furnishings: [
      '2 Individual single beds with fresh linens',
      '2 Separate wide study desks with book racks',
      '2 Independent wardrobe units with personal locks',
      'Dual bedside switches and charging points',
      'Twin study lamps and acoustic spacing',
    ],
    highlights: [
      'Individual comfortable single beds with fresh linens',
      'Dedicated personal wardrobe storage for each resident',
      'Individual study spaces with ample room for laptops & books',
      'Daily housekeeping and regular linen sanitation',
      'Airy and hygienic environment for productive study',
    ],
  },
  {
    id: 'premium-room',
    name: 'Premium Room',
    category: 'premium',
    kicker: 'EXTRA COMFORT & SPACE',
    tagline: 'Extra Comfort & Space',
    priceNote: 'Enquire for pricing · Contact us for availability',
    image: '/assets/images/room_premium_auth.jpg',
    authenticImage: '/assets/images/room_premium_auth.jpg',
    iconType: 'crown',
    description: 'Our most spacious option with upgraded furnishings and extra comfort.',
    dimensions: '300 sq. ft.',
    occupancy: '1-2 Residents (Single / Sibling)',
    bathroom: 'Attached Premium Luxury Bath',
    furnishings: [
      'Deluxe bed with premium cushioning',
      'Executive-grade workstation with ergonomic chair',
      'Grand sliding wardrobe with full dressing mirror',
      'Extra lounge corner chair with coffee side table',
      'Optimal ventilation and scenic balcony access',
    ],
    highlights: [
      'Most spacious room layout with upgraded furnishings',
      'Enhanced storage and premium wooden cupboards',
      'Ideal for residents desiring extra room, quiet and comfort',
      'Prime location within the hostel with optimal airflow',
      'All inclusive meals, utilities, and high-speed Wi-Fi',
    ],
  },
];

export const FLOATING_FEATURES = [
  { title: 'Comfortable Rooms', icon: 'Bed' },
  { title: 'High-Speed Wi-Fi', icon: 'Wifi' },
  { title: 'Hygienic Meals', icon: 'Utensils' },
  { title: '24/7 Security', icon: 'Shield' },
  { title: 'Supportive Community', icon: 'Users' },
  { title: 'Prime Location', icon: 'MapPin' },
];

export const AMENITIES_LIST: AmenityItem[] = [
  {
    id: 'wifi',
    title: 'High-Speed Wi-Fi',
    iconName: 'Wifi',
    description: 'Reliable, high-speed fiber internet throughout all rooms and study corners.',
    category: 'study',
  },
  {
    id: 'meals',
    title: 'Hygienic Meals',
    iconName: 'Utensils',
    description: 'Freshly prepared, homestyle, hygienic daily meals crafted with care.',
    category: 'daily',
  },
  {
    id: 'security',
    title: '24/7 Security',
    iconName: 'Shield',
    description: 'Round-the-clock security monitoring, CCTV surveillance, and safe gate control.',
    category: 'security',
  },
  {
    id: 'laundry',
    title: 'Laundry Service',
    iconName: 'Shirt',
    description: 'Dedicated laundry facilities and washing support for busy students.',
    category: 'daily',
  },
  {
    id: 'lounge',
    title: 'Common Lounge',
    iconName: 'Sofa',
    description: 'Relaxing community area to unwind, read, and converse with fellow residents.',
    category: 'wellness',
  },
  {
    id: 'study',
    title: 'Study Area',
    iconName: 'BookOpen',
    description: 'Quiet, well-lit spaces created for deep concentration and exam preparation.',
    category: 'study',
  },
  {
    id: 'fitness',
    title: 'Fitness Facility',
    iconName: 'Dumbbell',
    description: 'Dedicated physical wellness and indoor recreation space to stay energetic.',
    category: 'wellness',
  },
  {
    id: 'location',
    title: 'Prime Location',
    iconName: 'MapPin',
    description: 'Near ISMS Sankalp Business School in Ambegaon Bk with easy public transit.',
    category: 'daily',
  },
];

export const ISHANVI_EXPERIENCE_PILLARS = [
  {
    number: '01',
    title: 'Acoustic Serenity & Deep Study',
    description:
      'We enforce quiet study hours and sound-conscious room layouts so medical, engineering, and civil service aspirants can study with total focus without hallway disruptions.',
    icon: 'BookOpen',
  },
  {
    number: '02',
    title: 'Homestyle Nourishment',
    description:
      'Pure, hygienic, chef-cooked Indian meals prepared daily with seasonal vegetables, fresh rotis, rice, dal, and evening high-tea just like home.',
    icon: 'Utensils',
  },
  {
    number: '03',
    title: 'Complete Parent Peace of Mind',
    description:
      '24/7 guarded gates, verified visitor registers, on-premise warden care, and automated attendance give parents complete reassurance.',
    icon: 'ShieldCheck',
  },
  {
    number: '04',
    title: 'Zero Downtime Living',
    description:
      'High-speed optical fiber internet, 100% power generator backup for study lights, and daily housekeeping take all chores off your plate.',
    icon: 'Zap',
  },
];

export const DAILY_LIFESTYLE_TIMELINE = [
  {
    time: '07:30 AM',
    title: 'Morning Serenity & Warm Breakfast',
    subtitle: 'Nourishing start with fresh poha, upma, parathas, and hot tea',
    description:
      'Wake up refreshed in your ventilated room. Head down for a wholesome breakfast and morning chai before heading out to ISMS Sankalp or college classes.',
    image: '/assets/images/amenity_dining_hall_1793879543322.jpg',
    tag: 'Morning Ritual',
  },
  {
    time: '11:00 AM',
    title: 'Deep Work & Silent Study Sessions',
    subtitle: 'Distraction-free environment with high-speed fiber internet',
    description:
      'Whether preparing for competitive examinations or attending online college lectures, our study spaces provide ergonomic seating, personal plug points, and absolute quiet.',
    image: '/assets/images/amenity_study_lounge_1793879542441.jpg',
    tag: 'Peak Productivity',
  },
  {
    time: '05:30 PM',
    title: 'Evening Refreshment & Community Connection',
    subtitle: 'Chai, snacks, and leisure table tennis in the recreation lounge',
    description:
      'Unwind after intensive classes. Enjoy hot evening snacks and tea with your fellow residents or play a round of table tennis in the recreation area.',
    image: '/assets/images/amenity_recreation_hub_1793879542921.jpg',
    tag: 'Social Balance',
  },
  {
    time: '10:30 PM',
    title: 'Safe, Guarded Night Sleep',
    subtitle: 'Strict night security, peaceful silence, and orthopaedic rest',
    description:
      'Quiet hours take effect. With 24x7 security guards at the gate and on-duty wardens, you can sleep peacefully ready for tomorrow.',
    image: '/assets/rooms/single_room_large.jpg',
    tag: 'Rest & Security',
  },
];

export const WHY_CHOOSE_ISHANVI = [
  {
    title: 'Directly Opposite ISMS Sankalp',
    desc: 'Just a 1-minute walk from college gates, saving you hours of daily travel and commute costs.',
  },
  {
    title: 'Zero Hidden Charges',
    desc: 'Transparent pricing covering room accommodation, 4 daily meals, electricity, Wi-Fi, and housekeeping.',
  },
  {
    title: 'Parent-Friendly Verification',
    desc: 'Direct warden helpline, safe guest receiving lounge, and strict gate entry compliance.',
  },
  {
    title: 'Spotless Daily Hygiene',
    desc: 'Professional staff conducts daily floor sanitation, dust removal, and weekly linen changes.',
  },
  {
    title: 'Supportive Student Community',
    desc: 'Surrounded by serious scholars and young professionals striving towards bright career goals.',
  },
  {
    title: 'Quick Maintenance Support',
    desc: 'Any electrical, plumbing, or Wi-Fi query is promptly resolved by on-premise staff within hours.',
  },
];

export const GALLERY_PHOTOS = [
  { id: '1', title: 'Reception & Entrance Lobby', category: 'campus', image: '/assets/images/amenity_security_lobby_1793879543609.jpg', caption: 'Front reception desk with guest assistance and 24/7 security log register' },
  { id: '2', title: 'Community Living Lounge', category: 'amenities', image: '/assets/images/amenity_recreation_hub_1793879542921.jpg', caption: 'Table tennis, indoor games, and comfortable community social lounge area' },
  { id: '3', title: 'Hygienic Dining Hall', category: 'amenities', image: '/assets/images/amenity_dining_hall_1793879543322.jpg', caption: 'Clean homestyle dining hall serving 4 fresh vegetarian chef-prepared meals daily' },
  { id: '4', title: 'Premium Suite Bedroom', category: 'rooms', image: '/assets/images/room_premium_auth.jpg', caption: 'Spacious premium room with upgraded wood finishes and expansive window daylight' },
  { id: '5', title: 'Rooftop Community Terrace', category: 'campus', image: '/assets/images/community_terrace_hd_1793946912508.jpg', caption: 'Breezy open terrace garden overlooking Pune hills for evening chai, relaxation, and conversation' },
  { id: '6', title: 'Single Room (Authentic Property)', category: 'rooms', image: '/assets/images/room_single_auth.jpg', caption: 'Actual single room at ISHANVI with wooden wardrobe, ergonomic study desk, and natural ventilation' },
  { id: '7', title: 'Double / Sharing Room (Authentic Property)', category: 'rooms', image: '/assets/images/room_double_auth.jpg', caption: 'Actual twin sharing room layout with individual beds, separate wardrobes, and study space' },
  { id: '8', title: 'Premium Room (Authentic Property)', category: 'rooms', image: '/assets/images/room_premium_auth.jpg', caption: 'Actual premium room layout at ISHANVI hostel' },
  { id: '9', title: 'Silent Study Library', category: 'study', image: '/assets/images/amenity_study_lounge_1793879542441.jpg', caption: 'Dedicated quiet study lounge with high-speed Wi-Fi, individual charging points, and desk lamps' },
  { id: '10', title: 'Fitness & Wellness Facility', category: 'amenities', image: '/assets/images/amenity_fitness_hd_1793946898388.jpg', caption: 'Dedicated fitness and workout area with treadmills, free weights, and stretching mats' },
  { id: '11', title: 'Study Workstation Suite', category: 'study', image: '/assets/ref/about_room.jpg', caption: 'Comfortable study suite with integrated bookshelf, ergonomic seating, and deep focus ambiance' },
  { id: '12', title: 'ISHANVI Campus & Suite Interior', category: 'campus', image: '/assets/images/hero_slide_flyer_clean.jpg', caption: 'Signature ISHANVI suite architectural presentation and furnished twin accommodations' },
  { id: '13', title: 'Student Living & Grand Reception Showcase', category: 'campus', image: '/assets/images/hero_student_clean_hd.jpg', caption: 'Welcoming resident reception desk with illuminated 3D golden emblem and scholar study lounge' },
  { id: '14', title: 'Furnished Bedroom Sanctuary (Twin Beds)', category: 'rooms', image: '/assets/images/hero_room_clean_hd.jpg', caption: 'Spacious interior of twin-sharing student bedroom with orthopaedic beds, wardrobe, and daylight window' },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 't-1',
    author: 'Riya S.',
    role: 'Student',
    institution: 'ISMS Sankalp Business School',
    quote: 'A very safe and comfortable place with great facilities. Feels like home!',
    rating: 5,
    roomType: 'Student',
  },
  {
    id: 't-2',
    author: 'Aakiv K.',
    role: 'Working Professional',
    institution: 'Working Professional, Pune',
    quote: 'Clean rooms, good food and a friendly environment. Highly recommended!',
    rating: 5,
    roomType: 'Working Professional',
  },
  {
    id: 't-3',
    author: 'Neha P.',
    role: 'Student',
    institution: 'Undergraduate Scholar',
    quote: "The best hostel experience I've had so far. Great community!",
    rating: 5,
    roomType: 'Student',
  },
  {
    id: 't-4',
    author: 'Suresh Patil',
    role: 'Parent',
    institution: 'Parent of MBA Scholar',
    quote: 'As parents living outside Pune, ISHANVI gave us 100% peace of mind. The warden is always reachable, CCTV surveillance is strictly monitored, and security is truly top-notch.',
    rating: 5,
    roomType: 'Single Room',
  },
  {
    id: 't-5',
    author: 'Rohan Deshmukh',
    role: 'Student',
    institution: 'Engineering Aspirant',
    quote: 'The silent study lounge is a game-changer. Late-night study sessions without disturbance helped me focus on my gate exam preparations. Daily housekeeping keeps everything spotless.',
    rating: 5,
    roomType: 'Double / Sharing Room',
  },
  {
    id: 't-6',
    author: 'Sunita Kulkarni',
    role: 'Parent',
    institution: 'Parent of Resident',
    quote: 'We visited 5 different hostels in Ambegaon Bk before choosing ISHANVI. The hygiene of the kitchen and the polite behavior of the staff made our choice completely clear.',
    rating: 5,
    roomType: 'Premium Room',
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'Where is ISHANVI Hostel located in Pune?',
    answer: 'We are situated Near ISMS Sankalp Business School, Ambegaon Bk, Pune - 411066. It is a peaceful, student-friendly institutional neighborhood with immediate access to bus stops, supermarkets, Katraj Chowk, and colleges.',
    category: 'location',
  },
  {
    question: 'What room types are available for booking?',
    answer: 'We offer three carefully planned categories: Single Rooms (Privacy & Peace), Double / Sharing Rooms (Comfort with Companionship), and Premium Rooms (Extra Comfort & Space). All options are fully furnished with orthopaedic beds, study tables, chairs, and dedicated wooden wardrobes with locks.',
    category: 'rooms',
  },
  {
    question: 'Are meals included in the accommodation fee?',
    answer: 'Yes! We provide 4 freshly prepared, hygienic homestyle meals every day: Breakfast with hot chai (7:30 AM – 9:30 AM), wholesome lunch (12:30 PM – 2:30 PM), evening high-tea with snacks (5:00 PM – 6:30 PM), and balanced dinner (8:00 PM – 10:00 PM). Pure vegetarian and cooked with utmost cleanliness.',
    category: 'food',
  },
  {
    question: 'What security measures are in place for resident safety?',
    answer: 'Safety is our highest priority. The property features 24/7 guarded main gates, comprehensive CCTV surveillance coverage across all common corridors and entrances, biometric/visitor register logging, and caring on-duty resident wardens.',
    category: 'security',
  },
  {
    question: 'What are the gate timings and curfew policy?',
    answer: 'Standard gate closing time is 10:00 PM for resident safety and disciplined study environment. Students attending late college classes, lab work, or library study can receive extended permissions with prior intimation to the hostel warden.',
    category: 'security',
  },
  {
    question: 'What documents are required for admission?',
    answer: 'For smooth admission, please bring: 1. Government Photo ID (Aadhaar Card / Passport), 2. College ID Card or Company Offer Letter / Work ID, 3. Two passport-size photographs, and 4. Emergency contact details of parents/guardians.',
    category: 'admission',
  },
  {
    question: 'Is there power backup and high-speed internet for studies?',
    answer: 'Yes. We provide high-speed optical fiber Wi-Fi throughout all rooms and study corners, along with 100% generator/inverter power backup to ensure lights, study fans, and internet remain active during any grid outages.',
    category: 'amenities',
  },
  {
    question: 'How is laundry and room housekeeping managed?',
    answer: 'Common areas, corridors, and room floors are swept and sanitized daily by professional housekeeping staff. Washrooms are deep-cleaned regularly. Dedicated laundry facilities and washing machine access are provided on-site.',
    category: 'amenities',
  },
  {
    question: 'How do I enquire about pricing and reserve a room?',
    answer: 'You can submit an online enquiry via the "Enquire Now" button on any room card, message our admissions desk directly on WhatsApp at +91 77670 58988, or call us to schedule a free property tour.',
    category: 'admission',
  },
  {
    question: 'Can parents visit residents at the hostel?',
    answer: 'Yes! Parents and authorized guardians are always welcome. We have a dedicated visitor receiving lounge open from 9:00 AM to 8:00 PM every day.',
    category: 'admission',
  },
];

export const NEARBY_CONNECTIVITY = [
  { name: 'ISMS Sankalp Business School', distance: '100 meters', time: '1 min walk', type: 'education' },
  { name: 'Ambegaon Main Bus Stop', distance: '300 meters', time: '4 min walk', type: 'transit' },
  { name: 'Supermarket & Pharmacy Store', distance: '150 meters', time: '2 min walk', type: 'convenience' },
  { name: 'Katraj Chowk Transit Hub', distance: '2.5 km', time: '7 min drive', type: 'transit' },
  { name: 'Sinhgad Technical Education Campus', distance: '3.2 km', time: '9 min drive', type: 'education' },
  { name: 'Multi-Specialty Hospital', distance: '1.8 km', time: '5 min drive', type: 'health' },
];
