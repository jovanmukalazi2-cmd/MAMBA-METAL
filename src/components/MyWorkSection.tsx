import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { MY_WORK_ITEMS, MyWorkItem } from '../data/businessData';
import { SafeImage } from './BrandMark';

type WorkFilter = 'All' | MyWorkItem['category'];

const WORK_FILTERS: WorkFilter[] = [
  'All',
  'Gates',
  'Windows',
  'Doors',
  'Railings & Structures',
];

export function MyWorkSection() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visibleItems =
    activeFilter === 'All'
      ? MY_WORK_ITEMS
      : MY_WORK_ITEMS.filter((item) => item.category === activeFilter);

  const activeItem = selectedIndex !== null ? visibleItems[selectedIndex] ?? null : null;

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + visibleItems.length) % visibleItems.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, visibleItems.length]);

  const handleFilterChange = (category: WorkFilter) => {
    setActiveFilter(category);
    setSelectedIndex(null);
  };

  return (
    <section id="my-work" className="bg-[#071120] py-20 lg:py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Real Workshop &amp; Site Photos
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              My Work
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Browse real gates, windows, security doors, railings, and structural steel projects
              built and installed by MAMBA METAL FABRICATION.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="My Work categories"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-lg bg-[#0D1B31] border border-white/10"
          >
            {WORK_FILTERS.map((category) => {
              const isSelected = activeFilter === category;
              const count =
                category === 'All'
                  ? MY_WORK_ITEMS.length
                  : MY_WORK_ITEMS.filter((item) => item.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleFilterChange(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-500 ${
                    isSelected
                      ? 'bg-orange-500 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className="group text-left rounded-xl overflow-hidden bg-[#0E1E38] border border-white/10 hover:border-orange-500/70 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-500"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A1628]">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#071120]/80 via-transparent to-transparent opacity-75 group-hover:opacity-95 transition-opacity"
                  aria-hidden="true"
                />
                <span className="absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#071120]/80 text-white border border-white/15 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                  <Expand className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>

              <div className="p-4">
                <p className="text-xs font-medium text-orange-400">{item.category}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 bg-[#040B16]/92 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0A1628] border border-white/15 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                  My Work · {activeItem.category}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close photo preview"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-[#050C17] aspect-[16/10] w-full flex items-center justify-center overflow-hidden">
              <SafeImage
                src={activeItem.image}
                alt={activeItem.title}
                fallbackTitle={activeItem.title}
                className="w-full h-full object-contain"
              />

              {visibleItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex(
                        (selectedIndex - 1 + visibleItems.length) % visibleItems.length
                      )
                    }
                    aria-label="Previous work photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#071120]/85 border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex((selectedIndex + 1) % visibleItems.length)
                    }
                    aria-label="Next work photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#071120]/85 border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="px-5 py-4 bg-[#0A1628] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-sm text-slate-300">{activeItem.caption}</p>
              <span className="text-xs text-slate-400 tabular-nums shrink-0">
                {selectedIndex + 1} / {visibleItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
