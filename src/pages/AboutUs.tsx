import React from 'react'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'
import SecondaryNavbar from '../components/SecondaryNavbar'

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
const HeroSection: React.FC = () => (
  <section className="bg-[#d9736a] min-h-screen pt-16 pb-0 overflow-hidden flex items-start">
    <div className="max-w-[1200px] mx-auto px-6 flex items-start gap-8 w-full">
      {/* Left text */}
      <div className="flex-1">
        <p className="text-white/80 font-['Quasimoda'] text-[17px] font-medium leading-[20px] tracking-[1.4px] uppercase mb-[12px]">Welcome to YeneHealth</p>
        <h1 className="text-[56px] font-bold text-white leading-tight mb-6">
          FemTech Meets Africa
        </h1>
        <p className="text-white/95 text-[18px] leading-relaxed mb-4 max-w-[560px]">
          YeneHealth is an integrated women's health ecosystem delivering affordable, high-quality care for women and girls across Africa.
        </p>
        <p className="text-white/90 text-[16px] leading-relaxed mb-4 max-w-[560px]">
          Through its mobile app and digital platforms, women can book telehealth consultations, order medicines with discreet delivery, track their periods and pregnancies, and manage medications. For those with basic phones or limited internet access, YeneEnat provides pregnancy education and maternal health reminders via SMS.
        </p>
        <p className="text-white/90 text-[16px] leading-relaxed mb-4 max-w-[560px]">
          YeneHealth also supports pharmacies and healthcare facilities through a wholesale pharmaceutical marketplace with inventory financing, improving access to essential medicines.
        </p>
        <p className="text-white/90 text-[16px] leading-relaxed mb-7 max-w-[560px]">
          Currently operating in Ethiopia and expanding into Rwanda, YeneHealth is building a scalable system that connects healthcare information, services, and medicines in one seamless ecosystem.
        </p>
        {/* Download buttons */}
        <p className="text-white text-[13px] font-semibold mb-3">Download YeneHealth App</p>
        <div className="flex items-center gap-3">
          {/* Google Play */}
          <a href="#" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.83 1-.95 1.46-.43l13 8.5c.4.26.4.86 0 1.12l-13 8.5C3.96 21.46 3 21.33 3 20.5z" />
            </svg>
            <div>
              <div className="text-[9px] leading-none text-white/70">GET IT ON</div>
              <div className="text-[13px] font-semibold leading-tight">Google Play</div>
            </div>
          </a>
          {/* App Store */}
          <a href="#" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div>
              <div className="text-[9px] leading-none text-white/70">Download on the</div>
              <div className="text-[13px] font-semibold leading-tight">App Store</div>
            </div>
          </a>
        </div>
      </div>
      {/* Right — overlapping phone mockups */}
      <div className="flex-shrink-0 relative w-[480px] h-[80vh] flex items-center justify-center">
        {/* Back phone — larger, behind and to the right */}
        <img
          src="/aboutback.svg"
          alt="YeneHealth doctor dashboard"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-auto object-contain opacity-95"
          style={{ maxHeight: '78vh' }}
        />
        {/* Front phone — medical dashboard, in front and to the left */}
        <img
          src="/aboutfront.svg"
          alt="YeneHealth App on smartphone"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[290px] h-auto object-contain drop-shadow-2xl"
          style={{ maxHeight: '74vh' }}
        />
      </div>
    </div>
  </section>
)

/* ─────────────────────────────────────────────
   STATS BAR
───────────────────────────────────────────── */
interface StatItem { value: string; label: string }
const stats: StatItem[] = [
  { value: '6', label: 'Awards Won' },
  { value: '22', label: 'Healthcare Partners' },
  { value: '65+', label: 'Expert Doctors' },
  { value: '50,000+', label: 'Happy Members' },
]

const StatsBar: React.FC = () => (
  <div className="bg-[#3a9e99]">
    <div className="max-w-[1200px] mx-auto px-6 py-6 grid grid-cols-4 divide-x divide-white/30">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center px-4">
          <span className="text-white text-[28px] font-bold leading-tight">{s.value}</span>
          <span className="text-white/80 text-[12px] mt-0.5 text-center">{s.label}</span>
        </div>
      ))}
    </div>
  </div>
)

/* ─────────────────────────────────────────────
   FEATURE ROW (alternating phone + text)
───────────────────────────────────────────── */
interface FeatureRowProps {
  phoneImg: string
  phoneAlt: string
  title: string
  description: string
  reverse?: boolean
}

const FeatureRow: React.FC<FeatureRowProps> = ({ phoneImg, phoneAlt, title, description, reverse }) => (
  <div className={`max-w-[1240px] mx-auto px-[24px] py-[64px] flex items-center gap-[80px] ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
    {/* Phone mockup */}
    <div className="flex-shrink-0 w-[330px] flex justify-center">
      <img
        src={phoneImg}
        alt={phoneAlt}
        className="w-full h-auto object-contain rounded-2xl shadow-lg"
        style={{ maxHeight: '600px' }}
      />
    </div>
    {/* Text */}
    <div className="flex-1">
      <h3 className="text-[30px] font-bold text-[#1f2d3d] mb-[18px] leading-[38px] tracking-[-0.01em]">{title}</h3>
      <p className="text-[16px] font-normal text-[#5b6675] leading-[28px] max-w-[560px]">{description}</p>
    </div>
  </div>
)

/* ─────────────────────────────────────────────
   HIGHLIGHTS OF OUR SERVICES
───────────────────────────────────────────── */
const features = [
  {
    phoneImg: '/H1.png',
    phoneAlt: 'Access to doctors',
    title: 'Access to Doctors Anytime, Anywhere',
    description: 'Connect with verified doctors and specialists through the YeneHealth app. Get on-demand and virtual consultations, medical advice, and prescriptions from the comfort of your home. Receive personalized care tailored to your needs.',
    reverse: false,
  },
  {
    phoneImg: '/H2.svg',
    phoneAlt: 'Online pharmacy',
    title: 'Online Pharmacy with Discreet Delivery',
    description: 'Order your medications and healthcare products online with complete privacy. Our licensed pharmacists review every order for your safety, and we deliver directly to your door in discreet packaging. Enjoy competitive pricing and wide availability of medications.',
    reverse: true,
  },
  {
    phoneImg: '/phone_period.png',
    phoneAlt: 'Period & pregnancy tracking',
    title: 'Period & Pregnancy Tracking',
    description: 'Take charge of your reproductive health with our intuitive cycle and pregnancy tracker. Log symptoms, track your cycle, monitor your fertility window, and receive personalized health insights. Our smart algorithm learns your unique cycle for more accurate predictions.',
    reverse: false,
  },
  {
    phoneImg: '/phone_medication.png',
    phoneAlt: 'Medication tracking',
    title: 'Medication Tracking',
    description: 'Never miss a dose again with our smart medication reminder and tracking system. Set up personalized reminders for all your medications, track your adherence over time, and receive alerts when it\'s time to refill your prescriptions. Your health routine, simplified.',
    reverse: true,
  },
  {
    phoneImg: '/phone_health.png',
    phoneAlt: 'Health information',
    title: 'Confidentially Access Health Information',
    description: 'Browse our comprehensive library of women\'s health articles, guides, and educational content created by certified healthcare professionals. Get answers to sensitive health questions in a safe, private, and judgment-free environment tailored for African women.',
    reverse: false,
  },
]

const servicePills = ['Judgement-free', 'Confidential', 'Safe', 'Reliable']

const ServicePills: React.FC = () => (
  <div className="flex justify-center flex-wrap gap-[14px] pb-[8px]">
    {servicePills.map((p) => (
      <span
        key={p}
        className="bg-[#fde7e4] text-[#e07a6f] text-[14px] font-semibold px-[20px] py-[8px] rounded-full"
      >
        {p}
      </span>
    ))}
  </div>
)

const ServicesHighlights: React.FC = () => (
  <section className="bg-white">
    <div className="max-w-[1240px] mx-auto px-[24px] pt-[56px] text-center">
      <h2 className="text-[32px] font-bold text-[#1f2d3d] leading-[40px] tracking-[-0.01em] mb-[24px]">
        Highlights of Our Services
      </h2>
      <ServicePills />
    </div>
    <div className="divide-y divide-gray-100">
      {features.map((f, i) => (
        <div key={i} className="bg-white">
          <FeatureRow {...f} />
        </div>
      ))}
    </div>
  </section>
)

/* ─────────────────────────────────────────────
   PARTNERS SECTION
───────────────────────────────────────────── */
const partnerLogos = [
  { name: 'Amref Health Africa', abbr: 'AMREF' },
  { name: 'Africa Health', abbr: 'AH' },
  { name: 'Jaza Dawa', abbr: 'JAZA\nDILI' },
  { name: 'Bioton', abbr: 'BIOTON' },
  { name: 'FHI 360', abbr: 'FHI 360' },
  { name: 'EHA Clinics', abbr: 'EHA' },
  { name: 'Dawa', abbr: 'DAWA' },
  { name: 'PharmAccess', abbr: 'PharmAccess' },
  { name: 'Partners in Health', abbr: 'PIH' },
  { name: 'Zipline', abbr: 'zipline' },
  { name: 'Africa CDC', abbr: 'Africa\nCDC' },
  { name: 'Savanna Signatures', abbr: 'SS' },
]

const PartnersSection: React.FC = () => (
  <section className="bg-[#fafafa] py-14">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-[24px] font-bold text-[#222] mb-2">Our Partners, Investors, Supporters and Affiliates</h2>
        <p className="text-[13px] text-[#777] max-w-[520px] mx-auto">
          We collaborate with leading organizations to deliver exceptional healthcare across Africa
        </p>
      </div>
      <div className="grid grid-cols-6 gap-6">
        {partnerLogos.map((p) => (
          <div
            key={p.name}
            className="bg-white border border-gray-200 rounded-lg flex items-center justify-center p-4 h-[72px] shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-[11px] font-bold text-[#555] text-center whitespace-pre-line leading-tight tracking-wide">
              {p.abbr}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─────────────────────────────────────────────
   NEWS SECTION
───────────────────────────────────────────── */
interface NewsCard {
  img: string
  date: string
  title: string
  excerpt: string
  tag: string
}

const newsItems: NewsCard[] = [
  {
    img: '/news1.png',
    date: 'June 10, 2024',
    title: 'YeneHealth Empowers Women Healthcare Workers Programme in Ethiopia',
    excerpt: 'YeneHealth launches its groundbreaking community health worker programme, training hundreds of women across rural Ethiopia to become frontline healthcare advocates.',
    tag: 'Health',
  },
  {
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop',
    date: 'May 28, 2024',
    title: 'YeneHealth Recognised as Top FemTech Innovation in Africa 2024',
    excerpt: 'At the African Health Innovation Summit, YeneHealth received the prestigious FemTech Innovation Award for its outstanding contribution to women\'s digital health.',
    tag: 'Awards',
  },
  {
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
    date: 'May 15, 2024',
    title: 'YeneHealth Reaches 50,000 Registered Users Across East Africa',
    excerpt: 'YeneHealth celebrates a major milestone as its platform surpasses 50,000 active users, marking a significant step in democratising women\'s healthcare across East Africa.',
    tag: 'Milestone',
  },
  {
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=250&fit=crop',
    date: 'April 30, 2024',
    title: 'YeneHealth Proudly Partners with Africa CDC to Expand Women Health',
    excerpt: 'In a landmark partnership, YeneHealth joins forces with Africa CDC to deliver reproductive health services and health education to underserved communities.',
    tag: 'Partnership',
  },
]

const NewsSection: React.FC = () => (
  <section className="bg-white py-14">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-[24px] font-bold text-[#222] mb-2">Latest News</h2>
        <p className="text-[13px] text-[#777] max-w-[460px] mx-auto">
          Discover the latest news and updates from YeneHealth and partners
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {newsItems.map((n) => (
          <article key={n.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-[150px] overflow-hidden">
              <img src={n.img} alt={n.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold text-white bg-[#d9736a] px-2 py-0.5 rounded-full">{n.tag}</span>
                <span className="text-[11px] text-[#999]">{n.date}</span>
              </div>
              <h4 className="text-[13px] font-bold text-[#222] leading-snug mb-2 line-clamp-2">{n.title}</h4>
              <p className="text-[12px] text-[#666] leading-relaxed line-clamp-3">{n.excerpt}</p>
              <a href="#" className="inline-block mt-3 text-[12px] font-semibold text-[#d9736a] hover:underline">
                READ MORE →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'YeneHealth has transformed how I manage my health. The telemedicine service connected me to a doctor within minutes, and the pharmacy delivery is so convenient and private. I recommend it to every woman I know.',
    name: 'Amina Tesfaye',
    role: 'Patient, Addis Ababa',
    initials: 'AT',
    color: '#d9736a',
  },
  {
    quote: 'As a gynaecologist, I appreciate the platform\'s commitment to women\'s health. It makes it easy to reach patients in remote areas and provide quality consultations. The medication tracking feature is a game-changer for adherence.',
    name: 'Dr. Hana Girma',
    role: 'Gynaecologist, Nairobi',
    initials: 'HG',
    color: '#3a9e99',
  },
  {
    quote: 'The period and pregnancy tracking feature is incredibly accurate. I\'ve been using YeneHealth for over a year and it has given me so much insight into my cycle and overall well-being. Highly recommend!',
    name: 'Fatima Osei',
    role: 'Patient, Accra',
    initials: 'FO',
    color: '#5b7fa6',
  },
]

const TestimonialsSection: React.FC = () => (
  <section className="bg-[#fafafa] py-14">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="text-[24px] font-bold text-[#222] mb-2">Patient and Professional's Testimonial</h2>
        <p className="text-[13px] text-[#777] max-w-[440px] mx-auto">
          Hear what our users and healthcare professionals say about YeneHealth
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[13px] text-[#444] leading-relaxed mb-5 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0"
                style={{ backgroundColor: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#222]">{t.name}</div>
                <div className="text-[12px] text-[#888]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─────────────────────────────────────────────
   FLOATING ACTIONS (See a Doctor + scroll top)
───────────────────────────────────────────── */
const FloatingActions: React.FC = () => (
  <div className="fixed bottom-[28px] right-[28px] z-50 flex items-center gap-[14px]">
    <a
      href="#"
      className="flex items-center gap-[10px] text-white text-[15px] font-semibold pl-[20px] pr-[24px] py-[14px] rounded-full bg-gradient-to-r from-[#13a89e] to-[#0f8f86] shadow-[0_8px_30px_rgba(19,168,158,0.45)] hover:brightness-105 transition"
    >
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v6a4 4 0 008 0V3M9 17v1a4 4 0 004 4h0a4 4 0 004-4v-3" />
        <circle cx="19" cy="11" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
      See a Doctor Now
    </a>
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="w-[48px] h-[48px] rounded-full bg-[#e8746a] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(232,116,106,0.45)] hover:brightness-105 transition"
    >
      <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  </div>
)

/* ─────────────────────────────────────────────
   ABOUT US PAGE (full)
───────────────────────────────────────────── */
const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-white">
      {/* Top bar (shared component) */}
      <div className="mb-[8px]">
        <TopBar />
      </div>

      {/* Secondary navbar */}
      <SecondaryNavbar />

      {/* Page sections */}
      <HeroSection />
      <StatsBar />
      <ServicesHighlights />
      <PartnersSection />
      <NewsSection />
      <TestimonialsSection />

      {/* Footer */}
      <Footer />

      {/* Floating actions */}
      <FloatingActions />
    </div>
  )
}

export default AboutUs
