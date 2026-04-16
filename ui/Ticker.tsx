const items = [
  "Grade A Commercial", "DGU Glass Façade", "3 OTIS High-Speed Lifts",
  "VRF Air Conditioning", "Imported Marble Lobby", "80+ Car Parking",
  "Full Fire Safety Compliance", "Power Backup",
];

const Ticker = () => (
  <div className="bg-gold-gradient py-2.5 overflow-hidden whitespace-nowrap">
    <div className="inline-flex animate-ticker">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="text-[0.75rem] font-bold tracking-[2px] uppercase text-primary-foreground px-10">
          {item} <span className="opacity-50 mx-2">·</span>
        </span>
      ))}
    </div>
  </div>
);

export default Ticker;
