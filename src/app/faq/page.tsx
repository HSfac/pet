'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', label: '전체', icon: '📋' },
    { id: 'service', label: '서비스 이용', icon: '🔍' },
    { id: 'account', label: '계정 관리', icon: '👤' },
    { id: 'business', label: '사업자', icon: '💼' },
    { id: 'technical', label: '기술 지원', icon: '⚙️' }
  ];

  const faqs = [
    {
      id: '1',
      category: 'service',
      question: '서비스 이용에 비용이 발생하나요?',
      answer: 'PetCare Hub의 기본 서비스는 모두 무료입니다. 서비스 검색, 리뷰 확인, 즐겨찾기 등의 기능을 자유롭게 이용하실 수 있어요. 단, 실제 서비스 이용 시에는 각 업체의 요금이 적용됩니다.'
    },
    {
      id: '2',
      category: 'service',
      question: '어떤 지역의 서비스를 찾을 수 있나요?',
      answer: '현재 서울, 경기, 인천 지역의 서비스를 제공하고 있으며, 점차 전국으로 확대해 나갈 예정입니다. 지역별 서비스 현황은 메인 페이지에서 확인하실 수 있어요.'
    },
    {
      id: '3',
      category: 'service',
      question: '리뷰는 신뢰할 수 있나요?',
      answer: '모든 리뷰는 실제 이용 고객이 작성한 것으로, 허위 리뷰 방지를 위해 지속적으로 모니터링하고 있습니다. 의심스러운 리뷰를 발견하시면 신고해주세요.'
    },
    {
      id: '4',
      category: 'account',
      question: '회원가입은 필수인가요?',
      answer: '현재는 회원가입 없이도 대부분의 서비스를 이용하실 수 있습니다. 단, 리뷰 작성이나 즐겨찾기 기능은 간단한 정보 입력이 필요할 수 있어요.'
    },
    {
      id: '5',
      category: 'account',
      question: '개인정보는 어떻게 보호되나요?',
      answer: '고객의 개인정보는 관련 법령에 따라 안전하게 보호됩니다. 수집된 정보는 서비스 제공 목적으로만 사용되며, 제3자에게 제공되지 않습니다.'
    },
    {
      id: '6',
      category: 'business',
      question: '우리 업체도 등록할 수 있나요?',
      answer: '네! 반려동물 관련 서비스를 제공하시는 모든 사업자분들의 등록을 환영합니다. 메인 페이지의 "사업자 등록하기" 버튼을 클릭하거나 고객센터로 연락주세요.'
    },
    {
      id: '7',
      category: 'business',
      question: '등록 후 관리는 어떻게 하나요?',
      answer: '등록 후 전용 관리자 페이지를 통해 업체 정보, 운영시간, 서비스 내용 등을 직접 수정하실 수 있습니다. 리뷰 관리와 고객 문의 대응도 가능해요.'
    },
    {
      id: '8',
      category: 'business',
      question: '등록 비용이 있나요?',
      answer: '기본 등록은 무료입니다. 프리미엄 기능(상단 노출, 배너 광고 등)은 별도 요금이 적용되며, 자세한 내용은 사업자 문의를 통해 안내드립니다.'
    },
    {
      id: '9',
      category: 'technical',
      question: '사이트가 느리거나 오류가 발생해요',
      answer: '인터넷 연결을 확인하시고 브라우저를 새로고침해보세요. 문제가 지속되면 다른 브라우저를 사용하시거나 기술지원팀에 문의해주세요.'
    },
    {
      id: '10',
      category: 'technical',
      question: '모바일 앱이 있나요?',
      answer: '현재는 모바일 웹으로 서비스하고 있으며, 모바일에 최적화된 반응형 웹 디자인을 적용했습니다. 네이티브 앱은 추후 출시 예정입니다.'
    },
    {
      id: '11',
      category: 'service',
      question: '예약은 어떻게 하나요?',
      answer: '서비스 상세 페이지에서 전화번호를 확인하여 직접 예약하시거나, 일부 업체는 온라인 예약 시스템을 제공합니다. 예약 가능 여부는 각 업체 페이지에서 확인해주세요.'
    },
    {
      id: '12',
      category: 'service',
      question: '응급상황에는 어떻게 해야 하나요?',
      answer: '응급상황 시에는 24시간 운영하는 동물병원을 찾으시거나, 동물응급의료센터(1588-1075)에 연락하세요. 사이트에서는 24시간 운영 병원을 별도로 표시해두었습니다.'
    }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">자주 묻는 질문</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            많은 분들이 궁금해하시는 질문들을 모았습니다
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* FAQ 목록 */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="card">
                <button
                  onClick={() => toggleExpanded(faq.id)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      Q. {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                      expandedItems.has(faq.id) ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {expandedItems.has(faq.id) && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-start space-x-3">
                      <span className="text-primary font-bold flex-shrink-0">A.</span>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                해당 카테고리에 질문이 없습니다
              </h3>
              <p className="text-gray-600">
                다른 카테고리를 선택하거나 고객센터에 문의해주세요
              </p>
            </div>
          )}
        </div>

        {/* 추가 도움 */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="card bg-gradient-to-r from-primary/5 to-secondary/5 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              원하는 답변을 찾지 못하셨나요?
            </h2>
            <p className="text-gray-600 mb-6">
              더 궁금한 점이 있으시면 언제든 연락해주세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">고객센터 문의</Button>
              </Link>
              <Link href="/help">
                <Button variant="outline" size="lg">도움말 보기</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}