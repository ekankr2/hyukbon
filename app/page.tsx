import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <article className="flex flex-col flex-wrap px-3.5 ">
      <div className="w-full max-w-[384px] md:w-[712px] md:max-w-none mx-auto text-26 md:text-30">
        <section className="pt-8 select-none text-white">
          <div className="rounded-2xl overflow-hidden relative hover:opacity-90 main-duration-300">
            <div className="absolute top-7 left-8 z-10  hidden text-24 md:inline-block">
              <p>빛나는 성과와 근본적 해결을 중점으로</p>
              <h3 className="text-36 font-bold -mt-1">
                보다 이로운 내일을 만듭니다.
              </h3>
            </div>
            <Image
              src="/main.jpg"
              alt="main_image"
              className="brightness-50"
              height={300}
              width={712}
            />
            <div className="absolute text-16 font-medium bottom-6 right-6 flex justify-between flex-row items-center">
              <p className="pr-2">회사소개 바로가기</p>
              <span className="text-22">
                <FaArrowCircleRight />
              </span>
            </div>
          </div>
        </section>
        <section className="pt-12">
          <h2 className="">혁본의 사업분야</h2>
          <div className="pt-6 text-white">
            <ul className="flex flex-wrap flex-col md:flex-row justify-between select-none">
              <li className="bg-gray-100 rounded-lg text-16 overflow-hidden w-full h-[200px] md:h-[340px] relative md:w-[32.5%]">
                <div className="absolute left-4 top-4 z-10">
                  <p>고객 중심의 충실한 수행</p>
                  <h3 className="text-22">분양대행</h3>
                </div>
                <Image
                  className="brightness-50"
                  src="/사업분야1.jpg"
                  alt="분양대행이미지"
                  width={242}
                  height={340}
                />
                <div className="absolute text-14 font-medium bottom-4 right-4 flex justify-between flex-row items-center">
                  <p className="pr-2">분양대행 보러가기</p>
                  <span className="text-18">
                    <FaArrowCircleRight />
                  </span>
                </div>
              </li>
              <li className="bg-gray-100 rounded-lg text-16 overflow-hidden w-full h-[200px] md:h-[340px] relative md:w-[32.5%]">
                <div className="absolute left-4 top-4 z-10">
                  <p>고객 중심의 충실한 수행</p>
                  <h3 className="text-22">부동산 개발대행</h3>
                </div>
                <Image
                  className="brightness-50"
                  src="/사업분야1.jpg"
                  alt="분양대행이미지"
                  width={242}
                  height={340}
                />
                <div className="absolute text-14 font-medium bottom-4 right-4 flex justify-between flex-row items-center">
                  <p className="pr-2">분양대행 보러가기</p>
                  <span className="text-18">
                    <FaArrowCircleRight />
                  </span>
                </div>
              </li>
              <li className="bg-gray-100 rounded-lg text-16 overflow-hidden w-full h-[200px] md:h-[340px] relative md:w-[32.5%]">
                <div className="absolute left-4 top-4 z-10">
                  <p>고객 중심의 충실한 수행</p>
                  <h3 className="text-22">부동산 컨설팅</h3>
                </div>
                <Image
                  className="brightness-50"
                  src="/사업분야1.jpg"
                  alt="분양대행이미지"
                  width={242}
                  height={340}
                />
                <div className="absolute text-14 font-medium bottom-4 right-4 flex justify-between flex-row items-center">
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
          <h2 className="">혁본과 함께해온 실적들</h2>
          <div className="pt-6">
            <ul className="flex flex-nowrap flex-row  md:h-[330px] justify-between">
              <li className="bg-gray-100 rounded-lg h-[309px] md:w-[242px] md:h-[328px] w-[252px]"></li>
              <li className="bg-gray-100 rounded-lg h-[309px] md:w-[242px] md:h-[328px] w-[252px]"></li>
              <li className="bg-gray-100 rounded-lg h-[309px] md:w-[242px] md:h-[328px] w-[252px]"></li>
            </ul>
            <div className="text-18 flex justify-center items-center pt-4">
              <Link className="bg-gray-100 rounded-xl px-4 py-2" href="">
                더 보기
              </Link>
            </div>
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
