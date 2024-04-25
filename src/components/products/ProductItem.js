import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
export default function ProductItem({ product }) {
  return (
    <div className="relative pt-2 lg:pt-2 min-h-screen ">
      <div>
        <article className="bg-white p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border mx-4">
          <a
            target="_self"
            href="/blog/slug"
            className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
          />
          <div className="relative mb-4 rounded-2xl">
            <Image
              className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              width={80}
              height={80}
              src={`/uploads/${product.image}`}
            />
            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-red-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5"
                />
              </svg>
              <span className="ml-1 text-sm text-slate-400">2</span>
            </div>
            <a
              className="flex justify-center items-center bg-sky-100 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
              href={`/product/${product._id}`}
              target="_self"
              rel="noopener noreferrer"
            >
              Дэлгэрэнгүй
              <svg
                className="ml-2 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="flex justify-between items-center w-full pb-4">
            <div className="flex items-center">
              <div className="pr-3">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={`/uploads/${product.image}`}
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  {" "}
                  Зохиолч : {product.author}{" "}
                </p>
                <p className="text-sm text-gray-500">
                  Номын нэр : {product.name}
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-medium text-xl leading-8">
            <a
              href="/blog/slug"
              className="block relative group-hover:text-red-700 transition-colors duration-200"
            >
              {product.name}
            </a>
          </h3>
        </article>
      </div>
    </div>
  );
}
