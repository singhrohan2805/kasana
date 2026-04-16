import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Images } from "lucide-react";
import dawn from "@/assets/kbpl/dawn.jpg";
import perspective from "@/assets/kbpl/perspective.jpg";
import top from "@/assets/kbpl/top.jpg";
import closeup from "@/assets/kbpl/closeup.jpg";

const slides = [
  { img: dawn, title: "ZEAL – Dawn View", subtitle: "Grade A commercial tower at golden hour" },
  { img: perspective, title: "Perspective View", subtitle: "DGU glass façade with premium architecture" },
  { img: top, title: "Aerial Overview", subtitle: "B+9 tower surrounded by 13,350+ homes" },
  { img: closeup, title: "Close-Up Detail", subtitle: "Premium architectural detailing" },
];

const stats = [
  { num: "7,500", label: "Sqft / Floor" },
  { num: "B+9", label: "RCC Structure" },
  { num: "80+", label: "Car Parks" },
  { num: "13,350", label: "Homes Nearby" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden flex items-end" id="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img src={slides[current].img} alt={slides[current].title} className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/25" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 px-[5%] pb-24 max-w-[760px]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-subtle bg-gold/10 backdrop-blur-lg text-gold text-[0.7rem] tracking-[2.5px] uppercase mb-5">
          <MapPin size={12} /> Plot 31 · TechZone 4 · Greater Noida West
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] font-bold leading-[1.04] mb-3">
          Where Business<br /><em className="text-gold italic">Thrives.</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-foreground/68 text-base leading-relaxed max-w-[520px] mb-8">
          Grade A commercial space engineered for distinction. Premium offices, retail &amp; F&B spaces — designed for brands that mean business.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex gap-4 flex-wrap">
          <a href="#contact" className="bg-gold-gradient text-primary-foreground px-8 py-3 rounded-lg font-bold text-[0.85rem] tracking-wide hover:translate-y-[-3px] hover:shadow-gold transition-all inline-flex items-center gap-2 no-underline">
            <Calendar size={16} /> Book a Site Visit
          </a>
          <a href="#gallery" className="border border-foreground/30 text-foreground px-8 py-3 rounded-lg text-[0.85rem] hover:border-gold hover:bg-gold/10 hover:text-gold transition-all inline-flex items-center gap-2 no-underline backdrop-blur-lg">
            <Images size={16} /> Explore Spaces
          </a>
        </motion.div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-navy-deep/70 backdrop-blur-lg border border-gold-subtle flex items-center justify-center text-foreground hover:bg-gold hover:border-gold hover:text-primary-foreground transition-all cursor-pointer">
        <ChevronLeft size={18} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-navy-deep/70 backdrop-blur-lg border border-gold-subtle flex items-center justify-center text-foreground hover:bg-gold hover:border-gold hover:text-primary-foreground transition-all cursor-pointer">
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all cursor-pointer border-none ${i === current ? "w-6 bg-gold" : "w-1.5 bg-foreground/25"}`} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-2 md:grid-cols-4 border-t border-gold-subtle">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1 }}
            className="py-4 px-6 bg-navy-deep/85 backdrop-blur-lg border-r border-gold-subtle last:border-r-0 text-center"
          >
            <span className="font-display text-2xl text-gold block leading-none">{s.num}</span>
            <span className="text-[0.6rem] tracking-[2px] uppercase text-muted-foreground mt-1 block">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
