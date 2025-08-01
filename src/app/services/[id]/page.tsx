'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Rating from '@/components/Rating';
import Button from '@/components/Button';
import ReviewModal from '@/components/ReviewModal';
import { favoriteService } from '@/lib/favorites';
import { reviewService } from '@/lib/reviews';

// 임시 서비스 데이터 (실제로는 API에서 가져올 예정)
const mockServices = [
  {
    id: '1',
    name: '24시 동물병원',
    description: '응급 상황에도 안심할 수 있는 24시간 운영 동물병원입니다. 전문 수의사가 상주하며 최신 의료 장비를 보유하고 있습니다.',
    fullDescription: '저희 24시 동물병원은 10년 이상의 경험을 가진 전문 수의사들이 24시간 상주하며 응급 상황에 즉시 대응할 수 있는 체계를 갖추고 있습니다. 최신 디지털 X-ray, 초음파 진단기, 혈액 분석기 등 첨단 의료 장비를 보유하여 정확한 진단과 치료를 제공합니다. 특히 응급 수술실과 중환자실을 운영하여 위급한 상황의 반려동물들에게 최상의 의료 서비스를 제공하고 있습니다.',
    category: 'hospital',
    address: '서울시 강남구 테헤란로 123',
    rating: 4.8,
    reviewCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
    phone: '02-1234-5678',
    email: 'info@24animal.com',
    website: 'https://24animal.com',
    hours: {
      weekdays: '24시간 운영',
      weekend: '24시간 운영',
      holidays: '24시간 운영'
    },
    services: [
      '응급진료', '수술', '건강검진', '예방접종', '치과치료', '중환자 치료'
    ],
    facilities: [
      '응급실', '수술실', '중환자실', 'X-ray실', '초음파실', '검사실'
    ],
    parking: '건물 지하 주차장 이용 가능 (2시간 무료)',
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '2',
    name: '해피펫 용품샵',
    description: '반려동물을 위한 프리미엄 용품과 사료를 판매합니다.',
    fullDescription: '해피펫 용품샵은 반려동물의 건강과 행복을 최우선으로 생각하며, 엄선된 프리미엄 브랜드 제품만을 취급합니다. 국내외 유명 브랜드의 사료, 간식, 장난감, 의류, 케어 용품 등을 합리적인 가격에 제공하고 있습니다. 전문 상담사가 상주하여 반려동물의 특성과 필요에 맞는 제품을 추천해드립니다.',
    category: 'petshop',
    address: '서울시 마포구 홍대입구 456',
    rating: 4.6,
    reviewCount: 89,
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop',
    phone: '02-8765-4321',
    email: 'contact@happypet.co.kr',
    website: 'https://happypet.co.kr',
    hours: {
      weekdays: '09:00 - 21:00',
      weekend: '10:00 - 20:00',
      holidays: '10:00 - 18:00'
    },
    services: [
      '사료/간식 판매', '장난감/용품 판매', '의류 판매', '전문 상담', '배송 서비스'
    ],
    facilities: [
      '매장', '창고', '상담실', '시음/시식 코너'
    ],
    parking: '매장 앞 공영주차장 이용',
    images: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop'
    ]
  },
  {
    id: '3',
    name: '케어펫 시터',
    description: '신뢰할 수 있는 전문 펫시터가 집에서 반려동물을 돌봐드립니다.',
    fullDescription: '케어펫 시터는 반려동물 돌봄 전문가들로 구성된 펫시터 서비스입니다. 모든 시터는 반려동물 관련 자격증을 보유하고 있으며, 엄격한 선발과정과 교육을 거쳐 검증된 전문가들입니다. 펫시터가 직접 고객님의 집으로 방문하여 반려동물의 일상을 세심하게 돌봐드리며, 실시간으로 상황을 공유해드립니다.',
    category: 'petsitter',
    address: '서울시 송파구 잠실동 789',
    rating: 4.9,
    reviewCount: 203,
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop',
    phone: '02-5555-6666',
    email: 'booking@carepet.co.kr',
    website: 'https://carepet.co.kr',
    hours: {
      weekdays: '06:00 - 22:00 (방문 서비스)',
      weekend: '06:00 - 22:00 (방문 서비스)',
      holidays: '06:00 - 22:00 (방문 서비스)'
    },
    services: [
      '일일 돌봄', '산책 서비스', '식사 관리', '응급상황 대응', '놀이 서비스', '의료 동반'
    ],
    facilities: [
      '본사 사무실', '시터 교육센터', '응급 지원센터'
    ],
    parking: '방문 서비스로 주차 불필요',
    images: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=800&h=600&fit=crop'
    ]
  }
];

// 임시 리뷰 데이터
// const mockReviews = [
//   {
//     id: '1',
//     serviceId: '1',
//     userName: '김민지',
//     userPet: '골든리트리버 "초코"',
//     rating: 5,
//     comment: '응급상황에서 24시간 병원을 찾을 수 있어서 정말 다행이었어요. 수의사 선생님도 친절하시고 진료도 꼼꼼히 해주셨습니다. 시설도 깨끗하고 최신 장비들이 잘 갖춰져 있어서 안심이 되었습니다.',
//     date: '2024-01-15',
//     helpful: 12
//   },
//   {
//     id: '2',
//     serviceId: '1',
//     userName: '박준호',
//     userPet: '웰시코기 "복이"',
//     rating: 5,
//     comment: '복이가 갑자기 아파서 새벽에 급하게 방문했는데, 대기시간도 짧고 빠르게 진료해주셔서 감사했습니다. 수술도 성공적으로 잘 되었고 지금은 건강하게 잘 지내고 있어요.',
//     date: '2024-01-10',
//     helpful: 8
//   },
//   {
//     id: '3',
//     serviceId: '1',
//     userName: '이수연',
//     userPet: '페르시안 고양이 "나비"',
//     rating: 4,
//     comment: '정기 검진 받으러 갔는데 매우 꼼꼼하게 검사해주시고 설명도 자세히 해주셨어요. 다만 주말이라 그런지 조금 혼잡했지만 전체적으로 만족합니다.',
//     date: '2024-01-05',
//     helpful: 5
//   }
// ];

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState<typeof mockServices[0] | null>(null);
  const [reviews, setReviews] = useState<Array<{id: string; serviceId: string; userName: string; userPet: string; rating: number; comment: string; date: string; helpful: number}>>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<{id: string; serviceId: string; userName: string; userPet: string; rating: number; comment: string; date: string; helpful: number} | null>(null);

  useEffect(() => {
    const serviceId = params?.id as string;
    const foundService = mockServices.find(s => s.id === serviceId);
    
    if (foundService) {
      setService(foundService);
      setReviews(reviewService.getByServiceId(serviceId));
      setIsFavorited(favoriteService.has(serviceId));
    } else {
      // 서비스를 찾을 수 없으면 404 처리
      router.push('/services');
    }
  }, [params?.id, router]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">서비스 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  const categoryLabels: { [key: string]: string } = {
    hospital: '동물병원',
    petshop: '펫샵',
    petsitter: '펫시터',
    grooming: '미용'
  };

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  const handleFavoriteToggle = () => {
    const newFavoriteState = favoriteService.toggle(service.id);
    setIsFavorited(newFavoriteState);
  };

  const handleCallPhone = () => {
    if (service.phone) {
      window.location.href = `tel:${service.phone}`;
    }
  };

  const handleReviewSubmit = (reviewData: { rating: number; comment: string; petName?: string }) => {
    if (editingReview) {
      // 리뷰 수정
      reviewService.update(editingReview.id, reviewData);
      setEditingReview(null);
    } else {
      // 새 리뷰 추가
      reviewService.add(service.id, reviewData);
    }
    
    // 리뷰 목록 새로고침
    setReviews(reviewService.getByServiceId(service.id));
    setIsReviewModalOpen(false);
  };

  const handleEditReview = (review: {id: string; serviceId: string; userName: string; userPet: string; rating: number; comment: string; date: string; helpful: number}) => {
    setEditingReview(review);
    setIsReviewModalOpen(true);
  };

  const handleDeleteReview = (reviewId: string) => {
    if (confirm('정말로 이 리뷰를 삭제하시겠습니까?')) {
      reviewService.delete(reviewId);
      setReviews(reviewService.getByServiceId(service.id));
    }
  };

  const handleHelpfulClick = (reviewId: string) => {
    const newCount = reviewService.incrementHelpful(reviewId);
    setReviews(reviewService.getByServiceId(service.id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 브레드크럼 */}
      <section className="py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">홈</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">서비스</Link>
            <span>/</span>
            <span className="text-primary">{service.name}</span>
          </nav>
        </div>
      </section>

      {/* 메인 컨텐츠 */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 왼쪽: 이미지 갤러리 */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {/* 메인 이미지 */}
                <div className="relative">
                  <img
                    src={service.images[selectedImageIndex]}
                    alt={service.name}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {categoryLabels[service.category]}
                  </div>
                </div>
                
                {/* 썸네일 이미지들 */}
                {service.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto">
                    {service.images.map((image: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          selectedImageIndex === index 
                            ? 'border-primary shadow-lg' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${service.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 오른쪽: 서비스 정보 */}
            <div className="space-y-6">
              {/* 기본 정보 */}
              <div className="card">
                <h1 className="text-3xl font-bold text-foreground mb-2">{service.name}</h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <Rating rating={service.rating} size="lg" showNumber />
                  <span className="text-gray-600">({service.reviewCount}개 리뷰)</span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                {/* 연락처 정보 */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">{service.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${service.phone}`} className="text-primary hover:underline">
                      {service.phone}
                    </a>
                  </div>

                  {service.email && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${service.email}`} className="text-primary hover:underline">
                        {service.email}
                      </a>
                    </div>
                  )}

                  {service.website && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <a href={service.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        웹사이트 방문
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* 액션 버튼들 */}
              <div className="space-y-3">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleCallPhone}
                >
                  📞 전화걸기
                </Button>
                <Button 
                  variant={isFavorited ? "secondary" : "outline"} 
                  className="w-full" 
                  size="lg"
                  onClick={handleFavoriteToggle}
                >
                  {isFavorited ? '❤️ 즐겨찾기 제거' : '⭐ 즐겨찾기 추가'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 상세 정보 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 운영 시간 */}
            <div className="card">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                운영 시간
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">평일</span>
                  <span className="font-medium">{service.hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">주말</span>
                  <span className="font-medium">{service.hours.weekend}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">공휴일</span>
                  <span className="font-medium">{service.hours.holidays}</span>
                </div>
              </div>
            </div>

            {/* 제공 서비스 */}
            <div className="card">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                제공 서비스
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.services.map((serviceItem: string, index: number) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {serviceItem}
                  </span>
                ))}
              </div>
            </div>

            {/* 시설 안내 */}
            <div className="card">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                시설 안내
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {service.facilities.map((facility: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                    <span className="text-gray-700 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 주차 안내 */}
            <div className="card">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
                주차 안내
              </h3>
              <p className="text-gray-700">{service.parking}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 리뷰 섹션 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              고객 리뷰 ({reviews.length})
            </h2>
            <Button 
              variant="outline"
              onClick={() => {
                setEditingReview(null);
                setIsReviewModalOpen(true);
              }}
            >
              리뷰 작성하기
            </Button>
          </div>

          {reviews.length > 0 ? (
            <div className="space-y-6">
              {displayedReviews.map((review) => (
                <div key={review.id} className="card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">🐾</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{review.userName}</h4>
                        <p className="text-sm text-gray-600">{review.userPet}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Rating rating={review.rating} size="sm" />
                      <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {review.comment}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => handleHelpfulClick(review.id)}
                      className="flex items-center space-x-1 text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V8a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      <span>도움됨 ({review.helpful})</span>
                    </button>
                  </div>
                </div>
              ))}
              
              {reviews.length > 3 && !showAllReviews && (
                <div className="text-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllReviews(true)}
                  >
                    더 많은 리뷰 보기 ({reviews.length - 3}개 더)
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                아직 리뷰가 없습니다
              </h3>
              <p className="text-gray-600 mb-6">
                첫 번째 리뷰를 작성해보세요!
              </p>
              <Button
                onClick={() => {
                  setEditingReview(null);
                  setIsReviewModalOpen(true);
                }}
              >
                첫 리뷰 작성하기
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 관련 서비스 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            비슷한 서비스
          </h2>
          
          <div className="text-center">
            <Link href={`/services?category=${service.category}`}>
              <Button variant="outline" size="lg">
                {categoryLabels[service.category]} 더 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 리뷰 모달 */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => {
          setIsReviewModalOpen(false);
          setEditingReview(null);
        }}
        onSubmit={handleReviewSubmit}
        serviceName={service?.name || ''}
        existingReview={editingReview}
      />
    </div>
  );
}