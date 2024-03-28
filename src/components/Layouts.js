import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "../../utils/Store";
export default function Layouts({ children, title }) {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div>
      <div className=" h-12  bg-cyan-400">
        <div>
          <h1 className=" p-3 text-white font-semibold ml-10"> Утас : 99110022</h1>
        </div>
      </div>
      <Head>
        <title>
          {title ? title + "Нүүр хуудас " : "Онлайн худалдааны систем"}
        </title>
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-[80px] p-12  items-center  justify-between  shadow-md ">
            <Link href="/" className="   text-lg sm:text-md font-bold ">
              Цахим ном
            </Link>
            <div className="">
              <Link href="/login">Нэвтрэх</Link>
            </div>
          </nav>
        </header>
        <main className="  m-auto mt-4  px-4">{children}</main>
        <div className="w-full flex justify-center mt-[300px]">
          {/* TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com */}
          {/* Footer container */}

        </div>

      </div>
    </div>
  );
}
