import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { MapPin, Clock, Plane, Ruler, ShieldCheck, Wallet } from "lucide-react";

const reasons = [
  { num: "01", icon: <MapPin size={22} />, title: "PRIME TECHZONE 4 ADDRESS", desc: "Located on 130m wide sector road with direct connectivity to FNG & Noida-Greater Noida Expressway — your business deserves this address." },
  { num: "02", icon: <Clock size={22} />, title: "EARN FROM DAY ONE", desc: "Construction substantially complete — no 3-year wait. Lock tenants immediately and start generating rental income within months of purchase." },
  { num: "03", icon: <Plane size={22} />, title: "AIRPORT PROXIMITY ADVANTAGE", desc: "Just 20 mins from upcoming Noida International Airport (Jewar) — the single biggest value multiplier for commercial real estate in NCR." },
  { num: "04", icon: <Ruler size={22} />, title: "ARCHITECT-DESIGNED EFFICIENCY", desc: "7,500 sqft column-free floor plates with 75%+ carpet efficiency — no wasted space. Every square foot works for your business." },
  { num: "05", icon: <ShieldCheck size={22} />, title: "ZERO RISK — RERA PROTECTED", desc: "Fully registered under UP-RERA with escrow-protected funds. Your investment is legally safeguarded at every stage." },
  { num: "06", icon: <Wallet size={22} />, title: "ENTRY FROM ₹25 LAKH", desc: "Fractional floor ownership available — institutional-grade commercial real estate accessible to first-time investors and HNIs alike." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const WhySection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="why" className="py-24 px-[5%] bg-cream" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
        <div className="text-[0.6rem] tracking-[3.5px] uppercase text-gold mb-3">Smart Money Moves Here</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.1] text-navy-text">
          Why Investors Are<br />Choosing <em className="text-gold italic">ZEAL</em>
        </h2>
        <div className="gold-underline mx-auto mt-5" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] border border-cream-dark">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="p-8 md:p-10 border-r border-b border-cream-dark bg-cream hover:bg-foreground/[0.03] transition-all duration-500 relative group overflow-hidden"
          >
            {/* Animated bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            <div className="font-display text-[3rem] md:text-[3.5rem] font-light text-gold/15 leading-none mb-3 group-hover:text-gold/25 transition-colors duration-500">{r.num}</div>
            <motion.div
              className="text-gold mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {r.icon}
            </motion.div>
            <div className="w-7 h-[2px] bg-gold mb-3 group-hover:w-12 transition-all duration-300" />
            <h4 className="text-sm md:text-[0.95rem] font-semibold text-navy-text mb-2.5 tracking-wide">{r.title}</h4>
            <p className="text-[0.8rem] md:text-[0.85rem] text-[#5a6d80] leading-relaxed font-light">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
