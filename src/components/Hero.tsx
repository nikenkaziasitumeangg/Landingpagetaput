import { motion } from "motion/react";
import imgHero from "figma:asset/cc4aa5ed301503fdd1d581a8447898be15a46423.png";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-600 mb-2"
            >
              Selamat Datang di Website Resmi
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-black mb-6"
            >
              Kabupaten Tapanuli Utara
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600 mb-8 max-w-lg"
            >
              Temukan informasi terbaru mengenai pemerintahan, layanan publik, potensi daerah, 
              serta berbagai program pembangunan yang terus kami tingkatkan demi mewujudkan 
              masyarakat Tapanuli Utara yang maju, mandiri, dan sejahtera.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(180, 35, 24, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#b42318] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#9a1f15] transition-all"
            >
              Read More
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={imgHero} 
                alt="Pimpinan Kabupaten Tapanuli Utara" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
