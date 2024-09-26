import React from "react";
import Image from "next/image";

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-40 max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">SELLING</h1>
      <div className="pt-4 text-16 break-normal">
        <p>
          성공적인 분양을 위해
          <br />
          최상의 솔루션을 제안합니다.
        </p>
      </div>
      <div className="flex flex-row pt-20">
        <div className="w-1/2 relative rounded-xl overflow-hidden">
          <div className="absolute z-10 top-10 left-11 text-white text-18">
            <h3 className="text-26">SELLING BUSINESS</h3>
            <hr className="my-2" />
            <p>
              성공이라는 목표 달성을 위해
              <br />
              최선의 노력을 다할 것을 약속합니다.
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
        <ul className="w-1/2 p-4">
          <li className="flex flex-row items-center justify-start border-t py-4 px-8">
            <h4 className="w-1/2">주거시설 분양</h4>
            <p className="text-16">
              아파트, 주상복합
              <br />
              타운하우스 분양대행
            </p>
          </li>
          <li className="flex flex-row items-center justify-start border-t py-4 px-8">
            <h4 className="w-1/2">비주거시설 분양</h4>
            <p className="text-16">
              상업시설, 업무시설 등<br />
              수익형 부동산 분양대행
            </p>
          </li>
          <li className="flex flex-row items-center justify-start border-y py-4 px-8">
            <h4 className="w-1/2">토지 분양</h4>
            <p className="text-16">
              개발여건, 환금성 등<br />
              지가 변동성 분석 및 분양대행
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Page;
