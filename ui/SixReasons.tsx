import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Home, Train, Building2, UtensilsCrossed, Route, GraduationCap } from "lucide-react";

const reasons = [
  { num: "01", icon: <Home size={28} />, title: "13,350+ Homes Nearby", desc: "Captive residential demand within 4.2 km — fully occupied complexes" },
  { num: "02", icon: <Train size={28} />, title: "Metro at Doorstep", desc: "Upcoming Aqua Line · TechZone 4 station — walking distance" },
  { num: "03", icon: <Building2 size={28} />, title: "Only Grade A Here", desc: "B+9 RCC · DGU glass · OTIS lifts · Marble double-height lobby" },
  { num: "04", icon: <UtensilsCrossed size={28} />, title: "Proven Brand Belt", desc: "McDonald's · Starbucks · KFC already operating within 5 km" },
  { num: "05", icon: <Route size={28} />, title: "Highway Connectivity", desc: "10 min to Meerut Expressway · 15 min to Noida Sectors 62-63" },
  { num: "06", icon: <GraduationCap size={28} />, title: "Education Hub", desc: "Shri Ram · Sarvottam · Pacific World · Aakash — all nearby" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const SixReasons = () => {
  const { ref, inView } = useInView(0.08);

  return (
    <section className="py-24 px-[5%] bg-cream" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="mb-4"
      >
        <div className="text-[0.6rem] tracking-[3.5px] uppercase text-gold mb-3">Why Zeal</div>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-normal leading-[1.1] text-navy-text">
          Six Reasons<br />
          <span className="font-bold">Your Business Belongs Here</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-[1px] mt-14">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-cream-dark/50 border border-cream-dark p-7 md:p-8 group hover:bg-foreground/[0.04] transition-all duration-500 relative overflow-hidden"
          >
            {/* Animated top border on hover */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            <div className="font-display text-[3rem] md:text-[3.5rem] font-light text-navy-text/15 leading-none mb-5 transition-colors duration-500 group-hover:text-gold/25">
              {r.num}
            </div>
            <motion.div
              className="text-gold mb-4"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {r.icon}
            </motion.div>
            <h4 className="text-sm md:text-[0.95rem] font-bold text-navy-text mb-3 tracking-wide leading-snug">
              {r.title}
            </h4>
            <div className="w-7 h-[2px] bg-gold mb-3 group-hover:w-12 transition-all duration-500" />
            <p className="text-[0.8rem] md:text-[0.85rem] text-[#5a6d80] leading-relaxed font-light">
              {r.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SixReasons;
