import React from "react";
import Image from "next/image";

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-40 max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">RESEARCH</h1>
      <div className="pt-4 text-16 break-normal">
        <p>
          양방향 분석을 통한 객관적인 시장 판단력으로
          <br /> 소비자에 맞춘 완벽한 전략을 개발합니다.
        </p>
      </div>
      <div className="flex flex-row pt-20 flex-wrap">
        <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
          <div className="absolute z-10 top-4 md:top-10 left-5 md:left-11 text-white text-16 md:text-18">
            <h3 className="text-26">RESEARCH BUSINESS</h3>
            <hr className="my-2" />
            <p>
              객관적인 판단을 기반으로 사업의 타당성을 검토하고
              <br /> 혁본만의 전략 수립 및 분석을 진행합니다.
            </p>
          </div>
          <Image
            src="/research.jpg"
            alt=""
            className="w-full h-[400px] brightness-50"
            width={5863}
            height={3869}
          />
        </div>
        <ul className="w-full md:w-1/2 p-4">
          <li className="flex flex-row items-center justify-start border-t py-4 md:px-8">
            <h4 className="w-1/2">REAL ESTATE</h4>
            <p className="text-14 md:text-16">
              사업 타당성을 위한 조사
              <br />
              분양 전략수립 조사
            </p>
          </li>
          <li className="flex flex-row items-center justify-start border-t py-4 md:px-8">
            <h4 className="w-1/2">BRAND</h4>
            <p className="text-14 md:text-16">
              기업 이미지 선호 조사
              <br />
              건설사 및 브랜드 지표 조사
            </p>
          </li>
          <li className="flex flex-row items-center justify-start border-y py-4 md:px-8">
            <h4 className="w-1/2">TREND</h4>
            <p className="text-14 md:text-16">
              상품 관련 시장 트렌드 조사
              <br />
              소비자 상품 선호 조사
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Page;
