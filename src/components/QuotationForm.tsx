import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  FileImage,
  MessageCircle,
  Send,
  Trash2,
  Upload,
} from 'lucide-react';
import { formatTelUrl, formatWhatsAppUrl } from '../data/businessData';

interface QuotationFormProps {
  selectedProduct: string;
}

interface SubmittedQuote {
  referenceId: string;
  customerName: string;
  phoneNumber: string;
  productService: string;
  measurements: string;
  designDescription: string;
  imagePreviewUrl: string | null;
  imageFileName: string | null;
}

const PRODUCT_OPTIONS = [
  'Metal Windows',
  'Metal Gates',
  'Metal Deckers',
  'Metal Beds',
  'Metal Doors',
  'Custom Welding',
  'General Welding and Metal Fabrication',
  'Custom Metal Designs and Repairs',
];

export function QuotationForm({ selectedProduct }: QuotationFormProps) {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [productService, setProductService] = useState(selectedProduct || 'Metal Gates');
  const [measurements, setMeasurements] = useState('');
  const [designDescription, setDesignDescription] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [imageFileName, setImageFileName] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedQuote, setSubmittedQuote] = useState<SubmittedQuote | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      setProductService(selectedProduct);
      setSubmittedQuote(null);
    }
  }, [selectedProduct]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setFormError('Please select a valid image file (PNG, JPG, or WebP).');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setFormError('Reference image must be 10MB or smaller.');
      return;
    }

    setFormError(null);
    setImageFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImagePreviewUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImagePreviewUrl(null);
    setImageFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmedName = customerName.trim();
    const cleanedPhone = phoneNumber.trim();
    const digitsOnly = cleanedPhone.replace(/\D/g, '');

    if (trimmedName.length < 2) {
      setFormError('Please enter your full name.');
      return;
    }

    if (digitsOnly.length < 9) {
      setFormError('Please enter a valid phone number (at least 9 digits).');
      return;
    }

    if (!productService) {
      setFormError('Please select the product or service required.');
      return;
    }

    setFormError(null);
    const refNumber = `MMF-${Math.floor(100000 + Math.random() * 900000)}`;

    const quoteRecord: SubmittedQuote = {
      referenceId: refNumber,
      customerName: trimmedName,
      phoneNumber: cleanedPhone,
      productService,
      measurements: measurements.trim() || 'Not specified (site check requested)',
      designDescription:
        designDescription.trim() || 'Standard MAMBA METAL FABRICATION design.',
      imagePreviewUrl,
      imageFileName,
    };

    try {
      const existing = JSON.parse(localStorage.getItem('mamba_quote_requests') || '[]');
      localStorage.setItem(
        'mamba_quote_requests',
        JSON.stringify([
          { ...quoteRecord, imagePreviewUrl: imageFileName ? '[attached]' : null, createdAt: new Date().toISOString() },
          ...existing.slice(0, 19),
        ])
      );
    } catch {
      // Ignore storage quota issues
    }

    setSubmittedQuote(quoteRecord);
  };

  const handleReset = () => {
    setSubmittedQuote(null);
    setCustomerName('');
    setPhoneNumber('');
    setMeasurements('');
    setDesignDescription('');
    clearImage();
    setFormError(null);
  };

  const buildWhatsAppQuoteMessage = (quote: SubmittedQuote) =>
    `Hello MAMBA METAL FABRICATION, I submitted quote request ${quote.referenceId}.\nName: ${quote.customerName}\nPhone: ${quote.phoneNumber}\nProduct/Service: ${quote.productService}\nMeasurements: ${quote.measurements}\nDesign Notes: ${quote.designDescription}`;

  return (
    <section id="quote" className="bg-slate-50 text-slate-900 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-bold uppercase tracking-widest text-[#E62E2D]">
              Request a Free Quote
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628] tracking-tight text-balance">
              Tell Us Your Measurements &amp; Design
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Share the product you need, approximate dimensions, and any reference sketch or photo.
              Our fabrication team will prepare a clear price estimate and timeline.
            </p>

            <div className="mt-8 p-6 rounded-xl bg-[#0A1628] text-white border border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Prefer Direct Assistance?
              </p>
              <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                Call our main workshop lines directly for fast pricing or to arrange a site
                measurement visit.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={formatTelUrl('0701816867')}
                  className="px-4 py-2 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors tabular-nums"
                >
                  Call 0701816867
                </a>
                <a
                  href={formatTelUrl('0783816867')}
                  className="px-4 py-2 text-sm font-bold text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors tabular-nums"
                >
                  Call 0783816867
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
              {submittedQuote ? (
                <div className="space-y-6" role="status" aria-live="polite">
                  <div className="flex items-start gap-4 p-5 rounded-lg bg-emerald-50 border border-emerald-200">
                    <CheckCircle2
                      className="w-7 h-7 text-emerald-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-2xl font-bold text-emerald-950">
                        Quotation Request Received!
                      </h3>
                      <p className="mt-1 text-sm text-emerald-900">
                        Thank you, <span className="font-semibold">{submittedQuote.customerName}</span>.
                        Your request (<span className="font-mono font-semibold">{submittedQuote.referenceId}</span>)
                        has been logged. Our team will reach out shortly on{' '}
                        <span className="font-semibold tabular-nums">{submittedQuote.phoneNumber}</span>.
                      </p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-t border-b border-slate-200 py-5">
                    <div>
                      <dt className="text-slate-500 font-medium">Product / Service</dt>
                      <dd className="mt-1 font-semibold text-[#0A1628]">
                        {submittedQuote.productService}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 font-medium">Size / Measurements</dt>
                      <dd className="mt-1 font-semibold text-[#0A1628]">
                        {submittedQuote.measurements}
                      </dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-slate-500 font-medium">Design Description</dt>
                      <dd className="mt-1 text-slate-700">{submittedQuote.designDescription}</dd>
                    </div>
                  </dl>

                  {submittedQuote.imagePreviewUrl && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        Attached Reference Image ({submittedQuote.imageFileName})
                      </p>
                      <img
                        src={submittedQuote.imagePreviewUrl}
                        alt="Uploaded design reference"
                        className="h-36 w-auto rounded-lg border border-slate-200 object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={formatWhatsAppUrl('0701816867', buildWhatsAppQuoteMessage(submittedQuote))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>Send Details via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-3 text-sm font-semibold text-[#0A1628] border border-slate-300 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {formError && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-md bg-red-50 border border-red-200 text-sm font-medium text-red-800"
                    >
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="quote-name"
                        className="block text-sm font-semibold text-[#0A1628] mb-1.5"
                      >
                        Customer Name <span className="text-[#E62E2D]">*</span>
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g., David Mukasa"
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-sm font-semibold text-[#0A1628] mb-1.5"
                      >
                        Phone Number <span className="text-[#E62E2D]">*</span>
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="e.g., 0701 000 000"
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-slate-900 placeholder:text-slate-400 tabular-nums focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="quote-product"
                        className="block text-sm font-semibold text-[#0A1628] mb-1.5"
                      >
                        Product or Service Required <span className="text-[#E62E2D]">*</span>
                      </label>
                      <select
                        id="quote-product"
                        value={productService}
                        onChange={(e) => setProductService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      >
                        {PRODUCT_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-size"
                        className="block text-sm font-semibold text-[#0A1628] mb-1.5"
                      >
                        Product Size or Measurements
                      </label>
                      <input
                        id="quote-size"
                        type="text"
                        value={measurements}
                        onChange={(e) => setMeasurements(e.target.value)}
                        placeholder="e.g., 12ft x 6ft gate or 4ft x 6ft bed"
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-description"
                      className="block text-sm font-semibold text-[#0A1628] mb-1.5"
                    >
                      Description of Your Design
                    </label>
                    <textarea
                      id="quote-description"
                      rows={4}
                      value={designDescription}
                      onChange={(e) => setDesignDescription(e.target.value)}
                      placeholder="Describe preferred style, color finish, quantity, or installation location..."
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-image"
                      className="block text-sm font-semibold text-[#0A1628] mb-1.5"
                    >
                      Upload Design or Reference Image
                    </label>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <label
                        htmlFor="quote-image"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-slate-300 bg-slate-50 hover:bg-slate-100 text-sm font-semibold text-[#0A1628] cursor-pointer transition-colors"
                      >
                        <Upload className="w-4 h-4 text-orange-500" aria-hidden="true" />
                        <span>{imageFileName ? 'Change Image' : 'Choose Reference Image'}</span>
                      </label>
                      <input
                        ref={fileInputRef}
                        id="quote-image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="sr-only"
                      />

                      {imageFileName ? (
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <FileImage className="w-4 h-4 text-orange-500 shrink-0" />
                          <span className="truncate max-w-[200px]">{imageFileName}</span>
                          <button
                            type="button"
                            onClick={clearImage}
                            aria-label="Remove uploaded reference image"
                            className="p-1 text-slate-500 hover:text-red-600 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-500">
                          Optional: Upload a photo or sketch (JPG, PNG, WebP)
                        </span>
                      )}
                    </div>

                    {imagePreviewUrl && (
                      <div className="mt-3">
                        <img
                          src={imagePreviewUrl}
                          alt="Selected design reference preview"
                          className="h-28 w-auto rounded-lg border border-slate-200 object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#E62E2D] hover:bg-red-700 rounded-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Submit Quotation Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
