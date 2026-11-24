import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ALL_CONTACTS, formatWhatsAppUrl } from '../data/businessData';

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
      {open && (
        <div
          role="dialog"
          aria-label="Choose a WhatsApp line"
          className="w-72 rounded-xl bg-[#0A1628] border border-white/15 shadow-2xl p-4 text-white"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <p className="font-display text-lg font-bold leading-tight">
                Chat on WhatsApp
              </p>
              <p className="text-xs text-slate-400">MAMBA METAL FABRICATION</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp options"
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 space-y-2">
            {ALL_CONTACTS.map((contact) => (
              <a
                key={contact.number}
                href={formatWhatsAppUrl(contact.number)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#10203A] hover:bg-emerald-700/40 border border-white/10 transition-colors"
              >
                <div>
                  <p className="text-sm font-bold text-white tabular-nums">{contact.number}</p>
                  <p className="text-xs text-slate-400">{contact.role}</p>
                </div>
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Contact MAMBA METAL FABRICATION on WhatsApp"
        className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        <MessageCircle className="w-5 h-5" aria-hidden="true" />
        <span className="hidden sm:inline whitespace-nowrap">WhatsApp Us</span>
      </button>
    </div>
  );
}
