import { motion } from 'motion/react';
import { Target, Users, ShieldCheck, Heart, Award, ArrowRight, Phone, Activity } from 'lucide-react';
import { MISSION_TEXT, SITE_DATA } from '../constants';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            <div className="px-2">
              <span className="text-red-600 font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-4 md:mb-6 block italic">Our Philosophy</span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 md:mb-10 leading-[1] md:leading-[0.9] uppercase italic">BEYOND <br/> THE GYM</h1>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium mb-8 md:mb-10 max-w-xl">
                 {MISSION_TEXT}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <button className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 text-base md:text-lg">
                    START TODAY <ArrowRight size={20} />
                 </button>
                 <a href={`tel:${SITE_DATA.phone}`} className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-center text-base md:text-lg">
                    CALL NOW
                 </a>
              </div>
            </div>
            <div className="relative px-4 md:px-0 mt-8 lg:mt-0">
               <div className="absolute -inset-10 bg-red-600/20 blur-[100px] md:blur-[120px] rounded-full" />
               <img 
                src="https://thebodyfirmaz.com/wp-content/uploads/2015/05/Body-Firm-1-0f-6.jpg-7-of-7.jpg" 
                alt="Our Team" 
                className="relative z-10 w-full h-auto rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl skew-y-0 sm:skew-y-1"
                referrerPolicy="no-referrer"
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-zinc-950 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24 px-4">
             <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase">THE CORE <span className="text-red-600 italic">SYSTEM</span></h2>
             <p className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto">What sets The Body Firm apart isn't just our equipment—it's our uncompromising commitment to your success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[
              { icon: <Target className="text-red-600" />, title: "PROVEN METHODS", text: "We don't follow fads. We use science-backed functional training that gets real results." },
              { icon: <Heart className="text-red-600" />, title: "PERSONAL CARE", text: "You are not a number here. Every workout is tailored to your unique physiology and goals." },
              { icon: <ShieldCheck className="text-red-600" />, title: "CERTIFIED EXPERTS", text: "Our trainers aren't just enthusiasts—they are highly qualified, certified professionals." },
              { icon: <Users className="text-red-600" />, title: "SUPPORTIVE VIBE", text: "Join a community that lifts you up. Positive energy is the foundation of our studio." },
              { icon: <Award className="text-red-600" />, title: "RESULTS GUARANTEED", text: "We track your progress meticulously to ensure you reach the milestones we set together." },
              { icon: <Activity className="text-red-600" />, title: "ALL-LEVEL ACCESS", text: "Whether you're a beginner or an elite athlete, we have a path optimized for you." }
            ].map((v, i) => (
              <div key={i} className="p-8 md:p-10 bg-zinc-900 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] hover:border-red-600/30 transition-all group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-800 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-white/5 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase italic tracking-wide">{v.title}</h3>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
