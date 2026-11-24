import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/businessData';

export function TestimonialsSection() {
  return (
    <section className="bg-[#0A1628] py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Client Feedback
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Trusted by Homeowners, Hostels &amp; Contractors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.id}
              className="flex flex-col justify-between p-7 rounded-xl bg-[#10203A] border border-white/10"
            >
              <div>
                <Quote className="w-7 h-7 text-orange-500 mb-4" aria-hidden="true" />
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <footer className="mt-6 pt-5 border-t border-white/10">
                <p className="font-bold text-white text-base">{item.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {item.role} <span aria-hidden="true">·</span> {item.project}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
