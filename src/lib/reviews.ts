// 임시 리뷰 관리 (실제로는 API 또는 데이터베이스 사용)
interface Review {
  id: string;
  serviceId: string;
  userName: string;
  userPet: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

// 임시 리뷰 데이터
let reviews: Review[] = [
  {
    id: '1',
    serviceId: '1',
    userName: '김민지',
    userPet: '골든리트리버 "초코"',
    rating: 5,
    comment: '응급상황에서 24시간 병원을 찾을 수 있어서 정말 다행이었어요. 수의사 선생님도 친절하시고 진료도 꼼꼼히 해주셨습니다. 시설도 깨끗하고 최신 장비들이 잘 갖춰져 있어서 안심이 되었습니다.',
    date: '2024-01-15',
    helpful: 12
  },
  {
    id: '2',
    serviceId: '1',
    userName: '박준호',
    userPet: '웰시코기 "복이"',
    rating: 5,
    comment: '복이가 갑자기 아파서 새벽에 급하게 방문했는데, 대기시간도 짧고 빠르게 진료해주셔서 감사했습니다. 수술도 성공적으로 잘 되었고 지금은 건강하게 잘 지내고 있어요.',
    date: '2024-01-10',
    helpful: 8
  },
  {
    id: '3',
    serviceId: '1',
    userName: '이수연',
    userPet: '페르시안 고양이 "나비"',
    rating: 4,
    comment: '정기 검진 받으러 갔는데 매우 꼼꼼하게 검사해주시고 설명도 자세히 해주셨어요. 다만 주말이라 그런지 조금 혼잡했지만 전체적으로 만족합니다.',
    date: '2024-01-05',
    helpful: 5
  }
];

let nextReviewId = 4;

export const reviewService = {
  // 특정 서비스의 리뷰 목록 가져오기
  getByServiceId: (serviceId: string) => {
    return reviews.filter(review => review.serviceId === serviceId);
  },

  // 리뷰 추가
  add: (serviceId: string, reviewData: { rating: number; comment: string; petName?: string }) => {
    const newReview: Review = {
      id: nextReviewId.toString(),
      serviceId,
      userName: '김멍멍', // 실제로는 로그인한 사용자 정보
      userPet: reviewData.petName ? `${reviewData.petName}` : '반려동물',
      rating: reviewData.rating,
      comment: reviewData.comment,
      date: new Date().toISOString().split('T')[0],
      helpful: 0
    };
    
    reviews.unshift(newReview); // 최신 리뷰가 맨 위에 오도록
    nextReviewId++;
    
    console.log('리뷰 추가:', newReview);
    return newReview;
  },

  // 리뷰 수정
  update: (reviewId: string, reviewData: { rating: number; comment: string; petName?: string }) => {
    const reviewIndex = reviews.findIndex(review => review.id === reviewId);
    if (reviewIndex !== -1) {
      reviews[reviewIndex] = {
        ...reviews[reviewIndex],
        rating: reviewData.rating,
        comment: reviewData.comment,
        userPet: reviewData.petName ? `${reviewData.petName}` : reviews[reviewIndex].userPet,
        date: new Date().toISOString().split('T')[0] // 수정일로 업데이트
      };
      console.log('리뷰 수정:', reviews[reviewIndex]);
      return reviews[reviewIndex];
    }
    return null;
  },

  // 리뷰 삭제
  delete: (reviewId: string) => {
    const reviewIndex = reviews.findIndex(review => review.id === reviewId);
    if (reviewIndex !== -1) {
      const deletedReview = reviews.splice(reviewIndex, 1)[0];
      console.log('리뷰 삭제:', deletedReview);
      return true;
    }
    return false;
  },

  // 특정 리뷰 가져오기
  getById: (reviewId: string) => {
    return reviews.find(review => review.id === reviewId) || null;
  },

  // 도움됨 카운트 증가
  incrementHelpful: (reviewId: string) => {
    const reviewIndex = reviews.findIndex(review => review.id === reviewId);
    if (reviewIndex !== -1) {
      reviews[reviewIndex].helpful++;
      return reviews[reviewIndex].helpful;
    }
    return 0;
  }
};