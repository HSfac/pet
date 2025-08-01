import Link from 'next/link';
import Button from '@/components/Button';

export default function HelpPage() {
  const helpSections = [
    {
      title: '서비스 이용 방법',
      icon: '🔍',
      items: [
        {
          question: '서비스는 어떻게 찾나요?',
          answer: '메인 페이지에서 검색하거나 카테고리별로 찾아볼 수 있습니다. 지역명이나 서비스명으로 검색하면 더 정확한 결과를 얻을 수 있어요.'
        },
        {
          question: '즐겨찾기는 어떻게 사용하나요?',
          answer: '서비스 카드나 상세 페이지에서 하트 버튼을 클릭하면 즐겨찾기에 추가됩니다. 마이페이지에서 모든 즐겨찾기를 관리할 수 있어요.'
        },
        {
          question: '리뷰는 어떻게 작성하나요?',
          answer: '서비스 상세 페이지에서 "리뷰 작성하기" 버튼을 클릭하면 됩니다. 별점과 함께 솔직한 이용 후기를 작성해주세요.'
        }
      ]
    },
    {
      title: '계정 관리',
      icon: '👤',
      items: [
        {
          question: '회원가입은 어떻게 하나요?',
          answer: '현재는 간편하게 이용할 수 있도록 회원가입 없이 서비스를 제공하고 있습니다. 향후 개인화 서비스를 위해 회원가입 기능을 추가할 예정입니다.'
        },
        {
          question: '내 정보는 어떻게 수정하나요?',
          answer: '마이페이지에서 "수정하기" 버튼을 클릭하면 개인정보를 수정할 수 있습니다.'
        },
        {
          question: '반려동물 정보는 어떻게 관리하나요?',
          answer: '마이페이지의 "반려동물" 탭에서 반려동물 정보를 추가, 수정, 삭제할 수 있습니다.'
        }
      ]
    },
    {
      title: '서비스 문의',
      icon: '💬',
      items: [
        {
          question: '서비스 등록은 어떻게 하나요?',
          answer: '사업자이시라면 메인 페이지 하단의 "사업자 등록하기" 버튼을 클릭하거나 고객센터로 문의해주세요.'
        },
        {
          question: '잘못된 정보를 발견했어요',
          answer: '서비스 정보에 오류가 있다면 고객센터나 문의하기 페이지를 통해 신고해주세요. 빠르게 확인하여 수정하겠습니다.'
        },
        {
          question: '24시간 이용 가능한가요?',
          answer: '웹사이트는 24시간 이용 가능하지만, 고객센터는 평일 9시-18시에 운영됩니다.'
        }
      ]
    },
    {
      title: '기술 지원',
      icon: '⚙️',
      items: [
        {
          question: '사이트가 제대로 작동하지 않아요',
          answer: '브라우저 새로고침을 시도해보세요. 문제가 지속되면 다른 브라우저를 사용하거나 고객센터에 문의해주세요.'
        },
        {
          question: '모바일에서도 이용할 수 있나요?',
          answer: '네! 반응형 웹으로 제작되어 모바일, 태블릿에서도 편리하게 이용할 수 있습니다.'
        },
        {
          question: '어떤 브라우저를 지원하나요?',
          answer: 'Chrome, Safari, Firefox, Edge 등 최신 브라우저에서 최적화되어 있습니다.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">도움말</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            PetCare Hub 이용에 도움이 되는 정보를 확인하세요
          </p>
        </div>

        {/* 빠른 링크 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link href="/contact" className="card group hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">문의하기</h3>
              <p className="text-gray-600 text-sm">궁금한 점이 있으시면 언제든 연락하세요</p>
            </div>
          </Link>

          <Link href="/faq" className="card group hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">❓</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">자주 묻는 질문</h3>
              <p className="text-gray-600 text-sm">많은 분들이 궁금해하는 질문들을 모았어요</p>
            </div>
          </Link>

          <Link href="/services" className="card group hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">서비스 둘러보기</h3>
              <p className="text-gray-600 text-sm">다양한 반려동물 서비스를 찾아보세요</p>
            </div>
          </Link>
        </div>

        {/* 도움말 섹션들 */}
        <div className="space-y-8">
          {helpSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="card">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{section.icon}</span>
                <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
              </div>
              
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-primary/20 pl-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 추가 도움이 필요한 경우 */}
        <div className="mt-12 text-center">
          <div className="card bg-gradient-to-r from-primary/5 to-secondary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              더 궁금한 점이 있으신가요?
            </h2>
            <p className="text-gray-600 mb-6">
              찾으시는 답변이 없다면 언제든 고객센터로 문의해주세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">고객센터 문의</Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline" size="lg">자주 묻는 질문</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}