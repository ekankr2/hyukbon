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
      <ul className="flex touch-pan-y flex-nowrap -ml-2.5 md:ml-0 xl:-ml-4 select-none">
        {dataList.map((data, index) => (
          <li
            className="relative h-[350px] md:h-[400px] flex min-w-full overflow-hidden pl-3 xl:pl-4 shrink-0 md:min-w-[427px] xl:w-[444px] md:justify-center"
            key={index}
          >
            <div className="shrink-0 overflow-hidden bg-gray-100 flex flex-col w-full relative justify-between object-cover borders rounded-2xl">
              <div className="p-4 md:p-5.5 xl:px-5 h-full flex flex-col justify-between ">
                <div className="flex justify-between items-center xl:items-start">
                  <h3 className="text-18 xl:text-21 pr-2">
                    광주오포 한양수자인 미스타운하우스
                  </h3>
                  <span className="px-2 py-1 shrink-0 font-medium bg-white text-14 text-black rounded-md">
                    공동주택
                  </span>
                </div>
                <ul className="text-14 lg:text-16">
                  <li className="pt-5 md:pt-6 flex items-center">
                    <h4>위치</h4>
                    <p className="pl-1">
                      {" "}
                      : 인천 경제자유구역 정종지구 영종하늘도시 a58bl
                    </p>
                  </li>
                  <li className="flex items-center">
                    <h4>규모</h4>
                    <p className="pl-1">
                      {" "}
                      : 지하 6층 ~ 지상 25층, 2개동 (540세대)
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-3/5 shrink-0">
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
