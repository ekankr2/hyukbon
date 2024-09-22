import Link from "next/link";

export default function Home() {
  return (
    <article className="flex flex-col flex-wrap px-3.5">
      <div className="w-full max-w-[384px] md:w-[712px] md:max-w-none mx-auto text-26 md:text-30">
        <section className="pt-12">
          <h2 className="">더 나은 세상을 만드는 혁본</h2>
          <div className="pt-6">
            <ul className="flex flex-wrap flex-col md:flex-row justify-between">
              <li className="bg-gray-100 rounded-lg w-full h-[200px] md:h-[340px] md:w-[32.5%]"></li>
              <li className="bg-gray-100 rounded-lg w-full h-[200px] mt-2 md:mt-0 md:h-[340px] md:w-[32.5%]"></li>
              <li className="bg-gray-100 rounded-lg w-full h-[200px] md:h-[340px] mt-2 md:mt-0 md:w-[32.5%]"></li>
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
