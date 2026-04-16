import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const ContactSection = () => {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section id="contact" className="py-20 px-[5%] bg-navy-mid" ref={ref}>
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-14 items-start">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <div className="flex items-center gap-3 text-[0.68rem] tracking-[3px] uppercase text-gold mb-3">
            <div className="w-8 h-px bg-gold" /> Get in Touch
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] font-bold leading-tight mb-4">
            Reserve Your<br /><em className="text-gold italic">Space at Zeal</em>
          </h2>
          <p className="text-muted-foreground text-[0.9rem] leading-relaxed max-w-[500px] mb-10">
            Schedule a site visit, request a floor plan, or speak directly with our leasing team. Premium commercial spaces are limited.
          </p>

          <div className="space-y-6">
            {[
              { icon: <MapPin size={18} />, label: "Location", value: "Plot No. 31, TechZone 4\nGreater Noida West, U.P." },
              { icon: <Phone size={18} />, label: "Call Us", value: "+91 99900 02008" },
              { icon: <Mail size={18} />, label: "Email", value: "leasing@zealcommercial.com" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-4 border-b border-gold-subtle first:border-t">
                <div className="w-10 h-10 rounded-[10px] bg-gold/12 border border-gold-subtle flex items-center justify-center text-gold flex-shrink-0">{item.icon}</div>
                <div>
                  <strong className="block text-[0.7rem] tracking-[1.5px] uppercase text-muted-foreground mb-1">{item.label}</strong>
                  <p className="text-[0.88rem] leading-relaxed whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-glass border border-glass-border rounded-2xl p-8 backdrop-blur-lg">
          <h3 className="font-display text-xl mb-6">Enquire Now</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[0.72rem] tracking-wide text-muted-foreground mb-1.5">First Name</label>
              <input type="text" placeholder="Rahul" className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground text-[0.85rem] focus:outline-none focus:border-gold placeholder:text-foreground/30 font-body" />
            </div>
            <div>
              <label className="block text-[0.72rem] tracking-wide text-muted-foreground mb-1.5">Last Name</label>
              <input type="text" placeholder="Sharma" className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground text-[0.85rem] focus:outline-none focus:border-gold placeholder:text-foreground/30 font-body" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[0.72rem] tracking-wide text-muted-foreground mb-1.5">Phone</label>
            <input type="tel" placeholder="+91 98765 43210" className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground text-[0.85rem] focus:outline-none focus:border-gold placeholder:text-foreground/30 font-body" />
          </div>

          <div className="mb-4">
            <label className="block text-[0.72rem] tracking-wide text-muted-foreground mb-1.5">Email</label>
            <input type="email" placeholder="rahul@company.com" className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground text-[0.85rem] focus:outline-none focus:border-gold placeholder:text-foreground/30 font-body" />
          </div>

          <div className="mb-4">
            <label className="block text-[0.72rem] tracking-wide text-muted-foreground mb-1.5">Space Type</label>
            <select className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground text-[0.85rem] focus:outline-none focus:border-gold font-body appearance-none">
              <option value="">Select space type</option>
              <option>Grade A Office</option>
              <option>Ground Floor Retail</option>
              <option>F&B / Dining</option>
              <option>Multiple Units</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-[0.72rem] tracking-wide text-muted-foreground mb-1.5">Message</label>
            <textarea placeholder="Tell us about your requirements..." rows={3} className="w-full bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-3 text-foreground text-[0.85rem] focus:outline-none focus:border-gold placeholder:text-foreground/30 font-body resize-y" />
          </div>

          <button type="submit" className={`w-full py-3.5 border-none rounded-lg font-bold text-[0.9rem] cursor-pointer font-body flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 ${submitted ? "bg-green-500 text-foreground" : "bg-gold-gradient text-primary-foreground hover:shadow-gold"}`}>
            {submitted ? <><Check size={16} /> Enquiry Sent!</> : <><Send size={16} /> Submit Enquiry</>}
          </button>
          <p className="text-[0.68rem] text-muted-foreground text-center mt-3">Our leasing team will respond within 24 hours.</p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
