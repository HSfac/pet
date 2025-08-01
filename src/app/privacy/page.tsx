import Link from 'next/link';

export default function PrivacyPage() {
  const lastUpdated = '2024년 1월 15일';

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">개인정보처리방침</h1>
          <p className="text-gray-600">
            마지막 업데이트: {lastUpdated}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="space-y-8">
              {/* 목차 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-lg font-bold text-foreground mb-4">목차</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <a href="#section1" className="text-primary hover:underline">1. 개인정보 수집 및 이용 목적</a>
                  <a href="#section2" className="text-primary hover:underline">2. 수집하는 개인정보의 항목</a>
                  <a href="#section3" className="text-primary hover:underline">3. 개인정보의 보유 및 이용기간</a>
                  <a href="#section4" className="text-primary hover:underline">4. 개인정보의 제3자 제공</a>
                  <a href="#section5" className="text-primary hover:underline">5. 개인정보 처리 위탁</a>
                  <a href="#section6" className="text-primary hover:underline">6. 정보주체의 권리와 행사방법</a>
                  <a href="#section7" className="text-primary hover:underline">7. 개인정보의 안전성 확보조치</a>
                  <a href="#section8" className="text-primary hover:underline">8. 개인정보보호책임자</a>
                </div>
              </div>

              {/* 본문 */}
              <div className="space-y-8">
                <section id="section1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. 개인정보 수집 및 이용 목적</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      PetCare Hub(이하 &apos;회사&apos;)는 다음의 목적을 위하여 개인정보를 처리합니다. 
                      처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
                      이용 목적이 변경되는 경우에는 개인정보 보호법에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">주요 처리 목적</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>서비스 제공 및 계약 이행</li>
                        <li>회원 관리 및 본인확인</li>
                        <li>고객 상담 및 불만처리</li>
                        <li>서비스 개선 및 신규 서비스 개발</li>
                        <li>마케팅 및 광고에 활용 (동의한 경우에 한함)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="section2">
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. 수집하는 개인정보의 항목</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">필수 수집 항목</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                          <li>이름</li>
                          <li>이메일 주소</li>
                          <li>연락처(휴대전화번호)</li>
                          <li>서비스 이용 기록</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">선택 수집 항목</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                          <li>반려동물 정보</li>
                          <li>주소</li>
                          <li>관심 서비스 카테고리</li>
                          <li>마케팅 수신 동의</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      ※ 자동으로 수집되는 정보: IP주소, 쿠키, 방문일시, 서비스 이용기록, 불량 이용기록
                    </p>
                  </div>
                </section>

                <section id="section3">
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. 개인정보의 보유 및 이용기간</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      회사는 정보주체로부터 개인정보를 수집할 때 동의받은 개인정보 보유·이용기간 또는 
                      법령에 따른 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">보유기간</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>회원정보:</strong> 회원 탈퇴 시까지</li>
                        <li><strong>서비스 이용기록:</strong> 3년</li>
                        <li><strong>고객상담 기록:</strong> 3년</li>
                        <li><strong>결제 관련 기록:</strong> 5년 (전자상거래법)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="section4">
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. 개인정보의 제3자 제공</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 
                      처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 
                      경우에만 개인정보를 제3자에게 제공합니다.
                    </p>
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <p className="text-red-700 font-medium">
                        ⚠️ 현재 회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="section5">
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. 개인정보 처리 위탁</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 border-b border-gray-300 text-left font-semibold">수탁업체</th>
                            <th className="px-4 py-2 border-b border-gray-300 text-left font-semibold">위탁업무</th>
                            <th className="px-4 py-2 border-b border-gray-300 text-left font-semibold">보유기간</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr>
                            <td className="px-4 py-2 border-b border-gray-200">Amazon Web Services</td>
                            <td className="px-4 py-2 border-b border-gray-200">클라우드 서버 운영</td>
                            <td className="px-4 py-2 border-b border-gray-200">서비스 이용기간</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border-b border-gray-200">NHN</td>
                            <td className="px-4 py-2 border-b border-gray-200">이메일 발송</td>
                            <td className="px-4 py-2 border-b border-gray-200">발송 완료 후 즉시 삭제</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="section6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. 정보주체의 권리와 행사방법</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      정보주체는 개인정보보호법에 따라 다음과 같은 권리를 행사할 수 있습니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">행사 가능한 권리</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                          <li>개인정보 처리정지 요구</li>
                          <li>개인정보 열람 요구</li>
                          <li>개인정보 정정·삭제 요구</li>
                          <li>개인정보 처리정지 요구</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">권리 행사 방법</h3>
                        <div className="text-sm text-gray-700 space-y-1">
                          <p><strong>이메일:</strong> privacy@petcarehub.com</p>
                          <p><strong>전화:</strong> 1588-1234</p>
                          <p><strong>온라인:</strong> 마이페이지 &gt; 개인정보 관리</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="section7">
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. 개인정보의 안전성 확보조치</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      회사는 개인정보보호법에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">기술적 조치</h3>
                        <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                          <li>개인정보 암호화</li>
                          <li>해킹 등 대비 기술적 대책</li>
                          <li>개인정보 접근 제한</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">관리적 조치</h3>
                        <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                          <li>내부관리계획 수립·시행</li>
                          <li>정기적 직원 교육</li>
                          <li>개인정보 취급자 제한</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2">물리적 조치</h3>
                        <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                          <li>전산실 등 접근 통제</li>
                          <li>개인정보 보관 장소 잠금</li>
                          <li>출입통제시스템 운영</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="section8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. 개인정보보호책임자</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 
                      정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold text-foreground mb-3">개인정보보호책임자</h3>
                          <div className="space-y-1 text-sm text-gray-700">
                            <p><strong>성명:</strong> 김개인</p>
                            <p><strong>직책:</strong> 개인정보보호팀장</p>
                            <p><strong>이메일:</strong> privacy@petcarehub.com</p>
                            <p><strong>전화:</strong> 1588-1234</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-3">개인정보보호담당부서</h3>
                          <div className="space-y-1 text-sm text-gray-700">
                            <p><strong>부서명:</strong> 개인정보보호팀</p>
                            <p><strong>담당자:</strong> 이보호</p>
                            <p><strong>이메일:</strong> privacy@petcarehub.com</p>
                            <p><strong>전화:</strong> 1588-1234</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 기타 안내 */}
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-xl font-bold text-foreground mb-4">기타 안내</h2>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      정보주체께서는 개인정보보호법 등 관련 법령 위반에 대해 개인정보보호위원회, 
                      한국인터넷진흥원 개인정보침해신고센터 등에 신고하실 수 있습니다.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">관련 기관 연락처</h3>
                      <ul className="space-y-1">
                        <li>• 개인정보보호위원회: privacy.go.kr / 국번없이 182</li>
                        <li>• 개인정보침해신고센터: privacy.kisa.or.kr / 국번없이 118</li>
                        <li>• 대검찰청 사이버수사과: spo.go.kr / (02) 3480-3571</li>
                      </ul>
                    </div>
                    <p className="text-xs text-gray-500">
                      이 개인정보처리방침은 {lastUpdated}부터 적용됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 링크 */}
          <div className="text-center mt-8">
            <Link href="/contact" className="text-primary hover:underline">
              개인정보 관련 문의하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}