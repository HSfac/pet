import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  // 임시 데이터 (나중에 API로 교체)
  const popularServices = [
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
    }
  ];

  const handleSearch = (query: string) => {
    // 검색 처리 로직 (나중에 구현)
    console.log('검색:', query);
  };

  return (
    <div className="space-y-16">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              당신의 반려동물을 위한 
              <span className="text-primary block mt-2">최고의 서비스</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              신뢰할 수 있는 동물병원부터 전문 펫시터까지,<br />
              반려동물에게 필요한 모든 서비스를 한 곳에서 찾아보세요.
            </p>
            
            {/* 검색 바 */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar 
                placeholder="지역이나 서비스명을 검색해보세요..."
                onSearch={handleSearch}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto">
                  🔍 서비스 찾기
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                📞 긴급 연락처
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 카테고리 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              서비스 카테고리
            </h2>
            <p className="text-gray-600 text-lg">
              반려동물에게 필요한 다양한 서비스를 카테고리별로 찾아보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '동물병원',
                icon: '🏥',
                description: '24시간 응급 진료부터 정기 검진까지',
                link: '/services?category=hospital',
                color: 'from-red-400 to-red-600'
              },
              {
                title: '펫샵',
                icon: '🛍️',
                description: '프리미엄 사료와 용품 쇼핑',
                link: '/services?category=petshop',
                color: 'from-blue-400 to-blue-600'
              },
              {
                title: '펫시터',
                icon: '👩‍⚕️',
                description: '전문 펫시터의 안전한 돌봄',
                link: '/services?category=petsitter',
                color: 'from-green-400 to-green-600'
              },
              {
                title: '미용',
                icon: '✂️',
                description: '전문적인 펫 그루밍 서비스',
                link: '/services?category=grooming',
                color: 'from-purple-400 to-purple-600'
              }
            ].map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="card group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 인기 서비스 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              인기 서비스
            </h2>
            <p className="text-gray-600 text-lg">
              많은 반려동물 가족들이 선택한 인기 서비스를 만나보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline" size="lg">
                더 많은 서비스 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 고객 후기 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              고객 후기
            </h2>
            <p className="text-gray-600 text-lg">
              실제 이용하신 고객들의 생생한 후기를 확인해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: '김민지',
                pet: '골든리트리버 "초코"',
                review: '응급상황에서 24시간 병원을 찾을 수 있어서 정말 다행이었어요. 수의사 선생님도 친절하시고 진료도 꼼꼼히 해주셨습니다.',
                rating: 5,
                service: '24시 동물병원'
              },
              {
                name: '박준호',
                pet: '웰시코기 "복이"',
                review: '펫시터 서비스 정말 만족해요! 여행 중에도 안심하고 다녀올 수 있었고, 사진도 계속 보내주셔서 좋았습니다.',
                rating: 5,
                service: '케어펫 시터'
              },
              {
                name: '이수연',
                pet: '페르시안 고양이 "나비"',
                review: '용품 질이 정말 좋아요. 특히 사료는 우리 나비가 정말 잘 먹어서 계속 주문하고 있습니다.',
                rating: 4,
                service: '해피펫 용품샵'
              }
            ].map((review, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">🐾</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.pet}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < review.rating ? 'text-accent' : 'text-gray-300'}`}>
                      ⭐
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-3">
                  "{review.review}"
                </p>
                
                <p className="text-sm text-primary font-medium">
                  {review.service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 시작해보세요!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            반려동물을 위한 최고의 서비스를 찾아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                서비스 둘러보기
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
              사업자 등록하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}