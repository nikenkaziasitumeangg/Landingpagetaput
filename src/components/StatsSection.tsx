import { motion } from "motion/react";
import { MapPin, Building2, Users, Briefcase } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: "15",
    label: "Kecamatan",
    color: "bg-[#b42318]"
  },
  {
    icon: Building2,
    value: "252",
    label: "Desa/Kelurahan",
    color: "bg-[#9a1f15]"
  },
  {
    icon: Users,
    value: "29981",
    label: "Jumlah Penduduk (Thn 2018)",
    color: "bg-[#7a1912]"
  },
  {
    icon: Briefcase,
    value: "5357",
    label: "Jumlah ASN",
    color: "bg-[#5a120e]"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6, type: "spring" }}
              >
                <p className="text-white mb-2">{stat.value}</p>
              </motion.div>
              
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
