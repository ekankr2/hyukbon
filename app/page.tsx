import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import MainPerformanceCarousel from "@/app/MainPerformanceCarousel";

export default function Home() {
  return (
    <article className="flex flex-col flex-wrap px-3.5 md:px-0 overflow-x-hidden">
      <div className="w-full max-w-[384px] md:w-[712px] lg:w-[948px] xl:w-[1316px] md:max-w-none mx-auto text-26 md:text-30">
        <section className="pt-6 md:pt-8 lg:pt-4 group select-none text-white">
          <div className="rounded-2xl overflow-hidden relative lg:h-[486px] xl:h-[621px]">
            <div className="absolute top-7 lg:top-12 lg:left-10 xl:left-12 left-6 md:left-8 z-10 text-28">
              <p className="text-21 md:text-28 inline-block">
                빛나는 성과와 근본적 해결을 중점으로
              </p>
              <h3 className="text-28 md:text-38 font-bold -mt-1">
                보다 이로운 내일을 만듭니다
              </h3>
            </div>
            <Image
              src="/메인이미지-small.jpg"
              alt="main_image"
              className="brightness-50 md:hidden group-hover:brightness-100 main-duration-300 "
              height={740}
              width={1316}
            />
            <Image
              src="/메인이미지-big.jpg"
              alt="main_image"
              className="brightness-50 hidden md:flex group-hover:brightness-100 main-duration-300 animate-zoom-in"
              height={740}
              width={1316}
            />
            <div className="absolute text-16 lg:text-22 font-medium bottom-6 lg:bottom-9 xl:bottom-10 lg:right-10 right-6 flex justify-between flex-row items-center">
              <Link href="/about" className="pr-2">
                회사소개 바로가기
              </Link>
              <span className="text-22">
                <FaArrowCircleRight />
              </span>
            </div>
          </div>
        </section>
        <section className="pt-6 md:pt-0">
          <h2 className="md:hidden">혁본의 사업분야</h2>
          <div className="pt-3.5 md:pt-2.5 lg:pt-4  text-white">
            <ul className="flex flex-wrap flex-col md:flex-row justify-between select-none">
              <li className="bg-gray-100 group rounded-2xl text-16 overflow-hidden w-full h-[200px] md:h-[231px] relative md:w-[32.5%]">
                <div className="absolute left-4 top-4 lg:left-10 xl:left-11 lg:top-6 xl:top-9 z-10">
                  <p>고객 중심의 충실한 수행</p>
                  <h3 className="text-22">다방면의 가치 창출</h3>
                </div>
                <Image
                  className="brightness-50 group-hover:brightness-100 main-duration-300"
                  src="/사업분야1.jpg"
                  alt="분양대행이미지"
                  width={428}
                  height={340}
                />
                <div className="absolute text-14 lg:text-16 font-medium bottom-4 right-4 lg:bottom-8 lg:right-10 flex justify-between flex-row items-center">
                  <p className="pr-2">사업분야 바로가기</p>
                  <span className="text-18">
                    <FaArrowCircleRight />
                  </span>
                </div>
              </li>
              <li className="bg-gray-100 group rounded-2xl text-16 mt-3 md:mt-0 overflow-hidden w-full h-[200px] md:h-[231px] relative md:w-[32.5%]">
                <div className="absolute left-4 top-4 lg:left-10 xl:left-11 lg:top-6 xl:top-9 z-10">
                  <p>신의, 성실, 신뢰 기반의</p>
                  <h3 className="text-22">전반적 컨슈머 저니</h3>
                </div>
                <Image
                  className="brightness-50 group-hover:brightness-100 main-duration-300"
                  src="/사업분야1.jpg"
                  alt="분양대행이미지"
                  width={428}
                  height={340}
                />
                <div className="absolute text-14 lg:text-16 font-medium bottom-4 right-4 lg:bottom-8 lg:right-10 flex justify-between flex-row items-center">
                  <p className="pr-2">업무실적 바로가기</p>
                  <span className="text-18">
                    <FaArrowCircleRight />
                  </span>
                </div>
              </li>
              <li className="bg-gray-100 group rounded-2xl text-16 mt-3 md:mt-0 overflow-hidden w-full h-[200px] md:h-[231px] relative md:w-[32.5%]">
                <div className="absolute left-4 top-4 lg:left-10 xl:left-11 lg:top-6 xl:top-9 z-10">
                  <p>A부터 Z까지 모두모두</p>
                  <h3 className="text-22">창의적인 인재채용</h3>
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
        <hr className="mt-8 mb-2 xl:mb-4" />
        <section className="">
          <div className="flex flex-row items-center justify-between">
            <h2 className="pr-2.5">분양 대행</h2>
            <Link
              href="/"
              className="flex items-center text-14 font-medium md:text-21 rounded-lg pl-4 py-1.5"
            >
              모아보기
              <FaArrowCircleRight className="ml-1.5" />
            </Link>
          </div>
          <div className="pt-10">
            <MainPerformanceCarousel />
          </div>
        </section>
        <section className="pt-20">
          <h2 className="">약속과 책임</h2>
          <h3 className="pt-10 text-18 md:text-24">
            고객들이 있기에 함께하는 주식회사 혁본
          </h3>
          <p className="text-14 md:text-16 pt-1.5">
            저희 회사의 구성원들은 오로지 “가치 창출”과 “고객 감동”을 위해
            움직입니다.
            <br /> 여느 회사와는 격이 다르다고 느끼실 수 있도록 항상 최선과
            노력을 다하겠습니다.
          </p>
          <div className="shadow-xl border mt-8 flex flex-col md:flex-row">
            <div className="md:w-3/5 p-10 flex items-center justify-center">
              <Image
                className="relative"
                src="/고객중심.png"
                alt="약속과 책임"
                width={600}
                height={400}
              />
            </div>
            <div className=" md:w-2/5 bg-zinc-100 px-3.5 md:px-10 py-4">
              <ul className="divide-y text-14 md:text-16 flex flex-col justify-around h-full">
                <li className="pb-3 md:pb-0">
                  <h4 className="text-16 md:text-18">최대 이익 창출</h4>
                  <p className="font-light">
                    다년간 축적된 노하우와 데이터베이스를 통한 고객의 이익 보호
                    <br />
                    최소한의 리스크로 최대의 가치를 창출
                  </p>
                </li>
                <li className="pt-3 pb-3 md:pb-0">
                  <h4 className="text-16 md:text-18">가치의 극대화</h4>
                  <p className="font-light">
                    회계사 / 변호사 / 변리사 / 노무사 등의 고문단을 통한 리스크
                    사전예방
                    <br />
                    조직 구성원들과의 소통을 통한 유기적인 업무 플로우 구축
                  </p>
                </li>
                <li className="pt-3 pb-3 md:pb-0">
                  <h4 className="text-16 md:text-18">신의 성실 윤리</h4>
                  <p className="font-light">
                    명문화된 윤리규정의 철저한 준수를 통해 업무 수행 또한 투명한
                    절차
                    <br />
                    사업 참여자 간 상충되는 이해관계에 대한 공정한 조정 및 중재
                  </p>
                </li>
                <li className="pt-3">
                  <h4 className="text-16 md:text-18">고객의 만족도</h4>
                  <p className="font-light">
                    안정성을 기반으로 타사와 차별화된 높은 품질의 서비스 제공
                    <br />
                    업무 수행과정 및 결과에 대한 상세한 기록관리
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="pt-20">
          <h2 className="">구성원 소개</h2>
        </section>
      </div>
    </article>
  );
}
