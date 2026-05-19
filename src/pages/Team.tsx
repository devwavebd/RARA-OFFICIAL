import { motion } from 'motion/react';
import { Mail, Github, Twitter, Linkedin, Instagram, Phone, Award, Facebook } from 'lucide-react';

const TEAM = [
  {
    name: "DOUG & TORI THOMPSON",
    role: "OWNERS / PERSONAL TRAINERS",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    desc: "Doug and Tori Thompson are passionate about helping others in reaching their individual fitness goals! Doug has been in the health and fitness industry for nearly 20 years. Tori enjoys leading several groups annually toward their weight loss goals via the Body Firm’s Weight Loss Challenges."
  },
  {
    name: "SANDY JOHNSON",
    role: "PERSONAL TRAINER",
    img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=800&auto=format&fit=crop",
    desc: "Sandy has been in the health and fitness industry for nearly 40 years! Sandy teaches and lives fitness with energy and enthusiasm. Sandy has a passion to coach and empower others to enrich their health."
  },
  {
    name: "STACI WEGSCHEID",
    role: "PERSONAL TRAINER",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
    desc: "Becoming a certified Personal Trainer from the National Academy of Sports Medicine (NASM) aligns perfectly with Staci’s passion for helping people improve their health and well-being. Staci is dedicated to helping her clients in a safe, supportive environment."
  },
  {
    name: "ADAM KARAFFA",
    role: "PERSONAL TRAINER",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=800&auto=format&fit=crop",
    desc: "Adam brings both professional expertise and personal experience to his role as a personal trainer. He holds an Associate’s Degree in Exercise Science, is a Certified Personal Trainer through the National Strength and Conditioning Association (NSCA)."
  }
];

export default function Team() {
  return (
    <div className="pt-24 min-h-screen bg-black overflow-hidden">
      {/* Dynamic Background Text */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 text-7xl sm:text-[20vw] font-black text-white/5 uppercase select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter italic">
        E L I T E • S Q U A D
      </div>

      <section className="py-20 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10">
              <div className="max-w-2xl px-2">
                 <h1 className="text-5xl md:text-9xl font-black mb-6 md:mb-8 leading-[0.8] tracking-tighter uppercase italic">OUR <span className="text-red-600">EXPERTS</span></h1>
                 <p className="text-lg md:text-xl text-zinc-400 font-medium">Meet the world-class professionals dedicated to your evolution.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
              {TEAM.map((member, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    className="group"
                 >
                    <div className="flex flex-col sm:flex-row gap-8 md:gap-10">
                       <div className="w-full sm:w-64 md:w-72 h-[450px] sm:h-96 relative shrink-0 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border border-white/5">
                          <img 
                            src={member.img} 
                            alt={member.name} 
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors" />
                          <div className="absolute bottom-6 left-6 right-6 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                             {[Instagram, Facebook, Mail].map((Icon, i) => (
                                <button key={i} className="flex-1 p-3 bg-black/60 backdrop-blur-md rounded-2xl text-white hover:bg-red-600 transition-colors">
                                   <Icon size={18} className="mx-auto" />
                                </button>
                             ))}
                          </div>
                       </div>
                       <div className="flex flex-col justify-center space-y-6 px-2">
                          <div className="space-y-2">
                             <span className="text-red-600 font-black tracking-widest text-[10px] md:text-xs uppercase italic">{member.role}</span>
                             <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase group-hover:italic transition-all">{member.name}</h2>
                          </div>
                          <div className="h-px w-20 bg-red-600 group-hover:w-full transition-all duration-700" />
                          <p className="text-zinc-500 text-sm md:text-base leading-relaxed">{member.desc}</p>
                          <div className="flex flex-wrap gap-3 pt-2">
                             <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black tracking-widest text-zinc-300 uppercase bg-zinc-900 px-4 py-2 rounded-full border border-white/5">
                                <Award size={12} className="text-red-600" /> TOP RATED
                             </div>
                             <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black tracking-widest text-zinc-300 uppercase bg-zinc-900 px-4 py-2 rounded-full border border-white/5">
                                <Award size={12} className="text-red-600" /> CERTIFIED
                             </div>
                          </div>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 md:py-40 bg-zinc-950 text-center relative overflow-hidden px-4 md:px-0">
         <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-red-600/10 blur-[120px] md:blur-[150px] rounded-full" />
         <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            <h3 className="text-2xl md:text-6xl font-black uppercase italic leading-[1.1] md:leading-[0.95] mb-10 md:mb-12 px-2">"WE ARE DEDICATED TO MAKING YOU HEALTHIER WITH A BETTER QUALITY OF LIFE"</h3>
            <p className="text-red-600 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-xs md:text-sm italic">— THE BODY FIRM MISSION</p>
         </div>
      </section>
    </div>
  );
}
