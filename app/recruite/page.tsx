import React from "react";
import Image from "next/image";

function Page() {
  return (
    <article className="w-full px-4 md:px-0 pt-20 pb-32 max-w-[384px] md:w-[712px] lg:w-[850px]  md:max-w-none mx-auto text-26 md:text-30">
      <h1 className="text-28 md:text-40">인재채용</h1>
      <div className="text-14 md:text-18 pt-4">
        <p>
          진행중인 인재채용 0건
        </p>
      </div>
    </article>
  );
}

export default Page;
