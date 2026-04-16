import { Phone, MessageCircle } from "lucide-react";

const FloatingCta = () => (
  <div className="fixed bottom-7 right-6 z-[900] flex flex-col gap-3">
    <a href="tel:9990002008" className="w-12 h-12 rounded-full bg-[linear-gradient(135deg,#1a73e8,#0d5bd1)] flex items-center justify-center text-foreground no-underline shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform" title="Call Now">
      <Phone size={18} />
    </a>
    <a href="https://wa.me/919990002008" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[linear-gradient(135deg,#25d366,#128c7e)] flex items-center justify-center text-foreground no-underline shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform" title="WhatsApp">
      <MessageCircle size={18} />
    </a>
  </div>
);

export default FloatingCta;
