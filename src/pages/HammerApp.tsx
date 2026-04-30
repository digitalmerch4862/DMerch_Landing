import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, AlertTriangle, Languages } from 'lucide-react';

interface HammerContent {
  title: string;
  pros: string[];
  cons: string[]; 
  onlineSupport: string;
  note: string;
  howTo: string;
  geminiLink: string;
  pricing: string;
  features: string;
  support: string;
}

const HammerApp = ({ onBack }: { onBack: () => void }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const content: { en: HammerContent; tl: HammerContent } = {
    en: {
      title: "Hammer App",
      pros: ["Use your own steam account (new/old/main)", "No region restrictions", "Earn Steam Achievements", "Direct Downloads from Steam", "Always Updated with New Titles", "Add Unlimited Games (Storage Permitting)", "No Cracking Required", "Enjoy Fast Steam Downloads", "Organized Library through Steam", "Bypass Steam Regional restrictions", "Access Delisted Games"],
      cons: [
        "Limited Game Support: Not all games are supported, particularly those with secondary DRM protection like Denuvo (e.g., NBA 2K25, Wukong, Undisputed). Games requiring third-party authentication (EA APP, UBI CONNECT, CoD, Rockstar Social) are generally not functional. Note: Rockstar Social games might have a fix.",                
        "Inconsistent. Most games are primarily playable offline. Only 'Palworld' and 'Valheim' have been tested and confirmed online."
      ],
      onlineSupport: "Inconsistent online support.",
      note: "Avoid games with Denuvo/EA APP/Ubi Launcher/CoD/Rockstar Launcher. They might install but won't run properly. Check SteamDB.info for Denuvo status.",
      howTo: "Determine unsupported games: https://streamable.com/41gkta",
      geminiLink: "Use Gemini AI to check games: https://gemini.google.com/",
      pricing: "₱699 for windows users (laptop, pc, handhelds). One app, one device only.",
      features: "Almost all Steam games playable (100k+), except Denuvo games. Token activation required for them.",
      support: "Lifetime access, one-time payment, GC/Discord channel for support and after-sales, freebies included."
    },
    tl: {
      title: "Hammer App",
      pros: ["Gamitin ang sariling steam account (bago/luma/main)", "Walang region restrictions", "Makakuha ng Steam Achievements", "Direct Downloads mula sa Steam", "Laging updated sa mga bagong titulo", "Dagdagan ng unlimited games (kung may storage)", "Hindi na kailangan mag-crack", "Mabilis na Steam Downloads", "Organisadong Library sa Steam", "Bypass Steam Regional restrictions", "Access sa mga Delisted Games"],
      cons: [
        "Limited Game Support: Hindi lahat ng games ay supported, lalo na 'yung may secondary DRM tulad ng Denuvo (halimbawa: NBA 2K25, Wukong, Undisputed). Ang mga games na nangangailangan ng third-party auth (EA APP, UBI CONNECT, CoD, Rockstar Social) ay kadalasang hindi gumagana. *May fix para sa Rockstar Social games.",
        "Inconsistent ang online mode. Instalasyon ay posible, pero karamihan ay playable offline lang. 'Palworld' at 'Valheim' pa lang ang tested at confirmed online."
      ],
      onlineSupport: "Inconsistent online support.",
      note: "Iwasan ang mga games na may Denuvo/EA APP/Ubi Launcher/CoD/Rockstar Launcher. Pwedeng ma-install pero hindi tatakbo ng maayos. I-check ang SteamDB.info para sa Denuvo status.",
      howTo: "Paano alamin kung hindi supported ang game: https://streamable.com/41gkta",
      geminiLink: "Gamitin ang Gemini AI para i-check ang mga games: https://gemini.google.com/",
      pricing: "₱699 para sa windows users (laptop, pc, handhelds). Isang app, isang device lang.",
      features: "Halos lahat ng Steam games playable (100k+), maliban sa mga Denuvo games. Kailangan ng token activation para doon.",
      support: "Lifetime access, one-time payment, may GC at discord channel, may support at aftersales na may freebies."
    }
  };

  const activeContent = isEnglish ? content.en : content.tl;

  return (
    <div className="min-h-screen bg-cyber-dark text-white p-8 font-sans">
      <button onClick={onBack} className="flex items-center gap-2 text-cyber-blue hover:text-white transition mb-8">
        <ArrowLeft /> Back to Home
      </button>

      <div className="max-w-4xl mx-auto border border-cyber-blue/30 bg-cyber-gray/30 p-8 rounded-lg shadow-[0_0_20px_rgba(0,242,255,0.1)]">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black text-cyber-blue uppercase tracking-tighter">{activeContent.title}</h1>
          <button onClick={() => setIsEnglish(!isEnglish)} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded">
            <Languages size={18} /> {isEnglish ? "Taglish" : "English"}
          </button>
        </div>

        <p className="text-gray-400 mb-4 text-sm font-semibold uppercase tracking-wider">Watch this video how it works</p>
        
        <div className="w-full mb-6" style={{position:'relative', width:'100%', height:'0', paddingBottom:'56.250%'}}>
           <iframe 
             allow="fullscreen" 
             allowFullScreen 
             height="100%" 
             src="https://streamable.com/e/31x08q?" 
             width="100%" 
             style={{border:'none', width:'100%', height:'100%', position:'absolute', left:'0px', top:'0px', overflow:'hidden'}}
           ></iframe>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-cyber-blue/30 mb-8">
          <div className="mt-6 flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-2">Scan to Pay via GCash:</p>
            <img src="/GCASH.jpeg" alt="Scan this GCash QR code to pay for your app activation." className="max-w-xs h-auto border border-cyber-blue/30 rounded" />
            <p className="text-xs mt-2 text-gray-500 mb-6">Please make sure to send proof of payment</p>
          </div>


          <h2 className="text-2xl font-bold mb-4 text-white">How to Activate your App</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Download & Install the Hammer App. <a href="https://drive.google.com/file/d/1ln7IFrq2KBQllHHrj56e31fJQTRQmJ-E/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-cyber-blue underline font-bold" title="Click here to download the Hammer App">Click here to Download</a>.</li>
            <li>Launch the app to get your Registration Code.</li>
            <li>Scan the GCash QR code above to make your payment.</li>
            <li>Send the Registration Code and your payment proof to our AI Chatbot (click the icon in the corner).</li>
            <li>Send your email address to the chatbot to receive the activation notification.</li>
            <li>Once verified, we will activate your device!</li>
          </ol>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-cyber-blue/30 mb-8 mt-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
          <div className="space-y-2 text-gray-300">
            <p>Website: <a href="https://digitalmerchs.store/" target="_blank" rel="noopener noreferrer" className="text-cyber-blue underline">https://digitalmerchs.store/</a></p>
            <p>FB: <a href="https://www.facebook.com/dm.garcia.846856#" target="_blank" rel="noopener noreferrer" className="text-cyber-blue underline">DM Garcia</a></p>
            <p>Email: <a href="mailto:digitalmerch4862@gmail.com" className="text-cyber-blue underline">digitalmerch4862@gmail.com</a></p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8" role="list">
          <section aria-labelledby="pros-heading">
            <h2 id="pros-heading" className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-500">PROS</h2>
            <ul className="space-y-3" role="list">
              {activeContent.pros.map((pro, i) => <li key={i} className="flex items-start gap-2"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> {pro}</li>)}
            </ul>
          </section>
          <section aria-labelledby="cons-heading">
            <h2 id="cons-heading" className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-500">CONS</h2>
            <ul className="space-y-4" role="list">
              {activeContent.cons.map((con, i) => (
                  <li key={i} className="bg-red-950/20 p-4 rounded border border-red-900/50">
                    <p className="flex gap-2"><AlertTriangle className="text-red-500 shrink-0" size={18} /> {con}</p>
                  </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="bg-yellow-950/20 p-4 rounded border border-yellow-900/50 mb-8">
          <p className="font-bold text-yellow-500">NOTE:</p>
          <p>
            {activeContent.note.split('SteamDB.info')[0]}
            <a href="https://steamdb.info" target="_blank" rel="noopener noreferrer" className="text-white underline">SteamDB.info</a>
            {activeContent.note.split('SteamDB.info')[1]}
          </p>
          <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="block text-cyber-blue underline mt-2">{activeContent.geminiLink}</a>
        </div>

        <div className="space-y-4">
          <a href="https://streamable.com/41gkta" target="_blank" rel="noopener noreferrer" className="block text-cyber-blue underline">{activeContent.howTo}</a>
          <p className="text-xl font-bold text-cyber-blue">{activeContent.pricing}</p>
          <p>{activeContent.features}</p>
          <p className="font-semibold">{activeContent.support}</p>
        </div>
      </div>
    </div>
  );
};

export default HammerApp;
