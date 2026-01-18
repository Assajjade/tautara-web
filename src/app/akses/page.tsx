import React from 'react';
import { Search, Filter, Award, Briefcase, GraduationCap } from 'lucide-react';

const categories = [
  "Semua", "Leadership Skills", "Project Management", 
  "Community Development", "Pendidikan", "Thinking Skill"
];

const mentors = [
  {
    id: 1,
    name: "Sarilani Wirawan, M.Si., ACC, ACTC",
    role: "Co-Founder & Direktur Program, Digdaya Selaras",
    experience: "20+ Tahun",
    category: "Leadership Skills",
    image: "/api/placeholder/400/400", // Ganti dengan path foto asli
    bio: "Sari memiliki pengalaman lebih dari 20 tahun dalam bidang perubahan perilaku, pengembangan kepemimpinan, dan efektivitas tim.",
    tags: ["Appreciative Inquiry", "Human-Centered Design", "Social Intervention"]
  },
  // Tambahkan data mentor lainnya di sini
];

export default function AksesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center lg:text-left">Database Mitra Ajar</h1>
          <p className="text-slate-600 max-w-2xl text-center lg:text-left">
            Temukan Mentor Profesional yang siap membimbing tim Anda melalui kurasi ketat Tautara untuk memastikan validitas dan reputasi pakar[cite: 56, 142].
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter [cite: 144-150] */}
          <aside className="w-full lg:w-64 space-y-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Filter size={18} /> Topik Keahlian
              </h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map((cat) => (
                  <button key={cat} className="px-4 py-2 text-sm text-left rounded-lg hover:bg-white hover:shadow-sm transition text-slate-600 hover:text-blue-600">
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mentor Grid [cite: 151-157] */}
          <main className="flex-1">
            <div className="grid md:grid-cols-2 gap-6">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition">
                  <div className="p-6">
                    <div className="flex gap-4 mb-6">
                      <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-xl object-cover bg-slate-100" />
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 leading-tight mb-1">{mentor.name}</h3>
                        <p className="text-sm text-blue-600 font-medium mb-2">{mentor.role}</p>
                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                          <Briefcase size={14} /> <span>{mentor.experience} Pengalaman</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {mentor.bio} [cite: 166]
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {mentor.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-md text-[10px] font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition">
                      Lihat Profil Lengkap
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}