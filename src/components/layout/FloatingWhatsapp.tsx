import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../../utils/format';

export const FloatingWhatsapp = () => {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Tooltip teks saaat kursor diarahkan */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-bold pl-0 group-hover:pl-2">
        Pesan via WA
      </span>
    </a>
  );
};
