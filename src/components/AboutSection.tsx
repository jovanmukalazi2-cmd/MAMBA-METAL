import { CheckCircle2, Phone } from 'lucide-react';
import { SafeImage } from './BrandMark';
import { formatTelUrl } from '../data/businessData';

interface AboutSectionProps {
  onRequestQuote: () => void;
}

const PILLARS = [
  {
    title: 'Strong Materials',
    detail: 'Heavy-gauge mild steel and square hollow sections selected for structural strength.',
  },
  {
    title: 'Excellent Workmanship',
    detail: 'Clean deep-penetration welds, smooth grinding, and rust-resistant protective primers.',
  },
  {
    title: 'Affordable Pricing',
    detail: 'Transparent quotations tailored to your exact measurements and budget.',
  },
  {
    title: 'Customer Satisfaction',
    detail: 'On-time workshop fabrication, careful fitting, and reliable after-sales support.',
  },
];

export function AboutSection({ onRequestQuote }: AboutSectionProps) {
  return (
    <section id="about" className="bg-[#071120] py-20 lg:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[320px] rounded-xl overflow-hidden border border-white/15 bg-[#0D1B31]">
              <SafeImage
                src="/src/assets/images/about_workshop_team_1794943529945.jpg"
                alt="Inside the MAMBA METAL FABRICATION workshop with completed steel gates"
                fallbackTitle="MAMBA Workshop"
                className="w-full h-full lg:h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#071120]/85 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                  Workshop Floor
                </p>
                <p className="mt-1 text-lg font-bold text-white">
                  Custom gates, frames, and structural steelwork built to order.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              About Us
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              Crafted for Strength. Designed for Modern Living.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed">
              MAMBA METAL FABRICATION is committed to providing quality metal fabrication and
              professional welding services. We create durable, beautiful and affordable metal
              products designed to meet our customers&apos; needs. Our mission is to deliver
              excellent workmanship, strong materials and customer satisfaction.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-lg bg-[#0E1E38] border border-white/10"
                >
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" aria-hidden="true" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">{pillar.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-[#E62E2D] hover:bg-red-700 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Request a Custom Quote
              </button>
              <a
                href={formatTelUrl('0701816867')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white border border-white/20 hover:border-orange-500 hover:text-orange-400 rounded-md transition-colors whitespace-nowrap shrink-0 tabular-nums"
              >
                <Phone className="w-4 h-4 text-orange-500" aria-hidden="true" />
                <span>Call 0701816867</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
