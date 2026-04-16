import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const items = [
  { time: "5 min", place: "Gaur Chowk" },
  { time: "10 min", place: "Meerut Expressway" },
  { time: "15 min", place: "Sectors 62 & 63, Noida" },
  { time: "20 min", place: "Noida Golf Course" },
];

const Connectivity = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="bg-navy-light py-14 px-[5%] border-t border-b border-gold-subtle">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-8">
        <p className="text-[0.72rem] tracking-[3px] uppercase text-gold mb-1">Strategic Connectivity</p>
        <h3 className="font-display text-2xl">Everything Within <em className="text-gold italic">Reach</em></h3>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
            className="text-center p-5 rounded-xl bg-glass border border-glass-border hover:bg-gold/8 hover:border-gold-subtle hover:-translate-y-1 transition-all">
            <div className="font-display text-3xl font-bold text-gold leading-none">{it.time}</div>
            <div className="text-[0.72rem] text-muted-foreground mt-1 leading-snug">{it.place}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Connectivity;
