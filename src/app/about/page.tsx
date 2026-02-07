import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Link as LinkIcon, ShieldCheck, Zap, ArrowLeft } from 'lucide-react';

import coreValues from '../../../public/images/about/core-values.png'

// Import aset gambar yang kamu miliki
// Pastikan path ini sesuai dengan lokasi penyimpanan gambarmu
// import HeroPuzzle from '../../public/images/hero/hero-puzzle.png';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white overflow-x-hidden selection:bg-[#a294cf]/30">

      {/* --- TOMBOL NAVIGASI --- */}
      <div className="fixed top-28 left-6 z-40 lg:left-12">
        <Link href="/" className="flex items-center gap-2 text-[#86a789] hover:text-[#a294cf] font-bold transition-all group">
          <div className="p-2 rounded-full bg-slate-50 group-hover:bg-white shadow-sm border border-slate-100">
            <ArrowLeft size={20} />
          </div>
          <span className="hidden md:inline text-sm uppercase tracking-widest">Beranda</span>
        </Link>
      </div>

      {/* --- SECTION 1: FILOSOFI & DESKRIPSI --- */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">

          {/* KOLOM KIRI: Judul & Filosofi */}
          <div className="flex-1 space-y-12">
            <h1 className="text-7xl lg:text-8xl font-black text-[#86a789] tracking-tighter leading-[0.9]">
              Tentang <br /> Tautara
            </h1>

            <div className="space-y-6">
              {/* Card: Taut + Antara */}
              <div className="p-8 border-2 border-[#86a789] rounded-[2.5rem] space-y-5 hover:shadow-xl hover:shadow-[#86a789]/5 transition-all group">
                <h2 className="text-3xl font-black text-[#c1d061]">Taut + Antara</h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Yang menautkan di antara para pembelajar sepanjang hayat.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Penghubung', 'Perantara', 'Jembatan'].map((pill) => (
                    <span key={pill} className="bg-[#a294cf] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card: Taut + Arah */}
              <div className="p-8 border-2 border-[#86a789] rounded-[2.5rem] space-y-5 hover:shadow-xl hover:shadow-[#86a789]/5 transition-all group">
                <h2 className="text-3xl font-black text-[#c1d061]">Taut + Arah</h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Yang membuat para penggerak perubahan bukan hanya tahu, tapi tahu ke mana harus melangkah.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Fasilitator Pembelajaran', 'Fasilitator Perubahan'].map((pill) => (
                    <span key={pill} className="bg-[#a294cf] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden lg:block w-px bg-slate-200 self-stretch my-10"></div>

          {/* KOLOM KANAN: Deskripsi & Core Values */}
          <div className="flex-[1.2] space-y-16">

            {/* Deskripsi Platform */}
            <div className="space-y-8">
              <h3 className="text-2xl font-black text-[#a294cf] uppercase tracking-widest">Deskripsi Platform</h3>
              <div className="text-slate-600 space-y-6 leading-relaxed text-lg font-medium">
                <p>
                  <span className="text-[#86a789] font-bold">Tautara</span> adalah platform yang menjembatani lembaga, komunitas, dan fasilitator dalam merancang dan menjalankan proses belajar yang bermakna.
                </p>
                <p>
                  Berangkat dari praktik pendidikan komunitas dan pengorganisasian anak muda, Tautara hadir sebagai <span className="italic font-bold text-[#a294cf]">learning intermediary</span>.
                </p>
                <div className="space-y-4">
                  <p className="text-slate-400 text-base italic">Tautara tidak hanya menghubungkan orang dengan kegiatan, tetapi:</p>
                  <ul className="space-y-3">
                    {[
                      "Membantu lembaga merumuskan kebutuhan belajarnya",
                      "Mendampingi fasilitator dalam membangun praktik yang reflektif dan bertanggung jawab",
                      "Menjaga kualitas proses belajar agar tidak berhenti sebagai acara sesaat"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <div className="w-2 h-2 rounded-full bg-[#c1d061] mt-2.5 shrink-0"></div>
                        <span>{item}.</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-8">
              <h3 className="text-2xl font-black text-[#a294cf] uppercase tracking-widest">Core Values</h3>
              <Image src={coreValues} alt='core values'/>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION BERIKUTNYA BISA DITAMBAHKAN DI SINI --- */}

      <section className="py-24 px-6 lg:px-12 bg-slate-50/50">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* --- SUB-SECTION: LATAR BELAKANG --- */}
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#a294cf] text-center tracking-tight">
            Dari Mana Kami Berangkat
          </h2>

          <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
            <p>
              Banyak komunitas dan organisasi anak muda di Indonesia lahir dari keresahan dan semangat untuk berbuat. Mereka membawa inisiatif yang relevan dengan persoalan di sekitarnya—pendidikan, pemberdayaan, lingkungan. Namun, dalam perjalanannya, tidak sedikit dari mereka yang tersendat pada satu titik yang sama: <span className="text-[#86a789] font-bold">akses terhadap pembelajaran yang tepat</span>.
            </p>

            <p>
              Kesulitan menemukan trainer dan fasilitator yang benar-benar memahami konteks inisiatif menjadi tantangan utama. Kekhawatiran akan ketidaksesuaian anggaran membuat pilihan semakin terbatas. Pencarian sering bergantung pada lingkar jaringan yang itu-itu saja, sementara informasi tentang fasilitator pembelajaran yang relevan dan berpengalaman masih sulit dijangkau. Akibatnya, banyak proses belajar berhenti pada niat baik, belum sempat tumbuh menjadi kapasitas yang berkelanjutan.
            </p>

            {/* Quote / Highlight Area */}
            <div className="py-8 border-y-2 border-[#c1d061]/30 my-10">
              <p className="text-2xl md:text-3xl font-black text-[#86a789] text-center leading-tight">
                Tautara hadir dari satu kesadaran sederhana: <br className="hidden md:block" />
                <span className="text-[#a294cf]">yang sering hilang bukan potensi, tetapi ruang temu.</span>
              </p>
            </div>

            <p>
              Kami percaya bahwa setiap komunitas memiliki pengalaman, praktik, dan pengetahuan yang hidup. Agar pengetahuan itu bisa berkembang, ia perlu dipertemukan dengan konteks yang tepat, difasilitasi melalui proses belajar membumi, dan didampingi oleh orang-orang yang memampukan. Oleh karena itu, Tautara hadir untuk menjembatani komunitas dan organisasi anak muda dengan fasilitator pembelajaran yang relevan, kontekstual, dan selaras dengan kebutuhan mereka.
            </p>

            <p className="pt-4">
              Melalui Tautara, ekosistem belajar dibangun bersama dari <span className="text-[#86a789] font-bold">banyak tangan yang saling menaut</span>: belajar, bertumbuh, dan bergerak.
            </p>
          </div>
        </div>

        {/* --- SUB-SECTION: MISI KAMI --- */}
        <div className="pt-16 border-t border-slate-200">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#a294cf] tracking-tight">
              Misi Kami
            </h2>
            <div className="max-w-3xl p-10 bg-white rounded-[3rem] shadow-xl shadow-[#a294cf]/5 border border-slate-100">
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-semibold">
                Membangun ekosistem belajar yang menautkan individu dan komunitas (<span className="text-[#86a789]">“Mitra Belajar”</span>) dengan ahli atau trainer (<span className="text-[#86a789]">“Mitra Ajar”</span>) melalui kegiatan pendidikan dan pelatihan yang menumbuhkan kapasitas bertindak dan mendukung terwujudnya dampak yang bermakna.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    </main>
  );
}
