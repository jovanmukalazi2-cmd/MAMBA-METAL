import { ShoppingBag, MessageCircle } from 'lucide-react';
import { PRODUCTS, formatWhatsAppUrl } from '../data/businessData';
import { SafeImage } from './BrandMark';

interface ProductsSectionProps {
  onOrderProduct: (productTitle: string) => void;
}

export function ProductsSection({ onOrderProduct }: ProductsSectionProps) {
  return (
    <section id="products" className="bg-slate-50 text-slate-900 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#E62E2D]">
              Products Catalog
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628] tracking-tight text-balance">
              Built to Protect, Last, and Impress
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md leading-relaxed">
            Choose any product below to request an instant custom quote with your preferred
            measurements, or message our fabrication desk on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <SafeImage
                  src={product.image}
                  alt={`${product.title} fabricated by MAMBA METAL FABRICATION`}
                  fallbackTitle={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {product.specLine}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-[#0A1628] tracking-tight">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOrderProduct(product.title)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                    <span>Order Now</span>
                  </button>

                  <a
                    href={formatWhatsAppUrl(
                      '0701816867',
                      `Hello MAMBA METAL FABRICATION, I am interested in ordering ${product.title}. I would like to make an inquiry.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Inquire about ${product.title} on WhatsApp`}
                    className="inline-flex items-center justify-center w-11 h-10 rounded-md border border-slate-200 text-[#0A1628] hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-600"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
