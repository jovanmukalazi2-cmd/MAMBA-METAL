import { FormEvent, useEffect, useState } from 'react';
import {
  Clock,
  Edit3,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Save,
} from 'lucide-react';
import {
  ASSISTANT_CONTACTS,
  MAIN_CONTACTS,
  formatTelUrl,
  formatWhatsAppUrl,
} from '../data/businessData';

interface WorkshopLocation {
  addressLine: string;
  landmark: string;
  hours: string;
  mapsUrl: string;
  embedUrl: string;
}

const DEFAULT_LOCATION: WorkshopLocation = {
  addressLine: 'Salaama Road, Juwakali',
  landmark: 'MAMBA METAL FABRICATION Main Workshop — Salaama Road, Juwakali',
  hours: 'Monday – Saturday: 8:00 AM – 6:30 PM',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Salaama+Road+Juwakali',
  embedUrl: '',
};

const STORAGE_KEY = 'mamba_workshop_location_v2';

function isSafeMapsEmbedUrl(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    return (
      parsed.protocol === 'https:' &&
      (parsed.hostname.endsWith('google.com') || parsed.hostname.endsWith('maps.google.com')) &&
      parsed.pathname.includes('/maps/embed')
    );
  } catch {
    return false;
  }
}

export function ContactLocationSection() {
  const [location, setLocation] = useState<WorkshopLocation>(DEFAULT_LOCATION);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<WorkshopLocation>(DEFAULT_LOCATION);
  const [savedFeedback, setSavedFeedback] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<WorkshopLocation>;
        const merged = { ...DEFAULT_LOCATION, ...parsed };
        setLocation(merged);
        setDraft(merged);
      }
    } catch {
      // Fallback to default location
    }
  }, []);

  const handleSaveLocation = (e: FormEvent) => {
    e.preventDefault();
    const cleaned: WorkshopLocation = {
      addressLine: draft.addressLine.trim() || DEFAULT_LOCATION.addressLine,
      landmark: draft.landmark.trim() || DEFAULT_LOCATION.landmark,
      hours: draft.hours.trim() || DEFAULT_LOCATION.hours,
      mapsUrl:
        draft.mapsUrl.trim() ||
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          draft.addressLine.trim() || 'MAMBA METAL FABRICATION'
        )}`,
      embedUrl: isSafeMapsEmbedUrl(draft.embedUrl) ? draft.embedUrl.trim() : '',
    };

    setLocation(cleaned);
    setDraft(cleaned);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
    } catch {
      // Ignore storage error
    }
    setIsEditing(false);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 3500);
  };

  return (
    <section id="contact" className="bg-[#071120] py-20 lg:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Contact &amp; WhatsApp
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Call or Message Our Fabrication Team Directly
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Tap any phone number below to call immediately, or start a WhatsApp chat with a
            pre-filled inquiry message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Main Contact Numbers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MAIN_CONTACTS.map((contact) => (
                  <div
                    key={contact.number}
                    className="p-5 rounded-xl bg-[#0E1E38] border border-white/15 flex flex-col justify-between gap-4"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                        {contact.label}
                      </p>
                      <a
                        href={formatTelUrl(contact.number)}
                        className="mt-1.5 inline-block font-display text-3xl font-extrabold text-white hover:text-orange-400 transition-colors tabular-nums"
                      >
                        {contact.number}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <a
                        href={formatTelUrl(contact.number)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors whitespace-nowrap shrink-0"
                      >
                        <Phone className="w-4 h-4" aria-hidden="true" />
                        <span>Call Now</span>
                      </a>
                      <a
                        href={formatWhatsAppUrl(contact.number)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors whitespace-nowrap shrink-0"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Assistant Contact Numbers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ASSISTANT_CONTACTS.map((contact) => (
                  <div
                    key={contact.number}
                    className="p-5 rounded-xl bg-[#0D1B31] border border-white/10 flex flex-col justify-between gap-4"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {contact.label}
                      </p>
                      <a
                        href={formatTelUrl(contact.number)}
                        className="mt-1.5 inline-block font-display text-3xl font-extrabold text-white hover:text-orange-400 transition-colors tabular-nums"
                      >
                        {contact.number}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <a
                        href={formatTelUrl(contact.number)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#172E52] hover:bg-orange-500 rounded-md transition-colors whitespace-nowrap shrink-0"
                      >
                        <Phone className="w-4 h-4" aria-hidden="true" />
                        <span>Call</span>
                      </a>
                      <a
                        href={formatWhatsAppUrl(contact.number)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors whitespace-nowrap shrink-0"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-xl bg-[#0E1E38] border border-white/15 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
                    Google Maps &amp; Workshop Location
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    Visit Our Fabrication Yard
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setDraft(location);
                    setIsEditing((prev) => !prev);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/20 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{isEditing ? 'Cancel' : 'Set Location'}</span>
                </button>
              </div>

              {savedFeedback && (
                <p
                  role="status"
                  className="text-xs font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-700/60 px-3 py-2 rounded-md"
                >
                  Workshop location updated.
                </p>
              )}

              {isEditing ? (
                <form onSubmit={handleSaveLocation} className="space-y-4">
                  <div>
                    <label
                      htmlFor="loc-address"
                      className="block text-xs font-semibold text-slate-300 mb-1"
                    >
                      Workshop Street / Town Address
                    </label>
                    <input
                      id="loc-address"
                      type="text"
                      value={draft.addressLine}
                      onChange={(e) => setDraft({ ...draft, addressLine: e.target.value })}
                      placeholder="e.g., Plot 14, Industrial Area Road, Kampala"
                      className="w-full px-3 py-2 text-sm rounded-md bg-[#071120] border border-white/20 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="loc-landmark"
                      className="block text-xs font-semibold text-slate-300 mb-1"
                    >
                      Directions / Landmark
                    </label>
                    <input
                      id="loc-landmark"
                      type="text"
                      value={draft.landmark}
                      onChange={(e) => setDraft({ ...draft, landmark: e.target.value })}
                      placeholder="e.g., Opposite TotalEnergies Station"
                      className="w-full px-3 py-2 text-sm rounded-md bg-[#071120] border border-white/20 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="loc-hours"
                      className="block text-xs font-semibold text-slate-300 mb-1"
                    >
                      Opening Hours
                    </label>
                    <input
                      id="loc-hours"
                      type="text"
                      value={draft.hours}
                      onChange={(e) => setDraft({ ...draft, hours: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-md bg-[#071120] border border-white/20 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="loc-maps-url"
                      className="block text-xs font-semibold text-slate-300 mb-1"
                    >
                      Google Maps Share Link
                    </label>
                    <input
                      id="loc-maps-url"
                      type="url"
                      value={draft.mapsUrl}
                      onChange={(e) => setDraft({ ...draft, mapsUrl: e.target.value })}
                      placeholder="https://maps.google.com/?q=..."
                      className="w-full px-3 py-2 text-sm rounded-md bg-[#071120] border border-white/20 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="loc-embed-url"
                      className="block text-xs font-semibold text-slate-300 mb-1"
                    >
                      Optional Google Maps Embed URL (from &ldquo;Share &rarr; Embed a map&rdquo;)
                    </label>
                    <input
                      id="loc-embed-url"
                      type="url"
                      value={draft.embedUrl}
                      onChange={(e) => setDraft({ ...draft, embedUrl: e.target.value })}
                      placeholder="https://www.google.com/maps/embed?pb=..."
                      className="w-full px-3 py-2 text-sm rounded-md bg-[#071120] border border-white/20 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors cursor-pointer"
                  >
                    <Save className="w-4 h-4" aria-hidden="true" />
                    <span>Save Workshop Location</span>
                  </button>
                </form>
              ) : (
                <>
                  {location.embedUrl ? (
                    <div className="aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/15 bg-[#071120]">
                      <iframe
                        title="MAMBA METAL FABRICATION Google Maps Location"
                        src={location.embedUrl}
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="p-5 rounded-lg bg-[#071120] border border-white/10 space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-white">{location.addressLine}</p>
                          <p className="text-sm text-slate-300 mt-1">{location.landmark}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                        <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-300">{location.hours}</p>
                      </div>
                    </div>
                  )}

                  {location.embedUrl && (
                    <div className="space-y-2 text-sm text-slate-300">
                      <p className="font-semibold text-white">{location.addressLine}</p>
                      <p>{location.landmark}</p>
                      <p className="text-xs text-slate-400">{location.hours}</p>
                    </div>
                  )}

                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#E62E2D] hover:bg-red-700 rounded-md transition-colors"
                  >
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
