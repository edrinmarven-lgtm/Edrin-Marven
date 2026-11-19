import { useEffect, useState, type FormEvent } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from './Reveal';

interface ContactSectionProps {
  preselectedProjectType?: string;
}

interface FormState {
  fullName: string;
  email: string;
  projectType: string;
  location: string;
  budget: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  projectType?: string;
  location?: string;
  budget?: string;
  message?: string;
}

const PROJECT_TYPES = [
  'Residential Interior',
  'Commercial Design',
  'Kitchen Design',
  'Space Planning',
  'Full Home Design',
];

const BUDGET_RANGES = [
  '$50,000 – $100,000',
  '$100,000 – $250,000',
  '$250,000 – $500,000',
  '$500,000+',
];

export function ContactSection({ preselectedProjectType }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    projectType: preselectedProjectType || 'Residential Interior',
    location: '',
    budget: '$100,000 – $250,000',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProjectType && PROJECT_TYPES.includes(preselectedProjectType)) {
      setForm((prev) => ({ ...prev, projectType: preselectedProjectType }));
    }
  }, [preselectedProjectType]);

  const validate = (values: FormState): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.fullName.trim() || values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (!values.projectType) {
      nextErrors.projectType = 'Please select a project type.';
    }
    if (!values.location.trim()) {
      nextErrors.location = 'Please enter your city and state.';
    }
    if (!values.budget) {
      nextErrors.budget = 'Please choose an estimated budget range.';
    }
    if (!values.message.trim() || values.message.trim().length < 15) {
      nextErrors.message = 'Please share a brief note about your space (at least 15 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    try {
      // Frontend inquiry preview flow:
      // Connect a real backend endpoint (e.g. POST /api/inquiries) or transactional email service
      // such as Resend / Formspree here for production delivery.
      await new Promise((resolve) => setTimeout(resolve, 450));
      setSubmittedData({ ...form });
    } catch {
      setSubmitError('Unable to prepare your inquiry right now. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
    setSubmitError(null);
    setForm({
      fullName: '',
      email: '',
      projectType: 'Residential Interior',
      location: '',
      budget: '$100,000 – $250,000',
      message: '',
    });
  };

  const inputBaseClass =
    'w-full bg-[#FAF8F4] border border-[#D6C8B7] px-4 py-3.5 text-[15px] text-[#1C1B19] placeholder:text-[#827B73] rounded-[2px] transition-colors focus:outline-none focus:border-[#A58A62]';

  return (
    <section
      id="contact"
      className="bg-[#F5F2EC] py-20 sm:py-24 lg:py-32 border-t border-[#D6C8B7]/70"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Studio Details */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-medium mb-4">
                LET’S TALK
              </p>

              <h2
                id="contact-heading"
                className="font-serif font-normal text-[#1C1B19] text-[clamp(2.35rem,3.8vw,4rem)] leading-[1.06] mb-6"
              >
                Your Space.
                <br />
                Your Story.
                <br />
                Let’s Begin.
              </h2>

              <p className="text-[15.5px] sm:text-[17px] leading-[1.7] text-[#645D55] max-w-[42ch] mb-10">
                Tell us a little about your project, and we’ll be in touch to
                explore what’s possible.
              </p>

              <div className="space-y-6 pt-8 border-t border-[#D6C8B7]">
                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-[#A58A62] mt-1 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <p className="text-[10.5px] uppercase tracking-[0.2em] text-[#645D55] mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@aurellestudio.com"
                      className="text-[15.5px] text-[#1C1B19] hover:text-[#856C47] transition-colors"
                    >
                      hello@aurellestudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-4 h-4 text-[#A58A62] mt-1 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <p className="text-[10.5px] uppercase tracking-[0.2em] text-[#645D55] mb-1">
                      Telephone
                    </p>
                    <a
                      href="tel:+15550000000"
                      className="text-[15.5px] text-[#1C1B19] hover:text-[#856C47] transition-colors tabular-nums"
                    >
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-[#A58A62] mt-1 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <p className="text-[10.5px] uppercase tracking-[0.2em] text-[#645D55] mb-1">
                      Studio Reach
                    </p>
                    <p className="text-[15.5px] text-[#1C1B19]">
                      Serving clients across the United States
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column — Project Inquiry Form */}
          <div className="lg:col-span-7">
            <Reveal delayMs={80}>
              <div className="bg-[#FAF8F4] border border-[#D6C8B7] p-6 sm:p-10 lg:p-12">
                {submittedData ? (
                  <div role="status" aria-live="polite" className="py-4">
                    <div className="flex items-center gap-3 text-[#302922] mb-4">
                      <CheckCircle2 className="w-5 h-5 text-[#A58A62] shrink-0" strokeWidth={1.5} />
                      <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#856C47]">
                        INQUIRY PREPARED (DEMO PREVIEW)
                      </p>
                    </div>

                    <h3 className="font-serif text-[30px] sm:text-[34px] text-[#1C1B19] leading-tight mb-4">
                      Thank you, {submittedData.fullName}.
                    </h3>

                    <p className="text-[15.5px] leading-[1.7] text-[#645D55] mb-6">
                      Your project brief for{' '}
                      <span className="text-[#1C1B19] font-medium">
                        {submittedData.projectType}
                      </span>{' '}
                      in{' '}
                      <span className="text-[#1C1B19] font-medium">
                        {submittedData.location}
                      </span>{' '}
                      has been validated in this interactive preview. Because no live
                      email backend is attached in this static showcase, no message
                      was transmitted externally.
                    </p>

                    <div className="bg-[#F5F2EC] border border-[#D6C8B7] p-5 mb-7 space-y-2 text-[13.5px] text-[#645D55]">
                      <p>
                        <span className="text-[#1C1B19] font-medium">Reply Email:</span>{' '}
                        {submittedData.email}
                      </p>
                      <p>
                        <span className="text-[#1C1B19] font-medium">Estimated Budget:</span>{' '}
                        {submittedData.budget}
                      </p>
                      <p className="pt-1 border-t border-[#D6C8B7]/70">
                        <span className="text-[#1C1B19] font-medium">Production integration note:</span>{' '}
                        Connect a backend endpoint (<code className="text-[#302922]">POST /api/inquiries</code>) or email delivery service to route client submissions directly to{' '}
                        <span className="text-[#1C1B19]">hello@aurellestudio.com</span>.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3.5 border border-[#1C1B19] text-[#1C1B19] hover:bg-[#1C1B19] hover:text-[#F5F2EC] transition-colors text-[11px] uppercase tracking-[0.18em] font-medium cursor-pointer"
                    >
                      PREPARE ANOTHER INQUIRY
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {submitError && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 p-4 border border-[#8C3B2B] bg-[#8C3B2B]/5 text-[#6D281B] text-[14px]"
                      >
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="contact-fullName"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#302922] font-medium mb-2"
                        >
                          Full Name <span aria-hidden="true" className="text-[#A58A62]">*</span>
                        </label>
                        <input
                          id="contact-fullName"
                          name="fullName"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Clara Bennett"
                          value={form.fullName}
                          onChange={(e) => {
                            setForm({ ...form, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          aria-invalid={Boolean(errors.fullName)}
                          aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                          className={`${inputBaseClass} ${
                            errors.fullName ? 'border-[#8C3B2B]' : ''
                          }`}
                        />
                        {errors.fullName && (
                          <p id="error-fullName" className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-[#8C3B2B]">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#302922] font-medium mb-2"
                        >
                          Email Address <span aria-hidden="true" className="text-[#A58A62]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="clara@example.com"
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'error-email' : undefined}
                          className={`${inputBaseClass} ${
                            errors.email ? 'border-[#8C3B2B]' : ''
                          }`}
                        />
                        {errors.email && (
                          <p id="error-email" className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-[#8C3B2B]">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="contact-projectType"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#302922] font-medium mb-2"
                        >
                          Project Type <span aria-hidden="true" className="text-[#A58A62]">*</span>
                        </label>
                        <select
                          id="contact-projectType"
                          name="projectType"
                          value={form.projectType}
                          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                          className={inputBaseClass}
                        >
                          {PROJECT_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-location"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#302922] font-medium mb-2"
                        >
                          Project Location <span aria-hidden="true" className="text-[#A58A62]">*</span>
                        </label>
                        <input
                          id="contact-location"
                          name="location"
                          type="text"
                          required
                          placeholder="e.g., New York, NY"
                          value={form.location}
                          onChange={(e) => {
                            setForm({ ...form, location: e.target.value });
                            if (errors.location) setErrors({ ...errors, location: undefined });
                          }}
                          aria-invalid={Boolean(errors.location)}
                          aria-describedby={errors.location ? 'error-location' : undefined}
                          className={`${inputBaseClass} ${
                            errors.location ? 'border-[#8C3B2B]' : ''
                          }`}
                        />
                        {errors.location && (
                          <p id="error-location" className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-[#8C3B2B]">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.location}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-budget"
                        className="block text-[11px] uppercase tracking-[0.18em] text-[#302922] font-medium mb-2"
                      >
                        Estimated Budget <span aria-hidden="true" className="text-[#A58A62]">*</span>
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className={inputBaseClass}
                      >
                        {BUDGET_RANGES.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-[11px] uppercase tracking-[0.18em] text-[#302922] font-medium mb-2"
                      >
                        Project Vision & Scope <span aria-hidden="true" className="text-[#A58A62]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Share a bit about your property, target timeline, and how you envision living or working in the space."
                        value={form.message}
                        onChange={(e) => {
                          setForm({ ...form, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'error-message' : undefined}
                        className={`${inputBaseClass} resize-y ${
                          errors.message ? 'border-[#8C3B2B]' : ''
                        }`}
                      />
                      {errors.message && (
                        <p id="error-message" className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-[#8C3B2B]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1C1B19] text-[#F5F2EC] hover:bg-[#302922] disabled:opacity-60 transition-colors duration-300 text-[11.5px] uppercase tracking-[0.18em] font-medium whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58A62]"
                      >
                        <span>
                          {submitting ? 'PREPARING INQUIRY...' : 'SEND PROJECT INQUIRY'}
                        </span>
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </button>

                      <p className="text-[12px] text-[#645D55]">
                        Frontend preview form · Connect your studio mail handler for live dispatch.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
