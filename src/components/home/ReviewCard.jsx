import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-[#F5F1E8] border border-[#EEE7D5] p-8 rounded-[20px] shadow-sm flex-shrink-0 w-full md:w-[350px] flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-[#D8C49A] text-[#102A20] rounded-full flex items-center justify-center font-serif text-lg font-bold">
            {getInitials(review.authorName)}
          </div>
          <div>
            <h4 className="font-serif text-[#102A20] font-bold">{review.authorName}</h4>
            <p className="text-xs text-[#102A20]/60">{review.relativeTime}</p>
          </div>
        </div>

        <div className="flex gap-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-[#B77B45] text-[#B77B45]" />
          ))}
        </div>

        <p className="text-[#102A20]/80 text-lg leading-relaxed mb-6">"{review.text}"</p>
      </div>

      <div className="flex justify-between items-center mt-auto pt-6 border-t border-[#EEE7D5]">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#102A20]/40">SAMPLE REVIEW</span>
        <span className="text-xs font-sans text-[#102A20]/50">{review.source}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
