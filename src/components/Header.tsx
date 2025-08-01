'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get('mobileSearch') as string;
    if (query?.trim()) {
      router.push(`/services?search=${encodeURIComponent(query.trim())}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐾</span>
            </div>
            <span className="text-2xl font-bold text-foreground">PetCare Hub</span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              서비스 찾기
            </Link>
            <Link href="/services?category=hospital" className="text-foreground hover:text-primary transition-colors">
              동물병원
            </Link>
            <Link href="/services?category=petshop" className="text-foreground hover:text-primary transition-colors">
              펫샵
            </Link>
            <Link href="/services?category=petsitter" className="text-foreground hover:text-primary transition-colors">
              펫시터
            </Link>
          </nav>

          {/* 검색 및 액션 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="서비스 검색..."
                className="w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            <Link href="/mypage" className="bg-primary text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              마이페이지
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleMobileSearch} className="relative">
                <input
                  type="text"
                  name="mobileSearch"
                  placeholder="서비스 검색..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                서비스 찾기
              </Link>
              <Link href="/services?category=hospital" className="text-foreground hover:text-primary transition-colors">
                동물병원
              </Link>
              <Link href="/services?category=petshop" className="text-foreground hover:text-primary transition-colors">
                펫샵
              </Link>
              <Link href="/services?category=petsitter" className="text-foreground hover:text-primary transition-colors">
                펫시터
              </Link>
              <Link href="/mypage" className="bg-primary text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-center">
                마이페이지
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}