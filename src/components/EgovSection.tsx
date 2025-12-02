import { motion } from "motion/react";
import imgEgov from "figma:asset/610c5452771bb04b67c1adf2616ba1e511d7e12b.png";

export function EgovSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-black mb-6"
            >
              E-GOVERNMENT
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4 text-gray-700"
            >
              <p>
                Bekerjasama dengan Unit EGOV-CENTER Institut Teknologi Del dan melalui 
                Dinas Kominfo, Kabupaten Tapanuli Utara telah mengimplementasikan sistem 
                pemerintahan berbasis elektronik sejak tahun 2018
              </p>
              
              <p>
                Pengembangan dan penyempurnaan aplikasi tetap dilakukan. Sampai saat ini 
                beberapa aplikasi utama telah dihasilkan dan digunakan, diantaranya: 
                Aplikasi Perencanaan, Penganggaran, Kepegawaian, Kinerja, Penatausahaan 
                dan Portal Kabupaten
              </p>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(180, 35, 24, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#b42318] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#9a1f15] transition-all mt-8"
            >
              Read More
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={imgEgov} 
                alt="E-Government Dashboard" 
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}