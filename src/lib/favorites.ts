// 임시 즐겨찾기 관리 (실제로는 API 또는 데이터베이스 사용)
const favorites = new Set<string>();

export const favoriteService = {
  // 즐겨찾기 추가
  add: (serviceId: string) => {
    favorites.add(serviceId);
    // 실제로는 API 호출
    console.log('즐겨찾기 추가:', serviceId);
  },

  // 즐겨찾기 제거
  remove: (serviceId: string) => {
    favorites.delete(serviceId);
    // 실제로는 API 호출
    console.log('즐겨찾기 제거:', serviceId);
  },

  // 즐겨찾기 여부 확인
  has: (serviceId: string) => {
    return favorites.has(serviceId);
  },

  // 모든 즐겨찾기 목록 가져오기
  getAll: () => {
    return Array.from(favorites);
  },

  // 즐겨찾기 토글
  toggle: (serviceId: string) => {
    if (favorites.has(serviceId)) {
      favoriteService.remove(serviceId);
      return false;
    } else {
      favoriteService.add(serviceId);
      return true;
    }
  }
};

// 초기 더미 데이터 (개발용)
favorites.add('1'); // 24시 동물병원
favorites.add('3'); // 케어펫 시터