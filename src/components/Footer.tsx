import { motion } from "motion/react";
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import imgLogo from "figma:asset/2394a32a50536924e9d39b59dc4f0c6ed0ae55ab.png";
import imgMap from "figma:asset/03f4e9e65cd0f3666649e3a38e53fff9383cd191.png";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "Youtube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white mb-6">Tentang Kab Tapanuli</h3>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-3"
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#b42318]" />
                <div>
                  <p className="text-white/90">Jl. Letjen Suprapto No.1, Tarutung</p>
                  <p className="text-white/90">Tapanuli Utara, Sumatera Utara, 22411</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-[#b42318]" />
                <a href="mailto:diskominfo@taputkab.go.id" className="text-white/90 hover:text-white transition-colors">
                  diskominfo@taputkab.go.id
                </a>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-[#b42318]" />
                <a href="tel:+6263321220" className="text-white/90 hover:text-white transition-colors">
                  +62 633 21220
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-white mb-6">Media Sosial</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center hover:bg-[#b42318] hover:text-white transition-all shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-white mb-6">Wilayah Kab Tapanuli</h3>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src={imgMap} 
                alt="Peta Kabupaten Tapanuli Utara" 
                className="w-full h-48 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#d92d20] py-6"
      >
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-white">© Copyright 2018 Kab. Tapanuli Utara</p>
        </div>
      </motion.div>
    </footer>
  );
}
