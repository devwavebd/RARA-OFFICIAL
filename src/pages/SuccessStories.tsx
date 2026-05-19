import { motion } from 'motion/react';
import { Star, Quote, ArrowRight, TrendingUp, Heart, Trophy } from 'lucide-react';

const STORIES = [
  {
    name: "Katherine & Jim",
    quote: "Jim and Katherine intend to continue working out at the Body Firm until, as they put effectively, 'death prevents us from getting there.' Jim likes the personal attention and enthusiastic support he gets from the trainers at the gym.",
    stats: "Lost 45 lbs combined",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Chris D.",
    quote: "I love this place! I was able to get one on one training from people that KNOW what they're doing. Through my workouts and nutrition plan, I lost 45 lbs and most importantly learned how to live a healthy lifestyle.",
    stats: "45 lbs lost",
    img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Jonanda Duvenhage",
    quote: "I joined the Body Firm 18 months ago and can honestly say that I’ve never been fitter or stronger than I am now.",
    stats: "Peak fitness achieved",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
  }
];

export default function SuccessStories() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-red-600/5 blur-[100px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 md:mb-32 px-4">
             <h1 className="text-5xl md:text-9xl font-black mb-6 md:mb-8 leading-[0.8] tracking-tighter uppercase italic">SUCCESS <span className="text-red-600 italic">STORIES</span></h1>
             <p className="text-lg md:text-xl text-zinc-500 max-w-3xl mx-auto font-medium">Real transformations from real people in our community. Your journey starts with their inspiration.</p>
          </div>

          <div className="space-y-24 md:space-y-40">
             {STORIES.map((story, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 100 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 1 }}
                   className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-20 items-center px-2`}
                >
                   <div className="w-full lg:w-1/2 group">
                      <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
                         <img 
                           src={story.img} 
                           alt={story.name} 
                           className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                           referrerPolicy="no-referrer"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                         <div className="absolute bottom-6 inset-x-6 md:bottom-10 md:inset-x-10 flex gap-4 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                             <div className="flex-1 p-4 md:p-6 bg-red-600 rounded-[1.5rem] md:rounded-[2rem] text-center shadow-xl">
                                <TrendingUp size={24} className="mx-auto text-white mb-2" />
                                <p className="text-white font-black text-lg md:text-xl">{story.stats}</p>
                             </div>
                          </div>
                      </div>
                   </div>

                   <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
                      <div className="bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 relative">
                         <Quote size={48} className="absolute -top-4 -left-4 md:-top-8 md:-left-8 text-red-600/20 fill-red-600/5 md:w-16 md:h-16" />
                         <div className="flex gap-1 mb-6 md:mb-8">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-red-600 text-red-600 md:w-[18px] md:h-[18px]" />)}
                         </div>
                         <p className="text-xl md:text-3xl text-zinc-200 font-medium leading-relaxed italic mb-8 md:mb-10">
                            "{story.quote}"
                         </p>
                         <div className="flex items-center gap-4 md:gap-6 border-t border-white/5 pt-8">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-2xl md:rounded-3xl flex items-center justify-center font-black text-white text-2xl md:text-3xl shrink-0">
                               {story.name[0]}
                            </div>
                            <div>
                               <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight leading-tight">{story.name}</h3>
                               <p className="text-red-500 font-black text-[10px] md:text-xs tracking-[0.3em] uppercase">Verified Transformation</p>
                            </div>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                         <div className="p-6 md:p-8 bg-zinc-900 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] flex items-center gap-4 md:gap-6 group hover:border-red-600/30 transition-all">
                            <Heart className="text-red-600 shrink-0 md:w-8 md:h-8" size={28} />
                            <div>
                               <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Health Gain</p>
                               <p className="text-white font-bold text-base md:text-lg">Improved Life</p>
                            </div>
                         </div>
                         <div className="p-6 md:p-8 bg-zinc-900 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] flex items-center gap-4 md:gap-6 group hover:border-red-600/30 transition-all">
                            <Trophy className="text-red-600 shrink-0 md:w-8 md:h-8" size={28} />
                            <div>
                               <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Achievement</p>
                               <p className="text-white font-bold text-base md:text-lg">Goal Reached</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 bg-zinc-950 text-center px-4 md:px-0">
         <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-8xl font-black uppercase mb-8 md:mb-12 italic leading-[1] md:leading-[0.85] px-2">BE THE NEXT <br/><span className="text-red-600">INSPIRATION</span></h2>
            <button className="bg-red-600 text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-black text-lg md:text-xl hover:bg-red-700 transition-all flex items-center gap-4 mx-auto hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/20 uppercase tracking-widest">
               START YOUR STORY <ArrowRight size={24} />
            </button>
         </div>
      </section>
    </div>
  );
}
