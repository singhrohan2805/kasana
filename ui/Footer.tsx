const Footer = () => (
  <footer className="bg-[#060c17] px-[5%] pt-12 pb-6 border-t border-gold/15">
    <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12 mb-10">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-[42px] h-[42px] rounded-[10px] bg-gold-gradient flex items-center justify-center text-lg font-extrabold text-primary-foreground">Z</div>
          <div>
            <strong className="block text-[0.95rem] font-bold tracking-[1.5px]">ZEAL</strong>
            <span className="text-[0.65rem] tracking-[3px] uppercase text-gold">By Kasana Builder</span>
          </div>
        </div>
        <p className="text-muted-foreground text-[0.82rem] leading-relaxed max-w-[270px] mt-3">
          Premium Grade A commercial spaces in TechZone 4, Greater Noida West. Office · Retail · F&B
        </p>
      </div>

      <div>
        <h4 className="text-[0.7rem] tracking-[2.5px] uppercase text-gold mb-4">Navigate</h4>
        <ul className="list-none space-y-2">
          {["Overview", "Gallery", "Spaces", "Location", "Why Us"].map(l => (
            <li key={l}><a href={`#${l.toLowerCase().replace(" ", "")}`} className="text-muted-foreground text-[0.82rem] no-underline hover:text-foreground transition-colors">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-[0.7rem] tracking-[2.5px] uppercase text-gold mb-4">Contact</h4>
        <ul className="list-none space-y-2">
          <li><a href="tel:+919990002008" className="text-muted-foreground text-[0.82rem] no-underline hover:text-foreground transition-colors">+91 99900 02008</a></li>
          <li><a href="mailto:leasing@zealcommercial.com" className="text-muted-foreground text-[0.82rem] no-underline hover:text-foreground transition-colors">leasing@zealcommercial.com</a></li>
          <li><a href="#contact" className="text-muted-foreground text-[0.82rem] no-underline hover:text-foreground transition-colors">Book Site Visit</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-foreground/5 pt-5 flex justify-between items-center flex-wrap gap-3">
      <p className="text-muted-foreground text-[0.75rem]">© 2025 ZEAL by Kasana Builder Pvt. Ltd.</p>
      <p className="text-muted-foreground text-[0.75rem]">Plot 31 · TechZone 4 · Greater Noida West</p>
    </div>
  </footer>
);

export default Footer;
