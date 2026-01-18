import React from 'react';
import { Presentation, GraduationCap, MessagesSquare, Lightbulb } from 'lucide-react';

const services = [
  {
    title: "Seminar (Daring / Luring)",
    description: "Fungsi peningkatan aksesibilitas terhadap Mitra Ajar melalui sesi sinkronus.",
    details: "Mencakup penyampaian insight kunci untuk audiens yang lebih luas.",
    icon: <Presentation className="w-8 h-8 text-blue-600" />,
    ref: "Sinkronus"
  },
  {
    title: "Workshop & Training",
    description: "Dirancang khusus sesuai kebutuhan peserta untuk memberikan jawaban tepat atas target yang ditetapkan.",
    details: "Tersedia dalam format Training per Session atau Training Series (>1 Session).",
    icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
    ref: "Daring / Luring"
  },
  {
    title: "Consultation & Need Assessment",
    description: "Membantu lembaga merumuskan kebutuhan belajar dan konsultasi program.",
    details: "Melakukan hiring dan alignment process dengan Mitra Ajar yang relevan.",
    icon: <MessagesSquare className="w-8 h-8 text-blue-600" />,
    ref: "Asinkronus"
  }
];

const topics = [
  "Leadership", "Business Management", "Work Management", 
  "Customer Experience", "Communication", "Thinking Skill", "Collaboration"
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Pilihan Layanan & Program</h2>
          <p className="text-slate-600 max-w-2xl">
            Membangun kapasitas bertindak melalui kegiatan pendidikan dan pelatihan yang mendukung terwujudnya dampak bermakna bagi penerima manfaat.
          </p>
        </div>

        {/* 1. Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-md transition">
              <div className="mb-6">{service.icon}</div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {service.ref}
              </span>
              <h3 className="text-xl font-bold mt-4 mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-slate-500 text-xs italic">
                {service.details}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Topics Cloud */}
        <div className="bg-indigo-50 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
              <Lightbulb className="text-indigo-600" /> Topik Keahlian
            </h4>
            <p className="text-slate-600">
              Kategori pengetahuan dan keahlian yang tersedia dalam database Mitra Ajar kami.
            </p>
          </div>
          <div className="flex-2 flex flex-wrap gap-3 justify-center">
            {topics.map((topic, i) => (
              <span key={i} className="px-5 py-2 bg-white border border-indigo-100 text-indigo-700 rounded-full font-medium text-sm shadow-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}