import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
export default function ProductItem({ product }) {


  return (
    <div className="card">
      <Link href={`/product/${product._id}`}>
        <Image
          width={600}
          height={300}
          src={`/uploads/${product.image}`}
          alt={product.name}
          className="rounded shadow"
        />
      </Link>
      <div className="flex flex-col items-center p-5 border">
        <Link href={`/product/${product._id}`}>
          <span className=" text-blue-400"> Номын нэр : {product.name} </span>
          <span className=" text-gray-600"> Зохиолч : {product.author} </span>
        </Link>
      </div>
    </div>
  );
}
