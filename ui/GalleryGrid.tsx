import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
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

const allImages = [
  { img: dawn, title: "Dawn Elevation", cat: "exterior" },
  { img: perspective, title: "Full Perspective", cat: "exterior" },
  { img: top, title: "Aerial View", cat: "exterior" },
  { img: closeup, title: "Façade Detail", cat: "exterior" },
  { img: lobby, title: "Grand Lobby", cat: "interior" },
  { img: retail, title: "Retail Frontage", cat: "interior" },
  { img: mez1, title: "Mezzanine Level 1", cat: "interior" },
  { img: mez2, title: "Mezzanine Level 2", cat: "interior" },
  { img: floor1, title: "Typical Floor Plan", cat: "interior" },
  { img: office, title: "Office Space", cat: "interior" },
  { img: conf, title: "Conference Room", cat: "interior" },
  { img: site, title: "Construction Progress", cat: "site" },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Exterior", value: "exterior" },
  { label: "Interior", value: "interior" },
  { label: "On-Site", value: "site" },
];

const GalleryGrid = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, inView } = useInView();

  const filtered = activeTab === "all" ? allImages : allImages.filter(s => s.cat === activeTab);

  const navigateLightbox = (dir: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox === null) return;
    const next = lightbox + dir;
    if (next >= 0 && next < filtered.length) setLightbox(next);
  };

  return (
    <>
      <section id="gallery" className="py-24 px-[5%] bg-gradient-to-b from-navy-mid to-navy-deep" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex justify-between items-end mb-14 flex-wrap gap-6">
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
              <button key={tab.value} onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-2 rounded-full border text-[0.75rem] cursor-pointer font-body transition-all duration-300 ${activeTab === tab.value ? "bg-gold border-gold text-primary-foreground font-bold" : "border-foreground/12 text-muted-foreground hover:bg-gold/10 hover:border-gold/40 hover:text-gold"}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Creative Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3">
          {filtered.map((item, i) => {
            // Create visual interest with varying spans
            const isLarge = i === 0 || i === 5;
            const isTall = i === 3 || i === 8;
            const spanClass = isLarge
              ? "col-span-2 row-span-2"
              : isTall
              ? "row-span-2"
              : "";

            return (
              <motion.div
                key={`${activeTab}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => setLightbox(i)}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${spanClass}`}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
                
                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-sm text-foreground leading-tight">{item.title}</h4>
                      <span className="text-[0.6rem] uppercase tracking-widest text-gold/70">{item.cat}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center backdrop-blur-sm">
                      <ZoomIn size={14} className="text-gold" />
                    </div>
                  </div>
                </div>

                {/* Corner accent on hover */}
                <div className="absolute top-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold to-transparent" />
                  <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-navy-deep/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-glass border border-glass-border flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground transition-all cursor-pointer z-10">
              <X size={18} />
            </button>

            {lightbox > 0 && (
              <button onClick={(e) => navigateLightbox(-1, e)} className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-glass border border-glass-border flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground transition-all cursor-pointer z-10">
                <ChevronLeft size={18} />
              </button>
            )}
            {lightbox < filtered.length - 1 && (
              <button onClick={(e) => navigateLightbox(1, e)} className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-glass border border-glass-border flex items-center justify-center text-foreground hover:bg-gold hover:text-primary-foreground transition-all cursor-pointer z-10">
                <ChevronRight size={18} />
              </button>
            )}

            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={filtered[lightbox].img} alt={filtered[lightbox].title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={e => e.stopPropagation()}
            />
            <div className="absolute bottom-6 text-center">
              <h4 className="font-display text-lg text-foreground">{filtered[lightbox].title}</h4>
              <span className="text-[0.65rem] uppercase tracking-widest text-gold/60">{filtered[lightbox].cat}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
