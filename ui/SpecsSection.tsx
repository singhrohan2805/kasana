import { motion } from "framer-motion";
import { Layers, Building2, Car, ArrowUpDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const specs = [
  { num: "01", icon: <Layers size={24} />, title: "7,500 sqft", desc: "Typical floor plate — open plan, column-free span" },
  { num: "02", icon: <Building2 size={24} />, title: "B+9", desc: "RCC framed structure on a 2,000 sqm plot" },
  { num: "03", icon: <Car size={24} />, title: "80+", desc: "Dedicated basement car parking provision" },
  { num: "04", icon: <ArrowUpDown size={24} />, title: "3 Lifts", desc: "OTIS high-speed passenger elevators" },
];

const features = ["Double-height marble lobby", "VRF air conditioning", "DGU glass energy façade", "Full fire-safety compliance"];

const SpecsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="specs" className="py-20 px-[5%] bg-navy-mid relative overflow-hidden" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="max-w-[560px] mb-12">
        <div className="flex items-center gap-3 text-[0.68rem] tracking-[3px] uppercase text-gold mb-3">
          <div className="w-8 h-px bg-gold" /> Building Specifications
        </div>
        <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] font-bold leading-tight">
          Every Detail.<br /><em className="text-gold italic">Deliberately Built.</em>
        </h2>
        <div className="gold-underline mt-4 mb-4" />
        <p className="text-muted-foreground text-[0.9rem] leading-relaxed">
          Engineered with precision, ZEAL sets the standard for Grade A commercial development in Greater Noida West.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold-subtle border border-gold-subtle mb-6">
        {specs.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
            className="bg-navy-mid p-7 relative overflow-hidden group hover:bg-navy-light transition-all">
            <div className="absolute -bottom-px left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
            <div className="font-display text-5xl font-light text-gold/6 absolute top-2 right-3 leading-none pointer-events-none">{s.num}</div>
            <div className="text-gold mb-4">{s.icon}</div>
            <h3 className="font-display text-3xl text-gold leading-none mb-1">{s.title}</h3>
            <p className="text-[0.72rem] text-foreground/45 leading-relaxed font-light">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold-subtle border border-gold-subtle">
        {features.map((f, i) => (
          <div key={i} className="bg-navy-deep/80 py-4 px-5 flex items-center gap-3 text-[0.7rem] tracking-wide text-foreground/55 font-light">
            <span className="w-[5px] h-[5px] rounded-full bg-gold flex-shrink-0" /> {f}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecsSection;
