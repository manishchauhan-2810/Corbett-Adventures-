import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../../config/contact';

const WhatsAppButton = ({
  message,
  label = 'BOOK ON WHATSAPP',
  className = '',
  variant = 'primary',
}) => {
  const url = getWhatsAppLink(message);

  const base =
    'group inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-[0.08em] transition-all duration-300 hover:-translate-y-1';

  const variants = {
    primary:
      'bg-[#D8C49A] text-[#102A20] hover:bg-[#B77B45] hover:text-white',
    dark:
      'bg-[#102A20] text-[#F5F1E8] hover:bg-[#1E4A36]',
    light:
      'bg-white text-[#102A20] hover:bg-[#D8C49A]',
    outline:
      'border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-[#102A20]',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
    >
      <MessageCircle size={18} strokeWidth={1.8} />

      <span>{label}</span>

      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
};

export default WhatsAppButton;