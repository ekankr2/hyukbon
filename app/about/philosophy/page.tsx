import React from "react";
import Image from "next/image";

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-32 max-w-[384px] md:w-[712px] lg:w-[850px]  md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">PHILOSOPHY</h1>
      <div className="text-14 md:text-18 pt-4">
        <p>
          다년간 전문성을 갖춘 인력들과 시스템으로
          <br />
          고객 중심의 분양 파트너로 성공적인 성과를 이뤄내겠습니다.
        </p>
      </div>
      <div className="mt-28">
        <Image
          src="/이념사진.png"
          alt="이념사진"
          width={1526}
          height={928}
          className="w-4/5 mx-auto"
        />
      </div>
      <div className="md:mt-32">
        <ul className="divide-y lg:divide-y-0 lg:divide-x text-14 flex flex-col lg:flex-row">
          <li className="pb-3 md:py-5 lg:pr-5">
            <h4 className="text-16 md:text-18">최대 이익 창출</h4>
            <p className="font-light pt-3">
              축적된 노하우와 데이터베이스를 통해 고객의 이익 보호 최소한의
              리스크로 최대 가치 창출
            </p>
          </li>
          <li className="py-3 md:py-5 lg:px-5">
            <h4 className="text-16 md:text-18">가치의 극대화</h4>
            <p className="font-light pt-3">
              회계 / 변호 / 변리 / 노무 등 고문단을 통한 리스크 예방 상호 소통
              중점의 유기적 업무 플로우 구축
            </p>
          </li>
          <li className=" py-3 md:py-5 lg:px-5">
            <h4 className="text-16 md:text-18">신의 성실 윤리</h4>
            <p className="font-light pt-3">
              철저한 윤리규정 준수를 통한 투명한 업무 수행 절차 상충된
              이해관계에 공정한 조정 및 중재
            </p>
          </li>
          <li className="pt-3 md:pt-5 lg:pl-5">
            <h4 className="text-16 md:text-18">고객의 만족도</h4>
            <p className="font-light pt-3">
              안정성을 기반으로 높은 품질의 서비스 제공 수행과정 및 결과에 대한
              상세한 기록관리
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Page;
