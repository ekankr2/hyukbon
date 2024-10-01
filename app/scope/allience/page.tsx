import React from "react";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-40 max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
      <div className="hidden xl:fixed xl:inline-block left-10 top-40 rounded overflow-hidden">
        <Link
          href="/about"
          className="w-full flex h-full bg-gray-200 p-10 text-18"
        >
          회사소개
        </Link>
        <ul className="pl-3 pt-1 divide-y-2 text-16">
          <li className="py-2">
            <Link href="/greetings">인사말</Link>
          </li>
          <li className="py-2">
            <Link href="/hierarchy">조직도</Link>
          </li>
          <li className="py-2">
            <Link href="/philosophy">경영이념</Link>
          </li>
          <li className="py-2">
            <Link href="/capability">사업역량</Link>
          </li>
        </ul>
      </div>
      <h1 className="text-28 md:text-40">ALLIENCE</h1>
      <div className="pt-4 text-16 break-normal">
        <p>
          긴밀한 협조 관계를 통한 지식 교류로
          <br />
          자체 프로젝트의 안정성을 높이고 있습니다.
        </p>
      </div>
      <div className="flex flex-row flex-wrap pt-20">
        <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
          <Image src="/협력사.png" alt="" width={5863} height={3869} />
        </div>
        <p className="w-full md:w-1/2 text-26 leading-loose flex items-center justify-center p-4">
          고객이 신뢰 할 수 있는 기업,
          <br />
          믿고 의지 할 수 있는 사업 파트너
          <br />
          함께 이루고 노력하겠습니다
          <br /> 고객만족에 최선을 다하며
          <br /> 사업 파트너로서 최선을 다하겠습니다.
          <br />
          <br /> 현재에 만족하지 않고 더 나은 성과를 위해
          <br /> 노력할 것을 약속 드립니다. <br />
          <br />
          감사합니다.
        </p>
      </div>
    </article>
  );
}

export default Page;
