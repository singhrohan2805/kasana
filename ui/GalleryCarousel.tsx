import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import dawn from "@/assets/kbpl/dawn.jpg";
import perspective from "@/assets/kbpl/perspective.jpg";
import top from "@/assets/kbpl/top.jpg";
import closeup from "@/assets/kbpl/closeup.jpg";
import lobby from "@/assets/kbpl/lobby.jpg";
import retail from "@/assets/kbpl/retail.jpg";
import mez1 from "@/assets/kbpl/mez1.jpg";
import mez2 from "@/assets/kbpl/mez2.jpg";
import floor1 from "@/assets/kbpl/floor1.jpg";
import office from "@/assets/kbpl/office.jpg";
import conf from "@/assets/kbpl/conf.jpg";
import site from "@/assets/kbpl/site.jpg";
import { useInView } from "@/hooks/useInView";

const allSlides = [
  { img: dawn, title: "Dawn View", desc: "ZEAL at golden hour", cat: "exterior" },
  { img: perspective, title: "Perspective View", desc: "Full building perspective with DGU glass façade", cat: "exterior" },
  { img: top, title: "Aerial Overview", desc: "Top-down view of the B+9 tower", cat: "exterior" },
  { img: closeup, title: "Façade Close-Up", desc: "Premium architectural detailing", cat: "exterior" },
  { img: lobby, title: "Grand Lobby", desc: "Double-height imported marble entrance", cat: "interior" },
  { img: retail, title: "Retail Space", desc: "Ground floor premium retail frontage", cat: "interior" },
  { img: mez1, title: "Mezzanine Level 1", desc: "Premium mezzanine floor space", cat: "interior" },
  { img: mez2, title: "Mezzanine Level 2", desc: "Open mezzanine with natural light", cat: "interior" },
  { img: floor1, title: "Typical Floor", desc: "7,500 sqft column-free open plan", cat: "interior" },
  { img: office, title: "Office Space", desc: "Grade A fully fitted office floor", cat: "interior" },
  { img: conf, title: "Conference Room", desc: "Premium meeting and conference facilities", cat: "interior" },
  { img: site, title: "Construction Progress", desc: "Advanced stage of structural completion", cat: "site" },
];

const tabs = [
  { label: "All (12)", value: "all" },
  { label: "Exterior", value: "exterior" },
  { label: "Interior", value: "interior" },
  { label: "On-Site", value: "site" },
];

const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const { ref, inView } = useInView();

  const filtered = activeTab === "all" ? allSlides : allSlides.filter(s => s.cat === activeTab);

  const next = useCallback(() => setCurrent(p => (p + 1) % filtered.length), [filtered.length]);
  const prev = useCallback(() => setCurrent(p => (p - 1 + filtered.length) % filtered.length), [filtered.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrent(0);
  };

  return (
    <section id="gallery" className="py-20 px-[5%] bg-gradient-to-b from-navy-mid to-navy-deep" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="flex justify-between items-end mb-8 flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-3 text-[0.68rem] tracking-[3px] uppercase text-gold mb-3">
            <div className="w-8 h-px bg-gold" /> Visual Tour
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] font-bold leading-tight">
            Explore <em className="text-gold italic">Every Corner</em>
          </h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tabs.map(tab => (
            <button key={tab.value} onClick={() => handleTabChange(tab.value)}
              className={`px-4 py-1.5 rounded-full border text-[0.75rem] cursor-pointer font-body transition-all ${activeTab === tab.value ? "bg-gold border-gold text-primary-foreground font-bold" : "border-foreground/12 text-muted-foreground hover:bg-gold hover:border-gold hover:text-primary-foreground"}`}>
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
        <div className="relative rounded-2xl overflow-hidden bg-secondary/30">
          <div className="flex transition-transform duration-600 ease-[cubic-bezier(.25,.46,.45,.94)]" style={{ transform: `translateX(-${current * 100}%)` }}>
            {filtered.map((slide, i) => (
              <div key={`${activeTab}-${i}`} className="min-w-full relative">
                <img src={slide.img} alt={slide.title} className="w-full h-[440px] object-cover block" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-5 pt-16 bg-gradient-to-t from-navy-deep/95 to-transparent">
                  <h4 className="font-display text-lg">{slide.title}</h4>
                  <p className="text-[0.75rem] text-foreground/55">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy-deep/70 backdrop-blur-lg border border-gold-subtle flex items-center justify-center text-foreground hover:bg-gold hover:border-gold hover:text-primary-foreground transition-all cursor-pointer z-10">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy-deep/70 backdrop-blur-lg border border-gold-subtle flex items-center justify-center text-foreground hover:bg-gold hover:border-gold hover:text-primary-foreground transition-all cursor-pointer z-10">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex gap-2 mt-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {filtered.map((slide, i) => (
            <img key={`thumb-${activeTab}-${i}`} src={slide.img} alt="" onClick={() => setCurrent(i)}
              className={`w-[68px] h-[50px] rounded-md object-cover cursor-pointer transition-all flex-shrink-0 border-2 ${i === current ? "opacity-100 border-gold scale-105" : "opacity-45 border-transparent hover:opacity-80"}`} loading="lazy" />
          ))}
        </div>

        <div className="flex items-center justify-between mt-3 px-1">
          <div className="text-[0.8rem] text-muted-foreground">
            <b className="text-gold">{current + 1}</b> / {filtered.length}
          </div>
          <div className="flex gap-2">
            {filtered.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all cursor-pointer border-none ${i === current ? "w-[18px] bg-gold" : "w-1.5 bg-foreground/20"}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="w-9 h-9 rounded-full bg-glass border border-glass-border flex items-center justify-center text-foreground hover:bg-gold hover:border-gold hover:text-primary-foreground transition-all cursor-pointer">
              <ArrowLeft size={14} />
            </button>
            <button onClick={next} className="w-9 h-9 rounded-full bg-glass border border-glass-border flex items-center justify-center text-foreground hover:bg-gold hover:border-gold hover:text-primary-foreground transition-all cursor-pointer">
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GalleryCarousel;
