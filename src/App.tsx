import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, MapPin, Mail, Clock, ShieldCheck, Zap, Globe, ChevronRight, Loader2, Facebook, Youtube, Instagram, ShoppingBag, Smartphone } from "lucide-react";

const BUSINESS = {
  name: "DigitalMerch",
  tagline: "Custom Business Systems & Web App Development",
  logo: "https://dmerchportal.digitalmerchs.store/android-chrome-512x512.png",
  city: "Cabuyao, Laguna",
  address: "Cabuyao, Laguna, Philippines",
  phone: "+63 900 000 0000",
  whatsapp: "+63 900 000 0000",
  email: "digitalmerch4862@gmail.com",
  facebook: "https://www.facebook.com/digitalmerch4862/",
  youtube: "https://youtube.com/@digitalmerch-sy7yt?si=c8VCo5afd47Rf5Df",
  instagram: "https://www.instagram.com/digitalmerch4862/",
  digitalStore: "https://dmerchportal.digitalmerchs.store/",
  mapsLink: "https://goo.gl/maps/example",
  hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  description: "We help businesses build powerful digital systems tailored to their exact needs. With expertise in Go High Level, website deployment, and custom SaaS development, we create solutions that automate processes and support growth.",
  mainServices: [
    { title: "Custom Business Systems", desc: "SaaS and cloud-based platforms designed specifically for your unique workflow and operations." },
    { title: "Web App Development", desc: "Powerful, scalable web applications built with modern stacks to solve complex business problems." },
    { title: "Automation & CRM", desc: "Streamline your sales pipeline and client management with Go High Level and custom integrations." },
    { title: "Mobile Monitoring", desc: "Access your system anywhere. Monitor leads, sales, and operations in real-time via our dedicated mobile app." }
  ],
  solutions: [
    "CRM & Sales Pipelines",
    "Booking & Appointment Platforms",
    "Client & Employee Portals",
    "Inventory & Order Tracking",
    "Billing & Invoicing Systems",
    "E-commerce & Membership Sites"
  ],
  usp: [
    "Tailored Solutions for Your Workflow",
    "Scalable Systems for Business Growth",
    "Clean, Modern & User-Friendly Design",
    "Reliable Deployment & Ongoing Support"
  ]
};

const TechBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden bg-cyber-dark">
    {/* 3D Image Layer with Parallax Effect */}
    <motion.div 
      initial={{ scale: 1.1 }}
      animate={{ 
        scale: [1.1, 1.15, 1.1],
        x: [-10, 10, -10],
        y: [-5, 5, -5]
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute inset-0 z-0 opacity-40 grayscale contrast-150 brightness-75"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />

    {/* Moving Grid Overlay */}
    <div className="absolute inset-0 cyber-grid animate-grid-flow opacity-20 z-10" />
    
    {/* Scanning Line */}
    <div className="scanline z-20" />
    
    {/* Tech Dots */}
    <div className="absolute inset-0 tech-dots opacity-10 z-10" />
    
    {/* Ambient Glows - Cyan and Orange to match the image */}
    <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-cyber-blue/15 rounded-full blur-[150px] animate-pulse z-10" />
    <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px] animate-pulse z-10" />
    
    {/* Floating Data Particles */}
    <div className="absolute inset-0 z-10">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: "-100%",
            x: `${Math.random() * 100}%`
          }}
          transition={{ 
            duration: 15 + Math.random() * 25,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 15
          }}
          className="absolute w-[1px] h-24 bg-gradient-to-b from-transparent via-cyber-blue/30 to-transparent"
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}
    </div>

    {/* Vignette for depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-cyber-dark opacity-60 z-20" />
  </div>
);

const BrowsingOverlay = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-cyber-blue/5 backdrop-blur-[2px]" />
        <motion.div 
          initial={{ top: "-100%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 0.8, ease: "linear" }}
          className="absolute left-0 right-0 h-1 bg-cyber-blue shadow-[0_0_20px_#00f2ff] z-10"
        />
        <div className="relative z-20 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 border border-cyber-blue bg-cyber-dark/80 text-cyber-blue text-xs font-black uppercase tracking-[0.3em] neon-border">
            <Loader2 className="animate-spin" size={16} />
            Browsing System...
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar = ({ onNavigate }: { onNavigate: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-cyber-blue font-bold text-xl tracking-tighter flex items-center gap-3">
          <div className="border border-cyber-blue p-1 bg-cyber-dark/50">
            <img 
              src={BUSINESS.logo} 
              alt="DigitalMerch Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="hidden sm:inline font-black tracking-widest text-sm">DIGITALMERCH</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] items-center">
          <a href="#services" onClick={onNavigate} className="hover:text-cyber-blue transition-colors">Solutions</a>
          <a href="#about" onClick={onNavigate} className="hover:text-cyber-blue transition-colors">Why Us</a>
          <a href="#contact" onClick={onNavigate} className="hover:text-cyber-blue transition-colors">Consultation</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a 
            href={BUSINESS.digitalStore} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyber-blue hover:text-white transition-colors"
            title="Store"
          >
            <ShoppingBag size={20} />
          </a>
          <a 
            href={`tel:${BUSINESS.phone}`}
            className="bg-cyber-blue text-cyber-dark px-4 py-2 font-black text-[10px] tracking-widest hover:shadow-[0_0_20px_#00f2ff] transition-all whitespace-nowrap"
          >
            CALL NOW
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyber-blue p-1"
          >
            {isMenuOpen ? <Zap size={24} /> : <Smartphone size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-dark border-b border-cyber-blue/20 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4 text-xs font-black uppercase tracking-widest">
              <a href="#services" onClick={() => { onNavigate(); setIsMenuOpen(false); }} className="py-2 border-b border-white/5">Solutions</a>
              <a href="#about" onClick={() => { onNavigate(); setIsMenuOpen(false); }} className="py-2 border-b border-white/5">Why Us</a>
              <a href="#contact" onClick={() => { onNavigate(); setIsMenuOpen(false); }} className="py-2 border-b border-white/5">Consultation</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          <Zap size={12} className="text-cyber-blue" /> CUSTOM SYSTEM DEVELOPMENT
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tighter">
          BUILDING THE <br />
          <motion.span 
            animate={{ opacity: [1, 0.8, 1, 0.9, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.2, 0.8, 1] }}
            className="text-cyber-blue neon-text"
          >
            OPERATING SYSTEM
          </motion.span> <br />
          FOR YOUR BUSINESS
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
          {BUSINESS.description}
        </p>
        <div className="mb-8">
          <motion.a 
            href={BUSINESS.digitalStore}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            animate={{ 
              boxShadow: ["0 0 0px rgba(0,242,255,0)", "0 0 20px rgba(0,242,255,0.4)", "0 0 0px rgba(0,242,255,0)"] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-cyber-blue text-cyber-dark font-black uppercase tracking-widest hover:bg-white transition-all neon-border group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Visit Our Digital Store
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            
            {/* Scanning light effect */}
            <motion.div 
              animate={{ left: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 z-0"
            />
          </motion.a>
          <p className="text-[10px] text-cyber-blue font-bold uppercase tracking-widest mt-2 opacity-70">
            For more products you need
          </p>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <a 
            href={BUSINESS.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-all neon-border bg-cyber-dark/50"
            title="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a 
            href={BUSINESS.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-all neon-border bg-cyber-dark/50"
            title="YouTube"
          >
            <Youtube size={24} />
          </a>
          <a 
            href={BUSINESS.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-all neon-border bg-cyber-dark/50"
            title="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href={`mailto:${BUSINESS.email}`}
            className="w-14 h-14 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-all neon-border bg-cyber-dark/50"
            title="Email Us"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="relative z-10 neon-border p-2 bg-cyber-dark">
          <img 
            src="https://acropolium.com/img/articles/benefits-of-saas/img01.jpg" 
            alt="Custom Business Systems" 
            className="w-full grayscale contrast-125 brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-cyber-blue text-cyber-dark p-6 font-black italic text-4xl">
            SaaS
          </div>
        </div>
        <div className="absolute -top-10 -left-10 w-full h-full border border-cyber-blue/20 -z-10" />
      </motion.div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-16">
        <h2 className="text-xs font-bold text-cyber-blue uppercase tracking-[0.4em] mb-4">What We Offer</h2>
        <h3 className="text-4xl font-black tracking-tighter">CUSTOM SOLUTIONS</h3>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {BUSINESS.mainServices.map((service, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            onClick={() => {
              if (idx === 3) {
                document.getElementById('mobile-app')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`p-8 border border-white/10 bg-cyber-dark/40 backdrop-blur-sm hover:border-cyber-blue/50 transition-all group relative overflow-hidden ${idx === 3 ? 'cursor-pointer' : ''}`}
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-blue/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-blue/30" />
            
            <div className="w-12 h-12 border border-cyber-blue/30 flex items-center justify-center mb-6 group-hover:bg-cyber-blue group-hover:text-cyber-dark transition-colors">
              {idx === 0 ? <Zap size={24} /> : idx === 1 ? <Globe size={24} /> : idx === 2 ? <ShieldCheck size={24} /> : <Smartphone size={24} />}
            </div>
            <h4 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-16">
        <h4 className="text-xs font-bold text-cyber-blue uppercase tracking-[0.4em] mb-8 text-center">Systems We Can Build</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {BUSINESS.solutions.map((sol, idx) => (
            <div key={idx} className="p-4 border border-white/5 bg-cyber-dark/30 backdrop-blur-sm text-center text-[10px] font-bold uppercase tracking-widest hover:border-cyber-blue transition-colors">
              {sol}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-cyber-blue/5 skew-y-3 -z-10" />
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center"
    >
      <div className="order-2 lg:order-1 relative">
        <div className="aspect-square neon-border overflow-hidden max-w-md mx-auto lg:mx-0 bg-cyber-dark/60 backdrop-blur-sm">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNikF626Q80UkaQ-DPXYh3mTgieBE_KesCg&s" 
            alt="Systems" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="absolute -top-4 -left-4 w-full h-full border border-cyber-blue/10 -z-10 hidden lg:block" />
      </div>
      <div className="order-1 lg:order-2">
        <h2 className="text-xs font-bold text-cyber-blue uppercase tracking-[0.4em] mb-4">The Advantage</h2>
        <h3 className="text-4xl font-black tracking-tighter mb-8">WHY CHOOSE US?</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Instead of using generic tools, we build systems specifically for your workflow, goals, and operations. Our online platforms allow you to manage everything in one place—accessible anytime, anywhere.
        </p>
        <div className="space-y-4">
          {BUSINESS.usp.map((point, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-cyber-blue shadow-[0_0_8px_#00f2ff]" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-cyber-blue -z-10" />
    <div className="absolute inset-0 cyber-grid opacity-20 -z-10" />
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 text-cyber-dark"
    >
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-70">Get In Touch</h2>
          <h3 className="text-5xl font-black tracking-tighter mb-8">READY TO START YOUR PROJECT?</h3>
          <p className="font-bold text-lg mb-12 opacity-80">
            Ready to improve your operations? Contact us for a consultation on building your custom platform.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border-2 border-cyber-dark flex items-center justify-center bg-cyber-dark/5">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Email Us</p>
                <p className="text-xl font-black">{BUSINESS.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border-2 border-cyber-dark flex items-center justify-center bg-cyber-dark/5">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Hours</p>
                <p className="text-xl font-black">{BUSINESS.hours}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-cyber-dark text-white p-10 neon-border min-h-[600px] relative">
          {/* Form Corner Accents */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyber-blue" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyber-blue" />
          
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/LpR9wceDxxa5tcYMBVi9"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
            id="inline-LpR9wceDxxa5tcYMBVi9" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="DMerch Form"
            data-height="550"
            data-layout-iframe-id="inline-LpR9wceDxxa5tcYMBVi9"
            data-form-id="LpR9wceDxxa5tcYMBVi9"
            title="DMerch Form"
          >
          </iframe>
        </div>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-cyber-blue font-black text-2xl tracking-tighter">
        DIGITALMERCH
      </div>
      <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-right">
        © 2026 DigitalMerch Cabuyao. All Rights Reserved. <br />
        Designed for the Digital Frontier.
      </div>
      <div className="flex gap-6">
        <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors"><Facebook size={20} /></a>
        <a href={BUSINESS.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors"><Youtube size={20} /></a>
        <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-blue transition-colors"><Instagram size={20} /></a>
        <a href={`mailto:${BUSINESS.email}`} className="text-gray-400 hover:text-cyber-blue transition-colors"><Mail size={20} /></a>
      </div>
    </div>
  </footer>
);

const MobileShowcase = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("09:41");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const autoScroll = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(autoScroll);
  }, []);

  const screens = [
    { 
      title: "Business Dashboard", 
      img: "0e515c47-0f17-4a55-b4e7-74ffad638eb5.jpeg",
      label: "Dashboard",
      icon: <Zap size={14} />
    },
    { 
      title: "App Ecosystem", 
      img: "65fbf656-8bc0-4fcb-8da2-233318a242d8.jpeg",
      label: "Apps",
      icon: <Globe size={14} />
    },
    { 
      title: "Team Conversations", 
      img: "420de5c9-228e-47b1-a0f7-20e232328a05.jpeg",
      label: "Conversations",
      icon: <MessageSquare size={14} />
    },
    { 
      title: "CRM Management", 
      img: "4852128a-4a66-4b12-8a2d-9043ae92eabf.jpeg",
      label: "CRM",
      icon: <ShieldCheck size={14} />
    },
    { 
      title: "Business Calendar", 
      img: "c0112c31-34e4-418c-b526-b010ea14fc35.jpeg",
      label: "Calendar",
      icon: <Clock size={14} />
    }
  ];

  return (
    <section id="mobile-app" className="py-24 relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-xs font-bold text-cyber-blue uppercase tracking-[0.4em] mb-4">Mobile Access</h2>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tighter mb-6 uppercase">Monitor Your Business <br />From Anywhere</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Stay connected to your business operations 24/7. Our mobile-ready systems allow you to monitor leads, manage conversations, track sales, and handle appointments directly from your smartphone.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {screens.map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => setScreenIndex(i)}
                  className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border transition-all ${
                    screenIndex === i 
                    ? 'border-cyber-blue bg-cyber-blue/10 text-cyber-blue' 
                    : 'border-white/10 bg-cyber-dark/30 text-gray-400 hover:border-white/30'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${screenIndex === i ? 'bg-cyber-blue shadow-[0_0_8px_#00f2ff]' : 'bg-gray-600'}`} />
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest truncate">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="p-4 border border-cyber-blue/20 bg-cyber-blue/5 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyber-blue" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyber-blue mb-1">Active Module:</p>
              <p className="text-lg font-black tracking-tight uppercase">{screens[screenIndex].title}</p>
            </div>
          </motion.div>

          <div className="relative flex justify-center">
            {/* Phone Mockup Container */}
            <div className="relative">
              {/* Physical Buttons */}
              <div className="absolute top-24 -left-[10px] w-[2px] h-10 bg-cyber-gray rounded-l-md" />
              <div className="absolute top-40 -left-[10px] w-[2px] h-16 bg-cyber-gray rounded-l-md" />
              <div className="absolute top-32 -right-[10px] w-[2px] h-20 bg-cyber-gray rounded-r-md" />

              <motion.div 
                onClick={() => setScreenIndex((prev) => (prev + 1) % screens.length)}
                whileTap={{ scale: 0.97 }}
                className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] border-[10px] sm:border-[12px] border-cyber-gray rounded-[40px] sm:rounded-[48px] bg-cyber-dark shadow-[0_0_80px_rgba(0,242,255,0.15)] overflow-hidden neon-border cursor-pointer group"
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-cyber-gray rounded-b-3xl z-30 flex items-center justify-center gap-4">
                  <div className="w-10 h-1 bg-black/20 rounded-full" />
                  <div className="w-2 h-2 bg-black/40 rounded-full" />
                </div>
                
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-10 px-8 flex items-center justify-between z-20 text-[10px] font-bold text-white/80">
                  <span>{currentTime}</span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-1 bg-white/80" />
                      <div className="w-0.5 h-1.5 bg-white/80" />
                      <div className="w-0.5 h-2 bg-white/80" />
                      <div className="w-0.5 h-2.5 bg-white/40" />
                    </div>
                    <div className="w-5 h-2.5 border border-white/40 rounded-[2px] p-[1px] flex items-center">
                      <div className="h-full w-[70%] bg-white/80 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Screen Content - Horizontal Scroll Animation */}
                <div className="absolute inset-0 pt-10 pb-12 overflow-hidden">
                  <motion.div 
                    className="flex h-full"
                    animate={{ x: `-${screenIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {screens.map((screen, idx) => (
                      <div key={idx} className="min-w-full h-full relative">
                        <img 
                          src={`/${screen.img}`} 
                          alt={screen.title} 
                          className="w-full h-full object-cover grayscale brightness-110 contrast-125" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/40 via-transparent to-cyber-dark/80 pointer-events-none" />
                      </div>
                    ))}
                  </motion.div>
                  
                  {/* UI Overlay Elements (Static) */}
                  <div className="absolute bottom-16 left-6 right-6 p-4 border border-white/10 bg-cyber-dark/60 backdrop-blur-md rounded-xl z-20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-cyber-blue/20 flex items-center justify-center text-cyber-blue">
                        {screens[screenIndex].icon}
                      </div>
                      <div>
                        <p className="text-[8px] font-black uppercase tracking-widest text-cyber-blue">Module</p>
                        <p className="text-xs font-black uppercase tracking-tight">{screens[screenIndex].label}</p>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${((screenIndex + 1) / screens.length) * 100}%` }}
                        className="h-full bg-cyber-blue"
                      />
                    </div>
                  </div>

                  {/* Interaction Overlay */}
                  <div className="absolute inset-0 bg-cyber-blue/0 group-hover:bg-cyber-blue/5 transition-colors flex items-center justify-center z-10">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="bg-cyber-dark/80 px-4 py-2 border border-cyber-blue text-[10px] font-black uppercase tracking-widest text-cyber-blue shadow-[0_0_20px_rgba(0,242,255,0.2)]"
                    >
                      Tap to Switch Screen
                    </motion.div>
                  </div>
                </div>

                {/* Navigation Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-12 px-10 flex items-center justify-between z-20 border-t border-white/5 bg-cyber-dark/40 backdrop-blur-sm">
                  <div className="w-3 h-3 border-2 border-white/40 rounded-sm" />
                  <div className="w-3 h-3 border-2 border-white/40 rounded-full" />
                  <div className="w-3 h-3 border-2 border-white/40 rotate-45" />
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full z-30" />
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-40 h-40 border-t-2 border-r-2 border-cyber-blue/10 pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 border-b-2 border-l-2 border-cyber-blue/10 pointer-events-none" />
              
              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-20 top-1/4 p-3 border border-cyber-blue/30 bg-cyber-dark/80 backdrop-blur-md text-[8px] font-black uppercase tracking-widest text-cyber-blue hidden xl:block"
              >
                Real-time Sync
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-24 bottom-1/4 p-3 border border-cyber-blue/30 bg-cyber-dark/80 backdrop-blur-md text-[8px] font-black uppercase tracking-widest text-cyber-blue hidden xl:block"
              >
                Cloud Secure
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isBrowsing, setIsBrowsing] = useState(false);

  const handleNavigate = () => {
    setIsBrowsing(true);
    setTimeout(() => setIsBrowsing(false), 800);
  };

  return (
    <div className="min-h-screen relative text-white selection:bg-cyber-blue selection:text-cyber-dark">
      {/* Background Layer */}
      <TechBackground />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <BrowsingOverlay active={isBrowsing} />
        <Navbar onNavigate={handleNavigate} />
        <Hero />
        <Services />
        <MobileShowcase />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
