import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Bot, Facebook, Send } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Floating Icon */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-cyber-blue rounded-2xl flex items-center justify-center text-cyber-dark shadow-[0_0_20px_rgba(0,242,255,0.5)] border-2 border-white/20"
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </motion.button>

      {/* Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 bg-[#0A0F14] border border-cyber-blue/30 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,242,255,0.2)]"
          >
            {/* Header */}
            <div className="bg-[#111820] p-6 border-b border-cyber-blue/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyber-blue/10 rounded-xl flex items-center justify-center border border-cyber-blue/30 text-cyber-blue">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white tracking-widest uppercase">DMERCH SUPPORT</h3>
                  <div className="flex items-center gap-2 text-[10px] text-cyber-blue font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> AGENT ONLINE
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="p-4 bg-cyber-blue/5 border border-cyber-blue/20 rounded-xl text-xs text-cyber-blue font-bold tracking-wider">
                &gt; NEURAL MESH HANDSHAKE ✓
              </div>
              <div className="p-4 bg-[#111820] border border-white/5 rounded-xl text-sm text-gray-300 leading-relaxed">
                👾 <span className="text-cyber-blue font-bold">DMERCH Bot</span> online. Order updates, product info & license keys — tap below to open a direct line.
              </div>
              
              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 242, 255, 0.9)" }}
                whileTap={{ scale: 0.98 }}
                href="https://m.me/digitalmerch4862"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-cyber-blue text-cyber-dark font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-xl"
              >
                <Send size={16} /> OPEN MESSENGER
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, borderColor: "rgba(0, 242, 255, 1)" }}
                whileTap={{ scale: 0.98 }}
                href="https://www.facebook.com/digitalmerch4862"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-transparent border border-cyber-blue text-cyber-blue font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-xl"
              >
                <Facebook size={16} /> FACEBOOK PAGE
              </motion.a>
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#111820] border-t border-cyber-blue/10 text-center text-[9px] text-gray-500 font-mono tracking-widest uppercase">
              AVG RESPONSE &lt; 2 HRS // DMERCH PROTOCOL
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
