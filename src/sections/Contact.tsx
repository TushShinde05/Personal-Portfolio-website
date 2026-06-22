import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Send, AlertCircle, Phone } from 'lucide-react';
import { LinkedinIcon } from '../components/Icons';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!form.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address';
      alert('Error: Please enter a valid email address (e.g. user@example.com)!');
    }
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required';
    if (!form.message.trim()) nextErrors.message = 'Message content is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '1f4692a2-b115-458b-9e3f-8343d9ef7b86',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: form.name
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Contact Me" subtitle="Let's build together. Reach out via the form or copy my coordinates." centered />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Coordinates Cards */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <GlassCard className="border border-white/10 dark:border-white/5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-blue/10 dark:bg-accent-cyan/15 text-accent-blue dark:text-accent-cyan rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 overflow-hidden">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500">
                    Direct Email
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 break-words">
                    {personalInfo.email}
                  </p>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-accent-blue dark:text-accent-cyan hover:underline mt-1 focus:outline-none"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="border border-white/10 dark:border-white/5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-blue/10 dark:bg-accent-cyan/15 text-accent-blue dark:text-accent-cyan rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500">
                    Phone Number
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {personalInfo.phone}
                  </p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-accent-blue dark:text-accent-cyan hover:underline mt-1"
                  >
                    <span>Call Directly</span>
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="border border-white/10 dark:border-white/5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-blue/10 dark:bg-accent-cyan/15 text-accent-blue dark:text-accent-cyan rounded-xl shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500">
                    LinkedIn Network
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Tushar Shinde
                  </p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-accent-blue dark:text-accent-cyan hover:underline mt-1"
                  >
                    <span>Connect Profile</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-8">
            <GlassCard className="border border-white/10 dark:border-white/5 text-left p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-sm font-medium flex items-start gap-2.5">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-red-800 dark:text-red-300 text-sm font-medium flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>Oops! Something went wrong while sending your message. Please try again or email me directly at {personalInfo.email}.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold font-mono uppercase text-slate-400 dark:text-slate-500">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-navy-950/50 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-white/5'
                        } text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/40`}
                      placeholder="xyz"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold font-mono uppercase text-slate-400 dark:text-slate-500">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-navy-950/50 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-white/5'
                        } text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/40`}
                      placeholder="xyz@gmail.com"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold font-mono uppercase text-slate-400 dark:text-slate-500">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-navy-950/50 border ${errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-white/5'
                      } text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/40`}
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-xs font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold font-mono uppercase text-slate-400 dark:text-slate-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-navy-950/50 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-white/5'
                      } text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/40 resize-none`}
                    placeholder="Hi Tushar, I'd like to discuss a project..."
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </span>
                  )}
                </div>

                <div className="pt-2 flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === 'loading'}
                    icon={<Send className="w-4 h-4 ml-1" />}
                  >
                    {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
