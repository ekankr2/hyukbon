import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

export const metadata: Metadata = {
  title: "혁본",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="mx-auto h-14 md:h-20 sticky border-b top-0 border-solid z-50 bg-white">
          <div className="mx-auto px-4 md:px-0 flex items-center h-full w-full md:w-[712px] xl:w-[1316px] lg:w-[952px]">
            <nav className="flex flex-row w-full justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  className="w-[120px] md:w-[155px]"
                  src="/혁본로고.png"
                  alt="혁본로고"
                  width={155}
                  height={30}
                />
              </Link>
              <ul className="hidden md:flex flex-row flex-wrap justify-between text-18 w-3/5">
                <li className="flex items-center">
                  <Link href="/about">회사소개</Link>
                </li>
                <li className="flex items-center">
                  <Link href="/scope">사업분야</Link>
                </li>
                <li className="flex items-center">
                  <Link href="/performance">업무실적</Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="https://www.incruit.com/company/1678069226/job/"
                    target="_blank"
                  >
                    인재채용
                  </Link>
                </li>
              </ul>
              <div className="text-22 flex items-center">
                <RxHamburgerMenu className="md:hidden" />

                <HiMiniMagnifyingGlass className="hidden md:inline-block" />
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-neutral-800 py-14 text-txt-06 flex items-center justify-center ">
          <div className="max-w-[384px] flex flex-row md:max-w-none md:w-[712px] lg:w-[1000px] xl:w-[1500px]">
            <div className="w-10/12 flex flex-col">
              <h4 className="text-30">SHINE ON YOU</h4>
              <p className="mt-4">
                주식회사 혁본 ㅣ 경기도 화성시 동탄기흥로 614, 더퍼스트타워2차
                301호 (영천동) ㅣ 대표번호 : 1522-9432 ㅣ 팩스 : 050-4132-9432
              </p>
              <p>Copyright(c) HYUKBON.co.Ltd., All Rights Reserved.</p>
            </div>
            <div className="w-2/12 flex flex-col justify-end items-end">
              <Link href="">관리자 페이지</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
