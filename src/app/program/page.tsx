import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Presentation, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, GraduationCap } from 'lucide-react';

// Import aset (sesuaikan path)
import IconOwl from '../../../public/images/hero/landing-page-icon-owl.png';

export default function ProgramPage() {
  const learningAreas = [
    { title: "Inclusive Education", items: ["Pembelajaran Adaptif", "Memahami Keberagaman Individu", "Diferensiasi Rancangan Belajar"], icon: <Users size={20} /> },
    { title: "Community Education", items: ["Manajemen Kelas & Kelompok Ajar", "Manajemen Emosi & Profesional", "Metode Kontekstual"], icon: <GraduationCap size={20} /> },
    { title: "Leadership Skills", items: ["Komunikasi Asertif", "Collaboration Skills", "Self-Discipline"], icon: <Sparkles size={20} /> },
    { title: "Community Service", items: ["Memfasilitasi Perubahan", "Pendekatan Etis", "Pelibatan Komunitas"], icon: <CheckCircle2 size={20} /> },
    { title: "Project Management", items: ["Project Management 101", "Theory of Change", "Monitoring & Evaluasi"], icon: <Presentation size={20} /> }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#FDFDFF] overflow-x-hidden selection:bg-[#a294cf]/30">

      {/* --- FLOATING DECORATION --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a294cf]/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute top-[40%] -left-20 w-[400px] h-[400px] bg-[#c1d061]/5 rounded-full blur-[100px] -z-10"></div>

      {/* --- BACK NAVIGATION --- */}
      <div className="fixed top-28 left-6 z-40 lg:left-12">
        <Link href="/" className="flex items-center gap-3 text-[#86a789] hover:text-[#a294cf] font-bold transition-all group">
          <div className="p-3 rounded-full bg-white shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
            <ArrowLeft size={20} />
          </div>
          <span className="hidden md:inline text-xs uppercase tracking-[0.2em]">Kembali</span>
        </Link>
      </div>

      {/* ================= SECTION 1: HERO & FORMAT ================= */}
      <section className="pt-44 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          <div className="lg:w-2/5 space-y-8 lg:sticky lg:top-40">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a294cf]/10 border border-[#a294cf]/20 text-[#a294cf] text-xs font-bold uppercase tracking-widest">
                Our Programs
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-none">
                Program <br /> <span className="text-[#a294cf]">Kami</span>
              </h1>
              <p className="text-[#86a789] text-2xl font-bold leading-tight max-w-sm">
                Rancang proses belajar yang benar-benar bekerja.
              </p>
            </div>

            <p className="text-slate-500 font-medium leading-relaxed text-lg italic border-l-4 border-[#c1d061] pl-6">
              "Tautara menghadirkan program yang dapat disesuaikan dengan kebutuhan komunitas dan organisasi."
            </p>

            <Link href="/konsultasi" className="group flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-full font-bold w-fit hover:bg-[#a294cf] transition-all shadow-xl">
              Mulai Konsultasi <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="lg:w-3/5 grid md:grid-cols-2 gap-8">
            {/* Training Card */}
            <div className="relative group pt-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center z-10 border border-slate-50 group-hover:-rotate-12 transition-transform">
                <Users className="text-[#86a789]" size={32} />
              </div>
              <div className="bg-white border border-slate-100 rounded-[3rem] p-10 pt-16 shadow-xl shadow-slate-200/50 group-hover:border-[#86a789]/30 transition-all">
                <h3 className="text-3xl font-black text-[#86a789] mb-4">Training</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 opacity-80">Ruang untuk menguatkan kapasitas melalui praktik langsung yang aplikatif.</p>
                <div className="space-y-3 mb-8 bg-slate-50 p-6 rounded-2xl">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400"><span>Durasi</span> <span className="text-[#a294cf]">60-90m</span></div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400"><span>Peserta</span> <span className="text-[#a294cf]">30-300</span></div>
                </div>
                <ul className="space-y-4 text-sm font-semibold text-slate-600">
                  {["Pengenalan Isu Baru", "Kesamaan Perspektif", "Audiens Besar"].map((t, i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#c1d061]" /> {t}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Seminar Card */}
            <div className="relative group pt-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center z-10 border border-slate-50 group-hover:rotate-12 transition-transform">
                <Presentation className="text-[#a294cf]" size={32} />
              </div>
              <div className="bg-white border border-slate-100 rounded-[3rem] p-10 pt-16 shadow-xl shadow-slate-200/50 group-hover:border-[#a294cf]/30 transition-all">
                <h3 className="text-3xl font-black text-[#a294cf] mb-4">Seminar</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 opacity-80">Ruang untuk memperluas pemahaman satu arah yang sederhana.</p>
                <div className="space-y-3 mb-8 bg-slate-50 p-6 rounded-2xl">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400"><span>Durasi</span> <span className="text-[#86a789]">90-120m</span></div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400"><span>Peserta</span> <span className="text-[#86a789]">15-40</span></div>
                </div>
                <ul className="space-y-4 text-sm font-semibold text-slate-600">
                  {["Penguatan Praktik", "Tim Komunitas", "Refleksi Mendalam"].map((t, i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle2 size={16} className="text-[#c1d061]" /> {t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: AREA PEMBELAJARAN (BENTO) ================= */}
      <section className="py-32 px-6 lg:px-12 bg-[#86a789]/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">

            {/* Grid Area - Bento Style */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningAreas.map((area, idx) => (
                <div key={idx} className={`bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group ${idx === 2 ? 'md:col-span-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#a294cf]/10 rounded-2xl text-[#a294cf] group-hover:bg-[#a294cf] group-hover:text-white transition-colors">{area.icon}</div>
                    <h3 className="text-xl font-black text-slate-800 tracking-tight">{area.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.items.map((item, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-100 hover:bg-[#c1d061] hover:text-white transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Content Side */}
            <div className="lg:w-1/3 space-y-10">
              <h2 className="text-5xl lg:text-7xl font-black text-[#a294cf] tracking-tighter leading-none">
                Area <br /> Pembelajaran
              </h2>

              <div className="relative bg-[#86a789] p-10 rounded-[3rem] text-white shadow-2xl">
                <p className="text-lg font-medium leading-relaxed italic opacity-90">
                  "Tautara terbuka untuk mengeksplorasi topik lain sesuai konteks dan kebutuhan Mitra Belajar."
                </p>
                <div className="absolute -bottom-4 right-16 w-10 h-10 bg-[#86a789] rotate-45"></div>
              </div>

              <div className="flex flex-col items-center lg:items-end gap-6 md:pr-10">
                <Link href="/konsultasi" className="bg-[#c1d061] text-white px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl shadow-[#c1d061]/20">
                  Konsultasi Sekarang
                </Link>
                <div className="relative w-56 h-56 animate-float">
                  <Image src={IconOwl} alt="Mascot" fill className="object-contain" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
