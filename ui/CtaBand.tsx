import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const CtaBand = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="relative bg-navy-deep py-28 px-[5%] text-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[clamp(6rem,18vw,16rem)] font-bold text-foreground/[0.03] tracking-widest uppercase">ZEAL</span>
      </div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="relative z-10">
        <div className="text-[0.65rem] tracking-[4px] uppercase text-gold mb-6">Limited Spaces Available</div>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.15] text-foreground mb-4">
          Your Business.<br />
          <em className="text-gold italic">Deserves This Address.</em>
        </h2>
        <p className="text-muted-foreground text-[0.95rem] max-w-[480px] mx-auto mb-10 leading-relaxed">
          Schedule a site visit or request lease details today.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#contact" className="bg-gold text-primary-foreground px-8 py-3.5 text-[0.8rem] font-bold tracking-widest uppercase inline-flex items-center gap-2.5 no-underline hover:-translate-y-0.5 hover:shadow-gold transition-all">
            <Phone size={15} /> Schedule a Visit
          </a>
          <a href="#contact" className="border border-foreground/25 text-foreground px-8 py-3.5 text-[0.8rem] font-bold tracking-widest uppercase no-underline hover:border-gold hover:text-gold transition-all">
            Get Lease Details
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default CtaBand;
