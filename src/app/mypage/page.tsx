'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import Rating from '@/components/Rating';

// 임시 사용자 데이터
const mockUser = {
  id: '1',
  name: '김멍멍',
  email: 'kim@example.com',
  phone: '010-1234-5678',
  joinDate: '2023-01-15',
  profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  pets: [
    {
      id: '1',
      name: '초코',
      species: '강아지',
      breed: '골든리트리버',
      age: 3,
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=100&h=100&fit=crop'
    },
    {
      id: '2',
      name: '나비',
      species: '고양이',
      breed: '페르시안',
      age: 2,
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&h=100&fit=crop'
    }
  ]
};

// 임시 즐겨찾기 데이터
const mockFavorites = [
  {
    id: '1',
    name: '24시 동물병원',
    description: '응급 상황에도 안심할 수 있는 24시간 운영 동물병원입니다.',
    category: 'hospital',
    address: '서울시 강남구 테헤란로 123',
    rating: 4.8,
    reviewCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
    phone: '02-1234-5678'
  },
  {
    id: '3',
    name: '케어펫 시터',
    description: '신뢰할 수 있는 전문 펫시터가 집에서 반려동물을 돌봐드립니다.',
    category: 'petsitter',
    address: '서울시 송파구 잠실동 789',
    rating: 4.9,
    reviewCount: 203,
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
    phone: '02-5555-6666'
  }
];

// 임시 내 리뷰 데이터
const mockMyReviews = [
  {
    id: '1',
    serviceId: '1',
    serviceName: '24시 동물병원',
    rating: 5,
    comment: '응급상황에서 24시간 병원을 찾을 수 있어서 정말 다행이었어요. 수의사 선생님도 친절하시고 진료도 꼼꼼히 해주셨습니다.',
    date: '2024-01-15',
    petName: '초코'
  },
  {
    id: '2',
    serviceId: '3',
    serviceName: '케어펫 시터',
    rating: 5,
    comment: '펫시터 서비스 정말 만족해요! 여행 중에도 안심하고 다녀올 수 있었고, 사진도 계속 보내주셔서 좋았습니다.',
    date: '2024-01-10',
    petName: '초코'
  }
];

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: mockUser.name,
    phone: mockUser.phone,
    email: mockUser.email
  });

  const tabs = [
    { id: 'profile', label: '내 정보', icon: '👤' },
    { id: 'pets', label: '반려동물', icon: '🐾' },
    { id: 'favorites', label: '즐겨찾기', icon: '❤️' },
    { id: 'reviews', label: '내 리뷰', icon: '⭐' }
  ];

  const handleSaveProfile = () => {
    // 실제로는 API 호출
    console.log('프로필 저장:', editForm);
    setIsEditing(false);
  };

  const handleDeleteReview = (reviewId: string) => {
    // 실제로는 API 호출
    console.log('리뷰 삭제:', reviewId);
  };

  const handleRemoveFavorite = (serviceId: string) => {
    // 실제로는 API 호출
    console.log('즐겨찾기 제거:', serviceId);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">마이페이지</h1>
              <p className="text-gray-600">반려동물과 함께하는 특별한 서비스를 관리하세요</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={mockUser.profileImage}
                  alt="프로필"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">{mockUser.name}</h2>
                <p className="text-sm text-gray-600">
                  가입일: {new Date(mockUser.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-white rounded-xl p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 탭 컨텐츠 */}
        <div className="space-y-6">
          {/* 내 정보 탭 */}
          {activeTab === 'profile' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">기본 정보</h3>
                  <Button
                    variant={isEditing ? 'secondary' : 'outline'}
                    size="sm"
                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                  >
                    {isEditing ? '저장하기' : '수정하기'}
                  </Button>
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                      <input
                        type="tel"
                        value={editForm.phone}
                        onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
                        취소
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">이름</span>
                      <span className="font-medium">{mockUser.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">이메일</span>
                      <span className="font-medium">{mockUser.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">연락처</span>
                      <span className="font-medium">{mockUser.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">가입일</span>
                      <span className="font-medium">
                        {new Date(mockUser.joinDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-foreground mb-6">통계</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {mockFavorites.length}
                    </div>
                    <div className="text-sm text-gray-600">즐겨찾기</div>
                  </div>
                  <div className="bg-secondary/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      {mockMyReviews.length}
                    </div>
                    <div className="text-sm text-gray-600">작성한 리뷰</div>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {mockUser.pets.length}
                    </div>
                    <div className="text-sm text-gray-600">등록된 반려동물</div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-gray-600 mb-1">
                      {Math.round((Date.now() - new Date(mockUser.joinDate).getTime()) / (1000 * 60 * 60 * 24))}
                    </div>
                    <div className="text-sm text-gray-600">이용일수</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 반려동물 탭 */}
          {activeTab === 'pets' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">내 반려동물</h3>
                <Button>새 반려동물 등록</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockUser.pets.map((pet) => (
                  <div key={pet.id} className="card">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={pet.image}
                          alt={pet.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{pet.name}</h4>
                        <p className="text-sm text-gray-600">{pet.breed}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">종류</span>
                        <span className="font-medium">{pet.species}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">나이</span>
                        <span className="font-medium">{pet.age}살</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        수정
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        삭제
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 즐겨찾기 탭 */}
          {activeTab === 'favorites' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">즐겨찾기 서비스</h3>
                <span className="text-sm text-gray-600">{mockFavorites.length}개의 서비스</span>
              </div>
              
              {mockFavorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockFavorites.map((service) => (
                    <div key={service.id} className="relative">
                      <ServiceCard {...service} />
                      <button
                        onClick={() => handleRemoveFavorite(service.id)}
                        className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    아직 즐겨찾기한 서비스가 없습니다
                  </h3>
                  <p className="text-gray-600 mb-6">
                    마음에 드는 서비스를 즐겨찾기에 추가해보세요
                  </p>
                  <Link href="/services">
                    <Button>서비스 둘러보기</Button>
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* 내 리뷰 탭 */}
          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">내가 작성한 리뷰</h3>
                <span className="text-sm text-gray-600">{mockMyReviews.length}개의 리뷰</span>
              </div>
              
              {mockMyReviews.length > 0 ? (
                <div className="space-y-6">
                  {mockMyReviews.map((review) => (
                    <div key={review.id} className="card">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Link href={`/services/${review.serviceId}`}>
                            <h4 className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                              {review.serviceName}
                            </h4>
                          </Link>
                          <p className="text-sm text-gray-600">
                            {review.petName} · {review.date}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Rating rating={review.rating} size="sm" />
                          <div className="flex space-x-1">
                            <button className="text-gray-400 hover:text-primary p-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button 
                              onClick={() => handleDeleteReview(review.id)}
                              className="text-gray-400 hover:text-red-500 p-1"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    아직 작성한 리뷰가 없습니다
                  </h3>
                  <p className="text-gray-600 mb-6">
                    이용하신 서비스에 대한 솔직한 후기를 남겨주세요
                  </p>
                  <Link href="/services">
                    <Button>서비스 이용하러 가기</Button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}