import { motion } from "framer-motion";
import { Home, GraduationCap, Train } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const categories = [
  {
    icon: <Home size={24} />,
    label: "RESIDENTIAL COMPLEXES",
    title: "Five Large Apartment Clusters",
    items: ["Nirala Estate & Aspire", "Eros Sampoornam", "Gaur Saundaryam", "Cherry County", "Saviour GreenArch", "Galaxy Vega TZ-IV"],
  },
  {
    icon: <GraduationCap size={24} />,
    label: "SCHOOLS & INSTITUTIONS",
    title: "Daily Footfall Generators",
    items: ["Shri Ram Universal School", "Sarvottam International School", "Pacific World School", "Aakash Institute, GN West", "Yatharth Super Speciality Hospital"],
  },
  {
    icon: <Train size={24} />,
    label: "METRO & CONNECTIVITY",
    title: "Upcoming Aqua Line Access",
    items: ["TechZone 4 station — walking distance", "Noida & NCR corridor link", "10 min — Meerut Expressway", "15 min — Sectors 62 & 63, Noida", "5 min — Gaur Chowk / Gaur Mall"],
  },
];

const Catchment = () => {
  const { ref, inView } = useInView();

  return (
    <section id="catchment" className="py-20 px-[5%] bg-cream" ref={ref}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-6">
        <div className="text-[0.68rem] tracking-[3px] uppercase text-gold mb-3">Residential Catchment</div>
        <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] leading-tight text-navy-text">
          13,350 Homes.<br />
          <span className="font-bold">Your Ready Market.</span>
        </h2>
      </motion.div>

      {/* Big number */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2, duration: 0.7 }}
        className="text-center my-12">
        <div className="font-display text-[clamp(4rem,10vw,7rem)] font-light text-gold/30 leading-none tracking-tight">13,350</div>
        <div className="text-[0.7rem] tracking-[3px] uppercase text-navy-text/50 mt-2">Residential Units Within 4.2 KM Radius</div>
      </motion.div>

      {/* 3-column categories */}
      <div className="grid md:grid-cols-3 gap-[1px] bg-cream-dark">
        {categories.map((cat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 + i * 0.12 }}
            className="bg-cream p-8">
            <div className="text-gold mb-3">{cat.icon}</div>
            <div className="text-[0.6rem] tracking-[2.5px] uppercase text-gold mb-2 font-medium">{cat.label}</div>
            <h3 className="font-display text-[1.1rem] font-bold text-navy-text mb-5">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2.5 text-[0.85rem] text-navy-text/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Catchment;
