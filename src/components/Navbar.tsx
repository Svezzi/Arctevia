'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed w-full z-10 bg-white shadow-md py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#1B3B6F]">
          ArticStack
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/dashboard" 
            className={`transition duration-200 ${isActive('/dashboard') 
              ? 'text-[#A9D6E5] font-semibold' 
              : 'text-[#1B3B6F] hover:text-[#A9D6E5]'}`}
          >
            Dashboard
          </Link>
          <Link 
            href="/submit-job" 
            className={`transition duration-200 ${isActive('/submit-job') 
              ? 'text-[#A9D6E5] font-semibold' 
              : 'text-[#1B3B6F] hover:text-[#A9D6E5]'}`}
          >
            Submit Job
          </Link>
          <Link 
            href="/models" 
            className={`transition duration-200 ${isActive('/models') 
              ? 'text-[#A9D6E5] font-semibold' 
              : 'text-[#1B3B6F] hover:text-[#A9D6E5]'}`}
          >
            Models
          </Link>
          <Link 
            href="/docs" 
            className={`transition duration-200 ${isActive('/docs') 
              ? 'text-[#A9D6E5] font-semibold' 
              : 'text-[#1B3B6F] hover:text-[#A9D6E5]'}`}
          >
            Docs
          </Link>
          <Link 
            href="/account" 
            className={`px-4 py-2 rounded-xl font-semibold transition duration-200 ${isActive('/account') 
              ? 'bg-[#1B3B6F] text-white' 
              : 'bg-[#A9D6E5] text-[#1B3B6F] hover:bg-[#1B3B6F] hover:text-white'}`}
          >
            {isActive('/account') ? 'Account' : 'Login'}
          </Link>
        </div>
        
        <button className="md:hidden text-[#1B3B6F]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
} 