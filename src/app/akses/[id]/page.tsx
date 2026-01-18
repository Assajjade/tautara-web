import React from 'react';
import { 
  ArrowLeft, Award, CheckCircle2, Globe, 
  Linkedin, MessageSquare, Briefcase 
} from 'lucide-react';
import Link from 'next/link';

// Contoh data detail (Dalam realita, ini diambil dari database/API)
const mentorDetail = {
  id: "sarilani-wirawan",
  name: "Sarilani Wirawan, M.Si., ACC, ACTC",
  role: "Co-Founder & Direktur Program, Digdaya Selaras",
  subRole: "Co-Founder Indonesia Conservation Coach Club",
  image: "/api/placeholder/400/400",
  experience: "20+ Tahun",
  location: "Bogor / Jakarta",
  bio: "Sari memiliki pengalaman lebih dari 20 tahun dalam bidang perubahan perilaku, pengembangan kepemimpinan, dan efektivitas tim di tingkat akar rumput dan global, terutama untuk sektor konservasi keanekaragaman hayati[cite: 166].",
  longDescription: "Ia adalah seorang coach dan fasilitator profesional yang fokus pada sektor pembangunan berkelanjutan. Sari telah memfasilitasi berbagai organisasi, mulai dari non-profit hingga korporasi, dalam menciptakan lingkungan kerja yang lebih kolaboratif dan berdampak[cite: 167, 168].",
  approach: [
    { title: "Appreciative Inquiry", desc: "Menciptakan ruang pembelajaran yang partisipatif." },
    { title: "Human-Centered Design", desc: "Pendekatan yang berfokus pada kebutuhan manusia." },
    { title: "Social Intervention Strategy", desc: "Membangun kapasitas untuk perubahan sosial[cite: 169, 170]." }
  ],
  trackRecord: [
    "Pengembangan kepemimpinan di sektor konservasi global[cite: 166].",
    "Fasilitasi efektivitas tim tingkat akar rumput[cite: 166].",
    "Transformasi budaya kerja kolaboratif di lembaga non-profit[cite: 168].",
    "Pengembangan kapasitas organisasi melalui strategi intervensi sosial[cite: 170]."
  ]
};

export default function MentorDetailPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Navigasi Kembali */}
        <Link href="/akses" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition">
          <ArrowLeft size={20} /> Kembali ke Database
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Sisi Kiri: Profil & Kontak */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <img src={mentorDetail.image} alt={mentorDetail.name} className="w-full aspect-square rounded-3xl object-cover mb-6 shadow-sm" />
              <h1 className="text-2xl font-bold text-slate-900 mb-2">{mentorDetail.name}</h1>
              <p className="text-blue-600 font-medium mb-1">{mentorDetail.role}</p>
              <p className="text-slate-500 text-sm mb-6">{mentorDetail.subRole} </p>
              
              <div className="space-y-4 border-t pt-6">
                <Link href="/konsultasi" className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
                  <MessageSquare size={18} /> Ajukan Konsultasi
                </Link>
                <button className="w-full flex items-center justify-center gap-2 border border-slate-200 py-4 rounded-2xl font-bold hover:bg-slate-50 transition">
                  <Linkedin size={18} className="text-blue-700" /> Profil LinkedIn
                </button>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Detail Pengalaman */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-blue-600" /> Tentang Fasilitator
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">{mentorDetail.bio}</p>
              <p className="text-slate-600 leading-relaxed">{mentorDetail.longDescription}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-blue-600" /> Rekam Jejak Relevan [cite: 157]
              </h2>
              <div className="grid gap-4">
                {mentorDetail.trackRecord.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="mt-1 text-blue-600"><CheckCircle2 size={16} /></div>
                    <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Globe className="text-blue-600" /> Metode & Pendekatan 
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {mentorDetail.approach.map((item, index) => (
                  <div key={index} className="p-5 border border-slate-100 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}