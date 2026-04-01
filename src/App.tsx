import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, MapPin, Mail, Clock, ShieldCheck, Zap, Globe, ChevronRight, Loader2, Facebook, Youtube, Instagram, ShoppingBag, Smartphone, UserPlus, Calendar, Bot, CheckCircle2, ArrowRight } from "lucide-react";
import ChatWidget from "./components/ChatWidget";

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
  ],
  portfolio: [
    { 
      name: "VRRM", 
      url: "https://vrrm.vercel.app/", 
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop", 
      desc: "Real Estate & Property Management System",
      tags: ["Real Estate", "CRM", "Automation"]
    },
    { 
      name: "Huge Bites", 
      url: "https://huge-bites.vercel.app/", 
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", 
      desc: "Food Ordering & Inventory Platform",
      tags: ["E-commerce", "POS", "Inventory"]
    },
    { 
      name: "Cakes by Jai", 
      url: "https://cakes-by-jai.vercel.app/", 
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop", 
      desc: "Bakery Management & Booking System",
      tags: ["Booking", "Portal", "Retail"]
    },
    { 
      name: "Afterwork Coffee", 
      url: "https://afterwork-coffee.vercel.app/", 
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop", 
      desc: "Cafe POS & Loyalty System",
      tags: ["Loyalty", "Analytics", "Mobile"]
    }
  ],
  ghlFeatures: [
    { title: "CRM & Pipelines", icon: <ShieldCheck size={18} /> },
    { title: "Sales Funnels", icon: <Zap size={18} /> },
    { title: "Website Builder", icon: <Globe size={18} /> },
    { title: "Email Marketing", icon: <Mail size={18} /> },
    { title: "SMS Marketing", icon: <MessageSquare size={18} /> },
    { title: "Workflows", icon: <Zap size={18} /> },
    { title: "Appointments", icon: <Clock size={18} /> },
    { title: "Memberships", icon: <ShieldCheck size={18} /> },
    { title: "Reputation", icon: <ShieldCheck size={18} /> },
    { title: "Analytics", icon: <Zap size={18} /> },
    { title: "Mobile App", icon: <Smartphone size={18} /> },
    { title: "Forms/Surveys", icon: <MessageSquare size={18} /> }
  ],
  faqs: [
    {
      question: "What is a 'Custom Business System'?",
      answer: "Unlike a standard website, a custom business system is a tailored platform designed to handle your specific operations—like CRM, automated follow-ups, booking, and inventory—all in one place."
    },
    {
      question: "How long does it take to build a system?",
      answer: "A typical deployment takes between 2 to 4 weeks depending on the complexity of your workflows and the number of integrations required."
    },
    {
      question: "Can I monitor my business on my phone?",
      answer: "Yes! All our systems are mobile-responsive, and we provide a dedicated mobile app so you can manage leads, chats, and sales on the go."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Absolutely. We provide reliable deployment and ongoing technical support to ensure your system grows with your business."
    },
    {
      question: "Can this replace my current tools?",
      answer: "In most cases, yes. Our Go High Level powered systems can replace your CRM, email marketing tool, funnel builder, and booking software, saving you hundreds in monthly subscriptions."
    }
  ],
  testimonials: [
    { name: "John Smith", company: "TechFlow", quote: "DigitalMerch transformed our lead management. The automation is flawless." },
    { name: "Maria Garcia", company: "Bloom & Grow", quote: "The custom booking system saved us 10 hours a week in admin work." },
    { name: "David Chen", company: "Chen Logistics", quote: "Finally, a system that actually scales with us. Highly recommended." },
    { name: "Sarah Johnson", company: "Spark Media", quote: "The CRM integration was seamless. Our sales team is more efficient than ever." },
    { name: "Robert Wilson", company: "Wilson & Co", quote: "Professional, fast, and the support is top-notch. A game changer." },
    { name: "Emily Brown", company: "Pure Wellness", quote: "The mobile app allows me to run my business from anywhere. Incredible." },
    { name: "Michael Lee", company: "Lee Enterprises", quote: "The ROI on this system was immediate. We replaced 4 tools with one." },
    { name: "Jessica Taylor", company: "Taylor Designs", quote: "Beautiful UI and even better functionality. My clients love the portal." },
    { name: "Chris Anderson", company: "Peak Performance", quote: "The automated follow-ups have doubled our conversion rate." },
    { name: "Amanda White", company: "White Star Real Estate", quote: "The real estate CRM they built is the best I've ever used." },
    { name: "Kevin Miller", company: "Miller Tech", quote: "DigitalMerch understands business workflows perfectly." },
    { name: "Laura Davis", company: "Davis Consulting", quote: "The analytics dashboard gives us insights we never had before." },
    { name: "James Wilson", company: "Wilson's Auto", quote: "Our inventory tracking is now 100% accurate thanks to this system." },
    { name: "Sophia Martinez", company: "Martinez Group", quote: "The funnel builder is powerful and easy to use." },
    { name: "Daniel Thompson", company: "Thompson Solutions", quote: "Exceptional service and a truly custom product." }
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
      
      {/* Code Stream Effect */}
      <div className="absolute inset-0 flex justify-around opacity-5 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            initial={{ y: -1000 }}
            animate={{ y: 1000 }}
            transition={{ 
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20
            }}
            className="text-[8px] font-mono whitespace-pre text-cyber-blue leading-none"
          >
            {`01010101\nSYSTEM_INIT\nAUTH_SUCCESS\nDATA_SYNC\nOS_LOADED\n01010101\n`.repeat(20)}
          </motion.div>
        ))}
      </div>
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
          <motion.div 
            animate={{ 
              opacity: [1, 0.5, 1],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="flex items-center gap-2 px-4 py-2 border border-cyber-blue bg-cyber-dark/80 text-cyber-blue text-xs font-black uppercase tracking-[0.3em] neon-border"
          >
            <Loader2 className="animate-spin" size={16} />
            Initializing...
          </motion.div>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            className="h-[1px] bg-cyber-blue/30 overflow-hidden"
          >
            <motion.div 
              animate={{ x: [-200, 200] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-cyber-blue"
            />
          </motion.div>
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
          <a href="#portfolio" onClick={onNavigate} className="hover:text-cyber-blue transition-colors">Portfolio</a>
          <a href="#about" onClick={onNavigate} className="hover:text-cyber-blue transition-colors">Why Us</a>
          <a href="#contact" onClick={onNavigate} className="hover:text-cyber-blue transition-colors">Consultation</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <motion.a 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href={BUSINESS.digitalStore} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyber-blue hover:text-white transition-colors"
            title="Store"
          >
            <ShoppingBag size={20} />
          </motion.a>
          <motion.a 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 242, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${BUSINESS.phone}`}
            className="bg-cyber-blue text-cyber-dark px-4 py-2 font-black text-[10px] tracking-widest transition-all whitespace-nowrap"
          >
            CALL NOW
          </motion.a>
          
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
              <a href="#portfolio" onClick={() => { onNavigate(); setIsMenuOpen(false); }} className="py-2 border-b border-white/5">Portfolio</a>
              <a href="#about" onClick={() => { onNavigate(); setIsMenuOpen(false); }} className="py-2 border-b border-white/5">Why Us</a>
              <a href="#contact" onClick={() => { onNavigate(); setIsMenuOpen(false); }} className="py-2 border-b border-white/5">Consultation</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Hero Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyber-blue/5 rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyber-blue/10 rounded-full border-dashed"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 border border-cyber-blue/30 bg-cyber-blue/5 text-cyber-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <Zap size={12} className="text-cyber-blue animate-pulse" /> SYSTEM ARCHITECTURE & AUTOMATION
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tighter">
            THE <br />
            <motion.span 
              animate={{ opacity: [1, 0.8, 1, 0.9, 1] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.2, 0.8, 1] }}
              className="text-cyber-blue neon-text inline-block"
            >
              OPERATING SYSTEM
            </motion.span> <br />
            FOR YOUR BUSINESS
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            Stop struggling with generic tools. We build <span className="text-white font-bold">custom business systems</span> that automate your workflow, manage your clients, and scale your operations—all in one place.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
            <motion.a 
              href="#contact"
              animate={{ 
                boxShadow: [
                  "0 0 0px rgba(0, 242, 255, 0)",
                  "0 0 25px rgba(0, 242, 255, 0.6)",
                  "0 0 0px rgba(0, 242, 255, 0)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyber-blue text-cyber-dark font-black uppercase tracking-widest hover:bg-white transition-all neon-border group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <ShieldCheck size={20} />
                Build My System
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 z-0"
              />
            </motion.a>

            <motion.a 
              href={BUSINESS.digitalStore}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 242, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-cyber-blue/40 text-cyber-blue font-black uppercase tracking-widest transition-all"
            >
              <ShoppingBag size={20} />
              Digital Store
            </motion.a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex gap-4 sm:gap-6">
            {[
              { href: BUSINESS.facebook, icon: <Facebook size={20} />, title: "Facebook" },
              { href: BUSINESS.youtube, icon: <Youtube size={20} />, title: "YouTube" },
              { href: BUSINESS.instagram, icon: <Instagram size={20} />, title: "Instagram" },
              { href: `mailto:${BUSINESS.email}`, icon: <Mail size={20} />, title: "Email Us" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(0, 242, 255, 1)",
                  color: "#050505",
                  boxShadow: "0 0 15px rgba(0, 242, 255, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue transition-all neon-border bg-cyber-dark/50"
                title={social.title}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block perspective-1000"
        >
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotateZ: [0, 1, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 neon-border p-2 bg-cyber-dark"
          >
            <img 
              src="https://acropolium.com/img/articles/benefits-of-saas/img01.jpg" 
              alt="Custom Business Systems" 
              className="w-full grayscale contrast-125 brightness-75 rounded-sm"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-cyber-blue text-cyber-dark p-6 font-black italic text-4xl shadow-[10px_10px_0px_#000]">
              SaaS
            </div>
          </motion.div>
          
          {/* Decorative Tech Elements */}
          <div className="absolute -top-10 -left-10 w-full h-full border border-cyber-blue/20 -z-10" />
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-cyber-blue/40 -z-10 translate-x-4 -translate-y-4" />
          
          {/* Floating Data Badge */}
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 top-1/2 -translate-y-1/2 p-4 border border-cyber-blue/30 bg-cyber-dark/90 backdrop-blur-md z-20"
          >
            <div className="flex flex-col gap-1">
              <div className="text-[8px] font-black text-cyber-blue uppercase tracking-widest">System Status</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="text-xs font-bold font-mono">OPTIMIZED</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-16">
        <h2 className="text-xs font-bold text-cyber-blue uppercase tracking-[0.4em] mb-4">Our Work</h2>
        <h3 className="text-4xl font-black tracking-tighter">SAMPLE SYSTEMS</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {BUSINESS.portfolio.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="relative aspect-video overflow-hidden border border-white/10 neon-border bg-cyber-dark/50">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-[8px] font-black uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-black mb-2 tracking-tight uppercase">{item.name}</h4>
                <p className="text-gray-400 text-sm mb-6 max-w-md">{item.desc}</p>
                
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-blue text-cyber-dark font-black text-xs uppercase tracking-widest hover:bg-white transition-all"
                >
                  View Live System <ChevronRight size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const GHLFeatures = () => (
  <section className="py-24 relative bg-cyber-blue/5 border-y border-cyber-blue/10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-xs font-bold text-cyber-blue uppercase tracking-[0.4em] mb-4">System Capabilities</h2>
        <h3 className="text-4xl font-black tracking-tighter uppercase">Powered by AI & Advanced Automation</h3>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We leverage the power of AI and advanced automation to build all-in-one systems that replace dozens of expensive subscriptions.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {BUSINESS.ghlFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="p-6 border border-white/5 bg-cyber-dark/40 backdrop-blur-sm flex items-center gap-4 hover:border-cyber-blue/30 transition-colors group"
          >
            <div className="text-cyber-blue group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">{feature.title}</span>
          </motion.div>
        ))}
      </div>
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
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
              cardHover: { 
                y: -10,
                borderColor: "rgba(0, 242, 255, 0.5)",
                backgroundColor: "rgba(0, 242, 255, 0.05)"
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover="cardHover"
            onClick={() => {
              if (idx === 3) {
                document.getElementById('mobile-app')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`p-8 border border-white/10 bg-cyber-dark/40 backdrop-blur-sm transition-all group relative overflow-hidden ${idx === 3 ? 'cursor-pointer' : ''}`}
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-blue/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-blue/30" />
            
            <motion.div 
              variants={{
                cardHover: { 
                  scale: 10.3,
                  borderRadius: "50%",
                  borderColor: "rgba(0, 242, 255, 1)",
                  borderWidth: "2px",
                  backgroundColor: "rgba(0, 242, 255, 1)",
                  color: "#050505",
                  boxShadow: "0 0 20px rgba(0, 242, 255, 0.6), 0 0 40px rgba(0, 242, 255, 0.2)",
                  opacity: 1,
                  filter: "brightness(1.2)",
                  zIndex: 10,
                  cursor: "pointer",
                  outline: "2px solid rgba(0, 242, 255, 0.2)",
                  outlineOffset: "4px",
                  textShadow: "0 0 8px rgba(0, 0, 0, 0.3)"
                }
              }}
              className="w-12 h-12 border border-cyber-blue/30 flex items-center justify-center mb-6 transition-colors"
            >
              <motion.div
                variants={{
                  cardHover: { 
                    scale: [1, 1.15, 1],
                    y: [0, -4, 0],
                    rotate: [0, 5, -5, 0],
                    transition: { 
                      duration: 0.8, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }
                }}
              >
                {idx === 0 ? <Zap size={24} /> : idx === 1 ? <Globe size={24} /> : idx === 2 ? <ShieldCheck size={24} /> : <Smartphone size={24} />}
              </motion.div>
            </motion.div>
            <h4 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-16">
        <h4 className="text-xs font-bold text-cyber-blue uppercase tracking-[0.4em] mb-8 text-center">Systems We Can Build</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {BUSINESS.solutions.map((sol, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: "#00f2ff",
                color: "#00f2ff",
                backgroundColor: "rgba(0, 242, 255, 0.05)"
              }}
              className="p-4 border border-white/5 bg-cyber-dark/30 backdrop-blur-sm text-center text-[10px] font-bold uppercase tracking-widest transition-colors cursor-default"
            >
              {sol}
            </motion.div>
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
        <motion.div 
          whileHover={{ scale: 1.02, rotate: -1 }}
          className="aspect-square neon-border overflow-hidden max-w-md mx-auto lg:mx-0 bg-cyber-dark/60 backdrop-blur-sm group"
        >
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNikF626Q80UkaQ-DPXYh3mTgieBE_KesCg&s" 
            alt="Systems" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-cyber-blue/0 group-hover:bg-cyber-blue/5 transition-colors pointer-events-none" />
        </motion.div>
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

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState("pipeline");
  const [pipelineStage, setPipelineStage] = useState(0);
  const [bookingStep, setBookingStep] = useState(1);
  const [chatMessages, setChatMessages] = useState([
    { role: "system", text: "New Lead Detected: John Doe" }
  ]);

  const stages = ["New Lead", "Contacted", "Meeting Set", "Proposal Sent", "Closed Won"];

  const handleNextStage = () => {
    if (pipelineStage < stages.length - 1) {
      setPipelineStage(prev => prev + 1);
    } else {
      setPipelineStage(0);
    }
  };

  const handleChat = () => {
    const newMsg = { role: "user", text: "I'm interested in your services." };
    setChatMessages(prev => [...prev, newMsg]);
    setTimeout(() => {
      setChatMessages(prev => [...prev, { role: "bot", text: "Hi John! Thanks for reaching out. I've scheduled a follow-up for you tomorrow at 10 AM. Is that okay?" }]);
    }, 1000);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-cyber-dark/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-cyber-blue uppercase tracking-[0.4em] mb-4">Live Experience</h2>
          <h3 className="text-4xl font-black tracking-tighter uppercase">System Simulator</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Experience how our custom systems automate your business workflows in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Controls */}
          <div className="lg:col-span-4 space-y-4">
            {[
              { id: "pipeline", label: "Lead Pipeline", icon: <UserPlus size={20} />, desc: "Automated lead tracking & movement." },
              { id: "booking", label: "Smart Booking", icon: <Calendar size={20} />, desc: "Self-service appointment scheduling." },
              { id: "automation", label: "Auto-Response", icon: <Bot size={20} />, desc: "Instant AI-powered lead engagement." }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full p-6 text-left border transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-cyber-blue/10 border-cyber-blue text-white' 
                    : 'bg-cyber-dark/40 border-white/10 text-gray-400 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className={`${activeTab === tab.id ? 'text-cyber-blue' : 'text-gray-500'}`}>
                    {tab.icon}
                  </div>
                  <span className="font-bold uppercase tracking-widest text-sm">{tab.label}</span>
                </div>
                <p className="text-xs opacity-60 leading-relaxed">{tab.desc}</p>
              </button>
            ))}
          </div>

          {/* Interactive Area */}
          <div className="lg:col-span-8 bg-cyber-dark/60 border border-white/10 p-8 min-h-[400px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === "pipeline" && (
                <motion.div
                  key="pipeline"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-cyber-blue">Sales Pipeline</h4>
                    <button 
                      onClick={handleNextStage}
                      className="text-[10px] uppercase tracking-widest font-bold bg-cyber-blue text-black px-4 py-2 hover:bg-white transition-colors"
                    >
                      Advance Lead
                    </button>
                  </div>

                  <div className="flex gap-4 overflow-x-auto pb-4">
                    {stages.map((stage, idx) => (
                      <div key={stage} className="min-w-[160px] flex-1">
                        <div className={`text-[10px] font-bold uppercase tracking-widest mb-4 pb-2 border-b ${pipelineStage === idx ? 'text-cyber-blue border-cyber-blue' : 'text-gray-600 border-white/5'}`}>
                          {stage}
                        </div>
                        {pipelineStage === idx && (
                          <motion.div
                            layoutId="lead-card"
                            className="bg-white/5 border border-white/10 p-4"
                          >
                            <div className="w-8 h-8 rounded-full bg-cyber-blue/20 flex items-center justify-center text-cyber-blue mb-3">
                              <UserPlus size={14} />
                            </div>
                            <div className="text-xs font-bold mb-1">John Doe</div>
                            <div className="text-[10px] text-gray-500">Custom SaaS Project</div>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "booking" && (
                <motion.div
                  key="booking"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full"
                >
                  <div className="max-w-md mx-auto text-center">
                    {bookingStep === 1 ? (
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-cyber-blue mb-8">Select a Date</h4>
                        <div className="grid grid-cols-7 gap-2 mb-8">
                          {Array.from({ length: 31 }).map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setBookingStep(2)}
                              className="aspect-square flex items-center justify-center text-xs border border-white/5 hover:border-cyber-blue hover:text-cyber-blue transition-colors"
                            >
                              {i + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : bookingStep === 2 ? (
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-cyber-blue mb-8">Select Time</h4>
                        <div className="space-y-2">
                          {["09:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"].map((time) => (
                            <button
                              key={time}
                              onClick={() => setBookingStep(3)}
                              className="w-full p-4 border border-white/10 text-sm hover:border-cyber-blue transition-colors"
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="py-12"
                      >
                        <div className="w-16 h-16 rounded-full bg-cyber-blue/20 flex items-center justify-center text-cyber-blue mx-auto mb-6">
                          <CheckCircle2 size={32} />
                        </div>
                        <h5 className="text-xl font-bold uppercase tracking-tighter mb-2">Booking Confirmed!</h5>
                        <p className="text-sm text-gray-400 mb-8">A confirmation email and SMS have been sent to your device.</p>
                        <button 
                          onClick={() => setBookingStep(1)}
                          className="text-[10px] uppercase tracking-widest font-bold border border-cyber-blue text-cyber-blue px-6 py-3 hover:bg-cyber-blue hover:text-black transition-all"
                        >
                          Book Another
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "automation" && (
                <motion.div
                  key="automation"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex-1 space-y-4 mb-6 overflow-y-auto max-h-[300px] pr-2">
                    {chatMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] p-4 text-xs ${
                          msg.role === 'system' ? 'bg-white/5 text-gray-500 italic' :
                          msg.role === 'user' ? 'bg-cyber-blue text-black font-bold' :
                          'bg-white/10 text-white'
                        }`}>
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={handleChat}
                      className="flex-1 bg-cyber-blue text-black font-bold uppercase tracking-widest text-[10px] py-4 hover:bg-white transition-colors flex items-center justify-center gap-2"
                    >
                      Simulate New Lead Inquiry <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  // Duplicate testimonials for seamless loop
  const scrollItems = [...BUSINESS.testimonials, ...BUSINESS.testimonials];

  return (
    <section className="py-24 relative overflow-hidden bg-cyber-dark/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-xs font-bold text-cyber-blue uppercase tracking-[0.4em] mb-4">Success Stories</h2>
        <h3 className="text-4xl font-black tracking-tighter uppercase">Client Testimonials</h3>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {scrollItems.map((t, i) => (
            <div 
              key={i} 
              className="w-[350px] p-8 bg-cyber-dark/60 border border-white/10 backdrop-blur-sm relative group/card"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-cyber-blue opacity-0 group-hover/card:opacity-100 transition-opacity" />
              <div className="flex items-center gap-1 text-cyber-blue mb-4">
                {[...Array(5)].map((_, i) => <Zap key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 text-sm italic leading-relaxed mb-6 whitespace-normal">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center text-cyber-blue font-black text-xs">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-widest">{t.name}</div>
                  <div className="text-[10px] text-cyber-blue uppercase tracking-widest opacity-70">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient Overlays for Fade Effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cyber-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cyber-dark to-transparent z-10 pointer-events-none" />
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-cyber-blue uppercase tracking-[0.4em] mb-4">Support Center</h2>
          <h3 className="text-4xl font-black tracking-tighter uppercase">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {BUSINESS.faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/10 bg-cyber-dark/40 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${openIndex === idx ? 'text-cyber-blue' : 'text-white group-hover:text-cyber-blue'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="text-cyber-blue"
                >
                  <ChevronRight size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-cyber-dark text-white p-10 neon-border min-h-[600px] relative"
        >
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
        </motion.div>
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
        {[
          { href: BUSINESS.facebook, icon: <Facebook size={20} /> },
          { href: BUSINESS.youtube, icon: <Youtube size={20} /> },
          { href: BUSINESS.instagram, icon: <Instagram size={20} /> },
          { href: `mailto:${BUSINESS.email}`, icon: <Mail size={20} /> }
        ].map((social, i) => (
          <motion.a 
            key={i}
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.2, color: "#00f2ff" }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 transition-colors"
          >
            {social.icon}
          </motion.a>
        ))}
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

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <Phone size={20} />, label: "Call", href: `tel:${BUSINESS.phone}`, color: "bg-green-500" },
    { icon: <ShoppingBag size={20} />, label: "Store", href: BUSINESS.digitalStore, color: "bg-cyber-blue" },
    { icon: <Facebook size={20} />, label: "FB", href: BUSINESS.facebook, color: "bg-blue-600" },
    { icon: <Mail size={20} />, label: "Email", href: `mailto:${BUSINESS.email}`, color: "bg-orange-500" },
  ];

  return (
    <div className="md:hidden fixed bottom-24 right-5 z-[9999] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {menuItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target={item.label === "Call" || item.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className={`flex items-center gap-3 group`}
              >
                <span className="bg-cyber-dark/80 backdrop-blur-md px-3 py-1 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
                <div className={`w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white/20`}>
                  {item.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.3)] border-2 border-cyber-blue/50 transition-all ${
          isOpen ? 'bg-white text-cyber-dark rotate-45' : 'bg-cyber-blue text-cyber-dark'
        }`}
      >
        <Zap size={28} className={isOpen ? 'rotate-45' : ''} />
      </motion.button>
    </div>
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
        <GHLFeatures />
        <Services />
        <Portfolio />
        <InteractiveDemo />
        <Testimonials />
        <MobileShowcase />
        <About />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingMenu />
        <ChatWidget />
      </div>
    </div>
  );
}
