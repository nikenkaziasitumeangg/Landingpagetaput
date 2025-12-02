import { motion } from "motion/react";
import { Clock } from "lucide-react";
import imgNews1 from "figma:asset/0f4eb4dbf97d6b2b6fe048d0e2436bfc16fa5df0.png";
import imgNews2 from "figma:asset/7f97f3e613c0958cb908e4ee694b8d3aa8a64ee3.png";
import imgNews3 from "figma:asset/c56f1724ea46e95682ccf19158746a58a32d0f1f.png";

const newsItems = [
  {
    id: 1,
    image: imgNews1,
    title: "Bupati Taput Launching Aplikasi HUTA SEHAT",
    excerpt: "Bupati Tapanuli Utara Dr. Jonius Taripar Parsaoran Hutabarat, S.Si., M.Si. bersama Ketua TP PKK Ny. .....",
    date: "28 Okt 2025 22:18"
  },
  {
    id: 2,
    image: imgNews2,
    title: "Bupati Taput Buka Kegiatan 'Brainstorming' Rencana .....",
    excerpt: "Bupati Tapanuli Utara, Dr. Jonius Taripar Hutabarat, S.Si., M.Si bersama Wakil Bupati Tapanuli Utara, Dr. Deni Lumbantoruan, .....",
    date: "28 Okt 2025 22:18"
  },
  {
    id: 3,
    image: imgNews3,
    title: "Bupati dan Ketua PN Kunjungi Almamater",
    excerpt: "Bupati Tapanuli Utara Dr. Jonius Taripar Parsaoran Hutabarat, S.Si., M.Si., bersama Ketua Pengadilan Negeri Tarutung Marta .....",
    date: "23 Okt 2025 15:10"
  },
  {
    id: 4,
    image: imgNews1,
    title: "Bupati Taput Launching Aplikasi HUTA SEHAT",
    excerpt: "Bupati Tapanuli Utara Dr. Jonius Taripar Parsaoran Hutabarat, S.Si., M.Si. bersama Ketua TP PKK Ny. .....",
    date: "28 Okt 2025 22:18"
  }
];

export function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-black">Berita Utama</h2>
          <motion.a 
            href="#"
            whileHover={{ x: 5 }}
            className="text-gray-600 hover:text-[#b42318] transition-colors"
          >
            Portal Berita
          </motion.a>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  
                  <h3 className="text-black mb-2 line-clamp-2 group-hover:text-[#b42318] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
