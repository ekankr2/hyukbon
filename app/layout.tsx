import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "혁본그룹",
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
        <header className="mx-auto h-20 sticky border-b top-0 border-solid z-50 bg-white">
          <div className="mx-auto flex items-center h-full w-full md:w-[712px] xl:w-[1316px] lg:w-[952px]">
            <nav className="flex flex-row w-full justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/혁본로고.png"
                  alt="혁본로고"
                  width={155}
                  height={30}
                />
              </Link>
              <ul className="flex flex-row flex-wrap justify-between text-18 w-3/5">
                <li className="flex items-center">
                  <Link href="/about">회사소개</Link>
                </li>
                <li className="flex items-center">
                  <Link href="/scope">사업분야</Link>
                </li>
                <li className="flex items-center">
                  <Link href="/">분양실적</Link>
                </li>
                <li className="flex items-center">
                  <Link href="/recrute">인재채용</Link>
                </li>
              </ul>
              <div className="text-22 flex items-center">
                <HiMiniMagnifyingGlass />
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-neutral-800 h-[400px]">발바닥</footer>
      </body>
    </html>
  );
}
