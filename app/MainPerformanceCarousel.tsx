"use client";
import React from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { EmblaOptionsType } from "embla-carousel";

const dataList = [
  {
    image: "/실적/센텀화성파크드림.jpg",
    title: "혁본그룹",
    subTitle: "혁신과 성과를 추구하는 혁본그룹입니다.",
  },
  {
    image: "/실적/센텀화성파크드림.jpg",
    title: "혁본그룹",
    subTitle: "혁신과 성과를 추구하는 혁본그룹입니다.",
  },
  {
    image: "/실적/센텀화성파크드림.jpg",
    title: "혁본그룹",
    subTitle: "혁신과 성과를 추구하는 혁본그룹입니다.",
  },
  {
    image: "/실적/센텀화성파크드림.jpg",
    title: "혁본그룹",
    subTitle: "혁신과 성과를 추구하는 혁본그룹입니다.",
  },
];

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  align: "center",
  loop: true,
};

const MainPerformanceCarousel = () => {
  const [emblaRef] = useEmblaCarousel(OPTIONS, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  return (
    <div className="cursor-pointer" ref={emblaRef}>
      <ul className="flex touch-pan-y flex-nowrap -ml-2.5 md:ml-0">
        {dataList.map((data, index) => (
          <li
            className="relative h-[304px] md:h-[339px] flex min-w-full overflow-hidden pl-2.5 md:min-w-[50%] md:justify-center"
            key={index}
          >
            <div className="shrink-0 overflow-hidden bg-gray-100 flex flex-col w-full relative justify-between object-cover borders rounded-2xl">
              <div className="p-4 text-14">
                <span className="px-2 py-1 bg-white text-14 text-black rounded-md">
                  공동주택
                </span>
                <h3 className="pt-3 text-16 md:text-18">
                  동대구역 센텀 화성파크드림
                </h3>
                <div className="pt-4 md:pt-6 flex items-center">
                  <h4>위치</h4>
                  <p className="pl-1">
                    {" "}
                    : 경기도 안양시 만안구 안양동 627-1,2,3번지
                  </p>
                </div>
                <div className="flex items-center">
                  <h4>규모</h4>
                  <p className="pl-1">
                    {" "}
                    : 지하 6층 ~ 지상 25층, 2개동 (540세대)
                  </p>
                </div>
              </div>
              <div className="relative w-full h-[55%]">
                <Image
                  priority={true}
                  fill
                  src={data.image}
                  alt="main banner"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPerformanceCarousel;
