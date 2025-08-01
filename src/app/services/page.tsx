'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

// 임시 서비스 데이터
const mockServices = [
  {
    id: '1',
    name: '24시 동물병원',
    description: '응급 상황에도 안심할 수 있는 24시간 운영 동물병원입니다. 전문 수의사가 상주하며 최신 의료 장비를 보유하고 있습니다.',
    category: 'hospital',
    address: '서울시 강남구 테헤란로 123',
    rating: 4.8,
    reviewCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    phone: '02-1234-5678'
  },
  {
    id: '2',
    name: '해피펫 용품샵',
    description: '반려동물을 위한 프리미엄 용품과 사료를 판매합니다. 건강한 먹거리와 안전한 장난감만을 엄선했습니다.',
    category: 'petshop',
    address: '서울시 마포구 홍대입구 456',
    rating: 4.6,
    reviewCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop',
    phone: '02-8765-4321'
  },
  {
    id: '3',
    name: '케어펫 시터',
    description: '신뢰할 수 있는 전문 펫시터가 집에서 반려동물을 돌봐드립니다. 장기 출장이나 여행시 안심하고 맡기세요.',
    category: 'petsitter',
    address: '서울시 송파구 잠실동 789',
    rating: 4.9,
    reviewCount: 203,
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
    phone: '02-5555-6666'
  },
  {
    id: '4',
    name: '강남 펫 클리닉',
    description: '소형견부터 대형견까지 모든 종류의 반려동물을 위한 종합 진료 서비스를 제공합니다.',
    category: 'hospital',
    address: '서울시 강남구 논현로 234',
    rating: 4.7,
    reviewCount: 142,
    imageUrl: 'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=400&h=300&fit=crop',
    phone: '02-2222-3333'
  },
  {
    id: '5',
    name: '프리미엄 펫샵',
    description: '고급 브랜드 사료와 용품을 전문으로 하는 펫샵입니다. 수입 브랜드 제품을 합리적인 가격에 만나보세요.',
    category: 'petshop',
    address: '서울시 성동구 성수동 345',
    rating: 4.5,
    reviewCount: 67,
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
    phone: '02-3333-4444'
  },
  {
    id: '6',
    name: '러블리 펫 그루밍',
    description: '전문 그루머가 운영하는 펫 미용실입니다. 각 품종별 특성을 고려한 맞춤 미용 서비스를 제공합니다.',
    category: 'grooming',
    address: '서울시 용산구 이태원로 456',
    rating: 4.9,
    reviewCount: 178,
    imageUrl: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=300&fit=crop',
    phone: '02-4444-5555'
  },
  {
    id: '7',
    name: '믿음직한 펫시터',
    description: '10년 경력의 전문 펫시터가 직접 방문하여 반려동물을 돌봐드립니다. 산책부터 식사까지 세심하게 관리합니다.',
    category: 'petsitter',
    address: '서울시 서초구 서초대로 567',
    rating: 4.8,
    reviewCount: 134,
    imageUrl: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=400&h=300&fit=crop',
    phone: '02-5555-6666'
  },
  {
    id: '8',
    name: '응급 동물병원',
    description: '24시간 응급 진료 전문 동물병원입니다. 중환자실과 수술실을 완비하여 응급상황에 대비합니다.',
    category: 'hospital',
    address: '서울시 종로구 종로 678',
    rating: 4.6,
    reviewCount: 98,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
    phone: '02-6666-7777'
  }
];

function ServicesPageContent() {
  const searchParams = useSearchParams();
  const [filteredServices, setFilteredServices] = useState(mockServices);
  const [selectedCategory, setSelectedCategory] = useState(searchParams?.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState(searchParams?.get('search') || '');
  const [sortBy, setSortBy] = useState('rating');

  const categories = [
    { value: 'all', label: '전체' },
    { value: 'hospital', label: '동물병원' },
    { value: 'petshop', label: '펫샵' },
    { value: 'petsitter', label: '펫시터' },
    { value: 'grooming', label: '미용' }
  ];

  const sortOptions = [
    { value: 'rating', label: '평점순' },
    { value: 'reviews', label: '리뷰순' },
    { value: 'name', label: '이름순' }
  ];

  useEffect(() => {
    // URL 파라미터 변경 감지
    const urlCategory = searchParams?.get('category') || 'all';
    const urlSearch = searchParams?.get('search') || '';
    
    if (urlCategory !== selectedCategory) {
      setSelectedCategory(urlCategory);
    }
    if (urlSearch !== searchQuery) {
      setSearchQuery(urlSearch);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = mockServices;

    // 카테고리 필터링
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // 검색 필터링
    if (searchQuery) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 정렬
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);
  }, [selectedCategory, searchQuery, sortBy]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              서비스 찾기
            </h1>
            <p className="text-xl text-gray-600">
              반려동물을 위한 최고의 서비스를 찾아보세요
            </p>
          </div>
          
          {/* 검색 바 */}
          <div className="max-w-2xl mx-auto">
            <SearchBar 
              placeholder="서비스명, 지역, 카테고리로 검색..."
              onSearch={handleSearch}
              defaultValue={searchQuery}
            />
          </div>
        </div>
      </section>

      {/* 필터 및 정렬 섹션 */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* 카테고리 필터 */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* 정렬 옵션 */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">정렬:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 검색 결과 카운트 */}
          <div className="mt-4 text-sm text-gray-600">
            총 <span className="font-semibold text-primary">{filteredServices.length}</span>개의 서비스를 찾았습니다.
          </div>
        </div>
      </section>

      {/* 서비스 목록 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-600 mb-6">
                다른 검색어나 필터를 시도해보세요
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                필터 초기화
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 지역별 서비스 (추후 구현을 위한 플레이스홀더) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              지역별 서비스
            </h2>
            <p className="text-gray-600">
              원하시는 지역의 서비스를 확인해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              '강남구', '서초구', '용산구', '마포구', '성동구', '종로구',
              '중구', '영등포구', '강서구', '송파구', '강북구', '동작구'
            ].map((district) => (
              <button
                key={district}
                className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  📍
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {district}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesPageContent />
    </Suspense>
  );
}