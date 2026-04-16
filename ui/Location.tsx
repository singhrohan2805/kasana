import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const nearby = [
  { time: "5 min", name: "Gaur Chowk / Gaur Mall", info: "Major retail & entertainment destination" },
  { time: "600m", name: "Galaxy Vega Techzone IV", info: "750 flats — immediate catchment" },
  { time: "5 min", name: "Yatharth Super Speciality Hospital", info: "Leading hospital, Noida Extension" },
  { time: "5 min", name: "Eco Tech-12 Industrial Area", info: "Significant commercial & industrial zone" },
  { time: "10 min", name: "Meerut Expressway", info: "Direct highway connectivity heading north" },
  { time: "15 min", name: "Sectors 62 & 63, Noida", info: "Prime IT/ITES employment hubs" },
  { time: "⭐", name: "Upcoming Metro Station", info: "Aqua Line Extension · TechZone 4 station" },
];

const brands = ["MCDONALD'S", "DOMINO'S", "KFC", "BURGER KING", "STARBUCKS", "SUBWAY", "HALDIRAM'S", "PIZZA HUT", "CHAAYOS", "BIKANERVALA"];

const Location = () => {
  const { ref, inView } = useInView();

  return (
    <section id="location" className="py-20 px-[5%] bg-cream" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
        <div className="text-[0.68rem] tracking-[3px] uppercase text-gold mb-3">Location</div>
        <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] leading-tight text-navy-text">
          Plot No. 31, TechZone 4<br />
          <span className="font-bold">Greater Noida West</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-14 items-start mt-10">
        {/* Nearby places list */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}
          className="flex flex-col">
          {nearby.map((n, i) => (
            <div key={i} className="flex items-start gap-5 py-4 border-b border-cream-dark last:border-b-0">
              <span className="font-display text-[0.95rem] italic text-gold min-w-[60px] text-right">{n.time}</span>
              <div>
                <strong className="block text-[0.9rem] font-semibold text-navy-text">{n.name}</strong>
                <span className="text-[0.78rem] text-navy-text/60">{n.info}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Map */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}
          className="flex flex-col gap-3">
          <div className="rounded-xl overflow-hidden h-[420px] border border-cream-dark">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.4493!3d28.5906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b74cccc33d%3A0x9a30eda3a22e0f44!2sTechZone%204%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin"
              className="w-full h-full border-none"
              allowFullScreen
              loading="lazy"
              title="ZEAL Location"
            />
          </div>
          <div className="bg-navy-deep text-white text-[0.75rem] px-4 py-2.5 rounded-lg flex items-center gap-2">
            <span className="text-gold">📍</span> Plot No. 31, TechZone 4, Greater Noida West
          </div>
        </motion.div>
      </div>

      {/* Brand ticker */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 border-t border-cream-dark">
        {brands.map((b, i) => (
          <span key={i} className="text-[0.7rem] tracking-[2px] uppercase text-navy-text/50 font-medium">{b}</span>
        ))}
      </motion.div>
    </section>
  );
};

export default Location;
