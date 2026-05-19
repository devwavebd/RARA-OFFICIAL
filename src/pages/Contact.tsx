import { motion } from 'motion/react';
import { SITE_DATA } from '../constants';
import { Phone, Mail, MapPin, Instagram, Facebook, Send, Heart } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-10 md:space-y-12 animate-in fade-in slide-in-from-left duration-700 px-2">
              <div>
                <h1 className="text-5xl md:text-9xl font-black mb-6 md:mb-8 leading-[0.8] tracking-tighter uppercase italic">GET IN <span className="text-red-600">TOUCH</span></h1>
                <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
                  Ready to take the first step toward your transformation? We're here to answer every question and help you get started.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:gap-8">
                 <div className="flex gap-5 md:gap-6 group">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-900 rounded-2xl md:rounded-3xl flex items-center justify-center border border-white/5 group-hover:bg-red-600 transition-colors duration-500 shrink-0">
                       <Phone className="text-red-600 group-hover:text-white md:w-7 md:h-7" size={24} />
                    </div>
                    <div>
                       <p className="text-zinc-500 text-[10px] font-bold tracking-widest mb-1 uppercase">Call Us</p>
                       <p className="text-xl md:text-2xl font-bold text-white tracking-tight">{SITE_DATA.phone}</p>
                    </div>
                 </div>
                 <div className="flex gap-5 md:gap-6 group">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-900 rounded-2xl md:rounded-3xl flex items-center justify-center border border-white/5 group-hover:bg-red-600 transition-colors duration-500 shrink-0">
                       <Mail className="text-red-600 group-hover:text-white md:w-7 md:h-7" size={24} />
                    </div>
                    <div>
                       <p className="text-zinc-500 text-[10px] font-bold tracking-widest mb-1 uppercase">Email Us</p>
                       <p className="text-xl md:text-2xl font-bold text-white tracking-tight">hello@thebodyfirm.fit</p>
                    </div>
                 </div>
                 <div className="flex gap-5 md:gap-6 group">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-900 rounded-2xl md:rounded-3xl flex items-center justify-center border border-white/5 group-hover:bg-red-600 transition-colors duration-500 shrink-0">
                       <MapPin className="text-red-600 group-hover:text-white md:w-7 md:h-7" size={24} />
                    </div>
                    <div>
                       <p className="text-zinc-500 text-[10px] font-bold tracking-widest mb-1 uppercase">Visit Us</p>
                       <p className="text-xl md:text-2xl font-bold text-white tracking-tight">Ahwatukee, AZ 85044</p>
                    </div>
                 </div>
              </div>

              <div className="flex gap-4">
                 {[Facebook, Instagram, Send].map((Icon, i) => (
                    <button key={i} className="p-4 bg-zinc-900 border border-white/5 rounded-2xl hover:bg-red-600 hover:scale-110 transition-all">
                       <Icon size={20} className="text-white md:w-6 md:h-6" />
                    </button>
                 ))}
              </div>
            </div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-zinc-900 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 relative shadow-2xl overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Heart size={300} className="text-red-600 fill-red-600" />
               </div>
               
               <h3 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 leading-tight uppercase relative z-10 px-2">SEND A MESSAGE</h3>
               
               <form className="space-y-6 relative z-10 px-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-500 tracking-[0.2em] uppercase ml-4">Full Name</label>
                        <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 focus:border-red-600 outline-none transition-all placeholder:text-zinc-700 text-sm md:text-base text-white" placeholder="John Doe" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-500 tracking-[0.2em] uppercase ml-4">Email Address</label>
                        <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 focus:border-red-600 outline-none transition-all placeholder:text-zinc-700 text-sm md:text-base text-white" placeholder="john@example.com" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-zinc-500 tracking-[0.2em] uppercase ml-4">Phone Number</label>
                     <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 focus:border-red-600 outline-none transition-all placeholder:text-zinc-700 text-sm md:text-base text-white" placeholder="(480) 000-0000" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-zinc-500 tracking-[0.2em] uppercase ml-4">Inquiry Type</label>
                     <select className="w-full bg-black/50 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 focus:border-red-600 outline-none transition-all text-zinc-400 text-sm md:text-base">
                        <option>General Inquiry</option>
                        <option>Personal Training</option>
                        <option>Transformation Challenge</option>
                        <option>Golf Fitness</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-zinc-500 tracking-[0.2em] uppercase ml-4">Your Message</label>
                     <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl md:rounded-2xl px-6 py-4 focus:border-red-600 outline-none transition-all placeholder:text-zinc-700 text-sm md:text-base text-white" placeholder="Tell us about your goals..." />
                  </div>
                  <button className="w-full bg-red-600 py-5 md:py-6 rounded-xl md:rounded-2xl text-white font-black text-lg md:text-xl hover:bg-red-700 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-red-600/20 uppercase tracking-widest">
                     SEND MESSAGE
                  </button>
               </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-24 bg-zinc-950 px-4 md:px-0">
         <div className="max-w-7xl mx-auto px-2 md:px-6">
            <div className="h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 relative grayscale group">
               <div className="absolute inset-0 bg-red-600/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106604.42879590!2d-112.07446!3d33.30616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b05eed0a8f8d9%3A0x86134b281f62c5b!2zQWh3YXR1a2VlIEZvb3RoaWxscywgUGhvZW5peCwgQVosIFVTQQ!5e0!3m2!1sen!2sus!4v1716100000000!5m2!1sen!2sus" 
                className="w-full h-full border-0" 
                allowFullScreen={true}
                loading="lazy" 
               />
            </div>
         </div>
      </section>
    </div>
  );
}
