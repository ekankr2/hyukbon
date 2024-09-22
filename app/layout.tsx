import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
        <header className="mx-auto h-20">
          <div className="mx-auto flex items-center h-full w-full md:w-[712px] lg:w-[952px]">
            <nav className="flex flex-row w-full justify-between">
              <h1 className="text-4xl">
                <Link href="/">혁본</Link>
              </h1>
              <ul className="flex flex-row flex-wrap justify-between text-21 w-3/5">
                <li>
                  <a href="/">소개</a>
                </li>
                <li>
                  <a href="/">이야기</a>
                </li>
                <li>
                  <a href="/">분양 내역</a>
                </li>
                <li>
                  <a href="/">채용</a>
                </li>
                <li>
                  <a href="/">이야기</a>
                </li>
              </ul>
              <div></div>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
