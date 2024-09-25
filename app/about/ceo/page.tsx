import React from "react";
import Image from "next/image";

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-32 max-w-[384px] md:w-[712px] lg:w-[802px]  md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">CEO GREETINGS</h1>
      <div className="text-14 md:text-18 pt-4">
        <p>
          20년 이상의 노하업계에서우와 데이터 베이스를 통해
          <br /> 부동산 마케팅 가장 정직하고 실력 있는 기업이 되겠습니다.
        </p>
      </div>
      <section className="flex w-full pt-14 md:pt-20   mx-auto">
        <div className="w-full p-4 text-14 md:text-16 lg:text-18 text-txt-03">
          <p className="leading-9">
            안녕하십니까?
            <br />
            주식회사 혁본 대표이사 이혁입니다.
            <br />
            <br />
            부동산 분양대행의 새로운 문화를 창조하는 저희 ㈜혁본은 부동산 개발과
            관련된 시행 업무, 개발 기획 및 사업 타당성 분석부터 시장조사, 마케팅
            및 관리 계획까지 부동산 개발 전반에 걸친 모든 업무 뿐만 아니라, 기획
            자문 역할까지 수행하고 있습니다.
            <br />
            <br />
            저희 ㈜혁본은 부동산 개발 및 분양 마케팅 전문회사로서 무결점주의를
            추구하며 20여년 장기간 축적된 노하우 탁월한 업무 추진 능력을 갖춘
            임직원들과 열정과 패기가 넘치는 젊은 인재들로 구성되어 있어
            대한민국의 新 주거문화 및 건설문화 정착에 전력을 다하고 있습니다.
            <br />
            <br />
            부동산 개발사업 및 분양 마케팅 영역에 대해 전문지식과 현장 경험이
            풍부한 임직원들을 비롯하여 학계 및
            <br className="hidden xl:inline-block" /> 금융, 부동산 관련업체 등
            다양한 분야에 걸친 정보망을 활용한 체계적이고 과학적 분석과 현실적
            대안 제시로
            <br className="hidden xl:inline-block" /> 클라이언트의 이익과 가치를
            극대화해 이끌어 낼 것을 약속드립니다.
            <br />
            <br />
            감사합니다.
          </p>
          <h3 className="flex justify-end">대표이사 이혁</h3>
        </div>
      </section>
      <div className="w-full rounded-lg mt-32 flex h-[300px] relative overflow-hidden">
        <Image
          src="/main.jpg"
          alt=""
          width={2000}
          height={1000}
          className="absolute w-full h-full object-cover object-top"
        />
      </div>
    </article>
  );
}

export default Page;
