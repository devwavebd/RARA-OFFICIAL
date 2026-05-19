import { Facebook, Twitter, Youtube, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { SITE_DATA } from '../../constants';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <img 
              src={SITE_DATA.logo} 
              alt="Logo" 
              className="h-12 w-auto" 
              referrerPolicy="no-referrer"
            />
            <p className="text-zinc-400 leading-relaxed max-w-xs text-sm">
              Providing proven methods to burn fat, gain lean muscle, and improve your quality of life in Ahwatukee, AZ.
            </p>
            <div className="flex gap-4">
              <a href={SITE_DATA.socials.facebook} className="p-2 bg-zinc-900 rounded-full hover:bg-red-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href={SITE_DATA.socials.twitter} className="p-2 bg-zinc-900 rounded-full hover:bg-red-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href={SITE_DATA.socials.youtube} className="p-2 bg-zinc-900 rounded-full hover:bg-red-600 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              {SITE_DATA.navLinks.slice(1).map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="hover:text-red-500 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex gap-3">
                <MapPin size={18} className="text-red-600 shrink-0" />
                <span>Ahwatukee, AZ</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-red-600 shrink-0" />
                <span>{SITE_DATA.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-red-600 shrink-0" />
                <span>info@thebodyfirmaz.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Open for Appointments</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex justify-between">
                <span>Weekdays</span>
                <span className="text-white">Morn/Aft/Eve</span>
              </li>
              <li className="flex justify-between">
                <span>Sat Morning</span>
                <span className="text-white">Open</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-red-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-zinc-500 uppercase">
          <p>© {new Date().getFullYear()} {SITE_DATA.name}. Built for Excellence.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
