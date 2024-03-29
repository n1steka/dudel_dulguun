import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layouts from "@/components/Layouts";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function ProductScreen() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/book/${id}`)
        .then((res) => setProduct(res.data.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  if (!product) {
    return (
      <Layouts title="Product not found">
        <div>Бараа олдсонгүй</div>
      </Layouts>
    );
  }

  return (
    <Layouts title={product.name}>
      <div className="py-2">
        <Link href="/">Буцах</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2  w-[300px]">
          <Image
            src={`/uploads/${product.image}`}
            alt="Product Image"
            width={200}
            height={200}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">  Зохиолч :   {product.name}</h1>
            </li>
            <li className="text-xl mt-12 text-gray-600">Тайлбар:
              <p className="text-black">{product.description}</p>
            </li>
          </ul>
        </div>
      </div>
    </Layouts>
  );
}
