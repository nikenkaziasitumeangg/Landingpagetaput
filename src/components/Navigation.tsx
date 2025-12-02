import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import imgLogo from "figma:asset/2394a32a50536924e9d39b59dc4f0c6ed0ae55ab.png";

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black py-6 px-8 sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="h-12"
        >
          <img src={imgLogo} alt="Logo Kabupaten Tapanuli Utara" className="h-full w-auto object-contain" />
        </motion.div>
        
        <div className="flex items-center gap-8">
          {[
            { label: "Beranda", active: true },
            { label: "Profile", active: false },
            { label: "Pengumuman", active: false },
            { label: "Pelayanan", hasDropdown: true },
            { label: "Laporan", hasDropdown: true }
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href="#"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-1 transition-colors ${
                item.active 
                  ? "text-white font-semibold" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
