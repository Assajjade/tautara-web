import React from 'react';
import { ArrowRight, Users, Compass, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      	<section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 h-screen">
        	<div className="absolute top-0 right-0 w-1/2 h-screen bg-slate-50/80 skew-x-12 transform origin-top-right hidden lg:block"></div>
          	<div className="absolute top-40 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl mix-blend-multiply"></div>
          	<div className="absolute bottom-10 right-1/2 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl mix-blend-multiply"></div>
        	
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
					<div className='flex flex-col gap-8 text-center lg:text-left'>
						<h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-[1.5] tracking-tight'>
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
							
							{/* Placeholder Content di dalam kotak */}
							<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 opacity-60">
								<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-md text-blue-500">
									{/* Ikon Koneksi/Link */}
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
									<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l1.757-1.757" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-slate-700 mb-2">Visual Area</h3>
								<p className="text-slate-500"></p>
							</div>
							
							{/* Efek kilau halus di atas gambar placeholder */}
							<div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>
						</div>
					</div>
          		</div>
        	</div>
      </section>

      {/* 2. Filosofi Section: Taut + Antara & Taut + Arah */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Taut + Antara */}
            <div className="p-8 border rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Taut + Antara [cite: 6]</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Menautkan di antara para pembelajar sepanjang hayat sebagai penghubung, perantara, dan jembatan bagi komunitas Anda[cite: 7, 8, 9].
              </p>
            </div>

            {/* Taut + Arah */}
            <div className="p-8 border rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Compass size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Taut + Arah [cite: 16]</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Membantu penggerak perubahan bukan hanya sekadar tahu, tapi memahami ke mana harus melangkah melalui fasilitasi pertumbuhan[cite: 17, 19].
              </p>
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