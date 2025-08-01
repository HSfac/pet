'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'general',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: 'general', label: '일반 문의' },
    { value: 'business', label: '사업자 등록' },
    { value: 'technical', label: '기술 지원' },
    { value: 'report', label: '신고/오류 제보' },
    { value: 'partnership', label: '제휴 문의' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 실제로는 API 호출
    try {
      console.log('문의 제출:', formData);
      alert('문의가 성공적으로 제출되었습니다. 빠른 시일 내에 답변드리겠습니다.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: 'general',
        subject: '',
        message: ''
      });
    } catch {
      alert('문의 제출에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">문의하기</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            궁금한 점이나 도움이 필요하시면 언제든 연락해주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 연락처 정보 */}
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-xl font-bold text-foreground mb-6">연락처 정보</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">고객센터</h3>
                    <p className="text-gray-600">1588-1234</p>
                    <p className="text-sm text-gray-500">평일 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">이메일</h3>
                    <p className="text-gray-600">support@petcarehub.com</p>
                    <p className="text-sm text-gray-500">24시간 접수</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">주소</h3>
                    <p className="text-gray-600">서울시 강남구 테헤란로 123</p>
                    <p className="text-sm text-gray-500">PetCare Hub 빌딩 5층</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold text-foreground mb-4">운영시간</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">평일</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">토요일</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">일요일/공휴일</span>
                  <span className="text-red-500">휴무</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                온라인 문의는 24시간 접수 가능하며, 순서대로 답변드립니다.
              </p>
            </div>
          </div>

          {/* 문의 폼 */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-xl font-bold text-foreground mb-6">온라인 문의</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="홍길동"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="010-1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      문의 유형 *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    제목 *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="문의하실 내용의 제목을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="구체적인 문의 내용을 작성해주세요. 자세할수록 정확한 답변을 드릴 수 있습니다."
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/1000자
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">개인정보 수집 및 이용 동의</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    문의 처리를 위해 개인정보(이름, 이메일, 연락처)를 수집하며, 
                    문의 답변 완료 후 관련 법령에 따라 일정 기간 보관 후 삭제합니다.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '제출 중...' : '문의 제출하기'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}