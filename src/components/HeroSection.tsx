import { Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { BrandMark, SafeImage } from './BrandMark';
import { formatTelUrl } from '../data/businessData';

interface HeroSectionProps {
  onContactClick: () => void;
  onQuoteClick: () => void;
}

export function HeroSection({ onContactClick, onQuoteClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative bg-[#071120] overflow-hidden border-b border-white/10"
    >
      <div className="absolute inset-0">
        <SafeImage
          src="/src/assets/images/hero_welding_fabrication_1794943527422.jpg"
          alt="MAMBA METAL FABRICATION skilled welder fabricating a heavy-duty steel gate frame"
          fallbackTitle="Precision Steel Fabrication"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#071120]/95 via-[#0A1628]/85 to-[#071120]/60"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-[#071120]/40"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-4 mb-8 p-4 rounded-xl bg-[#0A1628]/85 border border-white/15 backdrop-blur-sm">
            <BrandMark size="lg" />
            <div>
              <p className="font-display text-2xl sm:text-3xl font-extrabold tracking-wide text-white leading-none">
                MAMBA METAL FABRICATION
              </p>
              <p className="text-xs sm:text-sm font-medium text-orange-400 tracking-wider uppercase mt-1.5">
                Welding &amp; Structural Metalwork Specialists
              </p>
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05] text-balance uppercase">
            STRONG METAL. <span className="text-orange-500">SMART DESIGNS.</span>{' '}
            <span className="text-[#FF4D4D]">LASTING QUALITY.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            We specialize in high-quality metal windows, gates, doors, beds, deckers and customized
            welding solutions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>CONTACT US</span>
            </button>

            <button
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#E62E2D] hover:bg-red-700 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
              Main Hotline 1
            </p>
            <a
              href={formatTelUrl('0701816867')}
              className="mt-1 inline-flex items-center gap-2 text-xl font-bold text-white hover:text-orange-400 transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4 text-orange-500" aria-hidden="true" />
              <span>0701816867</span>
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
              Main Hotline 2
            </p>
            <a
              href={formatTelUrl('0783816867')}
              className="mt-1 inline-flex items-center gap-2 text-xl font-bold text-white hover:text-orange-400 transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4 text-orange-500" aria-hidden="true" />
              <span>0783816867</span>
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Craftsmanship Standard
            </p>
            <p className="mt-1 text-base font-semibold text-white">
              Heavy-Gauge Steel &amp; Anti-Rust Coat
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Custom Sizing
            </p>
            <p className="mt-1 text-base font-semibold text-white">
              Site Measurement &amp; Fitting Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
