import { motion } from 'motion/react';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const POSTS = [
  {
    title: "Ahwatukee fitness studio combats 'resolution fatigue'",
    date: "May 9th, 2026",
    category: "News",
    excerpt: "February 27, 2025 Ahwatukee Foothills News According to OnePoll, nearly 45 percent of Americans make New Year’s resolutions to start and stick with an exercise...",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Ahwatukee fitness studio focuses on balance",
    date: "May 9th, 2026",
    category: "Newsletter",
    excerpt: "October 1, 2025 Ahwatukee Foothills News Among the many programs for building a more physically fit life, the need to improve balance, stability, and coordination...",
    img: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Trainer considers stretching a core fitness practice",
    date: "May 9th, 2026",
    category: "Newsletter",
    excerpt: "Ahwatukee Foothills News May 6, 2026 Whether you're an athlete, someone with a sedentary lifestyle, or somewhere in between, stretching can play a crucial role...",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function News() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-20">
            <div className="max-w-3xl px-2">
               <h1 className="text-5xl md:text-9xl font-black mb-6 md:mb-8 leading-[0.8] tracking-tighter uppercase italic">LATEST <span className="text-red-600">NEWS</span></h1>
               <p className="text-lg md:text-xl text-zinc-400 font-medium">Insights, updates, and stories from the heart of Ahwatukee fitness.</p>
            </div>
            <div className="relative w-full md:w-96 px-2">
               <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-zinc-600" size={20} />
               <input type="text" placeholder="Search articles..." className="w-full bg-zinc-900 border border-white/5 rounded-full py-4 pl-14 pr-6 focus:border-red-600 outline-none transition-all text-sm" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Featured Post */}
            <div className="lg:col-span-2 group cursor-pointer px-2">
              <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 mb-8 md:mb-10 shadow-2xl">
                <img 
                  src={POSTS[0].img} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12">
                   <span className="px-4 py-1.5 bg-red-600 text-white rounded-full text-[10px] font-black tracking-widest uppercase mb-4 md:mb-6 block w-fit">{POSTS[0].category}</span>
                   <h2 className="text-2xl md:text-6xl font-black text-white hover:text-red-500 transition-colors uppercase leading-tight">{POSTS[0].title}</h2>
                </div>
              </div>
            </div>

            {/* Sub Posts */}
            {POSTS.slice(1).map((post, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col sm:flex-row gap-8 md:gap-10 items-center px-2">
                 <div className="w-full sm:w-64 h-64 shrink-0 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5">
                    <img 
                      src={post.img} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" 
                      referrerPolicy="no-referrer"
                    />
                 </div>
                 <div className="space-y-4 px-2">
                    <div className="flex gap-4 text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
                       <span className="flex items-center gap-2"><Calendar size={12} /> {post.date}</span>
                       <span className="flex items-center gap-2 text-red-500"><User size={12} /> BodyFirm</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-red-600 transition-colors uppercase leading-tight">{post.title}</h3>
                    <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed font-medium">{post.excerpt}</p>
                    <button className="flex items-center gap-2 text-red-500 font-black text-[10px] md:text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all">
                       READ FULL STORY <ArrowRight size={16} />
                    </button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
