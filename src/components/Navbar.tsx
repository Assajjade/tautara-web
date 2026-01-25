import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='fixed z-50 w-full bg-primary backdrop-blur-md text-white'>
            <div className='max-w-7xl mx-auto px-6 h-15 flex items-center justify-between'>
                <div className='flex gap-5'>
                    <Link href="/" className='text-2xl font-bold tracking-tight border-2 px-2 rounded-2xl' >
                        Tautara
                    </Link>

                    <div className='hidden md:flex items-center gap-3 text-l font-semibold'>
                        <Link href="">Beranda</Link>
                        <Link href="">Tentang Kami</Link>
                        <Link href="">Program</Link>
                        <Link href="">Mitra Ajar</Link>
                        <Link href="">Ruang Belajar</Link>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                        <Link href="">Buat Akun</Link>
                        <span>|</span>
                        <Link href="">Masuk</Link>
                </div>

            </div>
        </nav>
    )
}