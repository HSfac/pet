'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reviewData: ReviewData) => void;
  serviceName: string;
  existingReview?: ReviewData | null;
}

interface ReviewData {
  rating: number;
  comment: string;
  petName?: string;
}

export default function ReviewModal({
  isOpen,
  onClose,
  onSubmit,
  serviceName,
  existingReview
}: ReviewModalProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [petName, setPetName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (existingReview) {
      setRating(existingReview.rating);
      setComment(existingReview.comment);
      setPetName(existingReview.petName || '');
    } else {
      setRating(5);
      setComment('');
      setPetName('');
    }
  }, [existingReview, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (comment.trim().length < 10) {
      alert('리뷰는 최소 10자 이상 작성해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit({
        rating,
        comment: comment.trim(),
        petName: petName.trim()
      });
      onClose();
    } catch (error) {
      console.error('리뷰 제출 실패:', error);
      alert('리뷰 제출에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* 모달 컨텐츠 */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">
            {existingReview ? '리뷰 수정' : '리뷰 작성'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <h3 className="font-medium text-gray-700 mb-2">{serviceName}</h3>
          <p className="text-sm text-gray-500">
            서비스 이용 경험을 다른 사용자들과 공유해주세요
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 평점 선택 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              평점 *
            </label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  className="text-2xl transition-colors hover:scale-110"
                >
                  <span className={value <= rating ? 'text-accent' : 'text-gray-300'}>
                    ⭐
                  </span>
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {rating}점
              </span>
            </div>
          </div>

          {/* 반려동물 이름 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              반려동물 이름
            </label>
            <input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="예: 초코, 나비"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* 리뷰 내용 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              리뷰 내용 *
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="서비스 이용 경험을 솔직하게 작성해주세요 (최소 10자)"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
            <div className="text-right text-xs text-gray-500 mt-1">
              {comment.length}/500자
            </div>
          </div>

          {/* 버튼들 */}
          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              취소
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isSubmitting || comment.trim().length < 10}
            >
              {isSubmitting ? '제출 중...' : (existingReview ? '수정하기' : '작성하기')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}