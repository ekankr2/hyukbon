import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import MainPerformanceCarousel from "@/app/MainPerformanceCarousel";

export default function Home() {
  return (
    <article className="flex flex-col flex-wrap px-3.5 md:px-0 overflow-x-hidden ">
      <div className="w-full max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
        <section className="pt-6 md:pt-8 lg:pt-4 group select-none text-white">
          <div className="rounded-2xl overflow-hidden relative lg:h-[486px] xl:h-[621px]">
            <div className="absolute top-7 lg:top-12 lg:left-10 xl:left-12 left-6 md:left-8 z-10 text-28">
              <p className="hidden md:inline-block">
                빛나는 성과와 근본적 해결을 중점으로
              </p>
              <h3 className="text-28 md:text-38 font-bold -mt-1">
                보다 이로운 내일을 만듭니다
              </h3>
            </div>
            <Image
              src="/메인이미지.jpg"
              alt="main_image"
              className="brightness-50 group-hover:brightness-100 main-duration-300"
              height={740}
              width={1316}
            />
            <div className="absolute text-16 lg:text-22 font-medium bottom-6 lg:bottom-9 xl:bottom-10 lg:right-10 right-6 flex justify-between flex-row items-center">
              <p className="pr-2">회사소개 바로가기</p>
              <span className="text-22">
                <FaArrowCircleRight />
              </span>
            </div>
          </div>
        </section>
        <section className="pt-6 md:pt-0">
          <h2 className="md:hidden">혁본의 사업분야</h2>
          <div className="pt-3.5 lg:pt-4  text-white">
            <ul className="flex flex-wrap flex-col md:flex-row justify-between select-none">
              <li className="bg-gray-100 group rounded-2xl text-16 overflow-hidden w-full h-[200px] md:h-[231px] relative md:w-[32.5%]">
                <div className="absolute left-4 top-4 lg:left-10 xl:left-11 lg:top-6 xl:top-9 z-10">
                  <p>고객 중심의 충실한 수행</p>
                  <h3 className="text-22">분양대행</h3>
                </div>
                <Image
                  className="brightness-50 group-hover:brightness-100 main-duration-300"
                  src="/사업분야1.jpg"
                  alt="분양대행이미지"
                  width={428}
                  height={340}
                />
                <div className="absolute text-14 lg:text-16 font-medium bottom-4 right-4 lg:bottom-8 lg:right-10 flex justify-between flex-row items-center">
                  <p className="pr-2">분양대행 보러가기</p>
                  <span className="text-18">
                    <FaArrowCircleRight />
                  </span>
                </div>
              </li>
              <li className="bg-gray-100 group rounded-2xl text-16 mt-3 md:mt-0 overflow-hidden w-full h-[200px] md:h-[231px] relative md:w-[32.5%]">
                <div className="absolute left-4 top-4 lg:left-10 xl:left-11 lg:top-6 xl:top-9 z-10">
                  <p>고객 중심의 충실한 수행</p>
                  <h3 className="text-22">부동산 개발대행</h3>
                </div>
                <Image
                  className="brightness-50 group-hover:brightness-100 main-duration-300"
                  src="/사업분야1.jpg"
                  alt="분양대행이미지"
                  width={428}
                  height={340}
                />
                <div className="absolute text-14 lg:text-16 font-medium bottom-4 right-4 lg:bottom-8 lg:right-10 flex justify-between flex-row items-center">
                  <p className="pr-2">분양대행 보러가기</p>
                  <span className="text-18">
                    <FaArrowCircleRight />
                  </span>
                </div>
              </li>
              <li className="bg-gray-100 group rounded-2xl text-16 mt-3 md:mt-0 overflow-hidden w-full h-[200px] md:h-[231px] relative md:w-[32.5%]">
                <div className="absolute left-4 top-4 lg:left-10 xl:left-11 lg:top-6 xl:top-9 z-10">
                  <p>고객 중심의 충실한 수행</p>
                  <h3 className="text-22">부동산 컨설팅</h3>
                </div>
                <Image
                  className="brightness-50 group-hover:brightness-100 main-duration-300"
                  src="/사업분야1.jpg"
                  alt="분양대행이미지"
                  width={428}
                  height={340}
                />
                <div className="absolute text-14 lg:text-16 font-medium bottom-4 right-4 lg:bottom-8 lg:right-10 flex justify-between flex-row items-center">
                  <p className="pr-2">분양대행 보러가기</p>
                  <span className="text-18">
                    <FaArrowCircleRight />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="pt-20">
          <h2 className="">혁본이 이루어낸 실적들</h2>
          <div className="pt-10">
            <MainPerformanceCarousel />
          </div>
        </section>
        <section className="pt-20">
          <h2 className="">약속과 책임</h2>
        </section>
        <section className="pt-20">
          <h2 className="">구성원 소개</h2>
        </section>
      </div>
    </article>
  );
}
