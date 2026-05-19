import { motion } from 'motion/react';
import { Play, Search, Filter, Youtube, ChevronRight } from 'lucide-react';

const VIDEOS = [
  { title: "Standing Leg Extension", url: "https://www.youtube.com/watch?v=z5UMoi6srRA", duration: "1:45", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop" },
  { title: "Glute Bridge", url: "https://www.youtube.com/watch?v=--M-_kYH1zX8k", duration: "2:20", img: "https://images.unsplash.com/photo-1517130591467-f9bade69a73a?q=80&w=600&auto=format&fit=crop" },
  { title: "Sidelying Adduction Clam", url: "https://www.youtube.com/watch?v=2n0gTf8nI5w", duration: "1:15", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" },
  { title: "Standing Hip Abduction", url: "https://www.youtube.com/watch?v=pYqCq2tfBMA", duration: "2:50", img: "https://images.unsplash.com/photo-1599058917233-97f3941560bb?q=80&w=600&auto=format&fit=crop" }
];

export default function ExerciseLibrary() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 md:mb-24">
             <div className="lg:col-span-2 px-2">
                <h1 className="text-5xl md:text-9xl font-black mb-6 md:mb-8 leading-[0.8] tracking-tighter uppercase italic">VIDEO <span className="text-red-600">LIBRARY</span></h1>
                <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-xl">Master your form with our comprehensive collection of professional exercise tutorials.</p>
             </div>
             <div className="bg-zinc-900 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border border-white/5 p-6 md:p-8 flex flex-col justify-center gap-6 mx-2">
                <div className="flex items-center gap-4 text-zinc-500 font-black tracking-widest text-[10px] md:text-xs uppercase">
                   <Filter size={18} /> Filter by category
                </div>
                <div className="flex flex-wrap gap-2">
                   {["All", "Strength", "Core", "Legs", "Upper Body", "Mobility"].map(cat => (
                      <button key={cat} className="px-5 py-2 bg-black border border-white/5 rounded-full text-[10px] md:text-xs font-bold hover:bg-red-600 transition-colors uppercase tracking-wider">{cat}</button>
                   ))}
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-2">
            {VIDEOS.map((video, idx) => (
              <motion.div 
                 key={idx}
                 whileHover={{ scale: 1.02 }}
                 className="group relative bg-zinc-900 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                   <img 
                     src={video.img} 
                     alt="" 
                     className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" 
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-red-600/10 group-hover:bg-red-600/30 transition-colors" />
                   <Youtube size={56} className="relative z-10 text-white opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 md:w-16 md:h-16" />
                   <div className="absolute top-4 right-4 bg-black/60 px-2 py-1 rounded text-[10px] font-bold z-10">{video.duration}</div>
                </div>
                <div className="p-6 md:p-8">
                   <h3 className="text-base md:text-lg font-black uppercase mb-4 leading-tight">{video.title}</h3>
                   <button className="flex items-center gap-2 text-red-500 font-black text-[10px] tracking-widest uppercase group-hover:gap-3 transition-all">
                      WATCH NOW <Play size={10} className="fill-red-500" />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Tutorial */}
          <div className="mt-24 md:mt-32 relative h-auto md:h-[500px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 group mx-2">
             <img 
               src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop" 
               alt="Perfect Squat" 
               className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black via-black/60 to-black/20" />
             <div className="relative md:absolute inset-0 flex items-center p-8 md:px-16 py-16 md:py-0">
                <div className="max-w-xl space-y-6 md:space-y-8">
                   <span className="text-red-500 font-black tracking-widest uppercase text-[10px] md:text-xs">Featured Tutorial</span>
                   <h2 className="text-3xl md:text-6xl font-black uppercase leading-tight">Mastering the <br/><span className="text-red-600">Perfect Squat</span></h2>
                   <p className="text-zinc-300 text-sm md:text-base font-medium">Learn the nuances of biomechanics to protect your joints and maximize gains.</p>
                   <button className="bg-red-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-base md:text-lg hover:bg-red-700 transition-all flex items-center gap-3 uppercase tracking-wide">
                      LEARN MORE <ChevronRight size={20} />
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
