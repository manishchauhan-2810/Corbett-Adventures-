import React from 'react';
import SafeImage from '../components/ui/SafeImage';
import { IMG } from '../data/site';
const BlogArticleTemplate=({title,content,author='Jim Corbett Adventures',date,image=IMG.forest})=><main className="page-shell"><section className="container-wide pt-32 pb-14"><div className="h-[45vh] overflow-hidden rounded-[24px]"><SafeImage src={image} alt={title} className="h-full w-full object-cover"/></div><h1 className="display mt-8 max-w-4xl text-5xl md:text-7xl">{title}</h1><p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#102A20]/45">{date} · {author}</p><div className="mt-10 max-w-3xl text-base leading-8 text-[#102A20]/70">{content}</div></section></main>;
export default BlogArticleTemplate;
