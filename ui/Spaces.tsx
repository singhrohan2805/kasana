import { motion } from "framer-motion";
import { Briefcase, Store, Utensils, ArrowRight } from "lucide-react";
import office from "@/assets/kbpl/office.jpg";
import retail from "@/assets/kbpl/retail.jpg";
import mez1 from "@/assets/kbpl/mez1.jpg";
import { useInView } from "@/hooks/useInView";

const spaces = [
  { img: office, icon: <Briefcase size={14} />, tag: "Commercial", title: "Grade A Offices", desc: "Flexible, open-plan floors with natural light, column-free spans — perfectly suited to enterprise and mid-size businesses." },
  { img: retail, icon: <Store size={14} />, tag: "Retail", title: "Premium Retail", desc: "Double-height ground floor retail with maximum street frontage — positioned to capture the 13,000+ residential catchment." },
  { img: mez1, icon: <Utensils size={14} />, tag: "F&B", title: "F&B & Dining", desc: "Premium dining and café spaces capturing high footfall from the dense residential base and office workers." },
];

const Spaces = () => {
  const { ref, inView } = useInView();

  return (
    <section id="spaces" className="py-20 px-[5%] bg-cream" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
        <div className="flex items-center gap-3 text-[0.68rem] tracking-[3px] uppercase text-gold mb-3 justify-center">Available Spaces</div>
        <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] leading-tight text-navy-text">
          Imagine the <em className="text-gold italic font-bold">Possibilities</em>
        </h2>
        <p className="text-navy-text/70 text-[0.9rem] max-w-[480px] mx-auto mt-3">Three distinct space typologies — each designed to maximise your business potential.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {spaces.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer group hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-all duration-300">
            <img src={s.img} alt={s.title} className="w-full h-full object-cover block group-hover:scale-[1.08] transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/15 to-transparent flex flex-col justify-end p-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/18 border border-gold-subtle text-gold text-[0.65rem] tracking-[2px] uppercase mb-2 w-fit backdrop-blur-lg">
                {s.icon} {s.tag}
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-1">{s.title}</h3>
              <p className="text-[0.75rem] text-white/55 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">{s.desc}</p>
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-primary-foreground mt-3 group-hover:rotate-45 transition-transform">
                <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Spaces;
