import { motion } from 'motion/react';
import { Utensils, Clock, Flame, ChevronRight, Apple, Beef, Salad } from 'lucide-react';

const RECIPES = [
  {
    title: "Cucumber Tomato Herb Salad",
    tags: ["Appetizers", "Low Carb", "Vegetarian"],
    desc: "A simple salad for any time of the year, and a great way to enjoy fresh veggies from your garden or anyone else's! It’s so [...]",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Take Me With You Trail Mix",
    tags: ["Breakfast", "Desserts", "Snacks"],
    desc: "There are tons of trail mix recipes in the world - here’s one more! Ingredients 3/4 cup raw pecans (optional: toast in the oven for 10 mins [...]",
    img: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Spinach, Artichoke and Yogurt Dip",
    tags: ["Appetizers", "Vegetarian"],
    desc: "Who doesn’t love this classic but wants a healthier version? The essential features of a spinach and artichoke dip are fixed: tender spinach, textural artichokes, [...]",
    img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Grilled Shrimp with Spicy Slaw",
    tags: ["Seafood", "Mediterranean"],
    desc: "Lightly charred, citrusy grilled shrimp are the star of this quick slaw made from a pile of thinly sliced, crunchy green cabbage tossed with a [...]",
    img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Recipes() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6 relative">
              <h1 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-none opacity-5 md:opacity-10 absolute left-1/2 -translate-x-1/2 -top-10 md:-top-10 whitespace-nowrap pointer-events-none select-none">FUEL YOUR BODY</h1>
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase relative pt-4 md:pt-0">THE FIRM'S <span className="text-red-600 italic">FAVORITES</span></h2>
              <p className="text-base md:text-xl text-zinc-500 max-w-2xl mx-auto px-4 font-medium">Delicious, performance-focused recipes curated by our nutritional experts.</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              {RECIPES.map((recipe, idx) => (
                 <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="flex flex-col md:flex-row bg-zinc-900 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border border-white/5 hover:border-red-600/30 transition-all group shadow-xl"
                 >
                    <div className="w-full md:w-56 h-64 md:h-auto shrink-0 relative overflow-hidden">
                       <img 
                         src={recipe.img} 
                         alt="" 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                         referrerPolicy="no-referrer"
                       />
                       <div className="absolute top-4 left-4">
                          <button className="p-2.5 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-red-600 transition-colors shadow-lg">
                             <Heart size={18} />
                          </button>
                       </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                       <div className="flex flex-wrap gap-2 mb-4">
                          {recipe.tags.map(tag => (
                             <span key={tag} className="text-[10px] md:text-[11px] font-black tracking-widest text-zinc-400 uppercase bg-zinc-800 px-4 py-1.5 rounded-full border border-white/10">{tag}</span>
                          ))}
                       </div>
                       <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase group-hover:text-red-600 transition-colors leading-tight">{recipe.title}</h3>
                       <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 font-medium">{recipe.desc}</p>
                       <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                          <div className="flex gap-4 text-[10px] md:text-xs font-bold text-zinc-600 uppercase tracking-widest">
                             <span className="flex items-center gap-1.5"><Clock size={14} className="text-red-600" /> 20m</span>
                             <span className="flex items-center gap-1.5"><Flame size={14} className="text-red-600" /> 320cal</span>
                          </div>
                          <button className="text-red-500 font-black text-[10px] md:text-xs tracking-widest group-hover:gap-3 transition-all flex items-center gap-2 uppercase">
                             VIEW <ChevronRight size={14} />
                          </button>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}

const Heart = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);
