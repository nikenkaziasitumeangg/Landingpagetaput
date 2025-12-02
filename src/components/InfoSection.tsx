import { motion } from "motion/react";
import imgLogo from "figma:asset/75f9b5114ed056733dd2f7411a06da680aead234.png";
import imgLeaders from "figma:asset/bb1e476fdd49ee188ac5670926ae01a768906145.png";

export function InfoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informasi Kabupaten */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-black text-white rounded-2xl p-8 shadow-2xl h-fit self-start"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-white rounded-xl p-3 flex items-center justify-center flex-shrink-0"
              >
                <img src={imgLogo} alt="Logo" className="w-full h-full object-contain" />
              </motion.div>
              <div>
                <h3 className="text-white">Kabupaten</h3>
                <h3 className="text-white">Tapanuli Utara</h3>
              </div>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              Kabupaten Tapanuli Utara adalah sebuah kabupaten di provinsi Sumatra Utara, 
              Indonesia yang ibukotanya berada di Tarutung. Jumlah penduduk kabupaten 
              Tapanuli Utara ditahun 2021 sebanyak 320.542 jiwa, dengan kepadatan penduduk 
              85 jiwa/km² dan kabupaten ini merupakan kawasan yang mayoritas penduduknya 
              adalah etnis atau suku Batak Toba.
            </p>
          </motion.div>
          
          {/* Pimpinan Daerah */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-black mb-8">Informasi Kabupaten</h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {["Pimpinan Daerah", "Visi-Misi", "Kecamatan", "Suku Bangsa", "Agama", "Pariwisata"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-lg transition-all text-sm ${
                    index === 0 
                      ? "bg-[#b42318] text-white shadow-lg" 
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl h-fit"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={imgLeaders} 
                  alt="Pimpinan Daerah" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                    Bupati Tapanuli Utara
                  </p>
                  <h4 className="text-black leading-relaxed">
                    Dr. JONIUS TARIPAR PARSAORAN HUTABARAT, S.Si, M.Si
                  </h4>
                </div>
                
                <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
                
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                    Wakil Bupati Tapanuli Utara
                  </p>
                  <h4 className="text-black leading-relaxed">
                    Dr. DENI PARLINDUNGAN LUMBANTORUAN, M.Eng.
                  </h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}