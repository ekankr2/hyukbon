import React from "react";
import Link from "next/link";
import Image from "next/image";
import performanceList from "@/app/assets/performance";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function Page({ params }: { name: string }) {
  const name = decodeURIComponent(params.name);

  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-40 max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">{name}</h1>
      <div className="pt-4 text-16 break-normal">
        <p>
          고객 중심의 최대 이익이라는 목표와
          <br /> 상품의 가치 실현에 무한한 책임감과 희로애락을 느끼는
          기업입니다.
        </p>
      </div>
    </article>
  );
}

export default Page;
