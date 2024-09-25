import React from "react";
import Image from "next/image";

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-32 max-w-[384px] md:w-[712px] lg:w-[850px]  md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">CAPABILITY</h1>
      <div className="text-14 md:text-18 pt-4">
        <p>
          언제나 고객 여러분께 최고의 서비스를 선사하며
          <br />
          꾸준한 혁신으로 차별성을 제고하겠습니다.
        </p>
      </div>
      <div className="mt-28">
        <Image
          src="/이념사진.png"
          alt="이념사진"
          width={1526}
          height={928}
          className=""
        />
      </div>
      <div className="mt-12 md:mt-32">
        <ul className="divide-y lg:divide-y-0 lg:divide-x text-14 flex flex-col lg:justify-between lg:flex-row">
          <li className="pb-3 md:py-5 lg:pr-0 w-full lg:w-1/4">
            <h4 className="text-16 md:text-18">견고한 기획</h4>
            <p className="font-light pt-3">
              환경분석, 디자인 컨셉 설정 <br />
              인테리어 기획, 홍보계획 수립
            </p>
          </li>
          <li className="py-3 md:py-5 lg:px-5 lg:w-1/4">
            <h4 className="text-16 md:text-18">가치의 극대화</h4>
            <p className="font-light pt-3">
              법적, 행정적 검토
              <br /> 산정 수지에 따른 사업 수행
            </p>
          </li>
          <li className=" py-3 md:py-5 lg:px-5 lg:w-1/4">
            <h4 className="text-16 md:text-18">신의 성실 윤리</h4>
            <p className="font-light pt-3">
              거시적, 미시적 시장 분석
              <br />
              방향석 검토 환경변화 대응
            </p>
          </li>
          <li className="pt-3 md:pt-5 lg:pl-5 lg:w-1/4">
            <h4 className="text-16 md:text-18">고객의 만족도</h4>
            <p className="font-light pt-3">
              데이터 베이스 축적 노하우 축적
              <br />
              상품 마케팅, 신규 사업의 접목
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Page;
