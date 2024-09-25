import React from "react";
import Link from "next/link";
import Image from "next/image";

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">회사소개</h1>
      <div className="pt-4 text-16 break-normal">
        <p>고객 중심의 최대 이익이라는 목표와</p>
        <p>상품의 가치 실현에 무한한 책임감과 희로애락을 느끼는 기업입니다.</p>
      </div>
      <section className="pt-20 md:pt-32">
        <ul className="flex justify-between md:divide-x-2 divide-gray-200 flex-row text-28 md:text-22 lg:text-28 flex-wrap">
          <li className="w-1/2 md:w-auto">
            <Link href="/about/ceo">
              <h3>GREETING</h3>
              <p className="font-light text-18 lg:text-22">CEO 인사말</p>
            </Link>
          </li>
          <li className="w-1/2 md:w-auto md:pl-5">
            <Link href="/about/organization">
              <h3>ORGANIZATION</h3>
              <p className="font-light text-18 lg:text-22">조직도</p>
            </Link>
          </li>
          <li className="w-1/2 md:w-auto md:pl-5 pt-4 md:pt-0">
            <Link href="/about/strategy">
              <h3>STRATEGY</h3>
              <p className="font-light text-18 lg:text-22">경영이념</p>
            </Link>
          </li>
          <li className="w-1/2 md:w-auto md:pl-5 pt-4 md:pt-0">
            <Link href="/about/capability">
              <h3>CAPABILITY</h3>
              <p className="font-light text-18 lg:text-22">사업역량</p>
            </Link>
          </li>
        </ul>
      </section>
      <div className="pt-32">
        <Image src="/main.jpg" alt="" width={1316} height={800} />
      </div>
    </article>
  );
}

export default Page;
