import React from 'react';
import { ArrowRight, Users, Compass, ShieldCheck, Zap } from 'lucide-react';
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

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
              <div className='flex flex-col gap-8 text-center lg:text-left'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-normal tracking-tight'>
                  Membuka <span className='text-secondary relative whitespace-nowrap'>akses</span> <br />
                  Menumbuhkan <span className='text-secondary-foreground relative whitespace-nowrap'>daya</span> <br />
                  Mewujudkan <span className='text-primary relative whitespace-nowrap'>dampak</span>
                </h1>

                <p className='text-lg md:text-xl text-primary-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium'>
                  Untuk individu, tim, dan komunitas yang <span className='text-primary font-semibold'>terus belajar</span>
                </p>

                <div className='flex flex-wrap justify-center lg:justify-start gap-4 pt-2'>
                  <Link href="" className='bg-secondary text-white px-8 py-4 rounded-full font-bold text-base hover:bg-purple-400 transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-600/20 flex items-center justify-center min-w-45'>Pelajari Lebih Lanjut</Link>
                  <Link href="" className='bg-secondary-foreground text-white px-8 py-4 rounded-full font-bold text-base hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg shadow-yellow-600/20 flex items-center justify-center min-w-45'>Konsultasi Sekarang</Link>

                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs text-slate-400 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-300">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                      </svg>
                      </div>
                    ))}
                  </div>
                  <p>Menjadi jembatan bagi <span className="text-slate-900 font-bold">50+</span> komunitas & fasilitator.</p>
                </div>
              </div>
              <div className="relative h-full w-full mt-12 lg:mt-0 flex items-center justify-center p-4 lg:p-0">
                <div className="aspect-[4/3] lg:aspect-square w-full max-w-lg bg-gradient-to-tr from-blue-50 to-indigo-100 rounded-[2rem] relative overflow-hidden shadow-2xl shadow-blue-900/10 border-[8px] border-white transform rotate-3 hover:rotate-0 transition-all duration-500 ease-out">

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 opacity-60">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-md text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l1.757-1.757" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-700 mb-2">Visual Area</h3>
                    <p className="text-slate-500"></p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
                  </div>
          </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-7xl md:text-8xl font-black mb-12 tracking-tighter">
            <span className="text-secondary-foreground">Taut</span>
            <span className="text-secondary">ara</span>
          </h2>

          <div className="flex justify-center mb-16">
            <div className="w-full max-w-2xl aspect-[3/1] relative">
              <Image src={HeroPuzzle} fill className="object-contain" alt="Konektor" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
              Platform yang menjembatani
              <span className="text-secondary font-bold">Mitra Belajar</span>
              (lembaga, komunitas, dan organisasi) dengan
              <span className="text-secondary font-bold">Mitra Ajar</span>
              (fasilitator, tenaga ahli, dan praktisi) dalam merancang dan menjalankan proses pembelajaran sepanjang hayat yang bermakna
              <span className="text-secondary font-bold text-xl md:text-xl mt-2">melalui:</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-left">

            <div className="relative pt-12">
              {/* Icon Container */}
              <div className="absolute top-0 left-8 w-24 h-24 bg-white border-2 border-[#86a789] rounded-full flex items-center justify-center z-10 p-4 shadow-sm">
                <div className="text-secondary-foreground">
                   <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
              </div>
              {/* Body Card */}
              <div className="bg-[#86a789] rounded-[2.5rem] p-10 pt-16 flex flex-col gap-4 text-white">
                <h3 className="text-4xl font-bold">Training</h3>
                <p className="text-sm md:text-base leading-relaxed opacity-95">
                  Ruang untuk menguatkan kapasitas dan keterampilan melalui praktik dan diskusi langsung yang aplikatif dan bermakna.
                </p>
                <Link href="/agency" className="mt-4 border-2 border-white px-6 py-2 rounded-full w-fit text-sm font-bold hover:bg-white hover:text-[#86a789] transition-all">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>

            <div className="relative pt-12">
              {/* Icon Container */}
              <div className="absolute top-0 left-8 w-24 h-24 bg-white border-2 border-[#86a789] rounded-full flex items-center justify-center z-10 p-4 shadow-sm">
                <div className="text-secondary-foreground">
                   {/* Ganti dengan Ikon Seminar Anda */}
                   <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                </div>
              </div>
              {/* Body Card */}
              <div className="bg-[#86a789] rounded-[2.5rem] p-10 pt-16 flex flex-col gap-4 text-white">
                <h3 className="text-4xl font-bold">Seminar</h3>
                <p className="text-sm md:text-base leading-relaxed opacity-95">
                  Ruang untuk memperluas pemahaman dan membuka cara pandang dalam pembelajaran satu arah sederhana.
                </p>
                <Link href="/agency" className="mt-4 border-2 border-white px-6 py-2 rounded-full w-fit text-sm font-bold hover:bg-white hover:text-[#86a789] transition-all">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* 1. Header Section */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#a294cf] mb-4">
              Area Pembelajaran
            </h2>
            <p className="text-[#86a789] text-xl font-medium">
              Titik berangkat proses belajar yang dapat disesuaikan dengan kebutuhan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* 2. Kolom Kiri: Diagram Area */}
            {/* Tempatkan file diagram Anda di public/images/diagram-area.png */}
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              <Image
                src={LearningArea}
                alt="Diagram Area Pembelajaran Tautara"
                fill
                className="object-contain"
              />
            </div>

            {/* 3. Kolom Kanan: Info & Maskot */}
            <div className="flex flex-col gap-8">

              {/* Bubble Chat / Info Box */}
              <div className="relative bg-[#86a789] p-8 md:p-10 rounded-[2.5rem] text-white shadow-xl">
                <p className="text-lg leading-relaxed font-medium">
                  Jika kebutuhanmu berada di luar <br />
                  <span className="font-bold underline">area pembelajaran</span>, kamu tetap dapat mengajukannya.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                  Tautara terbuka untuk mengeksplorasi topik lain sesuai konteks dan kebutuhan <span className="font-bold">Mitra Belajar</span>.
                </p>

                {/* Ekor gelembung bicara (opsional, untuk memperkuat kesan bicara maskot) */}
                <div className="absolute -bottom-4 right-16 w-8 h-8 bg-[#86a789] rotate-45 hidden md:block"></div>
              </div>

              {/* Tombol Aksi & Maskot */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:pr-10">
                <Link
                  href="/konsultasi"
                  className="bg-[#c1d061] text-white px-10 py-4 rounded-full font-bold text-lg hover:brightness-105 transition-all shadow-lg shadow-[#c1d061]/20 whitespace-nowrap"
                >
                  Konsultasi Sekarang
                </Link>

                {/* Maskot Burung Hantu */}
                {/* Tempatkan file maskot Anda di public/images/mascot-owl.png */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 -mt-10 md:mt-0">
                  <Image
                    src={IconOwl}
                    alt="Maskot Tautara"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Nilai Inti Kami [cite: 20]</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-blue-400 flex justify-center"><ArrowRight /></div>
              <h4 className="font-bold uppercase tracking-widest">Connector [cite: 21]</h4>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 flex justify-center"><Users /></div>
              <h4 className="font-bold uppercase tracking-widest">People-Oriented [cite: 22]</h4>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 flex justify-center"><ShieldCheck /></div>
              <h4 className="font-bold uppercase tracking-widest">Trustworthy </h4>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 flex justify-center"><Zap /></div>
              <h4 className="font-bold uppercase tracking-widest">Empower [cite: 24]</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
