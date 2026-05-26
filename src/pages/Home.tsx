import { motion } from 'motion/react';
import { Play, Dumbbell, Activity, Users, Trophy, ArrowRight, Star, Quote, ChevronRight } from 'lucide-react';
import { SITE_DATA, WHAT_WE_OFFER, TESTIMONIALS, MISSION_TEXT } from '../constants';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop" 
            alt="Gym Background" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-red-600/20 text-red-500 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] mb-6 border border-red-600/30 uppercase">
              Est. 2007 • Ahwatukee's Premier Studio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tight text-white mb-6 md:mb-8 leading-[1] md:leading-[0.95]">
              TRANSFORM YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">BODY & LIFE</span>
            </h1>
            <p className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium">
              {MISSION_TEXT}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white rounded-full font-bold text-base md:text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-xl shadow-red-600/20 flex items-center justify-center gap-2">
                START YOUR TRIAL
                <ArrowRight size={20} />
              </button>
              <a href="https://youtu.be/UOR2hF5Zbs8?si=8XZ6ivBw2X9fC0gu" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white backdrop-blur-md rounded-full font-bold text-base md:text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 group">
                <Play size={18} className="fill-white" />
                WATCH OUR VIDEO
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 md:py-32 bg-black overflow-hidden px-4 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-6xl font-black mb-6">WHAT THE BODY FIRM <br className="hidden sm:block" /> <span className="text-red-600 underline decoration-2 underline-offset-8">OFFERS</span></h2>
              <p className="text-zinc-500 text-base md:text-lg">We combine proven science with personalized attention to deliver world-class results.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-0">
            {WHAT_WE_OFFER.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative p-6 md:p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] md:rounded-3xl hover:bg-zinc-800 transition-all duration-500"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-red-600/10 text-red-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 border border-red-600/20 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  {idx === 0 && <Dumbbell size={24} className="md:w-7 md:h-7" />}
                  {idx === 1 && <Activity size={24} className="md:w-7 md:h-7" />}
                  {idx === 2 && <Users size={24} className="md:w-7 md:h-7" />}
                  {idx === 3 && <Trophy size={24} className="md:w-7 md:h-7" />}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-red-500 font-bold text-[10px] md:text-xs tracking-widest hover:gap-3 transition-all uppercase">
                  Learn Details <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation & Image Section */}
      <section className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden px-4 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="relative group px-2 md:px-0">
              <div className="absolute -inset-4 bg-red-600 rounded-[2rem] md:rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <div className="relative aspect-video overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl bg-black">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/UOR2hF5Zbs8?autoplay=1&mute=1&loop=1&playlist=UOR2hF5Zbs8" 
                  title="The Body Firm Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: 0 }}
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 absolute -bottom-10 -right-4 md:static">
                 <div className="bg-zinc-900 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 text-center shadow-2xl">
                    <p className="text-2xl md:text-3xl font-black text-red-600 mb-1">17+</p>
                    <p className="text-[10px] font-bold text-zinc-500 tracking-tighter uppercase">Years Exp</p>
                 </div>
                 <div className="bg-zinc-900 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 text-center shadow-2xl">
                    <p className="text-2xl md:text-3xl font-black text-red-600 mb-1">5k+</p>
                    <p className="text-[10px] font-bold text-zinc-500 tracking-tighter uppercase">Transformed</p>
                 </div>
              </div>
            </div>

            <div className="space-y-8 md:space-y-10 mt-12 lg:mt-0 px-2 md:px-0">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase">SIGN UP FOR A <br className="hidden sm:block" /> <span className="text-red-600">FREE FITNESS</span> CONSULTATION</h2>
                <p className="text-zinc-500 text-base md:text-lg leading-relaxed">Let's discuss your goals and build a roadmap to your best self. Our experts are ready when you are.</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-zinc-900 border border-white/5 rounded-xl md:rounded-2xl focus:border-red-600 transition-colors text-white outline-none font-medium text-sm md:text-base" />
                  <input type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-zinc-900 border border-white/5 rounded-xl md:rounded-2xl focus:border-red-600 transition-colors text-white outline-none font-medium text-sm md:text-base" />
                </div>
                <button className="w-full px-8 py-5 bg-red-600 text-white rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3 active:scale-95 uppercase tracking-wide">
                  Claim Free Consultation
                  <ArrowRight size={20} />
                </button>
              </form>
              
              <div className="p-5 md:p-6 bg-red-600/5 border border-red-600/20 rounded-2xl md:rounded-3xl flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                  <Trophy className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <p className="text-xs md:text-sm font-bold text-zinc-300">
                  Are you a Golfer? <span className="text-red-500 underline underline-offset-4 cursor-pointer">Learn about our specialized TPI certified programs <ChevronRight className="inline" size={16} /></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content / Grid */}
      <section className="py-20 md:py-32 bg-black px-4 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20 space-y-4">
             <h2 className="text-3xl md:text-6xl font-black uppercase">News, Recipes & Events</h2>
             <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto">Stay inspired with the latest fitness insights and community happenings from our Ahwatukee studio.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[
              { title: "THE BODY FIRM'S FAVORITE", category: "RECIPES", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
              { title: "THE BODY FIRM'S LATEST", category: "NEWS", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" },
              { title: "THE BODY FIRM'S UPCOMING", category: "EVENTS", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop" }
            ].map((card, i) => (
              <div key={i} className="group relative h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 cursor-pointer">
                <img 
                  src={card.img} 
                  alt={card.category} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:via-black/40 transition-colors" />
                <div className="absolute inset-x-6 md:inset-x-8 bottom-8 md:bottom-10 space-y-4 md:space-y-6">
                  <span className="text-[10px] md:text-xs font-black tracking-widest text-red-500 uppercase">{card.category}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight uppercase">{card.title}</h3>
                  <button className="w-full py-3 md:py-4 bg-white/10 backdrop-blur-md text-white rounded-xl md:rounded-2xl font-bold border border-white/5 hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                    EXPLORE MORE <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-zinc-950 px-4 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-block p-4 bg-red-600/10 rounded-2xl md:rounded-3xl mb-8">
            <Quote size={32} className="md:w-12 md:h-12 text-red-600 fill-red-600/10" />
          </div>
          <h2 className="text-3xl md:text-7xl font-black mb-12 md:mb-16 uppercase tracking-tight">Real World <br className="md:hidden" /> <span className="text-red-600">Results</span></h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-8 md:p-10 bg-zinc-900 border border-white/5 rounded-[2rem] md:rounded-[3rem] relative group hover:border-red-600/30 transition-colors text-left">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="md:w-4 md:h-4 fill-red-600 text-red-600" />)}
                </div>
                <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/20 rounded-lg md:rounded-xl flex items-center justify-center font-black text-red-600 text-sm md:text-base">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg">{t.author}</p>
                    <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Certified Results</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-red-600 px-4 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-5xl font-black text-white mb-4 uppercase leading-tight">WHAT'S YOUR <br className="sm:hidden" /> FITNESS GOAL?</h2>
            <p className="text-red-100 font-bold tracking-wide uppercase text-[10px] md:text-sm">Join the 5,000+ people who have transformed their lives with us.</p>
          </div>
          <button className="w-full md:w-auto px-10 py-5 bg-white text-red-600 rounded-full font-black text-lg md:text-xl hover:bg-zinc-100 transition-all shadow-2xl active:scale-95 uppercase tracking-widest">
            Join The Firm
          </button>
        </div>
      </section>
    </div>
  );
}
