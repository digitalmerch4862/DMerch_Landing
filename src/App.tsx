import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, MapPin, Mail, Clock, ShieldCheck, Zap, Globe, ChevronRight, Loader2, Facebook, Youtube, Instagram } from "lucide-react";

const BUSINESS = {
  name: "DigitalMerch",
  tagline: "Custom Business Systems & Web App Development",
  logo: "https://digitalmerchs.store/android-chrome-512x512.png",
  city: "Cabuyao, Laguna",
  address: "Cabuyao, Laguna, Philippines",
  phone: "+63 900 000 0000",
  whatsapp: "+63 900 000 0000",
  email: "digitalmerch4862@gmail.com",
  facebook: "https://www.facebook.com/digitalmerch4862/",
  youtube: "https://youtube.com/@digitalmerch-sy7yt?si=c8VCo5afd47Rf5Df",
  instagram: "https://www.instagram.com/digitalmerch4862/",
  mapsLink: "https://goo.gl/maps/example",
  hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  description: "We help businesses build powerful digital systems tailored to their exact needs. With expertise in Go High Level, website deployment, and custom SaaS development, we create solutions that automate processes and support growth.",
  mainServices: [
    { title: "Custom Business Systems", desc: "SaaS and cloud-based platforms designed specifically for your unique workflow and operations." },
    { title: "Web App Development", desc: "Powerful, scalable web applications built with modern stacks to solve complex business problems." },
    { title: "Automation & CRM", desc: "Streamline your sales pipeline and client management with Go High Level and custom integrations." }
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

const Navbar = ({ onNavigate }: { onNavigate: () => void }) => (
  <nav className="fixed top-0 w-full z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-blue/20">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="text-cyber-blue font-bold text-xl tracking-tighter flex items-center gap-3">
        <img 
          src={BUSINESS.logo} 
          alt="DigitalMerch Logo" 
          className="w-10 h-10 object-contain neon-border p-1 bg-cyber-dark"
          referrerPolicy="no-referrer"
        />
        <span className="hidden sm:inline">DIGITALMERCH</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#services" onClick={onNavigate} className="hover:text-cyber-blue transition-colors">Solutions</a>
        <a href="#about" onClick={onNavigate} className="hover:text-cyber-blue transition-colors">Why Us</a>
        <a href="#contact" onClick={onNavigate} className="hover:text-cyber-blue transition-colors">Consultation</a>
      </div>
      <a 
        href={`tel:${BUSINESS.phone}`}
        className="bg-cyber-blue text-cyber-dark px-4 py-2 text-xs font-bold uppercase tracking-tighter hover:bg-white transition-colors"
      >
        Call Now
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0 cyber-grid opacity-20" />
    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl" />
    
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
          <span className="text-cyber-blue neon-text">OPERATING SYSTEM</span> <br />
          FOR YOUR BUSINESS
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
          {BUSINESS.description}
        </p>
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
  <section id="services" className="py-24 bg-cyber-gray/30">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-16">
        <h2 className="text-xs font-bold text-cyber-blue uppercase tracking-[0.4em] mb-4">What We Offer</h2>
        <h3 className="text-4xl font-black tracking-tighter">CUSTOM SOLUTIONS</h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {BUSINESS.mainServices.map((service, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="p-8 border border-white/10 bg-cyber-dark hover:border-cyber-blue/50 transition-all group"
          >
            <div className="w-12 h-12 border border-cyber-blue/30 flex items-center justify-center mb-6 group-hover:bg-cyber-blue group-hover:text-cyber-dark transition-colors">
              {idx === 0 ? <Zap size={24} /> : idx === 1 ? <Globe size={24} /> : <ShieldCheck size={24} />}
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
            <div key={idx} className="p-4 border border-white/5 bg-cyber-dark/50 text-center text-[10px] font-bold uppercase tracking-widest hover:border-cyber-blue transition-colors">
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
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center"
    >
      <div className="order-2 lg:order-1 relative">
        <div className="aspect-square neon-border overflow-hidden max-w-md mx-auto lg:mx-0 bg-cyber-dark">
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
              <ChevronRight size={16} className="text-cyber-blue" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-cyber-blue">
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
              <div className="w-12 h-12 border-2 border-cyber-dark flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Email Us</p>
                <p className="text-xl font-black">{BUSINESS.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border-2 border-cyber-dark flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Hours</p>
                <p className="text-xl font-black">{BUSINESS.hours}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-cyber-dark text-white p-10 neon-border min-h-[600px]">
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

export default function App() {
  const [isBrowsing, setIsBrowsing] = useState(false);

  const handleNavigate = () => {
    setIsBrowsing(true);
    setTimeout(() => setIsBrowsing(false), 800);
  };

  return (
    <div className="min-h-screen">
      <BrowsingOverlay active={isBrowsing} />
      <Navbar onNavigate={handleNavigate} />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
