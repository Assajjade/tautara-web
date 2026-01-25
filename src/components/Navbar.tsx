import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='fixed z-50 w-full bg-primary backdrop-blur-md text-white shadow-sm'>
            <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
                <div className='flex items-center gap-8'>
                    <Link href="/" className='text-2xl font-bold tracking-tight border-2 border-white px-3 py-1 rounded-3xl hover:bg-white hover:text-primary transition-colors'>
                        Logo
                    </Link>

                    <div className='hidden md:flex items-center gap-6 text-sm font-medium'>
                        <Link href="/" className="hover:text-slate-200 transition">Beranda</Link>
                        <Link href="/about" className="hover:text-slate-200 transition">Tentang Kami</Link>
                        <Link href="/agency" className="hover:text-slate-200 transition">Program</Link>
                        <Link href="/akses" className="hover:text-slate-200 transition">Mitra Ajar</Link>
                        <Link href="/ruang-belajar" className="hover:text-slate-200 transition">Ruang Belajar</Link>
                    </div>
                </div>

                <div className='hidden md:flex items-center gap-5'>
                    <div className='flex items-center gap-2 text-sm font-medium opacity-90'>
                        <Link href="/register" className="hover:underline">Buat Akun</Link>
                        <span className="opacity-50">|</span>
                        <Link href="/login" className="hover:underline">Masuk</Link>
                    </div>
                    {/* <Link href="/konsultasi" className="bg-white text-primary px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-100 transition shadow-lg shadow-black/10">
                        Konsultasi Gratis
                    </Link> */}
                </div>

                {/* Mobile Menu Icon - Warna disesuaikan jadi Putih */}
                <div className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </nav>
    );
}