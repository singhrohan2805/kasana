import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Gallery", href: "#gallery" },
  { label: "Spaces", href: "#spaces" },
  { label: "Location", href: "#location" },
  { label: "Why Us", href: "#why" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] px-[5%] py-4 flex items-center justify-between transition-all duration-400 ${scrolled ? "bg-navy-deep/85 backdrop-blur-lg border-b border-gold-subtle shadow-[0_4px_40px_rgba(0,0,0,0.5)]" : ""}`}>
      <a href="#" className="flex items-center gap-3 no-underline">
        <div className="w-[42px] h-[42px] rounded-[10px] bg-gold-gradient flex items-center justify-center text-lg font-extrabold text-primary-foreground">Z</div>
        <div>
          <strong className="block text-[0.95rem] font-bold tracking-[1.5px] text-foreground">ZEAL</strong>
          <span className="text-[0.65rem] tracking-[3px] uppercase text-gold">By Kasana Builder</span>
        </div>
      </a>

      <ul className={`${menuOpen ? "flex" : "hidden"} md:flex fixed md:static inset-0 md:inset-auto bg-navy-deep/97 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none flex-col md:flex-row justify-center items-center gap-8 md:gap-8 list-none z-[999]`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <button onClick={() => handleClick(link.href)} className="text-foreground/75 hover:text-gold text-[0.82rem] tracking-wide font-medium transition-colors bg-transparent border-none cursor-pointer">
              {link.label}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => handleClick("#contact")} className="bg-gold-gradient text-primary-foreground px-6 py-2 rounded-md font-bold text-[0.8rem] tracking-wide hover:translate-y-[-2px] hover:shadow-gold transition-all">
            Enquire Now
          </button>
        </li>
      </ul>

      <button className="md:hidden z-[1001] bg-transparent border-none cursor-pointer text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
