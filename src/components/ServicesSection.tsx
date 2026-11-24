import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/businessData';

interface ServicesSectionProps {
  onSelectService: (productKey: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="bg-[#0A1628] py-20 lg:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              What We Build
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              Our Core Welding &amp; Metal Fabrication Services
            </h2>
          </div>
          <p className="text-slate-300 text-base max-w-md leading-relaxed">
            Every weld is reinforced, ground clean, and primed for weather protection across homes,
            hostels, commercial premises, and construction sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isFeaturedWide = index === 6;
            return (
              <div
                key={service.number}
                className={`group flex flex-col justify-between p-7 rounded-xl bg-[#10203A] border border-white/10 hover:border-orange-500/60 transition-colors ${
                  isFeaturedWide ? 'md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-10' : ''
                }`}
              >
                <div className={isFeaturedWide ? 'lg:max-w-2xl' : ''}>
                  <span className="font-display text-2xl font-extrabold text-orange-500 tabular-nums">
                    {service.number}.
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                <div className={isFeaturedWide ? 'mt-6 lg:mt-0 shrink-0' : 'mt-6 pt-5 border-t border-white/10'}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.productKey)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-orange-500 rounded-sm"
                  >
                    <span>Request Quote for {service.title}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
