import { MessageCircle, Phone } from 'lucide-react';
import { BrandMark } from './BrandMark';
import {
  ASSISTANT_CONTACTS,
  MAIN_CONTACTS,
  formatTelUrl,
  formatWhatsAppUrl,
} from '../data/businessData';

export function Footer() {
  return (
    <footer className="bg-[#050C17] text-slate-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 text-white font-display text-xl font-extrabold tracking-wide">
              <BrandMark size="sm" />
              <span>MAMBA METAL FABRICATION</span>
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Strong metal, smart designs, and lasting quality. Specializing in metal windows,
              modern gates, deckers, beds, security doors, and custom welding solutions.
            </p>
            <p className="mt-3 text-sm font-semibold text-orange-400">
              Location: Salaama Road, Juwakali
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Quick Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#my-work" className="hover:text-white transition-colors">
                  My Work
                </a>
              </li>
              <li>
                <a href="#quote" className="hover:text-white transition-colors">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Main Contacts
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {MAIN_CONTACTS.map((c) => (
                <li key={c.number} className="flex items-center justify-between gap-3">
                  <a
                    href={formatTelUrl(c.number)}
                    className="inline-flex items-center gap-2 font-semibold text-white hover:text-orange-400 tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-orange-500" aria-hidden="true" />
                    <span>{c.number}</span>
                  </a>
                  <a
                    href={formatWhatsAppUrl(c.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${c.number}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Assistant Contacts
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {ASSISTANT_CONTACTS.map((c) => (
                <li key={c.number} className="flex items-center justify-between gap-3">
                  <a
                    href={formatTelUrl(c.number)}
                    className="inline-flex items-center gap-2 font-semibold text-white hover:text-orange-400 tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-orange-500" aria-hidden="true" />
                    <span>{c.number}</span>
                  </a>
                  <a
                    href={formatWhatsAppUrl(c.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${c.number}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} MAMBA METAL FABRICATION. All rights reserved.
          </p>
          <p>Strong Metal. Smart Designs. Lasting Quality.</p>
        </div>
      </div>
    </footer>
  );
}
