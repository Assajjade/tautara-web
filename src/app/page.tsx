import React from 'react';
import { ArrowRight, Users, Compass, ShieldCheck, Zap, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import HeroPuzzle from '../../public/images/hero/hero-puzzle.png';
import LearningArea from '../../public/images/hero/landing-page-learning-area.png';
import IconOwl from '../../public/images/hero/landing-page-icon-owl.png';

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 min-h-screen">
        	<div className="absolute top-0 right-0 w-1/2 h-screen bg-slate-50/80 skew-x-12 transform origin-top-right hidden lg:block"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="absolute bottom-10 right-1/2 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl mix-blend-multiply"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className='grid lg:grid-cols-8 gap-12 lg:gap-20 items-center'>
              <div className='col-start-1 col-span-5 flex flex-col gap-8 text-center lg:text-left'>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter'>
                  Membuka <span className='text-[#a294cf]'>akses</span> <br />
                  Menumbuhkan <span className='text-[#c1d061]'>daya</span> <br />
                  Mewujudkan <span className='text-[#86a789]'>dampak</span>
                </h1>

                <p className='text-lg md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium'>
                  Untuk individu, tim, dan komunitas yang <span className='text-[#86a789] font-bold border-b-2 border-[#c1d061]'>terus belajar</span>
                </p>

                <div className='flex flex-wrap justify-center lg:justify-start gap-4 pt-2'>
                  <Link href="#program" className='bg-[#a294cf] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#8e7fbd] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#a294cf]/20 min-w-[180px] flex justify-center'>Pelajari Lebih Lanjut</Link>
                  <Link href="#konsultasi" className='bg-[#c1d061] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#b0bd56] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#c1d061]/20 min-w-[180px] flex justify-center'>Konsultasi Sekarang</Link>
                </div>
              </div>

              <div className="col-span-3 relative h-full w-full mt-12 lg:mt-0 flex items-center justify-center">
                <div className="aspect-square w-full max-w-lg bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-[3rem] relative overflow-hidden shadow-2xl border-[12px] border-white transform rotate-2 hover:rotate-0 transition-all duration-700 ease-in-out group">
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <span className="text-4xl font-black text-slate-200">LOGO / VISUAL</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#c1d061]/20 rounded-full blur-2xl animate-bounce"></div>
              </div>
            </div>
          </div>
      </section>

    {/* --- SECTION BRANDING & SERVICES --- */}
      <section id="program" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-7xl md:text-9xl font-black mb-16 tracking-tighter select-none opacity-90">
            <span className="text-[#86a789]">Taut</span>
            <span className="text-[#a294cf]">ara</span>
          </h2>

          <div className="flex justify-center mb-16 transform hover:scale-105 transition-transform duration-500">
            <div className="w-full max-w-2xl aspect-[3/1] relative">
              <Image src={HeroPuzzle} fill className="object-contain" alt="Konektor Tautara" priority />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
              Platform yang menjembatani <span className="text-[#a294cf] font-extrabold">Mitra Belajar</span> dengan <span className="text-[#a294cf] font-extrabold">Mitra Ajar</span> dalam merancang proses pembelajaran bermakna melalui:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-left">
            {[
              { title: "Training", desc: "Ruang untuk menguatkan kapasitas melalui praktik dan diskusi langsung yang aplikatif.", color: "#86a789" },
              { title: "Seminar", desc: "Ruang untuk memperluas pemahaman dan membuka cara pandang satu arah sederhana.", color: "#86a789" }
            ].map((card, idx) => (
              <div key={idx} className="group relative pt-12">
                <div className="absolute top-0 left-8 w-24 h-24 bg-white border-4 border-[#86a789] rounded-full flex items-center justify-center z-10 p-5 shadow-lg group-hover:rotate-12 transition-transform">
                  <div className="text-[#c1d061]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={idx === 0 ? "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z" : "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4"} />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#86a789] rounded-[3rem] p-10 pt-20 flex flex-col gap-6 text-white group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-5xl font-black">{card.title}</h3>
                  <p className="text-lg leading-relaxed opacity-90">{card.desc}</p>
                  <Link href="/agency" className="mt-4 border-2 border-white px-8 py-3 rounded-full w-fit text-sm font-bold hover:bg-white hover:text-[#86a789] transition-all uppercase tracking-widest">
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-[#cfc4f5] rounded-full blur-3xl z-10">aaaxx</div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#f0f6c9] rounded-full blur-3xl "></div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-black text-[#a294cf] mb-4 tracking-tighter">
              Area Pembelajaran
            </h2>
            <p className="text-[#86a789] text-xl font-medium max-w-2xl">
              Titik berangkat proses belajar yang dapat disesuaikan dengan kebutuhan lembaga dan komunitas Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-slate-50 rounded-full scale-90 group-hover:scale-95 transition-transform duration-700 -z-10"></div>
              <div className="relative w-full aspect-square max-w-xl mx-auto drop-shadow-[0_20px_50px_rgba(162,148,207,0.15)] transform group-hover:rotate-1 transition-transform duration-500">
                <Image
                  src={LearningArea}
                  alt="Diagram Area Pembelajaran Tautara yang mencakup Project Management, Education, Leadership Skills, dan lainnya"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="relative bg-[#86a789] p-8 md:p-12 rounded-[3rem] text-white shadow-[0_20px_40px_-15px_rgba(134,167,137,0.4)] transform hover:-translate-y-1 transition-transform">
                <div className="space-y-6">
                  <p className="text-xl leading-relaxed font-medium">
                    Jika kebutuhanmu berada di luar <br />
                    <span className="font-bold underline decoration-[#c1d061] decoration-4 underline-offset-4">area pembelajaran</span>, kamu tetap dapat mengajukannya.
                  </p>
                  <div className="h-px w-full bg-white/20"></div>
                  <p className="text-lg leading-relaxed opacity-95">
                    Tautara terbuka untuk mengeksplorasi topik lain sesuai konteks dan kebutuhan <span className="font-bold text-[#e1eba7]">Mitra Belajar</span>.
                  </p>
                </div>

                {/* Ekor gelembung bicara yang lebih presisi */}
                <div className="absolute -bottom-4 right-20 w-10 h-10 bg-[#86a789] rotate-45 hidden md:block"></div>
              </div>

              {/* Tombol Aksi & Maskot */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:pr-12">
                <Link
                  href="/konsultasi"
                  className="group bg-[#c1d061] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-[#b0bd56] transition-all shadow-[0_10px_30px_-10px_rgba(193,208,97,0.5)] active:scale-95 flex items-center gap-3"
                >
                  Konsultasi Sekarang
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="relative">
                  <div className="relative w-48 h-48 md:w-60 md:h-60 transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src={IconOwl}
                      alt="Maskot Burung Hantu Tautara yang bijak"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-slate-900/5 rounded-[100%] blur-md -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c1d061] rounded-full blur-3xl  animate-pulse"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#a294cf] rounded-full blur-3xl "></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          <div className="flex flex-col lg:sticky lg:top-32">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#a294cf]/10 border border-[#a294cf]/20 w-fit">
              <span className="text-[#a294cf] text-xs font-bold uppercase tracking-widest">Langkah Awal</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-[#a294cf] leading-[1.1] mb-8 tracking-tighter">
              Konsultasi <br /> Sekarang
            </h2>
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-[#c1d061] flex items-center gap-3">
                <span className="w-8 h-1 bg-[#c1d061] rounded-full"></span>
                Mari mulai dari kebutuhan.
              </h3>
              <p className="text-xl text-[#c1d061] font-medium max-w-md leading-relaxed opacity-90">
                Ruang ini hadir untuk mendengarkanmu supaya kami dapat merancang layanan yang <span className="font-bold underline decoration-2 underline-offset-4">tepat guna</span>.
              </p>
            </div>
          </div>

          {/* --- KOLOM KANAN: Formulir --- */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#86a789] to-[#c1d061] rounded-[2.6rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 w-full"></div>

            <div className="relative bg-[#86a789] rounded-[2.5rem] p-8 md:p-12 md:px-8 shadow-[0_30px_60px_-15px_rgba(134,167,137,0.5)] transform hover:-translate-y-1 transition-all duration-500">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {[
                  { label: "Nama Lengkap", type: "text", placeholder: "Contoh: Budi Santoso" },
                  { label: "Nomor WhatsApp", type: "text", placeholder: "0812..." },
                  { label: "Alamat E-Mail", type: "email", sub: "Alamat yang dapat dihubungi sebagai narahubung" }
                ].map((field, i) => (
                  <div key={i} className={`space-y-1.5 ${field.label === 'Alamat E-Mail' ? 'md:col-span-1' : ''}`}>
                    <label className="text-white text-sm font-bold ml-2 opacity-90">{field.label}</label>
                    {field.sub && <p className="text-[10px] text-[#e1eba7] ml-2 italic">{field.sub}</p>}
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-white/40 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#c1d061] transition-all"
                    />
                  </div>
                ))}

                <div className="space-y-1.5 relative">
                  <label className="text-white text-sm font-bold ml-2 opacity-90">Topik Pelatihan</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white/10 border border-white/20 rounded-full px-6 py-3.5 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#c1d061] transition-all cursor-pointer">
                      <option className="text-slate-700" disabled selected>Pilih Topik Utama</option>
                      <option className="text-slate-700">Pendidikan</option>
                      <option className="text-slate-700">Pendidikan Khusus</option>
                      <option className="text-slate-700">Leadership Skills</option>
                      <option className="text-slate-700">Community Service/Development</option>
                      <option className="text-slate-700">Project Management</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-4 text-white w-5 h-5 pointer-events-none opacity-60" />
                  </div>
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-white text-sm font-bold ml-2 opacity-90">Topik Lainnya</label>
                  <p className="text-[10px] text-[#e1eba7] ml-2 italic">Tuliskan jika ada kebutuhan spesifik di luar topik utama</p>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-3.5 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#c1d061] transition-all" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5 relative">
                    <label className="text-white text-xs font-bold ml-2">Skema Pelaksanaan</label>
                    <div className="relative">
                      <select className="w-full appearance-none bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#c1d061] cursor-pointer">
                        <option className="text-slate-700" disabled selected>Pilih Skema</option>
                        <option className="text-slate-700">daring</option>
                        <option className="text-slate-700">luring</option>
                        <option className="text-slate-700">hybrid</option>
                        <option className="text-slate-700">masih terbuka untuk didiskusikan</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3.5 text-white w-4 h-4 pointer-events-none opacity-60" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-white text-xs font-bold ml-2">Jumlah Peserta</label>
                    <input type="text" placeholder="0" className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white text-center focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#c1d061]" />
                  </div>
                </div>

                <div className="space-y-1.5 relative">
                  <label className="text-white text-xs font-bold ml-2">Sumber Informasi</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#c1d061] cursor-pointer">
                      <option className="text-slate-700" disabled selected>Mengetahui Tautara dari...</option>
                      <option className="text-slate-700">Media Sosial</option>
                      <option className="text-slate-700">Teman atau Kerabat</option>
                      <option className="text-slate-700">Website Tautara</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-3.5 text-white w-4 h-4 pointer-events-none opacity-60" />
                  </div>
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-white text-sm font-bold ml-2 opacity-90">Kebutuhan Program</label>
                  <p className="text-[10px] text-[#e1eba7] ml-2 italic">Ceritakan konteks tantangan yang sedang dihadapi</p>
                  <textarea rows={3} className="w-full bg-white/10 border border-white/20 rounded-[1.8rem] px-6 py-4 text-white focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#c1d061] resize-none transition-all"></textarea>
                </div>

                <div className="md:col-span-2 pt-6">
                  <button className="group w-full bg-[#c1d061] hover:bg-white hover:text-[#c1d061] text-white font-black py-5 rounded-full transition-all duration-300 text-xl shadow-[0_15px_30px_-5px_rgba(193,208,97,0.4)] uppercase tracking-widest flex items-center justify-center gap-3">
                    Kirim Kebutuhan
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-[10px] text-white/60 mt-4 font-medium uppercase tracking-tighter italic">
                    Tim Tautara akan menghubungi Anda dalam 1x24 jam kerja
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
