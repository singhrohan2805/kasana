import { motion } from "framer-motion";
import { Building2, Layers, Car, ArrowUpDown, Snowflake, Shield } from "lucide-react";
import lobby from "@/assets/kbpl/lobby.jpg";
import { useInView } from "@/hooks/useInView";

const features = [
  { icon: <Building2 size={18} />, title: "B+9 RCC Structure", desc: "2,000 sqm plot" },
  { icon: <Layers size={18} />, title: "7,500 sqft / floor", desc: "Column-free span" },
  { icon: <Car size={18} />, title: "80+ Car Parking", desc: "Dedicated basement" },
  { icon: <ArrowUpDown size={18} />, title: "3 OTIS Lifts", desc: "High-speed elevators" },
  { icon: <Snowflake size={18} />, title: "VRF AC System", desc: "Zone-specific control" },
  { icon: <Shield size={18} />, title: "Fire Safety", desc: "Full compliance" },
];

const Overview = () => {
  const { ref, inView } = useInView();

  return (
    <section id="overview" className="py-20 px-[5%] bg-gradient-to-b from-navy-deep to-navy-mid" ref={ref}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="relative">
          <img src={lobby} alt="ZEAL Grand Lobby" className="w-full h-[480px] object-cover rounded-2xl" loading="lazy" />
          <div className="absolute -bottom-6 -left-6 p-5 rounded-xl bg-gold-gradient shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <strong className="text-3xl font-extrabold block leading-none text-primary-foreground">B+9</strong>
            <span className="text-[0.68rem] tracking-[1.5px] uppercase font-bold text-primary-foreground">Floors</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="flex items-center gap-3 text-[0.68rem] tracking-[3px] uppercase text-gold mb-3">
            <div className="w-8 h-px bg-gold" /> Project Overview
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] font-bold leading-tight mb-4">
            Defining <em className="text-gold italic">Grade A</em> in Greater Noida West
          </h2>
          <div className="gold-underline mb-5" />
          <p className="text-muted-foreground text-[0.9rem] leading-relaxed max-w-[580px] mb-8">
            ZEAL by Kasana Builder is a landmark commercial development in TechZone 4 — engineered with world-class specifications for offices, retail, and F&B spaces.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-[10px] bg-glass border border-glass-border hover:bg-gold/8 hover:border-gold-subtle transition-all">
                <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">{f.icon}</div>
                <div>
                  <strong className="block text-[0.82rem] font-semibold">{f.title}</strong>
                  <span className="text-[0.73rem] text-muted-foreground">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
