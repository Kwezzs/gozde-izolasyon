// app/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from './data';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-amber-500 selection:text-slate-900 overflow-x-hidden">
      
      {/* HEADER / HERO SECTION */}
      <header className="bg-slate-900 text-white py-32 px-4 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]">
        </motion.div>
        
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            className="w-24 h-24 mb-8 bg-amber-500/10 text-amber-500 p-5 rounded-3xl border border-amber-500/20 shadow-2xl shadow-amber-500/10">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.83L19.17 12H17v6H7v-6H4.83L12 4.83z" />
            </svg>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-5 uppercase text-white drop-shadow-sm">
            {siteData.company.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl leading-relaxed">
            {siteData.company.tagline}
          </motion.p>
          
          <motion.a 
            href="#iletisim" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-lg py-4 px-12 rounded-2xl shadow-lg shadow-amber-500/20 transition-colors duration-300 transform">
            Hemen Ücretsiz Keşif İsteyin
          </motion.a>
        </div>
      </header>

      {/* HİZMETLERİMİZ */}
      <section id="hizmetler" className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tighter">Uzmanlık Alanlarımız</h2>
          <div className="w-24 h-2 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden group hover:border-amber-500/20">
              <div className="h-56 w-full overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg shadow-lg">
                  0{service.id}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* İLETİŞİM BÖLÜMÜ */}
      <section id="iletisim" className="bg-slate-900 py-24 px-4 text-white relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tighter">Bizimle İletişime Geçin</motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="text-slate-400 mb-16 text-lg max-w-xl mx-auto leading-relaxed">
            Kayseri ve çevre illerdeki projeleriniz için ücretsiz keşif ve fiyat teklifi almak üzere bizi 7/24 arayabilirsiniz.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-3xl mx-auto">
            {siteData.contacts.map((contact, index) => (
              <motion.a 
                key={index} 
                href={contact.telLink} 
                variants={fadeInUp}
                whileHover={{ y: -5, borderColor: "rgba(251, 191, 36, 0.5)" }}
                className="bg-slate-800/80 p-8 rounded-3xl w-full border border-slate-700/50 transition-all duration-300 group shadow-xl flex flex-col items-center">
                <span className="text-sm font-semibold text-amber-500 uppercase tracking-widest mb-3">{contact.name}</span>
                <span className="text-3xl font-bold text-white group-hover:text-amber-400 transition-colors tracking-tight">
                  {contact.phone}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5, delay: 0.4 }}
            variants={fadeInUp}
            className="mt-16 inline-flex items-center gap-3 bg-slate-800/50 border border-slate-800 px-6 py-3 rounded-full text-slate-300">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="text-lg font-medium">{siteData.company.location} / Türkiye</span>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-600 py-10 text-center text-sm border-t border-slate-900/50">
        <p>&copy; {new Date().getFullYear()} {siteData.company.name}. Tüm hakları saklıdır.</p>
        <p className="mt-2 text-xs">Kayseri İzolasyon ve Çatı Çözümleri</p>
      </footer>
    </div>
  );
}